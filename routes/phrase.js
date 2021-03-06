var express = require('express');
var router = express.Router();
var constants = require('../constants');

router.get('/', function(req, res, next) {

    var request = require('request');
    var url = constants.restApiUrl+constants.restApiGetPhrase;

    var propertiesObject = { phraseType: req.query.phraseType };

    request({url:url, qs:propertiesObject}, function(err, response, body) {

        if(err) {
            console.log(err);
        }
        res.send(response.body);
    });

});

module.exports = router;
