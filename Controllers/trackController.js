var express       = require('express'),
    router        = express.Router(),
    userService   = require('../services/user.service');
    trackService  = require('../services/track.service');


// routes
router.post('/getTracksByPref', getTracksByPref);

module.exports = router;

function getTracksByPref(req, res) {
    userService.getPrefById(req.body.id).then((pref)=> {
        trackService.getTracksByPref(pref)
            .then(function (tracks) {
                if (tracks != null) {
                    // successful
                    res.send(tracks);
                } else {
                    // failed
                    res.status(401).send('somthing wrong');
                }
            })
            .catch(function (err) {
                res.status(400).send(err);
            });
      });
}

function addTrackToPlaylist(req, res) {
  let trackId     = req.body.trackId;
  let userId      = req.body.userId;
  let plalistName = req.body.plalistName;
  blablaService.addTrackToPlaylist(trackId, userId, plalistName)
    .then(function(status) {
        res.status(200).json({"status": status});
    })
    .catch(function (err) {
        res.status(400).send(err);
    });
}
