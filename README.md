# throw.js
An HTTP Error collection to use in your next REST API.

Heavily inspired by https://gist.github.com/justmoon/15511f92e5216fa2624b

## Instalation
```
npm install throw.js
```

## Example
```javascript
var express = require('express');
var app = express();
var throwjs = require('throw.js');
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

## Custom Errors

```javascript

throwjs.customError(slug, message, errorCode, internalErrorCode);

```

Parameters:
* **slug**[optional]: A unique identifier of this error
* **message**[optional]: Detailed message of this error
* **errorCode**[optional]: The HTTP Status number to return
* **internalErrorCode**[optional]: An internal unique code identifier of this error

## Errors

All of the classes below have all parameters set up by default, based on [RFC7231](http://tools.ietf.org/html/rfc7231). 
But you can override the `message` and the `internalErrorCode` to fit your for personal needs.

### 502 Bad Gateway
```javascript
throwjs.badGateway(message, internalErrorCode);
```

### 406 Not Acceptable
```javascript
throwjs.notAcceptable(message, internalErrorCode);
```

### 404 Not Found
```javascript
throwjs.notFound(message, internalErrorCode);
```

### 501 Not Implemented
```javascript
throwjs.notImplemented(message, internalErrorCode);
```

### 407 Proxy Authentication Required
```javascript
throwjs.proxyAuthenticationRequired(message, internalErrorCode);
```

### 402 Payment Required
```javascript
throwjs.paymentRequired(message, internalErrorCode);
```

### 408 Request Timeout
```javascript
throwjs.requestTimeout(message, internalErrorCode);
```

### 503 Service Unavailable
```javascript
throwjs.serviceUnavailable(message, internalErrorCode);
```

### 401 Unauthorized
```javascript
throwjs.unauthorized(message, internalErrorCode);
```

### 400 Bad Request
```javascript
throwjs.badRequest(message, internalErrorCode);
```

### 409 Conflict
```javascript
throwjs.conflict(message, internalErrorCode);
```

### 403 Forbidden
```javascript
throwjs.forbidden(message, internalErrorCode);
```

### 504 Gateway Timeout
```javascript
throwjs.gatewayTimeout(message, internalErrorCode);
```

### 410 Gone
```javascript
throwjs.gone(message, internalErrorCode);
```

### 505 HTTP Version Not Supported
```javascript
throwjs.httpVersionNotSupported(message, internalErrorCode);
```

### 405 Method Not Allowed
```javascript
throwjs.methodNotAllowed(message, internalErrorCode);
```

### 500 Internal Server Error
```javascript
throwjs.internalServerError(message, internalErrorCode);
```

## TODO
* Implement more Error Classes
