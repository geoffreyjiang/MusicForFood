const Blog = require("../models/blogSchema")
const mongojs = require("mongojs");
const { mongo } = require("mongoose");

module.exports = {
    blogTest: function (req, res) {
        res.send({msg: "hit delete route"});
    },

    blogGetAll: async (req, res) => {
        try {
          const allBlogs = await Blog.find();
          res.json(allBlogs);
        } catch (err) {
          res.send(err);
        }
    },
    
    blogFindOne: async (req, res) => {
        try {
            const foundBlogPost = await Blog.findById(req.params.id);
            res.send(foundBlogPost);
        } catch (err) {
            res.send(err);
        }
    },

    postBlog: async (req, res) => {
        try {
            const newBlogPost = new Blog({
            displayName: req.body.displayName,
            title: req.body.title,
            text: req.body.text,
            category: req.body.category,
            zipCode: req.body.zipCode
            });
            res.json(await newBlogPost.save());
        } catch (err) {
            res.send(err);
        }
    },

    blogDeleteOne: async (req, res) => {
        try {
            res.json(await Blog.findByIdAndDelete(req.params.id));
        } catch (err) {
            res.send(err);
        }
    },

    blogUpdateOne: async (req, res) => {
        try {
            const foundBlogPost = await Blog.findById(req.params.id);
            const { title, text, category } = req.body;

            console.log(req.body)

            if (title) foundBlogPost.title = title;
            if (text) foundBlogPost.text = text;
            if (category) foundBlogPost.category = category;

            res.json(await foundBlogPost.save());
        } catch (err) {
            res.json(err);
        }
    },
}