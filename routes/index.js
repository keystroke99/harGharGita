var express = require('express');
var router = express.Router();

//requiring path and fs modules
const path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Har Ghar Gita API :)' });
});

/* GET home page. */
router.get('/getAllSlokas', function(req, res, next) {
  //joining path of directory 
const directoryPath = path.join(__dirname, '../public/uploads/slokas');
//passsing directoryPath and callback function
fs.readdir(directoryPath, async function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    let filesList = new Array;
    // console.log('http://' + req.headers.host + '/uploads/slokas' + file )
    //listing all files using forEach
    await files.forEach(function (file) {
      let fileName = 'http://' + req.headers.host + '/uploads/slokas/' + file
        // Do whatever you want to do with the file
      filesList.push(fileName);
    });

    res.json({
      filesList : filesList
    })
});

});


module.exports = router;
