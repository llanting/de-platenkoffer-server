const {Schema, model} = require('mongoose');

const AlbumModel = new Schema(
  {
    name: {
      type: String,
    },
    artist: [
      {
      name: String,
      id: String,
      }
    ],
    image: {
      type: String,
    },
    id: {
      type: String,
    },
    release_date: {
      type: String,
    },
    genres: Array,
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // }
  },
  {
    timestamps: true
  }
);

module.exports = model('album', AlbumModel);