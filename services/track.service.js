const ObjectId = require('mongodb').ObjectID;
var Track = require('../models/track');

exports.getTracksByPref = function(pref) {
  console.log("Trace : getTracksByPref({})");
  return new Promise((resolve, reject) => {
    var genreObjectArray = [];
    var genreNameArry = [];
    var genreTotalVal = 0;
    pref.forEach(function(gen){
      if(gen.value > 0) {
          genreNameArry.push(gen.name);
          genreObjectArray.push(gen);
          genreTotalVal += gen.value;
      }
    });
    var conditions = {genre:{$in:genreNameArry}};
    Track.find(conditions,
      (err, tracks) => {
        if(err) {
          reject({"error": err});
          console.log('STATUS: FAILED');
          return;
        }
        console.log('STATUS: SUCCESS');
        if(!tracks.length) {
          console.log("info : there are no tracks who match this condition");
          resolve({"info": "there are no tracks who match this condition"});
          return;
        }
        // make the precenteges to pull tracks
        var retTracks = [];
        genreObjectArray.forEach(function(goa) {
          let arrayToConcat = randomizeTracksByGenre(tracks, goa.name, goa.value/genreTotalVal);
          console.log("arrayToConcat: " + arrayToConcat);
          retTracks = retTracks.concat(arrayToConcat);
        });
        console.log("retTracks:  " + retTracks);
        resolve(retTracks);
        return;
      });
  });
}

randomizeTracksByGenre = function(tracks,genre,precent) {
  let tracksByGenre = [];
  let retTracks     = [];
  console.log("randomizing: "+ genre + ", with precent: "+ precent);
  tracks.forEach(function(t){
    t.genre.forEach(function(g) {
      if(g === genre) {
        tracksByGenre.push(t);
      }
    });
  }); // tracksByGenre got all tracks from this genre
  let numOfTracks = Math.floor(precent*10);
  console.log("numOfTracks in genre - " + genre + "is: " + numOfTracks);
  console.log("tracksByGenre: " + tracksByGenre.length);
  if(tracksByGenre.length < numOfTracks) {
    if(tracksByGenre.length >= 1)
      console.log("tracksByGenre returned with:  " + tracksByGenre);
    return tracksByGenre;
  }
  else {
    console.log("else");
    for(let i=0; i<numOfTracks; i++) {
      let index = Math.floor(Math.random()*tracksByGenre.length);
      let track = tracksByGenre[index];
      tracksByGenre.slice(index,1);
      retTracks.push(track);
    }
  }
  return retTracks;
}
