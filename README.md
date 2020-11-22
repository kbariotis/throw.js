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

throw new Error(message, statusCode?, errorCode?, originalError?);
```

Parameters:

-   **message**[optional]: Detailed message of this error
-   **statusCode**[optional]: The HTTP Status number to return
-   **errorCode**[optional]: An internal unique code identifier of this error

## Stacking Errors

```javascript
const Error = require("throw.js/CustomError");

try {
    // throws an error
} catch (e) {
    // Pass the error as a parameter to keep its original stack trace
    throw new Error(message, statusCode, errorCode, e);
}
```

## Errors

All of the classes below have all parameters set up by default, based on [RFC7231](http://tools.ietf.org/html/rfc7231).
But you can override the `message` and the `errorCode` to fit your for personal needs.

### 400 Bad Request

```javascript
BadRequest(message?, errorCode?, originalError?);
```

### 401 Unauthorized

```javascript
Unauthorized(message?, errorCode?, originalError?);
```

### 402 Payment Required

```javascript
PaymentRequired(message?, errorCode?, originalError?);
```

### 403 Forbidden

```javascript
Forbidden(message?, errorCode?, originalError?);
```

### 404 Not Found

```javascript
NotFound(message?, errorCode?, originalError?);
```

### 405 Method Not Allowed

```javascript
MethodNotAllowed(message?, errorCode?, originalError?);
```

### 406 Not Acceptable

```javascript
NotAcceptable(message?, errorCode?, originalError?);
```

### 407 Proxy Authentication Required

```javascript
ProxyAuthenticationRequired(message?, errorCode?, originalError?);
```

### 408 Request Timeout

```javascript
RequestTimeout(message?, errorCode?, originalError?);
```

### 409 Conflict

```javascript
Conflict(message?, errorCode?, originalError?);
```

### 410 Gone

```javascript
Gone(message?, errorCode?, originalError?);
```

### 422 Unprocessable Entity

```javascript
UnprocessableEntity(message?, errorCode?, originalError?);
```

### 424 Failed Dependency

```javascript
FailedDependency(message?, errorCode?, originalError?);
```

### 500 Internal Server Error

```javascript
InternalServerError(message?, errorCode?, originalError?);
```

### 501 Not Implemented

```javascript
NotImplemented(message?, errorCode?, originalError?);
```

### 502 Bad Gateway

```javascript
BadGateway(message?, errorCode?, originalError?);
```

### 503 Service Unavailable

```javascript
ServiceUnavailable(message?, errorCode?, originalError?);
```

### 504 Gateway Timeout

```javascript
GatewayTimeout(message?, errorCode?, originalError?);
```

### 505 HTTP Version Not Supported

```javascript
HttpVersionNotSupported(message?, errorCode?, originalError?);
```

### 511 Network Authentication Required

```javascript
NetworkAuthenticationRequired(message?, errorCode?, originalError?);
```

## TODO

-   Implement more Error Classes
