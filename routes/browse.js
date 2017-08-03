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
    request("http://www.example.com", function(error, response, body) {
        var _write = res.write,
            _writeHead = res.writeHead,
            isHtml = false;
        var scriptElm = "\n<script type='text/javascript' src='https://code.jquery.com/jquery-1.12.4.js'></script>\n";
        //req.headers['accept-encoding'] = '*;q=1,gzip=0';
        response.writeHead = function(code, headers) {
            isHtml = headers['content-type'] && headers['content-type'].match('text/html');
            if (isHtml) {
                headers['content-length'] = parseInt(headers['content-length']) + scriptElm.length;
            }
            _writeHead.apply(this, arguments);
        };

        response.write = function(chunk) {
            if (isHtml) {
                chunk = chunk.toString().replace(/(<head[^>]*>)/, "$1" + scriptElm)
            }
            _write.call(res, chunk);
        };
        res.send(body);
//        res.render('browse', {data: body});
  //      console.log(body);
    });
});

module.exports = router;
