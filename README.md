# throw.js
An HTTP Error collection to use in your next REST API.

Heavily inspired by https://gist.github.com/justmoon/15511f92e5216fa2624b

## Example
```
var express = require('express');
var app = express();
var throwjs = require('throwjs');
var logger = require('winston');

app.use(function(err, req, res, next) {

    logger.error(err);
    
    if (req.app.get('env') !== 'development' &&
        req.app.get('env') !== 'test') {

        delete err.stack;
    }

    res.status(err.errorCode || 500).json(err);

});

app.get('/', function (req, res, next) {
  
  throw new throwjs.notFound();
  
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
```

## Documentation


```
var throwjs = require('throwjs');

throw new throwjs.customError('customError', 'Something went really bad', 400, 4000);
```

