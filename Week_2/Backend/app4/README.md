# App4: Static File Server and Resume Portfolio

## Overview

An Express.js server that serves static assets from a public directory and provides an endpoint for downloading a resume PDF. This project demonstrates static file serving, file downloads, and secure path resolution in Express.js.

This application functions as a simple portfolio website with resume viewing and downloading capabilities.

---

## Purpose

Learn and practice:

* Serving static files using `express.static()`
* File download handling with `res.download()`
* Path resolution using the `path` module
* Routing for file operations
* Organizing static assets (HTML, CSS, PDF)

---

## Features

✓ Serve static HTML and CSS files
✓ Resume PDF download endpoint
✓ Bootstrap-based portfolio layout
✓ Organized public directory
✓ Secure path handling using `path.join()`
✓ Cross-platform compatibility

---

## Technology Stack

| Component     | Technology             |
| ------------- | ---------------------- |
| Framework     | Express.js v5.2.1      |
| Runtime       | Node.js                |
| Module System | CommonJS               |
| Server Port   | 3000                   |
| Frontend      | HTML, CSS, Bootstrap 5 |
| Assets        | PDF, SVG icons, images |

---

## Installation

```bash
cd app4
npm install
```

This installs Express and required dependencies.

---

## Usage

### Start the Server

```bash
node app.js
```

### Expected Output

```
Listening on PORT: 3000
```

---

## Accessing the Application

### Home Page

Open in browser:

```
http://localhost:3000/
```

This loads:

```
public/index.html
```

---

### Skills Page

```
http://localhost:3000/static/skills.html
```

---

### View Resume (Open in Browser)

```
http://localhost:3000/static/doc/resume_mh.pdf
```

---

### Download Resume

```
http://localhost:3000/download/resume
```

This triggers a file download using `res.download()`.

---

### Using curl

```bash
# Home page
curl http://localhost:3000/

# Download resume
curl -O http://localhost:3000/download/resume
```

---

## Code Explanation

### Imports

```javascript
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
```

* Express handles routing and middleware
* Path ensures cross-platform safe file paths

---

### Static Middleware

```javascript
app.use("/static", express.static(path.join(__dirname, "public")));
```

This:

* Mounts `/static` to the `public` folder
* Allows access to:

  * CSS files
  * HTML files
  * PDFs
  * Images

Example:

```
/static/css/style.css → public/css/style.css
```

---

### Download Route

```javascript
app.get("/download/resume", (req, res) => {
  const manualPath = path.join(__dirname, "public", "doc", "resume_mh.pdf");
  res.download(manualPath);
});
```

* Constructs full secure path
* Sends PDF with download headers
* Browser saves file locally

---

### Root Route

```javascript
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
```

Loads the portfolio home page.

---

### Start Server

```javascript
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
```

Starts the server on port 3000.

---

## Directory Structure

```
app4/
├── app.js
├── package.json
├── package-lock.json
├── public/
│   ├── index.html
│   ├── skills.html
│   ├── css/
│   │   └── style.css
│   └── doc/
│       └── resume_mh.pdf
└── README.md
```

---

## How Static Serving Works

When user requests:

```
GET /static/css/style.css
```

Express:

1. Maps `/static` to `public`
2. Looks for `public/css/style.css`
3. Sends file with correct MIME type
4. Browser applies styling

---

## MIME Types Automatically Handled

Express sets correct content types automatically:

```
.html → text/html
.css → text/css
.pdf → application/pdf
.svg → image/svg+xml
.png → image/png
.jpg → image/jpeg
```

---

## Security Considerations

✓ Uses `path.join()` to prevent path traversal
✓ Anchors file access using `__dirname`
✓ Static middleware restricted to `public` folder

Not implemented (for production):

* Authentication
* Rate limiting
* Input validation
* CORS configuration

---

## Common Issues

| Issue                  | Solution                            |
| ---------------------- | ----------------------------------- |
| 404 on static file     | Ensure file exists in public folder |
| CSS not loading        | Verify `/static/` prefix in HTML    |
| Resume not downloading | Check file path in `res.download()` |
| Port already in use    | Change PORT or stop other process   |

---

## Enhancements You Can Add

* Enable compression middleware
* Add cache-control headers
* Add custom download filename
* Add analytics for download tracking
* Add error handling middleware
* Add environment-based port config

Example:

```javascript
const PORT = process.env.PORT || 3000;
```

---

## Real-World Use Cases

This pattern is used for:

* Portfolio websites
* Resume hosting platforms
* Documentation sites
* Static asset delivery
* File download services
* Lightweight frontend hosting

---

## Dependencies

```json
{
  "express": "^5.2.1"
}
```

---

## Author

Mayukh Haldar

## License

ISC
