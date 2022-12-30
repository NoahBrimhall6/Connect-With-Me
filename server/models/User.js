const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');  //Manamana Using bcrypt?

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
    },
    resume: {
      type: Schema.Types.ObjectId,
      ref: 'Resume'
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    jobPostings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'JobPosting'
      }
    ],
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Friend'
      }
    ]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
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

