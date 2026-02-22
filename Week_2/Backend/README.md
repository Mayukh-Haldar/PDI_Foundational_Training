# Node.js Backend Learning Suite

### Apps 1–6 | Progressive Backend Development Projects

## Overview

This repository contains six progressively structured Node.js applications, starting from basic CLI programs to a layered REST API using clean architecture.

The goal of this suite is to demonstrate structured learning and backend development evolution:

1. CLI Application
2. File System Utility
3. Basic Express Server
4. Static File Server
5. REST API with Database
6. Layered Architecture Production-Style API

Each application builds upon concepts introduced in the previous one.

---

# Project Structure

```
root/
├── app1  → Simple Interest Calculator (CLI)
├── app2  → File Organizer Utility
├── app3  → Basic Express Server
├── app4  → Static File Server (Portfolio)
├── app5  → REST API with MongoDB
└── app6  → Layered Clean Architecture API
```

---

# App1 – Simple Interest Calculator (CLI)

## Type

Command-line application

## Core Concepts

* ES Modules
* Async/Await
* Readline Promises API
* Basic financial calculations

## Key Features

* Interactive CLI input
* Uses `type: "module"`
* Calculates simple interest
* Formats output to 2 decimal places

## Formula Used

```
SI = (P × R × T) / 12
```

---

# App2 – File Organizer Utility

## Type

File system automation tool

## Core Concepts

* `fs.promises`
* Path handling
* Async file operations
* Directory manipulation

## Key Features

* Categorizes files by extension
* Creates folders automatically
* Moves files asynchronously
* Skips directories
* Handles files without extension

---

# App3 – Basic Express Server

## Type

Minimal web server

## Core Concepts

* Express setup
* Routing
* Request-response lifecycle

## Endpoint

```
GET /
```

Response:

```
Hello, World Express
```

---

# App4 – Static File Server (Portfolio Project)

## Type

Static asset server

## Core Concepts

* `express.static()`
* `res.download()`
* Secure path handling
* Serving HTML/CSS

## Features

* Serves portfolio site
* Resume download endpoint
* Static assets routing
* Bootstrap-based frontend

---

# App5 – REST API with MongoDB

## Type

Database-backed API

## Core Concepts

* MongoDB integration
* Mongoose schema modeling
* Environment configuration
* RESTful routing

## Endpoints

```
GET    /api/v1/listings
POST   /api/v1/listings
GET    /api/v1/listings/:listingId
GET    /api/v1/listings/search?location=...
```

## Features

* Schema validation
* Regex search
* Async database operations
* Modular folder structure

---

# App6 – Layered Clean Architecture API

## Type

Production-style backend API

## Architecture Pattern

```
Routes → Controllers → Services → Models → Database
                     ↓
                   DTO
                     ↓
              ApiResponse Wrapper
                     ↓
              Error Middleware
```

## Core Patterns Used

* Controller-Service separation
* DTO pattern
* Custom ApiError class
* Centralized error middleware
* Consistent response structure

## Endpoints

```
GET     /api/v1/listings
GET     /api/v1/listings/:listingId
POST    /api/v1/listings
PUT     /api/v1/listings/:listingId
DELETE  /api/v1/listings/:listingId
```

## Response Format

Success:

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Success",
  "success": true
}
```

Error:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "success": false
}
```

---

# Technology Evolution Across Apps

| App  | Runtime | Architecture         | Database | Pattern Level    |
| ---- | ------- | -------------------- | -------- | ---------------- |
| App1 | Node.js | CLI                  | None     | Basic            |
| App2 | Node.js | Utility              | None     | Intermediate     |
| App3 | Express | Basic Server         | None     | Beginner Web     |
| App4 | Express | Static Serving       | None     | Web + Assets     |
| App5 | Express | REST API             | MongoDB  | Modular          |
| App6 | Express | Layered Architecture | MongoDB  | Production-Level |

---

# Installation Guide

Each app is independent.

Example:

```bash
cd app6
npm install
node app.js
```

Apps using MongoDB require a `.env` file:

```
MONGO_URI=mongodb://localhost:27017/listings
PORT=3000
```

---

# Skills Demonstrated

* ES Modules
* CommonJS
* CLI Applications
* Async/Await
* File System Operations
* Express Routing
* Static Asset Handling
* REST API Design
* MongoDB Integration
* Mongoose Modeling
* Environment Configuration
* Clean Architecture
* Service Layer Pattern
* DTO Pattern
* Error Middleware
* API Response Standardization

---

# Learning Progression Summary

1. Started with pure Node.js fundamentals
2. Practiced file system manipulation
3. Built first Express server
4. Served static web content
5. Integrated MongoDB with REST API
6. Implemented production-style clean architecture

This progression reflects a structured backend development journey.

---

# Future Enhancements

* JWT Authentication Layer
* Swagger Documentation
* Input validation using Zod/Joi
* Logging middleware
* Rate limiting
* Dockerization
* Deployment (Render/Railway)
* Unit and integration tests

---

# Author

Mayukh Haldar

---

# License

ISC