const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    app.post('/api/authors/create', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.readAllAuthors);
    app.get('/api/authors/:id', AuthorController.readOneAuthor);
    app.put('/api/authors/:id/edit', AuthorController.updateAuthor);
    app.delete('/api/authors/:id/delete', AuthorController.deleteAuthor);
}