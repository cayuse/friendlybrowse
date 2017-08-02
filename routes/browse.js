var express = require('express'),
    router = express.Router(),
    http = require('http'),
    https = require('https'),
    util = require('util'),
    jsdom = require('jsdom'),
    request = require('request'),
    url = require('url')
;

/* GET home page. */
router.get('/:site', function(req, res, next) {
    res.render('browse', { title: 'Express' });
});

router.get('/', function(req, res, next) {
    var request = require("request");
    request("http://www.sitepoint.com", function(error, response, body) {
        res.send(body);
//        res.render('browse', {data: body});
  //      console.log(body);
    });
});

module.exports = router;
