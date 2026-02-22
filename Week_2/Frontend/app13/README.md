# App13: JavaScript Modules, ES6 Features & Async Programming

## Overview

This app demonstrates modern JavaScript concepts including:

* ES6 Modules (import/export)
* Named and Default Exports
* DOM Manipulation with Modules
* Spread Operator
* Destructuring
* Array Methods
* Async/Await & Promises
* Event Listeners
* Practical Examples (Calculator, Search, Sentiment Processing)

This app combines multiple JavaScript feature demos into one structured learning module.

---

## Concepts Covered

### 1. ES6 Modules

* `type="module"` in HTML
* Named exports
* Default exports
* Importing across files
* Modular code organization

### 2. Modern JavaScript Features

* Arrow functions
* Destructuring
* Spread operator
* Array methods (map, filter)
* Template literals
* Async/Await
* Promises
* Event listeners

---

# Module System (ES6)

## Enabling Modules in HTML

```html
<script src="script6.js" type="module"></script>
```

* Required for using `import` and `export`
* Runs in strict mode automatically
* Supports modular code structure

---

## Named Exports

### mathUtils.js

```javascript
export const add = (a,b) => a+b;
export const subtract = (a,b) => a-b;
```

### utils.js

```javascript
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

## Importing Modules

### script5.js

```javascript
import {add, subtract} from './mathUtils.js';
import UserAccount from './utils.js';

console.log(add(5,10));
console.log(subtract(25,10));

const me = new UserAccount("Mayukh Haldar");
console.log(me.name);
```

### script6.js (Calculator using modules)

```javascript
import { add, subtract } from "./utils.js";
```

* Named imports use `{ }`
* Default import does not use `{ }`

---

# Calculator (script6.js)

## DOM Access

```javascript
const calculateButton = document.getElementById("calculateButton");
```

## Event Listener

```javascript
calculateButton.addEventListener("click", handleOnclick);
```

## Switch-Based Calculation

```javascript
switch (op) {
  case "+":
    result = add(num1, num2);
    break;

  case "-":
    result = subtract(num1, num2);
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num2 != 0) {
      result = num1 / num2;
    }
    break;
}
```

### Features:

* Uses imported math functions
* Uses template literals
* Handles division by zero
* Dynamically updates result using `textContent`

---

# Array Operations

## script.js – Shopping Cart Example

Demonstrates:

* `push()`
* `pop()`
* `shift()`
* `unshift()`

```javascript
shoppingCart.push('Cheese','Apples');
shoppingCart.pop();
shoppingCart.shift();
shoppingCart.unshift('Butter','Juice');
```

---

# Destructuring (script1.js)

```javascript
const userData = ['Mayukh Haldar', 25000];
const [uname, salary, city] = userData;
```

* Extracts values directly from array
* If value not present → `undefined`

---

# Spread Operator (script2.js)

```javascript
const combinedArray = [...arr1, ...arr2, 7, 8, 9, 10, ...arr];
```

Used for:

* Merging arrays
* Cloning arrays
* Expanding elements

---

# Array Methods (script3.js – Tweet Cleaning)

### Using map, filter

```javascript
const cleanedTweets = tweets.map((tweet) => {
  const words = tweet.trim().split(/\s+/);
  const lowerCasedWords = words.map((word) => word.toLowerCase());
  const filteredWords = lowerCasedWords.filter((word) => !word.startsWith("#"));
  return filteredWords.join(" ");
});
```

Concepts:

* `map()` transforms array
* `filter()` removes unwanted elements
* `split()` + regex tokenization
* Text normalization

---

# Search Functionality (script4.js)

```javascript
function searchProducts(query) {
    const searchText = query.toLowerCase();
    return products.filter(function (product) {
        return product.name.toLowerCase().includes(searchText)
            || product.category.toLowerCase().includes(searchText);
    });
}
```

Concepts:

* Case-insensitive search
* `includes()` method
* Array filtering

---

# Async Programming (script7.js)

## Promise-Based Fetch Simulation

```javascript
async function fetchProduct(productId) {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === productId);
      resolve(product);
    }, 4000);
  });
}
```

## Consuming Promise

```javascript
fetchProduct(2)
  .then((product) => printProductDetails(product))
  .catch((error) => console.log(error));
```

Concepts:

* async/await
* Promise
* setTimeout simulation
* then() / catch()
* Error handling

---

# File Structure

```
app13/
│
├── index.html
├── mathUtils.js
├── utils.js
│
├── script.js        # Array operations
├── script1.js       # Destructuring
├── script2.js       # Spread operator
├── script3.js       # Tweet cleaning
├── script4.js       # Search filter
├── script5.js       # Module imports
├── script6.js       # Calculator using modules
└── script7.js       # Async/Promise demo
```

---

# Learning Outcomes

After completing App13, you will understand:

* How ES6 modules work
* Named vs default exports
* Importing across files
* Modular code structure
* Spread operator
* Destructuring
* Array transformation methods
* Async programming basics
* DOM event handling
* Promise chaining
* Code organization best practices

---

# Common Mistakes to Avoid

❌ Forgetting `type="module"` in HTML
❌ Wrong relative import paths
❌ Mixing default and named imports incorrectly
❌ Not handling async errors
❌ Not converting string inputs to numbers

---

# How to Run

1. Open project folder
2. Use Live Server (recommended)
3. Open `index.html`
4. Open DevTools Console to observe logs
5. Try Calculator functionality
6. Observe async behavior (4-second delay)

---

# Practice Exercises

### Easy

* Add modulus (%) operator to calculator
* Add more search filters
* Add more array methods

### Medium

* Add error rejection in async fetch
* Create separate math module
* Add product not found handling

### Hard

* Convert calculator to full modular architecture
* Create real API fetch
* Add UI for async product search
* Implement dynamic product list rendering

---

# Key Takeaways

✓ ES6 modules organize code cleanly
✓ Named and default exports behave differently
✓ Spread operator simplifies array merging
✓ Destructuring extracts values easily
✓ Async/await simplifies Promise handling
✓ DOM manipulation connects JS to UI
✓ Modular architecture improves scalability

---

## Author

Mayukh Haldar

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App12](../app12/README.md)** | **[Next: App14 →](../app14/README.md)**
