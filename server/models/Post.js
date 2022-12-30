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
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
);

postSchema.virtual('commentCount').get(function () {
  const numComments = this.comments.length;
  switch (numComments) {
    case 0: return 'No Comments Yet'
    case 1: return '1 Comment'
    default: return `${numComments} Comments`
  }
});

postSchema.virtual('likesCount').get(function () {
  const numLikes = this.likes.length;
  switch (numLikes) {
    case 0: return 'No Likes Yet'
    case 1: return '1 Like'
    default: return `${numLikes} Likes`
  }
});

postSchema.virtual('dislikesCount').get(function () {
  const numDislikes = this.dislikes.length;
  switch (numDislikes) {
    case 0: return 'No Dislikes Yet'
    case 1: return '1 Disike'
    default: return `${numDislikes} Dislikes`
  }
});

const Post = model('Post', postSchema);

module.exports = Post;