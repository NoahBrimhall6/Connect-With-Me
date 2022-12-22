const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');  //Manamana Using bcrypt?

const usersSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    profileType: {
        type: Integer,
        required: true,
    },
    availableToWork: {
        type: Boolean,
        required: true,
    },
    posts: [Posts.schema],
    comments: [Comments.schema],
    jobPosting: [JobPosting.schema],
    resume: {
        type: Schema.Types.ObjectId,
        ref: 'Resume',
    },


});


// set up pre-save middleware to create password
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
usersSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

