# App11: Simple Calculator

## Overview

A basic interactive calculator built using HTML and JavaScript. It performs arithmetic operations based on user input and displays the result dynamically. This app demonstrates form handling, DOM manipulation, switch-case logic, and basic validation.

## Purpose

Learn and practice:

* HTML form structure
* JavaScript event handling
* DOM selection using `getElementById`
* `parseFloat()` conversion
* Switch statement logic
* Division by zero handling
* `preventDefault()` usage
* Updating UI using `textContent`

---

## Calculator Features

### Supported Operations

* Addition (+)
* Subtraction (-)
* Multiplication (*)
* Division (/)
* Division by zero handling

---

## HTML Structure

```html
<form action="" method="get">
    <fieldset>
        <legend>
            <h1>Simple Calculator</h1>
        </legend>

        <label for="num1">Number 1:</label>
        <input type="number" id="num1">

        <label for="num2">Number 2:</label>
        <input type="number" id="num2">

        <label for="op">Operator:</label>
        <select id="op">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>

        <button onclick="handleOnClick(event)">Calculate</button>
    </fieldset>
</form>
```

---

## JavaScript Logic

### Prevent Form Reload

```javascript
event.preventDefault();
```

Prevents the form from refreshing the page when clicking the button.

---

### Getting Input Values

```javascript
let num1 = parseFloat(document.getElementById("num1").value);
let num2 = parseFloat(document.getElementById("num2").value);
let op = document.getElementById("op").value;
```

* `parseFloat()` allows decimal calculations
* `.value` retrieves user input
* Operator is selected from dropdown

---

### Switch Statement

```javascript
switch (op) {
    case '+':
        answer = num1 + num2;
        break;

    case '-':
        answer = num1 - num2;
        break;

    case '*':
        answer = num1 * num2;
        break;

    case '/':
        if (num2 === 0) {
            answer = "Cannot divide by zero";
        } else {
            answer = num1 / num2;
        }
        break;

    default:
        answer = "Invalid operator";
}
```

Each case handles a different mathematical operation.

---

### Display Result

```javascript
res.textContent = answer;
```

* Updates the paragraph with id `result`
* `textContent` safely updates text (better than innerHTML for plain text)

---

## Code Execution Flow

```
User clicks Calculate
        ↓
handleOnClick(event)
        ↓
preventDefault() stops form reload
        ↓
Read num1, num2, operator
        ↓
Switch statement executes
        ↓
Answer calculated
        ↓
Result displayed on page
```

---

## Error Handling

### Division by Zero

```javascript
if (num2 === 0) {
    answer = "Cannot divide by zero";
}
```

Prevents mathematical error and provides user-friendly message.

---

## Why parseFloat Instead of parseInt?

* `parseFloat()` supports decimal numbers
* `parseInt()` only supports integers

Example:

```javascript
parseFloat("10.5") // 10.5
parseInt("10.5")   // 10
```

---

## Common Mistakes to Avoid

❌ Forgetting `event.preventDefault()`
❌ Not converting string input to number
❌ Missing `break` in switch statement
❌ Not handling division by zero
❌ Using `innerHTML` unnecessarily

---

## File Structure

```
app11/
└── index.html   # HTML + JavaScript Calculator
```

---

## Learning Outcomes

After completing this app, you will understand:

* How HTML forms work
* How to stop default form submission
* How to read user input values
* How to use `switch` statements
* How to perform arithmetic operations
* How to update DOM dynamically
* Basic validation and error handling
* Difference between `parseInt()` and `parseFloat()`

---

## How to Test

1. Open `index.html` in browser
2. Enter two numbers
3. Select operator
4. Click **Calculate**
5. Observe result
6. Try dividing by zero

---

## Practice Exercises

### Easy

* Add modulus operator `%`
* Add exponent operator `**`

### Medium

* Show formatted output like:

  ```
  10 + 5 = 15
  ```
* Disable button if inputs are empty

### Hard

* Add calculation history
* Support keyboard Enter key
* Convert into scientific calculator
* Add clear button

---

## Improved Modern Event Handling (Optional)

Instead of inline `onclick`, use:

```javascript
document.querySelector("button")
        .addEventListener("click", handleOnClick);
```

This is cleaner and separates HTML from JavaScript.

---

## Key Takeaways

✓ Switch statements handle multiple conditions
✓ `parseFloat()` converts string to number
✓ `preventDefault()` stops page reload
✓ Error handling improves UX
✓ DOM manipulation updates content dynamically

---

## Author

Mayukh Haldar

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App10](../app10/README.md)** | **[Next: App12 →](../app12/README.md)**
