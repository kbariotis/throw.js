# throw.js

An HTTP Error collection to use in your next REST API.

## Installation

```
npm install --save throw.js
```

or

```
yarn add throw.js
```

## Example

```javascript
const express = require("express");
const app = express();
const NotFound = require("throw.js/errors/NotFound");
const logger = require("winston");

app.get("/", (req, res, next) => {
    next(new NotFound());
});

app.use((err, req, res, next) => {
    logger.error(err);

    if (req.app.get("env") !== "development" && req.app.get("env") !== "test") {
        delete err.stack;
    }

    res.status(err.statusCode || 500).json(err);
});

app.listen(3000);
```

## Custom Errors

```javascript
const Error = require("throw.js/CustomError");

Error(message, statusCode, errorCode);
```

Parameters:

-   **message**[optional]: Detailed message of this error
-   **statusCode**[optional]: The HTTP Status number to return
-   **errorCode**[optional]: An internal unique code identifier of this error

## Errors

All of the classes below have all parameters set up by default, based on [RFC7231](http://tools.ietf.org/html/rfc7231).
But you can override the `message` and the `errorCode` to fit your for personal needs.

### 400 Bad Request

```javascript
BadRequest(message, errorCode);
```

### 401 Unauthorized

```javascript
Unauthorized(message, errorCode);
```

### 402 Payment Required

```javascript
PaymentRequired(message, errorCode);
```

### 403 Forbidden

```javascript
Forbidden(message, errorCode);
```

### 404 Not Found

```javascript
NotFound(message, errorCode);
```

### 405 Method Not Allowed

```javascript
MethodNotAllowed(message, errorCode);
```

### 406 Not Acceptable

```javascript
NotAcceptable(message, errorCode);
```

### 407 Proxy Authentication Required

```javascript
ProxyAuthenticationRequired(message, errorCode);
```

### 408 Request Timeout

```javascript
RequestTimeout(message, errorCode);
```

### 409 Conflict

```javascript
Conflict(message, errorCode);
```

### 410 Gone

```javascript
Gone(message, errorCode);
```

### 422 Unprocessable Entity

```javascript
UnprocessableEntity(message, errorCode);
```

### 424 Failed Dependency

```javascript
FailedDependency(message, errorCode);
```

### 500 Internal Server Error

```javascript
InternalServerError(message, errorCode);
```

### 501 Not Implemented

```javascript
NotImplemented(message, errorCode);
```

### 502 Bad Gateway

```javascript
BadGateway(message, errorCode);
```

### 503 Service Unavailable

```javascript
ServiceUnavailable(message, errorCode);
```

### 504 Gateway Timeout

```javascript
GatewayTimeout(message, errorCode);
```

### 505 HTTP Version Not Supported

```javascript
HttpVersionNotSupported(message, errorCode);
```

### 511 Network Authentication Required

```javascript
NetworkAuthenticationRequired(message, errorCode);
```

## TODO

-   Implement more Error Classes
