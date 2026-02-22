# App5: Listings REST API with MongoDB

## Overview

App5 is a RESTful API built using Express.js and MongoDB. It demonstrates database integration using Mongoose, environment configuration with dotenv, and modular API architecture.

This project follows a clean separation of concerns using routes, models, and database configuration.

---

## Purpose

Learn and practice:

* Building REST APIs with Express.js
* MongoDB integration using Mongoose
* Schema validation and data modeling
* Environment variable management
* Modular architecture pattern
* Query-based searching with regex
* Async/await database operations

---

## Features

✓ RESTful API endpoints
✓ MongoDB database integration
✓ Mongoose schema validation
✓ Environment configuration using dotenv
✓ Modular folder structure
✓ Query-based search with case-insensitive filtering
✓ JSON request parsing
✓ Proper HTTP status codes

---

## Technology Stack

| Component     | Technology | Version |
| ------------- | ---------- | ------- |
| Framework     | Express.js | 5.2.1   |
| Database      | MongoDB    | Latest  |
| ODM           | Mongoose   | 9.2.1   |
| Env Config    | dotenv     | 17.3.1  |
| Runtime       | Node.js    | 14+     |
| Module System | CommonJS   |         |

---

## Prerequisites

* Node.js (v14 or higher)
* npm
* MongoDB (Local or Atlas)
* Basic knowledge of REST APIs
* Understanding of async/await

---

## Installation

### Step 1: Install Dependencies

```bash
cd app5
npm install
```

---

### Step 2: Create `.env` File

Create a `.env` file in the root of `app5`:

### For Local MongoDB

```env
MONGO_URI=mongodb://localhost:27017/listings
PORT=3000
NODE_ENV=development
```

### For MongoDB Atlas

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/listings?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
```

---

### Step 3: Start MongoDB (If Local)

```bash
mongod
```

---

### Step 4: Start Server

```bash
node app.js
```

Expected Output:

```
MongoDB Connected: localhost
Listening on 3000....
```

---

## API Base URL

```
http://localhost:3000/api/v1/listings
```

---

# API Endpoints

---

## 1. Get All Listings

### Request

```
GET /api/v1/listings
```

### Example

```bash
curl http://localhost:3000/api/v1/listings
```

### Response

```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Blore Apts",
    "location": "Bengaluru",
    "price": 500000
  }
]
```

---

## 2. Create New Listing

### Request

```
POST /api/v1/listings
```

### Body (JSON)

```json
{
  "name": "New Apartment",
  "location": "Kolkata",
  "price": 600000
}
```

### Example

```bash
curl -X POST http://localhost:3000/api/v1/listings \
  -H "Content-Type: application/json" \
  -d '{"name":"New Apartment","location":"Kolkata","price":600000}'
```

### Response

```json
{
  "_id": "507f1f77bcf86cd799439099",
  "name": "New Apartment",
  "location": "Kolkata",
  "price": 600000
}
```

If name is missing:

```json
{
  "error": "name is required"
}
```

---

## 3. Search Listings by Location

### Request

```
GET /api/v1/listings/search?location=Bengaluru
```

### Example

```bash
curl "http://localhost:3000/api/v1/listings/search?location=Bengaluru"
```

### Behavior

* Case-insensitive search
* Uses MongoDB regex

### Implementation

```javascript
Listing.find({
  location: { $regex: location, $options: "i" }
});
```

---

## 4. Get Single Listing by ID

### Request

```
GET /api/v1/listings/:listingId
```

### Example

```bash
curl http://localhost:3000/api/v1/listings/507f1f77bcf86cd799439011
```

### Response

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Blore Apts",
  "location": "Bengaluru",
  "price": 500000
}
```

If not found:

```json
{
  "error": "Not found"
}
```

---

# Project Structure

```
app5/
├── app.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
├── db/
│   └── db.js
├── models/
│   └── listings.js
├── routes/
│   └── listings.js
└── listings/
    └── listings.json
```

---

# Code Breakdown

---

## app.js

* Loads environment variables
* Connects to MongoDB
* Parses JSON body
* Mounts routes at `/api/v1/listings`
* Starts server

---

## db/db.js

Handles MongoDB connection:

```javascript
mongoose.connect(process.env.MONGO_URI)
```

Exits process if connection fails.

---

## models/listings.js

Defines Mongoose schema:

```javascript
{
  name: { type: String, required: true },
  location: { type: String },
  price: { type: Number }
}
```

Provides:

* Validation
* Type enforcement
* Model abstraction

---

## routes/listings.js

Implements:

* GET all listings
* POST create listing
* GET search by location
* GET by ID

Uses async/await with MongoDB queries.

---

# Database Schema

## Listing Collection

```json
{
  "_id": ObjectId,
  "name": String,
  "location": String,
  "price": Number
}
```

---

# Architecture Flow

```
Client Request
      ↓
Express Router
      ↓
Route Handler
      ↓
Mongoose Model
      ↓
MongoDB Database
      ↓
JSON Response
```

---

# Common Issues

| Issue                     | Solution                              |
| ------------------------- | ------------------------------------- |
| Cannot connect to MongoDB | Check MONGO_URI                       |
| MONGO_URI undefined       | Ensure dotenv.config() runs first     |
| Port already in use       | Change PORT                           |
| POST body empty           | Ensure express.json() middleware used |
| 404 Not found             | Verify correct endpoint               |

---

# Security Recommendations

For production, add:

* Input validation middleware
* Centralized error handler
* Rate limiting
* Authentication (JWT)
* CORS configuration
* Request logging
* Helmet middleware

---

# Performance Improvements

* Add pagination
* Add indexes on frequently searched fields
* Use `.lean()` for faster queries
* Enable connection pooling
* Add caching layer (Redis)

---

# Future Enhancements

* PUT update listing
* DELETE listing
* Add pagination
* Add sorting and filtering
* Add authentication
* Add Swagger API documentation
* Add unit tests
* Add centralized error middleware

---

# Best Practices Demonstrated

✓ Separation of concerns
✓ Environment configuration
✓ Async/await usage
✓ RESTful routing
✓ Schema validation
✓ Modular structure

---

# Real-World Use Cases

* Property listing platform
* Real estate management
* Product catalog API
* Rental service backend
* Marketplace API

---

## Author

Mayukh Haldar

## License

ISC