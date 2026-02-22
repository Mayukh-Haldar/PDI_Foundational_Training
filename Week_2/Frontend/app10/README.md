# App10: JavaScript Basics, Data Types, Conversions, Operators, and Classes

## Overview

A hands-on set of JavaScript demo files covering fundamentals like variable declarations, data types, type checking, numeric edge cases, type conversion, operators, arrow functions and `this` behavior, and ES6 classes with inheritance.

## Purpose

Learn and practice:

* Variable declaration using `var`, `let`, `const`
* Reassignment rules and common mistakes
* JavaScript data types (String, Number, Boolean, undefined, null, BigInt)
* `typeof` operator and JavaScript quirks
* Special numeric values: `Infinity`, `NaN`
* Type conversions: `Number()`, `String()`, `Boolean()`, `parseInt()`
* Operators: `+=`, `-=`, `--`, `**`, `%`
* Arrow functions and `this` inside `setInterval`
* Classes, inheritance, getters and setters

---

## Files Included

* `01_demo_basics.js`
  Variables and declarations (var, let, const), reassignment, and basic logging.

* `02_demo_datatypes.js`
  Strings, numbers, BigInt, boolean, undefined, null, Infinity/NaN, and numeric constants.

* `03_demo_operators.js`
  Arrow functions, `this` binding, and a timer example using `setInterval`.

* `04_datatypes_and_conversion.js`
  Conversions using `Number`, `String`, `Boolean`, `parseInt`, plus operator behavior with strings.

* `05_demo_classes.js`
  ES6 classes, inheritance, method override, getters and setters.

---

## Variable Declarations

### var

```javascript
var user = "mayukh haldar";
console.log(user);
```

* Function-scoped
* Allows redeclaration
* Can lead to accidental bugs in modern code

### let

```javascript
let age = 10;
console.log(age);
age = 20;
console.log(age);
```

* Block-scoped
* Reassignment allowed
* Redeclaration in the same scope is not allowed

### const

```javascript
const minAge = 18;
console.log(minAge);
// minAge = 25;  // not allowed
```

* Block-scoped
* Reassignment is not allowed
* Best choice for values that should not change

---

## Data Types Covered

### String

```javascript
let user = "Mayukh";
let user1 = 'Mayukh';
let user2 = `Mayukh`;
console.log(typeof user);  // string
```

### Number

```javascript
let quantity = 23.5678;
let expoNumber = 23.56e08;
let hexNumber = 0x23;
console.log(typeof quantity); // number
```

### BigInt

```javascript
let someNumber = 112324323435456446n;
console.log(typeof someNumber); // bigint
```

### Boolean

```javascript
let isGreater = 5 > 6;
console.log(isGreater); // false
```

### undefined

```javascript
let price;
console.log(price);        // undefined
console.log(typeof price); // undefined
```

### null (JavaScript quirk)

```javascript
let maxYears = null;
console.log(typeof maxYears); // object
```

### Infinity and NaN

```javascript
let op = 5 / 0;
console.log(op); // Infinity

let op1 = 'a' / 2;
console.log(op1); // NaN
```

---

## Type Checking with typeof

```javascript
console.log(typeof 10);         // number
console.log(typeof "hello");    // string
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (quirk)
console.log(typeof 10n);        // bigint
```

---

## Type Conversions

### String to Number

```javascript
let quantity = "123";
quantity = Number(quantity);
console.log(typeof quantity); // number
```

### Invalid Number Conversion

```javascript
let price = "123 vishwas";
price = Number(price);
console.log(price); // NaN
```

### Boolean Conversion

```javascript
console.log(Boolean(0));  // false
console.log(Boolean(1));  // true
console.log(Boolean(-10)); // true
```

### Number to String

```javascript
let price2 = 2356;
price2 = String(price2);
console.log(typeof price2); // string
```

### parseInt vs Number

```javascript
let k = "vishwas 12345 ";
let k1 = parseInt(k);   // NaN (doesn't start with digits)
let k2 = Number(k);     // NaN
```

If it started with digits, `parseInt` would extract them:

```javascript
parseInt("12345 vishwas"); // 12345
```

---

## Operators and Expression Examples

### String + Number

```javascript
let x = "10.45";
let y = 20;
let z = y + x;
console.log(z); // "2010.45"
```

### Decrement Operator

```javascript
let x1 = 45;
let x2 = x1--;
console.log(x1); // 44
console.log(x2); // 45
```

### Compound Operators

```javascript
let x = 10;
let y = 20;

x += 1; // 11
y -= 1; // 19
```

### Math Operators

```javascript
console.log(23.5 * 9.6 + 25 / 3);
console.log(45 + (96 % 2) * 54 / 5);
console.log(2**4 + 25/10);
```

---

## this and Arrow Functions (Timer Example)

### Why Arrow Function Works Here

In your timer, arrow function keeps the `this` of the outer scope:

```javascript
const timer = {
  seconds: 0,
  start: function () {
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
  },
};

timer.start();
```

* Arrow function does not create its own `this`
* So `this.seconds` refers to the `timer` object correctly

---

## Classes and Inheritance

### Person Class

```javascript
class Person {
  constructor(name) {
    this._name = name;
  }
  hello() {
    return "Hello I am " + this._name + ".";
  }
  get name() {
    return this._name;
  }
  set name(nme) {
    this._name = nme;
  }
}
```

### Programmer Class Extending Person

```javascript
class Programmer extends Person {
  hello() {
    return super.hello() + "I am also a programmer.";
  }
}
```

### Usage

```javascript
let p1 = new Person("vishwas");
console.log(p1.hello());

let p2 = new Programmer("Ajith");
console.log(p2.hello());
```

---

## Common Issues to Fix in Your Files

### 1. Wrong Console Statement

In `01_demo_basics.js`:

```javascript
let numberOfStudents;
console.numberOfStudents;
```

This line does nothing. If you wanted to print:

```javascript
console.log(numberOfStudents);
```

---

### 2. Avoid Directly Editing Private Fields

In `05_demo_classes.js`:

```javascript
p1._name = "John";
```

Better use the setter:

```javascript
p1.name = "John";
```

---

## How to Run These Files

### Option 1: Node.js

```bash
node 01_demo_basics.js
node 02_demo_datatypes.js
node 03_demo_operators.js
node 04_datatypes_and_conversion.js
node 05_demo_classes.js
```

### Option 2: Browser Console

* Open DevTools (F12)
* Paste code into Console
* Run line by line

---

## File Structure

```text
app10/
├── 01_demo_basics.js
├── 02_demo_datatypes.js
├── 03_demo_operators.js
├── 04_datatypes_and_conversion.js
├── 05_demo_classes.js
└── README.md
```

---

## Learning Outcomes

After reviewing this app, you will understand:

* Differences between `var`, `let`, and `const`
* Core JavaScript data types and `typeof`
* Numeric edge cases like `NaN` and `Infinity`
* Type conversions and common pitfalls
* How operators behave with strings vs numbers
* Why arrow functions matter for `this`
* ES6 classes, inheritance, and method overriding

---

## Common Questions

**Q: Why does `typeof null` return `"object"`?**
A: It is a historical JavaScript bug that remains for backward compatibility.

**Q: Why does `"20" + 10` become `"2010"`?**
A: `+` with a string triggers string concatenation, not numeric addition.

**Q: Why does the timer use an arrow function?**
A: Arrow functions preserve `this` from the object method, so `this.seconds` works.

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App9](../app9/README.md)** | **[Next: App11 →](../app11/README.md)**