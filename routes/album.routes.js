const express = require('express');
const router = express.Router();
const AlbumModel = require('../models/album.model');

router.get('/my-albums', (req, res) => {
  AlbumModel.find()
    .then((result) => {
      res.status(200).json(result)
    }).catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    });
})


router.post('/add-album', (req, res) => {
  const {name, artists, image, id, release_date, genres} = req.body;
  AlbumModel.create({name, artist: artists, image, id, release_date, genres})
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