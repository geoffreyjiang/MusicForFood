const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    displayName: { 
      type: String, 
      required: true 
    }, 
    
    title: {
      type: String,
      trim: true,
      required: "Title is required",
    },

    text: {
      type: String,
      trim: true,
      required: "Text is required",
    },

    category: {
      type: String,
      default: "General",
    },

    zipCode: {
      type: Number, 
      required: true 
    },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;