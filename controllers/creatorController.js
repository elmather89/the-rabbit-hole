const db = require("../models");

// Defining methods for the creatorController
module.exports = {
  findAll: function (req, res) {
    db.Creator
      .find(req.query)
      .populate('_books', ['bookImage', 'title', 'synopsis'])
      .sort({ lastName: 1 })
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Creator
      .findById(req.params.id)
      .populate('_books', ["title", "synopsis", "bookImage"])
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Creator
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Creator
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Creator
      .findById({ _id: req.params.id })
      .populate('_books', ["title", "synopsis", "bookImage"])
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
