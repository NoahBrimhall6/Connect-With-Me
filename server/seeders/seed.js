const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const commentSeeds = require('./commentSeeds.json');


db.once('open', async () => {
  // Clean Database
  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});

  // Bulk create each model
  const users = await User.insertMany(userSeeds);
  const posts = await Post.insertMany(postSeeds);
  const comments = await Comment.insertMany(commentSeeds);

  for (comment of comments) {
    // Randomly assigns each comment an author
    const author = users[Math.floor(Math.random() * users.length)];
    comment.author = author._id;
    await comment.save();

    // Randomly adds each comment to a post
    const post = posts[Math.floor(Math.random() * posts.length)];
    post.comments.push(comment._id);
    await post.save();
  }

  for (post of posts) {
    // Randomly adds each post to a user, and assigns that user as the author
    const author = users[Math.floor(Math.random() * users.length)];
    author.posts.push(post._id);
    post.author = author._id;
    await author.save();
    await post.save();
  }

  console.log('Finished seeding the database');
  process.exit(0);
});