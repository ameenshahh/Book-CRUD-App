const BooksModel = require("../models/BooksModel");
const { validationResult } = require("express-validator");

// Function to add a new book
exports.addBook = async (req, res) => {
  // input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    const { title, author, summary, isbn } = req.body;

    // Create a new book using the BooksModel schema
    const book = new BooksModel({ title, author, summary, isbn });
    await book.save();

    res
      .status(201)
      .json({ status: true, message: "Book added successfully", data: book });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error adding book" });
  }
};

// Function to get all books
exports.getAllBooks = async (req, res) => {
  try {
    // Retrieve all books from the database
    const books = await BooksModel.find();
    res.status(200).json({ status: true, data: books });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error fetching books" });
  }
};

// Function to get a book by its ID
exports.getBookById = async (req, res) => {
  // input validation

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    // Find a book by its unique ID
    const book = await BooksModel.findById(req.params.bookId);
    if (!book) {
      return res.status(404).json({ status: false, message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: "Book details received successfully", data: book });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error fetching book details" });
  }
};

// Function to update a book
exports.updateBook = async (req, res) => {
  // input validation

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    const { title, author, summary, isbn } = req.body;
    // Update an existing book by its ID
    const updatedBook = await BooksModel.findByIdAndUpdate(
      req.params.bookId,
      { title, author, summary, isbn },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ status: false, message: "Book not found" });
    }
    res.status(200).json({
      status: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error updating book" });
  }
};

// Function to delete a book
exports.deleteBook = async (req, res) => {
  // input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    // Delete a book by its ID
    const deletedBook = await BooksModel.findByIdAndDelete(req.params.bookId);
    if (!deletedBook) {
      return res.status(404).json({ status: false, message: "Book not found" });
    }
    res.status(200).json({
      status: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting book" });
  }
};
