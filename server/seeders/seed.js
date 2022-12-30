const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const commentSeeds = require('./commentSeeds.json');

function getRandom(num) {
  return Math.floor(Math.random() * num);
};

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
    const author = users[getRandom(users.length)];
    comment.author = author._id;
    await comment.save();

    // Randomly adds each comment to a post
    const post = posts[getRandom(posts.length)];
    post.comments.push(comment._id);
    await post.save();
  }

  for (post of posts) {
    // Randomly adds each post to a user, and assigns that user as the author
    const author = users[getRandom(users.length)];
    author.posts.push(post._id);
    post.author = author._id;
    await author.save();
    await post.save();
  }

  for (user of users) {
    for (let i = 0; i < 5; i++) {
      // Pickes 5 random posts to like
      const likedPost = posts[getRandom(posts.length)];
      likedPost.likes.push(user._id);
      await likedPost.save();

      // Pickes 5 random posts to dislike
      const dislikedPost = posts[getRandom(posts.length)];
      dislikedPost.dislikes.push(user._id);
      await dislikedPost.save();

      // Adds 5 random users as connections
      const connection = users[getRandom(users.length)];
      user.connections.push(connection._id);
      await user.save();
    }
  }

  console.log('Finished seeding the database');
  process.exit(0);
});