//importing modules-->
const express = require("express");
const mongoose = require("mongoose");

//defining post schema -->
const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  }, // String is shorthand for {type: String}
  desc: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1000,
  },
  pic: String,
  picP: String,
  title: {
    type: String,
    required: true,
    minlength: 8,
    //select: false,
  },
  tags: [String],
  castAndCrew: [String],
  producers: [String],
  directors: [String],
  writers: [String],
  music: [String],
  hidden: {
    type: Boolean,
    default: true,
    select: false,
  },
  isMovie: {
    type: Boolean,
    default: true,
  },
  releaseYear: {
    type: String,
    default: "2000",
  },
  duration: {
    type: String,
    default: "1hr 30min",
  },
  rating: {
    type: String,
    default: "+13",
  },
  votes: Array,
  favs: Array,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});
//creating post model-->
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
