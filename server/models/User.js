const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');  //Manamana Using bcrypt?

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      trim: true,
      unique: true
    },
    firstName: {
      type: String,
      required: false
    },
    lastName: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: false,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: false,
      minlength: 5
    },
    profileType: {
        type: String,
        required: false
    },
    availableToWork: {
      type: Boolean,
      required: false
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    jobPostings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'JobPosting'
      }
    ],
    resume: {
      type: Schema.Types.ObjectId,
      ref: 'Resume'
    }
  }
);


// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;

