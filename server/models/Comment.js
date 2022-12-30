const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    body: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
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