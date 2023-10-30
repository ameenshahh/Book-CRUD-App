const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const signupRouter = require("./routes/signupRouter");
const signinRouter = require("./routes/signinRouter");
const booksRouter = require("./routes/booksRouter");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());
app.use(cookieParser());

app.use('/book',booksRouter)
app.use('/signup',signupRouter)
app.use('/signin',signinRouter)