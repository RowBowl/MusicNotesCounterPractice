var express = require('express');
var Config = require('../config/config.js');

var router = express.Router();

//console.log(Config.allNotes);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/notes', (req, res) => {
    res.send(generateRandom());
});
module.exports = router;


function generateRandom(){
    let cNotes = Config.allNotes;
    let first =  Math.round(Math.random() * 11),
        second = Math.round(Math.random() * 11),
        num = Math.abs(first-second);
    let pair =  [cNotes[first], cNotes[second]];
    return {pair:pair, numOfSeminotes:num};
}
