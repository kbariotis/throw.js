# throw.js
An HTTP Error collection to use in your next REST API.

## Installation
```
npm install --save throw.js
```

## Example
```javascript
const express = require('express');
const app = express();
const errors = require('throw.js');
const logger = require('winston');

app.get('/', (req, res, next) => {
  
  next(new errors.NotFound());
});

app.use((err, req, res, next) => {

    logger.error(err);
    
    if (req.app.get('env') !== 'development' &&
        req.app.get('env') !== 'test') {

        delete err.stack;
    }

    res.status(err.statusCode || 500).json(err);
});

app.listen(3000);
```

## Custom Errors

```javascript

const errors = require('throw.js');

errors.CustomError(slug, message, statusCode, errorCode);

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
errors.BadRequest(message, errorCode);
```

### 401 Unauthorized
```javascript
errors.Unauthorized(message, errorCode);
```

### 402 Payment Required
```javascript
errors.PaymentRequired(message, errorCode);
```

### 403 Forbidden
```javascript
errors.Forbidden(message, errorCode);
```

### 404 Not Found
```javascript
errors.NotFound(message, errorCode);
```

### 405 Method Not Allowed
```javascript
errors.MethodNotAllowed(message, errorCode);
```

### 406 Not Acceptable
```javascript
errors.NotAcceptable(message, errorCode);
```

### 407 Proxy Authentication Required
```javascript
errors.ProxyAuthenticationRequired(message, errorCode);
```

### 408 Request Timeout
```javascript
errors.RequestTimeout(message, errorCode);
```

### 409 Conflict
```javascript
errors.Conflict(message, errorCode);
```

### 410 Gone
```javascript
errors.Gone(message, errorCode);
```

### 422 Unprocessable Entity
```javascript
errors.UnprocessableEntity(message, errorCode);
```

### 424 Failed Dependency
```javascript
errors.FailedDependency(message, errorCode);
```

### 500 Internal Server Error
```javascript
errors.InternalServerError(message, errorCode);
```

### 501 Not Implemented
```javascript
errors.NotImplemented(message, errorCode);
```

### 502 Bad Gateway
```javascript
errors.BadGateway(message, errorCode);
```

### 503 Service Unavailable
```javascript
errors.ServiceUnavailable(message, errorCode);
```

### 504 Gateway Timeout
```javascript
errors.GatewayTimeout(message, errorCode);
```

### 505 HTTP Version Not Supported
```javascript
errors.HttpVersionNotSupported(message, errorCode);
```

### 511 Network Authentication Required
```javascript
errors.NetworkAuthenticationRequired(message, errorCode);
```

## TODO
* Implement more Error Classes
