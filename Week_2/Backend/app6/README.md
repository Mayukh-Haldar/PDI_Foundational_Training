# App6: Layered REST API with Clean Architecture (Express + MongoDB)

## Overview

App6 is a production-style REST API built using Express.js and MongoDB following a clean layered architecture.

It separates responsibilities into:

* Controllers
* Services
* DTOs
* Models
* Routes
* Middlewares
* Utilities

This project demonstrates scalable backend design patterns commonly used in enterprise applications.

---

## Purpose

Learn and practice:

* Clean architecture and separation of concerns
* Service layer pattern
* DTO (Data Transfer Object) pattern
* Centralized error handling
* Custom API response structure
* MongoDB integration with Mongoose
* Async error propagation using middleware

---

## Architecture Pattern

This project follows a layered backend architecture:

```
Request
   ↓
Routes
   ↓
Controller
   ↓
Service Layer
   ↓
Mongoose Model
   ↓
MongoDB
   ↓
DTO Formatting
   ↓
ApiResponse Wrapper
   ↓
Client Response
```

---

## Features

✓ RESTful CRUD operations
✓ Clean controller-service separation
✓ DTO pattern for response shaping
✓ Centralized error handling middleware
✓ Custom ApiError and ApiResponse classes
✓ Mongoose schema validation
✓ ObjectId validation
✓ Consistent API response format
✓ 404 route handling
✓ Production-ready structure

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

## Project Structure

```
app6/
├── app.js
├── package.json
├── .env
├── .gitignore
│
├── controllers/
│   └── listingController.js
│
├── services/
│   └── listingService.js
│
├── models/
│   └── listings.js
│
├── dtos/
│   └── listingDTO.js
│
├── routes/
│   ├── index.js
│   └── listings.js
│
├── middlewares/
│   └── error.middleware.js
│
├── utils/
│   ├── ApiError.js
│   └── ApiResponse.js
│
└── db/
    └── db.js
```

---

## Installation

### 1. Install Dependencies

```bash
cd app6
npm install
```

---

### 2. Create `.env` File

```
MONGO_URI=mongodb://localhost:27017/listings
PORT=3000
NODE_ENV=development
```

Or for MongoDB Atlas:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/listings
```

---

### 3. Start MongoDB (if local)

```bash
mongod
```

---

### 4. Run the Server

```bash
node app.js
```

Expected output:

```
MongoDB Connected: localhost
Listening on 3000....
```

---

# API Base URL

```
http://localhost:3000/api/v1/listings
```

---

# API Endpoints

---

## 1. Get All Listings

### GET

```
/api/v1/listings
```

### Response

```json
{
  "statusCode": 200,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Blore Apts",
      "price": 500000,
      "location": "Bengaluru"
    }
  ],
  "message": "Listings Fetched Successfully",
  "success": true
}
```

---

## 2. Get Single Listing

### GET

```
/api/v1/listings/:listingId
```

### Validation

* Checks if ObjectId is valid
* Returns 400 if invalid
* Returns 404 if not found

---

## 3. Create Listing

### POST

```
/api/v1/listings
```

### Body

```json
{
  "name": "New Apartment",
  "price": 600000,
  "location": "Kolkata"
}
```

### Validation

* All fields required
* Returns 400 if missing

### Success Response

```json
{
  "statusCode": 201,
  "data": {
    "id": "...",
    "name": "New Apartment",
    "price": 600000,
    "location": "Kolkata"
  },
  "message": "Listing Created Successfully",
  "success": true
}
```

---

## 4. Update Listing

### PUT

```
/api/v1/listings/:listingId
```

* Uses `findByIdAndUpdate`
* Runs schema validators
* Returns updated document

---

## 5. Delete Listing

### DELETE

```
/api/v1/listings/:listingId
```

Returns:

```json
{
  "statusCode": 200,
  "data": null,
  "message": "Listing Deleted Successfully",
  "success": true
}
```

---

# Response Structure

All responses follow this format:

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Success",
  "success": true
}
```

Errors follow:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "success": false,
  "errors": []
}
```

---

# Core Components Explained

---

## 1. Controller Layer

Handles:

* Input validation
* ObjectId validation
* Calling service methods
* Formatting response using DTO
* Throwing ApiError

---

## 2. Service Layer

Handles:

* Business logic
* Database operations
* Direct interaction with Mongoose model

Example:

```javascript
Listing.findByIdAndUpdate(id, data, {
  new: true,
  runValidators: true,
});
```

---

## 3. DTO Layer

Prevents leaking raw MongoDB document structure.

Example:

```javascript
class ListingDTO {
  constructor(listing) {
    this.id = listing._id;
    this.name = listing.name;
    this.price = listing.price;
    this.location = listing.location;
  }
}
```

---

## 4. ApiError Utility

Custom error class:

```javascript
new ApiError(statusCode, message)
```

---

## 5. ApiResponse Utility

Standard success response wrapper.

---

## 6. Error Middleware

Centralized error handling:

* Converts unknown errors to ApiError
* Handles mongoose validation errors
* Returns structured JSON error

---

# Security Best Practices Used

✓ ObjectId validation
✓ Centralized error handling
✓ No raw error exposure
✓ Proper HTTP status codes
✓ DTO prevents overexposing fields

---

# Improvements You Can Add

* Pagination
* Sorting and filtering
* Search endpoint
* Authentication (JWT)
* Role-based access
* Rate limiting
* Logging middleware
* Request validation middleware (Joi/Zod)
* Swagger documentation
* Unit tests

---

# Clean Architecture Benefits

✓ Highly maintainable
✓ Scalable for large applications
✓ Easy to test
✓ Clear separation of responsibilities
✓ Enterprise-ready structure

---

# Real World Use Cases

* Real estate backend
* Property rental API
* E-commerce listing service
* Marketplace backend
* Microservice architecture foundation

---

# Dependencies

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.2.1",
  "dotenv": "^17.3.1"
}
```

---

## Author

Mayukh Haldar

## License

ISC