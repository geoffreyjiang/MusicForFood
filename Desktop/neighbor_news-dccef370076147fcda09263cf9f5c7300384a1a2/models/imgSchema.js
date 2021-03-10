const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    // Creating an image schema
    imageUrl: {
        type: String,
        required: true
    },
});

const Image = mongoose.model("image", UserSchema);
​
module.exports = Image;
