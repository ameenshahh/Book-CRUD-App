const BooksModel = require("../models/BooksModel");
const {validationResult} = require('express-validator');

exports.addBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    const { title, author, summary, isbn } = req.body;

    const book = new BooksModel({ title, author, summary, isbn });
    await book.save();

    res.status(201).json({ message: "Book added successfully", data: book });
  } catch (error) {
    res.status(500).json({ message: "Error adding book" });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
};

exports.getBookById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    const book = await BooksModel.findById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book details received successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book details" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, summary, isbn } = req.body;
    const updatedBook = await BooksModel.findByIdAndUpdate(
      req.params.bookId,
      { title, author, summary, isbn },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Error updating book" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await BooksModel.findByIdAndDelete(req.params.bookId);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book deleted successfully", data: deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book" });
  }
};
