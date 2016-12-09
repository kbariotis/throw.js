# throw.js
An HTTP Error collection to use in your next REST API.

Heavily inspired by https://gist.github.com/justmoon/15511f92e5216fa2624b

## Installation
```
npm install throw.js
```

## Example
```javascript
var express = require('express');
var app = express();
var throwjs = require('throw.js');
var logger = require('winston');

app.get('/', function (req, res, next) {
  
  next(new throwjs.NotFound());
  
});

app.use(function(err, req, res, next) {

    logger.error(err);
    
    if (req.app.get('env') !== 'development' &&
        req.app.get('env') !== 'test') {

        delete err.stack;
    }

    res.status(err.statusCode || 500).json(err);

});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
```

## Custom Errors

```javascript

throwjs.customError(slug, message, statusCode, errorCode);

```

Parameters:
* **slug**[optional]: A unique identifier of this error
* **message**[optional]: Detailed message of this error
* **statusCode**[optional]: The HTTP Status number to return
* **errorCode**[optional]: An internal unique code identifier of this error

## Errors

All of the classes below have all parameters set up by default, based on [RFC7231](http://tools.ietf.org/html/rfc7231). 
But you can override the `message` and the `errorCode` to fit your for personal needs.

### 400 Bad Request
```javascript
throwjs.BadRequest(message, errorCode);
```

### 401 Unauthorized
```javascript
throwjs.Unauthorized(message, errorCode);
```

### 402 Payment Required
```javascript
throwjs.PaymentRequired(message, errorCode);
```

### 403 Forbidden
```javascript
throwjs.Forbidden(message, errorCode);
```

### 404 Not Found
```javascript
throwjs.NotFound(message, errorCode);
```

### 405 Method Not Allowed
```javascript
throwjs.MethodNotAllowed(message, errorCode);
```

### 406 Not Acceptable
```javascript
throwjs.NotAcceptable(message, errorCode);
```

### 407 Proxy Authentication Required
```javascript
throwjs.ProxyAuthenticationRequired(message, errorCode);
```

### 408 Request Timeout
```javascript
throwjs.RequestTimeout(message, errorCode);
```

### 409 Conflict
```javascript
throwjs.Conflict(message, errorCode);
```

### 410 Gone
```javascript
throwjs.Gone(message, errorCode);
```

### 422 Unprocessable Entity
```javascript
throwjs.UnprocessableEntity(message, errorCode);
```

### 424 Failed Dependency
```javascript
throwjs.FailedDependency(message, errorCode);
```

### 500 Internal Server Error
```javascript
throwjs.InternalServerError(message, errorCode);
```

### 501 Not Implemented
```javascript
throwjs.NotImplemented(message, errorCode);
```

### 502 Bad Gateway
```javascript
throwjs.BadGateway(message, errorCode);
```

### 503 Service Unavailable
```javascript
throwjs.ServiceUnavailable(message, errorCode);
```

### 504 Gateway Timeout
```javascript
throwjs.GatewayTimeout(message, errorCode);
```

### 505 HTTP Version Not Supported
```javascript
throwjs.HttpVersionNotSupported(message, errorCode);
```

### 511 Network Authentication Required
```javascript
throwjs.NetworkAuthenticationRequired(message, errorCode);
```

## TODO
* Implement more Error Classes
