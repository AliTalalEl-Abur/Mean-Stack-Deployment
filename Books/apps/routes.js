const bookController = require('../controllers/bookController');

module.exports = function routes(app) {
  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public' });
  });

  app.get('/book', bookController.listBooks);
  app.get('/book/:id', bookController.getBook);
  app.post('/book', bookController.createBook);
  app.put('/book/:id', bookController.updateBook);
  app.delete('/book/:id', bookController.deleteBook);
};