const {Schema, model} = require('mongoose');

const AlbumList = new Schema(
  {
    
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'user'
    // }
  },
  {
    timestamps: true
  }
);

module.exports = model('albumlist', AlbumList);