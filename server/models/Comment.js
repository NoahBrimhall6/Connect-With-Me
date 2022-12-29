const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
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
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);



const Comments = model('Comment', commentSchema);

module.exports = Comments;