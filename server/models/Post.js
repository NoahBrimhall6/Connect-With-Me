const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  }
);



const Post = model('Post', postSchema);

module.exports = Post;