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
      return await Post.find({}).sort({ createdAt: -1 })
        .populate('author')
        .populate('comments')
        .populate({
          path: 'comments',
          populate: 'author'
        })
        .populate({
          path: 'author',
          populate: 'resume'
        });
    },
    comments: async () => {
      return await Comment.find({})
        .populate('author');
    },
    jobPostings: async () => {
      return await JobPosting.find({}).sort({ createdAt: -1 });
    },
    jobPost: async (parent, { _id }) => {
      return await JobPosting.findById(_id);
    } 
  },

  Mutation: {
    likePost: async (parent, { userId, postId }) => {
      return await Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { likes: userId }, $pull: { dislikes: userId } },
        { new: true }
      )
    },
    dislikePost: async (parent, { userId, postId }) => {
      return await Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { dislikes: userId }, $pull: { likes: userId } },
        { new: true }
      )
    },
    addConnection: async (parent, { id, connections }) => {
      return await User.findOneAndUpdate(
        { _id: id },
        { $addToSet: { connections } } 
      );
    },
    removeConnection: async (parent, { id, connections }) => {
      return await User.findOneAndUpdate(
        { _id: id },
        { $pull: { connections } }
      );
    },
    //Creates a new User and sets the Auth Token
    addUser: async (parent, { username, email, password, firstName, lastName }) => {
      // Check if the email or username is already taken
      const userWithEmail = await User.findOne({ email });
      const userWithUsername = await User.findOne({ username });

      if (userWithEmail) {
        throw new Error('A user with this email already exists');
      }

      if (userWithUsername) {
        throw new Error('This username is already taken');
      }

      // creates the new user if the email or username is not taken
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
    createPost: async (parent, { title, body, author }) => {
      // create the new post 
      const post = await Post.create({ title, body, author });
      // need to link it to the user? it's showing null for author at the moment. . .
      const user = await User.findOneAndUpdate(
        { _id: post.author },
        { $addToSet: { posts: post._id } }
      );

      return { post, user };
    },
    deletePost: async (parent, { id, author }) => {
      const post = await Post.findByIdAndDelete(id);
      const user = await User.findOneAndUpdate(
        { _id: author },
        { $pull: { posts: id } }
      );

      return { post, user };
    },
    // Create a new comment and attach it to a post
    createComment: async (parent, { body, author, postId }) => {
      const comment = await Comment.create({ body, author });
      const post = await Post.findOneAndUpdate(
        { _id: postId },
        { $addToSet: { comments: comment._id } }
      );

      return { comment, post };
    },
    // Create Job Posting
    createJob: async (parent, vars) => {
      return await JobPosting.create(vars);
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