const mongoose = require('mongoose');

const { Schema } = mongoose;

const keywordSchema = new Schema({
    word: {
        type: String,
        required: true,
        trim: true
      }


});


const Keyword = mongoose.model('Keyword', keywordSchema);

module.exports = Keyword;