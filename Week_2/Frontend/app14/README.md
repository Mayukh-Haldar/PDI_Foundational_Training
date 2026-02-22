# App14: Random User Album

## Overview

A responsive Bootstrap-based album that dynamically fetches and displays random user data using the **Random User API**.

This app demonstrates:

* Fetch API
* Async/Await
* JSON parsing
* Object destructuring
* DOM manipulation
* Bootstrap layout and components

Each card loads a different random user with image, name, email, and location.

---

## Purpose

Learn and practice:

* Using external APIs
* Making HTTP requests with `fetch`
* Handling asynchronous code with `async/await`
* Parsing JSON responses
* Object destructuring
* Updating DOM dynamically
* Bootstrap grid system
* Responsive UI layout

---

# Technologies Used

* HTML5
* Bootstrap 5.3
* JavaScript (ES6+)
* Fetch API
* RandomUser API

---

# Random User API

Base URL used:

```
https://randomuser.me/api/
```

Each request returns:

```json
{
  "results": [
    {
      "name": { "title": "Mr", "first": "John", "last": "Doe" },
      "email": "john@example.com",
      "location": {
        "city": "New York",
        "state": "NY",
        "country": "USA"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg"
      }
    }
  ]
}
```

---

# Layout Structure

## Bootstrap Grid

```html
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
```

Responsive behavior:

* 1 column on mobile
* 2 columns on small screens
* 3 columns on medium+ screens

---

## Card Structure

Each user is displayed inside a Bootstrap card:

```html
<div class="card shadow-sm">
  <img id="img1" class="card-img-top" alt="User Image" />
  <div class="card-body">
    <strong id="name1"></strong>
    <span id="email1"></span>
    <span id="location1"></span>
  </div>
</div>
```

Dynamic IDs allow mapping data to specific cards:

* img1, img2, img3
* name1, name2, name3
* email1, email2, email3
* location1, location2, location3

---

# JavaScript Logic

## Fetching User Data

```javascript
const api_url = "https://randomuser.me/api/";

async function getUser(cardNumber) {
  const response = await fetch(api_url);
  const data = await response.json();
```

* `fetch()` makes HTTP request
* `await` pauses until response arrives
* `.json()` parses JSON

---

## Object Destructuring

```javascript
let { title, first, last } = user.name;
let { email } = user;
let { city, state, country } = user.location;
let { large } = user.picture;
```

Cleaner alternative to:

```javascript
user.name.first
user.location.city
```

---

## Updating DOM

```javascript
document.getElementById("img" + cardNumber).src = large;
document.getElementById("name" + cardNumber).innerText = fullname;
```

Dynamic element selection using string concatenation.

---

## Multiple Calls

```javascript
getUser(1);
getUser(2);
getUser(3);
```

Each call fetches a new random user and assigns it to a different card.

---

# Execution Flow

```
Page loads
    ↓
index.js runs
    ↓
getUser(1), getUser(2), getUser(3)
    ↓
Each makes API call
    ↓
Response parsed
    ↓
User data extracted
    ↓
DOM updated
    ↓
Cards display user information
```

---

# Key JavaScript Concepts Used

### 1. Async/Await

Simplifies asynchronous code compared to `.then()` chaining.

### 2. Fetch API

Modern replacement for XMLHttpRequest.

### 3. Destructuring

Extract properties from objects easily.

### 4. Template Construction

```javascript
let fullname = title + ". " + first + " " + last;
```

### 5. Dynamic ID Targeting

```javascript
"img" + cardNumber
```

---

# File Structure

```
app14/
│
├── index.html     # Bootstrap layout
├── index.js       # Fetch + DOM logic
```

---

# How to Run

1. Open folder in VS Code
2. Use Live Server (recommended)
3. Open index.html
4. Three random users will load automatically
5. Refresh page to get new users

---

# Improvements You Can Add

## Easy

* Add "Reload" button
* Show loading spinner
* Add gender filter

## Medium

* Fetch multiple users in single request:

  ```
  https://randomuser.me/api/?results=3
  ```
* Add error handling (try/catch)
* Display phone number

## Hard

* Create infinite scroll
* Add search filter
* Store fetched users in localStorage
* Add modal popup on "View" button

---

# Common Issues

| Problem           | Cause                 | Solution              |
| ----------------- | --------------------- | --------------------- |
| CORS error        | Not using HTTP server | Use Live Server       |
| Image not loading | API failure           | Add try/catch         |
| Blank cards       | Network slow          | Add loading indicator |

---

# Learning Outcomes

After completing this app, you will understand:

* How to consume public APIs
* How async/await works
* JSON parsing
* DOM manipulation
* Bootstrap responsive layout
* Object destructuring
* Dynamic UI updates
* Modern JavaScript syntax

---

# Best Practices Demonstrated

✓ Separation of HTML and JS
✓ Clean async code
✓ Destructuring for readability
✓ Responsive Bootstrap design
✓ Dynamic DOM targeting

---

# Key Takeaways

✓ Fetch API retrieves remote data
✓ Async/await simplifies asynchronous code
✓ Destructuring reduces code verbosity
✓ Bootstrap makes responsive UI easy
✓ DOM manipulation updates page dynamically
✓ External APIs can power real-time applications

---

## Author

Mayukh Haldar

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App13](../app13/README.md)** | **[Next: App15 →](../app15/README.md)**
