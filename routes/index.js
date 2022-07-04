const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    // retrouver tous les films a passer au template
    Movie.find()
      .then(function (filmsFromDB) {
        res.render('movies', {
            films: filmsFromDB
        })
      })
      .catch(function () {
        console.log('error to load films')
      })
});

module.exports = router;
