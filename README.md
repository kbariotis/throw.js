# throw.js
An HTTP Error collection to use in your next REST API.

Heavily inspired by https://gist.github.com/justmoon/15511f92e5216fa2624b

## Example
```javascript
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

```javascript

throwjs.customError(slug, message, errorCode, internalErrorCode);

```

Parameters:
* slug: A unique identifier of this error
* message: Detailed message of this error
* errorCode: The HTTP Status number to return
* internalErrorCode: An internal unique code identifier of this error

```javascript

throwjs.badGateway(message, internalErrorCode);

```
```javascript

throwjs.notAcceptable(message, internalErrorCode);

```

```javascript

throwjs.notFound(message, internalErrorCode);

```

```javascript

throwjs.notImplemented(message, internalErrorCode);

```

```javascript

throwjs.proxyAuthenticationRequired(message, internalErrorCode);

```

```javascript

throwjs.paymentRequired(message, internalErrorCode);

```

```javascript

throwjs.requestTimeout(message, internalErrorCode);

```

```javascript

throwjs.serviceUnavailable(message, internalErrorCode);

```

```javascript

throwjs.unauthorized(message, internalErrorCode);

```

```javascript

throwjs.badRequest(message, internalErrorCode);

```

```javascript

throwjs.conflict(message, internalErrorCode);

```

```javascript

throwjs.forbidden(message, internalErrorCode);

```

```javascript

throwjs.gatewayTimeout(message, internalErrorCode);

```

```javascript

throwjs.gone(message, internalErrorCode);

```

```javascript

throwjs.httpVersionNotSupported(message, internalErrorCode);

```

```javascript

throwjs.methodNotAllowed(message, internalErrorCode);

```

```javascript

throwjs.internalServerError(message, internalErrorCode);

```
