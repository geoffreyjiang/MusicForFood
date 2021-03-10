let mongoose = require("mongoose");
let {Blog} = require("../models/blogSchema");

mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
});

let blogSeed = [

]