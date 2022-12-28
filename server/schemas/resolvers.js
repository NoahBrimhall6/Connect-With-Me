const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment, JobPosting } = require('../models');
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({})
        .populate('posts')
        .populate('comments')
        .populate('jobPostings')
        .populate('resume')
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
        .populate('upVotes')
        .populate('downVotes')
        .populate('comments');
    },
    comments: async () => {
      return await Comment.find({})
        .populate('upVotes')
        .populate('downVotes');
    },
    jobPostings: async () => {
      return await JobPosting.find({})
        .populate('upVotes')
        .populate('downVotes')
        .populate('comments');
    } 
  },

  Mutation: {
    addUser: async (parent, { username, email, password, firstName, lastName }) => {
      const user = await User.create({ username, email, password, firstName, lastName });
      const token = signToken(user);
      return { token, user };
    },
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



  },
}

module.exports = resolvers;