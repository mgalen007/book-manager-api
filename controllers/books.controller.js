import Book from "../models/Book.js";
import AppError from "../custom/app.error.js";

const create = async (req, res, next) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({
      success: true,
      message: "Book added successfully",
      data: newBook,
    });
  } catch (err) {
    next(err);
  }
};

const findAll = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (books.length == 0) {
      return res.status(200).json({
        success: true,
        message: "No books yet, add one to get started",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (err) {
    next(err);
  }
};

const findOne = async (req, res, next) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });
    if (!book) throw new AppError(404, "Book with provided ID not found");
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!book) throw new AppError(404, "Book with provided ID not found");
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book
    });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const book = await Book.findOneAndDelete({ _id: req.params.id });
    if (!book) throw new AppError(404, "Book with provided ID not found");
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

export default {
  create,
  findAll,
  findOne,
  update,
  remove,
};
