var express = require('express');
var router = express.Router();
var Movie = require('./Models/Movie');

//fetching data

router.get('/movies', async(req, res) => {
    const iMovie = await Movie.find();
    res.send(iMovie);
})

//for posting data

router.post('/movies', async(req, res) => {
    const iMovie = new Movie({
        name: req.body.name,
        rating: req.body.rating
    })
    console.log(iMovie);
    await iMovie.save((err, msg) => {
        if (err) {
            res.send(err);
        } else {
            res.send(msg);
        }
    });
})
module.exports = router;