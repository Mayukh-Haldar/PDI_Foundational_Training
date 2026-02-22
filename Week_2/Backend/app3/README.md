# App3: Basic Express Server

## Overview

A minimal HTTP server built using Express.js that demonstrates the fundamentals of creating a web server and handling a simple GET request. This project is ideal for beginners learning backend development with Node.js and Express.

## Purpose

Learn and practice:

* Express.js fundamentals
* Setting up a Node.js HTTP server
* Basic routing
* Request–response lifecycle
* Running a server on a specific port

---

## Features

✓ Simple Express server setup
✓ Single GET endpoint
✓ Runs on port 3000
✓ Clear and extendable structure

---

## Technology Stack

| Component     | Technology        |
| ------------- | ----------------- |
| Framework     | Express.js v5.2.1 |
| Runtime       | Node.js           |
| Module System | CommonJS          |
| Server Port   | 3000              |

---

## Installation

```bash
cd app3
npm install
```

This installs Express and all required dependencies.

---

## Usage

### Start the Server

```bash
node app.js
```

### Expected Console Output

```
Listening on PORT: 3000
```

---

### Access the Server

Using browser:

```
http://localhost:3000/
```

Using curl:

```bash
curl http://localhost:3000/
```

Expected response:

```
Hello, World Express
```

---

### Stop the Server

Press:

```
Ctrl + C
```

---

## Code Explanation

### Import Express

```javascript
const express = require("express");
```

Imports the Express framework using CommonJS syntax.

---

### Initialize App

```javascript
const app = express();
const PORT = 3000;
```

* Creates an Express application instance
* Defines the port number

---

### Define Route

```javascript
app.get("/", (req, res) => {
    res.send("Hello, World Express");
});
```

* Handles GET requests to `/`
* `req` → Request object
* `res` → Response object
* `res.send()` → Sends response back to client

---

### Start the Server

```javascript
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
```

Starts the server and listens on port 3000.

---

## API Reference

### Routes

| Method | Path | Description   | Response               |
| ------ | ---- | ------------- | ---------------------- |
| GET    | `/`  | Root endpoint | "Hello, World Express" |

---

## Request–Response Flow

```
Client Request → Express Router → Route Handler → Response → Client
```

---

## File Structure

```
app3/
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Package.json Details

```json
{
  "name": "app3",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^5.2.1"
  }
}
```

---

## Key Express Methods

| Method       | Purpose                |
| ------------ | ---------------------- |
| app.get()    | Handle GET requests    |
| app.post()   | Handle POST requests   |
| app.put()    | Handle PUT requests    |
| app.delete() | Handle DELETE requests |
| app.use()    | Register middleware    |
| app.listen() | Start server           |

---

## Example Extensions

### Add Another Route

```javascript
app.get("/about", (req, res) => {
    res.send("About Page");
});
```

---

### Return JSON

```javascript
app.get("/api/user", (req, res) => {
    res.json({ name: "Mayukh", role: "Intern" });
});
```

---

### Use Environment Port

```javascript
const PORT = process.env.PORT || 3000;
```

---

## Common Issues

| Issue                        | Solution                             |
| ---------------------------- | ------------------------------------ |
| Port already in use          | Change port or stop existing process |
| Cannot find module 'express' | Run `npm install`                    |
| Cannot GET /                 | Ensure route is defined correctly    |

---

## Security Notes

This is a basic learning application. It does not include:

* Authentication
* Input validation
* Error handling middleware
* CORS configuration

These should be added in production systems.

---

## Next Learning Steps

After mastering this project, you can explore:

1. Multiple routes
2. Middleware usage
3. Handling POST requests
4. Serving static files
5. MVC structure
6. REST API development
7. Database integration

---

## Author

Mayukh Haldar

## License

ISC
