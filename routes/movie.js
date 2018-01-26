const express = require('express');
const router = express.Router();

//Models
const Movie = require('../models/Movie');

/* GET users listing. */
router.get('/', (req, res) => {
  const promise = Movie.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

//Top10 List
router.get('/top10', (req, res) => {
  const promise = Movie.find({}).limit(10).sort({imdbScore: -1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/:movie_id', (req,res, next) => {
  const promise = Movie.findById(req.params.movie_id);

  promise.then((movie) => {
    if(!movie)
      next({message: 'The move was not found', code: 99 });
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

router.post('/', (req, res, next) => {
 // const {title, imdbScore, category,country, year} = req.body;
  const movie = new Movie(req.body);

  // movie.save((err, data) => {
  //   if(err)
  //     res.json(err);

  //   res.json(data);
  // });

  const promise = movie.save();
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });

});


router.put('/:movie_id', (req,res, next) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body,{new: true});

  promise.then((movie) => {
    if(!movie)
      next({message: 'The move was not found', code: 99 });
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});


router.delete('/:movie_id', (req,res, next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);

  promise.then((movie) => {
    if(!movie)
      next({message: 'The move was not found', code: 99 });
    res.json(movie);
  }).catch((err) => {
    res.json(err);
  });
});

//Between
router.get('/between/:start_year/:end_year', (req, res) => {
  const {start_year, end_year} = req.params;
  const promise = Movie.find({
    year: {"$gte": parseInt(start_year), "$lte": parseInt(end_year) }  //gte yerine gt olursa eşit olduğu tarihi vermez!
  });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

module.exports = router;
