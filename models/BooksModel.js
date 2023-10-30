const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },
    
    summary: {
      type: String,
      maxlength: 100,
      required: true,
    },

    isbn: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);


const BooksModel = mongoose.model('Books', BookSchema);

module.exports = BooksModel;
