const {Author} = require('../models/author.model')

module.exports.createAuthor = (req, res) => {
    const {author} = req.body;
    Author.create({author})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.readAllAuthors = (req, res) => {
    Author.find().sort('author')
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
}

module.exports.readOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err));
}