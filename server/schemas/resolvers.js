const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment, JobPosting, Resume } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({})
        .populate('posts')
        .populate({
          path: 'posts',
          populate: 'comments'
        });
    },
    //finds user by userName
    user: async (parent, {username}) => {
      return User.findOne({ username })
      .populate('posts')
      .populate('jobPostings')
      .populate('resume')
      .populate({
        path: 'posts',
        populate: 'comments'
      })
      .populate({
        path: 'jobPostings',
        populate: 'comments'
      })
    },
    //finds signed in user
    myUser: async (parent, id) => {
      console.log("hi")
        return User.findOne(id)
        .populate('posts')
        .populate('jobPostings')
        .populate('resume')
        .populate('connections')
        .populate({
          path: 'posts',
          populate: 'comments'
        })
        .populate({
          path: 'jobPostings',
          populate: 'comments'
        });
    },
    posts: async () => {
      return await Post.find({})
        .populate('author')
        .populate('comments')
        .populate({
          path: 'comments',
          populate: 'author'
        });
    },
    comments: async () => {
      return await Comment.find({})
        .populate('author');
    },
    jobPostings: async () => {
      return await JobPosting.find({})
      .populate('keywords');
    } 
  },

  Mutation: {
    addConnection: async (parent, { id, connections }) => {
      return await User.findOneAndUpdate(
        { _id: id },
        { $addToSet: { connections } } 
      );
    },
    //Creates a new User and sets the Auth Token
    addUser: async (parent, { username, email, password, firstName, lastName }) => {
      const user = await User.create({ username, email, password, firstName, lastName });
      const token = signToken(user);
      return { token, user };
    },


    //logs the user in and sets the Auth Token
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      
      return { token, user };
    },

    // Creates a new post 
    createPost: async (_, {title, body}) => {
      // create the new post 
      const newPost = new Post({ title, body });
      // save new post to database
      await newPost.save();
      // return the new post
      return newPost;


      // need to link it to the user? it's showing null for author at the moment. . . 
    },

    //Creates a new Resume and updates the logged in user resume ID to the new Resume ID
    updateResume: async (parent, {fullName, email, summary, phone, location, skills, education, educationType, educationLength, prevJ1Title, prevJ1Company, prevJ1Length, prevJ1Responsibilities, prevJ2Title, prevJ2Company, prevJ2Length, prevJ2Responsibilities, prevJ3Title, prevJ3Company, prevJ3Length, prevJ3Responsibilities}, context) => {
      if (context.user) {
        
        try{
        const newResume = await Resume.create({
          fullName,
          email,
          summary,
          phone,
          location,
          skills,
          education,
          educationType,
          educationLength,
          prevJ1Title,
          prevJ1Company,
          prevJ1Length,
          prevJ1Responsibilities,
          prevJ2Title,
          prevJ2Company,
          prevJ2Length,
          prevJ2Responsibilities,
          prevJ3Title,
          prevJ3Company,
          prevJ3Length,
          prevJ3Responsibilities
        })
      
        await User.findOneAndUpdate(
          {_id: context.user._id},
          {$set: {resume: newResume._id}}
        )
      }
    
      catch (e) {
        console.error(e)
      }
      }
    }
  },
}

module.exports = resolvers;