const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {

    // retrouver tous les films a passer au template
    Movie.find()
      .then(function (filmsFromDB) {

        res.render('movies', {
            movies: filmsFromDB
        })
      })
      .catch()

    
});

module.exports = router;
