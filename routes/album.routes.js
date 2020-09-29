const express = require('express');
const router = express.Router();
const AlbumModel = require('../models/album.model');

const { isLoggedIn } = require('../helpers/auth-helper');

router.post('/my-albums', isLoggedIn, (req, res) => {
  AlbumModel.find({userId:req.body.userId})
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    });
})

router.post('/add-album', isLoggedIn, (req, res) => {
  const {name, artists, image, id, release_date, genres, userId} = req.body;
  AlbumModel.create({name, artist: artists, image, id, release_date, genres, userId})
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    });
})

module.exports = router;