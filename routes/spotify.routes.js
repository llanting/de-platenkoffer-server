const express = require('express');
const router = express.Router();
const SpotifyWebApi = require('spotify-web-api-node');

// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));

router.post('/artist-search', (req,res) => {
  spotifyApi.searchArtists(req.body.artistName)
    .then((data) => {
      res.status(200).json(data.body.artists.items)
    })
    .catch(err => {
      res.status(500).json({
        error: 'Couldn\'t get artist',
        message: err
      })
    })
})

router.get('/albums/:artistId', (req,res) => {
  spotifyApi.getArtistAlbums(req.params.artistId)
    .then((result) => {
      res.status(200).json(result.body)
    })
    .catch(err => {
      res.status(500).json({
        error: 'Couldn\'t get albums',
        message: err
      })
    })
})

router.get('/tracks/:albumId', (req,res) => {
  spotifyApi.getAlbumTracks(req.params.albumId)
    .then((result) => {
      res.status(200).json(result.body)
    })
    .catch(err => {
      res.status(500).json({
        error: 'Couldn\'t get album',
        message: err
      })
    })
})

module.exports = router;