var express = require('express');
var Config = require('../config/config.js');

var router = express.Router();

//console.log(Config.allNotes);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Half Note Practice Tool',
   title2: 'How many half-notes/semitones are between the following notes from the chromatic scale?'});
});

router.post('/notes', (req, res) => {
    res.send(generateRandom());
});
module.exports = router;


function generateRandom(){//take min of rotation
    let cNotes = Config.allNotes;
    let direction = Config.direction;
    //console.log(cNotes);
    let firstBucket = [1,2,3,4,5,6,7,8,9,10,11];
    let first =  firstBucket.splice(Math.round(Math.random() *
                                        firstBucket.length),1)[0];
    let second = firstBucket.splice(Math.round(Math.random() *
                                        firstBucket.length),1)[0];

    let num = (direction === "cw") ? (Math.max(first,second) -
                                    Math.min(first,second)) % 12 :
                                   (Math.min(first,second) -
                                    Math.max(first,second)) % 12;
    //Math.abs(first-second);

    let pair =  [cNotes[first], cNotes[second]];
    return {pair:pair, numOfSeminotes:num};
}
