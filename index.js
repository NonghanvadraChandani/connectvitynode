var mongoose = require('mongoose');
var express = require('express');
var bodyparser = require('body-parser');
var route = require('./route')

mongoose.connect("mongodb+srv://chandani:C3214051@cluster0.rxlk5we.mongodb.net/Movies?retryWrites=true&w=majority").then(() => {
    console.log("db conneted");

    app = express();
    app.use(express.json())
    app.use(bodyparser.urlencoded({ extended: false }))
    app.use('/api', route)

    app.listen(3000, () => {
        console.log("server started 3000");
    })
}).catch((err) => {
    console.log(err);
})