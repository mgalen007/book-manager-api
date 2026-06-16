import AppError from "../custom/app.error.js";

const booksValidator = (type) => (req, res, next) => {
  try {
    if (!req.body) throw new AppError(400, 'Invalid request body')
    if (type == "create") {
      const newBook = req.body;
      if (!newBook.title) throw new AppError(400, "Book must have a title");
      if (!newBook.author) throw new AppError(400, "Book must have an author");
      if (newBook.price === undefined) throw new AppError(400, "Book must have a price tag");
      next();
    } else {
      const newBook = req.body;
      if (!newBook.title && !newBook.author && !newBook.price)
        throw new AppError(
          400,
          "You need one of: title, author or price to update a book",
        );
      next();
    }
  } catch (err) {
    next(err);
  }
};

export default booksValidator