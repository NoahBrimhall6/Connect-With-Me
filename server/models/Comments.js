const mongoose = require('mongoose');

const { Schema } = mongoose;





const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;