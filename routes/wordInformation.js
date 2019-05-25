var express = require('express');
var router = express.Router();
var constants = require('../constants');

router.get('/:wordType/:wordId', function(req, res, next) {

    var request = require('request');
    var url = constants.restApiUrl
        +   constants.restApiGetWordInformation
        + '/' +  req.params.wordType
        + '/' + req.params.wordId;

    console.log(url);
    request({url:url}, function(err, response, body) {

        if(err) {
            console.log(err);
        }
        console.log(response.body);
        res.send(response.body);
    });

});

module.exports = router;
