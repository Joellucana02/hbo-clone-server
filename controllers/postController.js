//importing modules-->
const express = require("express");
const Post = require("../models/postModel");
const APIFeatures = require("./../utils/ApiFeatures");
//post handlers
exports.getAllPosts = async (req, res) => {
  try {
    const features = new APIFeatures(Post.find({}), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const posts = await features.query;
    //const posts = await Post.find({});
    res.status(200).json({
      msg: "success",
      length: posts.length,
      data: posts,
    });
  } catch (error) {
    res.status(400).json({ msg: "Cannot get all posts", error });
  }
};
exports.getPostbyId = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      msg: "success",
      data: { post },
    });
  } catch (error) {
    res.status(400).json({ msg: "Cannot get post", error });
  }
};
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      desc: req.body.desc,
      userId: req.body.userId ? req.body.userId : undefined,
      isMovie: req.body.isMovie,
      releaseYear: req.body.releaseYear,
      duration: req.body.duration,
      tags: req.body.tags,
      rating: req.body.rating,
      pic: req.body.pic,
      castAndCrew: req.body.castAndCrew,
      directors: req.body.directors,
      producers: req.body.producers,
      writers: req.body.writers,
      music: req.body.music,
    });
    res.status(200).json({ msg: "success", data: { post } });
  } catch (error) {
    res.status(400).json({ msg: "Cannot create post", error });
  }
};
