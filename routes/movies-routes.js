const express = require('express');
const router = express.Router();
const Movie = require('../models/movie-model');

router.get('/', (req,res,next) => {
    Movie.find()
    .then((listOfMovies)=>{
      res.render('movies', {moviesArray: listOfMovies})
    })
    .catch((err)=>{
      res.send("An error has occured",err);
    });
});

router.get('/movies/:id', (req, res, next)=>{
    const oneId = req.params.id;
    Movie.findById(oneId)
    .then((oneMovie)=>{
        res.render('singleMovie', {movie: oneMovie})
    })
    .catch((err)=>{
        res.send(err)
    })
  });
  
module.exports = router;
