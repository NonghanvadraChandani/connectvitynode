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

//for updating data

router.patch('/movies/:id', async(req, res) => {
        const iMovie = await Movie.findOne({ _id: req.params.id });

        iMovie.name = req.body.name;
        iMovie.rating = req.body.rating;

        await iMovie.save((err, msg) => {

            if (err) {
                res.status(500).json({ "err": err })
            } else {
                res.status(200).json({ "message": msg })
            }
        })
    })
    //for deleting data



module.exports = router;