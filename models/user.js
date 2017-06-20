var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    userSchema = new schema({
      username:  {type:String, index:1, required:true, unique:true},
      password:   {type:String, required:true},
      email:      {type:String, required:true},
      preferences:   [
        {
          name: String,
          value: Number
        }
      ],
      playlists: [
        {
          name: String,
          tracks: [String]
        }
      ]
    });

var User = mongoose.model('User', userSchema);
module.exports = User;
