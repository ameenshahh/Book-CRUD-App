const { body ,param} = require("express-validator");

exports.addBookValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("author").notEmpty().withMessage("Author is required"),
  body("summary")
    .notEmpty()
    .withMessage("Summary is required")
    .isLength({ max: 100 })
    .withMessage("Summary must be at most 100 characters"),
  body("isbn").isInt().withMessage("ISBN must be a number"),
];


exports.getBookByIdValidator=[
  param('bookId').isMongoId().withMessage('Invalid Book ID')
]