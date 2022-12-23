const { User, Post, Comment, JobPosting } = require('../models');

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
  }
}

module.exports = resolvers;