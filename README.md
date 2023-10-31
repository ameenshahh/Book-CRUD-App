
# Book CRUD REST API

A basic CRUD REST api build with NodeJS


## Tools Used

    1. NodeJS
    2. ExpressJS
    3. JWT (authentication)
    4. MondoDB(database)
    5. Mongoose (ODM)
    6. Bcrypt(hashing password)
## Installation

Install my-project with npm

```bash
  git clone https://github.com/ameenshahh/Book-CRUD-App.git
  cd Book-CRUD-App
  npm install 
  npm run dev
```
Server starts on PORT 4000

Index route is localhost:4000

The list of available api end points will be listed i the index route.


    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - Port number

`DATABASE_URL` - Mongodb connection url string

`SECRET_KEY` - secret for jwt token 
## API Reference

#### Sign up

```http
  GET /signup

  Test Input :
  {
    "email":"test@gmail.com",
    "password":"test"
  }
```

#### Sign in

```http
  POST /signIn

  Test Input :
  {
    "email":"test@gmail.com",
    "password":"test"
  }
```

#### Get all books
```http
  GET /book/all
```

#### Add book
```http
  POST /book/add
  test input : 
  {
    "title":"Othello",
    "summary":"A classic drama",
    "author":"William Shakespeare",
    "isbn":564942
  }
```

#### Get book by id
```http
  GET /book/get/:bookId
```

#### Update book by id
```http
  PUT /book/update/:bookId
```
#### Delete book by id
```http
  DELETE /book/delete/:bookId
```
## Production Url

```bash
  https://book-crud-rest-api.onrender.com/
```


## Features

- Sign Up
- Sign In
- List all books
- Add book 
- Get book by id
- Update book by id
- Delete book by id





## Authors

- [@ameenshahh](https://github.com/ameenshahh/)

- Email : ameenshahshahjahan@gmail.com

