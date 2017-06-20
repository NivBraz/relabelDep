var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    trackSchema = new schema({
      name:       {type:String, required:true},
      artist:     {type:String, required:true},
      album:      {type:String, required:true},
      year:       {type:Number, required:true},
      length:     {type:Number, required:true},
      genre:      [String]
    });

var Track = mongoose.model('Track', trackSchema);
module.exports = Track;
