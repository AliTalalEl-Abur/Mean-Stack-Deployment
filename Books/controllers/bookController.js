const Book = require('../models/book');

exports.listBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'No se pudieron obtener los libros', error: err.message });
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    return res.json(book);
  } catch (err) {
    return res.status(500).json({ message: 'No se pudo obtener el libro', error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: 'No se pudo crear el libro', error: err.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    return res.json(book);
  } catch (err) {
    return res.status(400).json({ message: 'No se pudo actualizar el libro', error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    return res.json({ message: 'Libro eliminado correctamente' });
  } catch (err) {
    return res.status(500).json({ message: 'No se pudo eliminar el libro', error: err.message });
  }
};