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
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
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
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
);

postSchema.virtual('commentCount')
  .get(() => 
    !this.comments
    ? 'No'
    : this.comments.length
  );

postSchema.virtual('likesCount')
  .get(() => 
    !this.likes
    ? 'No'
    : this.likes.length
  );

postSchema.virtual('dislikesCount')
  .get(() => 
    !this.dislikes
    ? 'No'
    : this.dislikes.length
  );

const Post = model('Post', postSchema);

module.exports = Post;