const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");
const {
  addBookValidator,
  getBookByIdValidator,
  updateBookValidator,
} = require("../validators/BookValidator");

const {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/BooksController");

router.post("/add", authenticate, addBookValidator, addBook);
router.get("/all", getAllBooks);
router.get("/get/:bookId", authenticate, getBookByIdValidator, getBookById);
router.put("/update/:bookId", authenticate, updateBookValidator, updateBook);
router.delete("/delete/:bookId", authenticate, deleteBook);

module.exports = router;
