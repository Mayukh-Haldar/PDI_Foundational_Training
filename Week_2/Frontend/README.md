# Frontend Basics – Complete Documentation

A comprehensive collection of **16 frontend web applications** demonstrating core concepts of **HTML, CSS, and JavaScript**.
This repository progresses from basic HTML structure to advanced JavaScript patterns, API integration, and dynamic UI manipulation.

---

## Applications Overview

| App   | Name                        | Type            | Technologies         | Concepts                         |
| ----- | --------------------------- | --------------- | -------------------- | -------------------------------- |
| app1  | Web Page Structure          | HTML            | HTML5                | Semantic tags, headings, lists   |
| app2  | Tourist Attractions         | HTML            | HTML5                | Semantic layout, navigation      |
| app3  | Resume / Portfolio          | HTML            | HTML5                | Tables, links, structured layout |
| app4  | Media Player                | HTML            | HTML5                | Audio, video elements            |
| app5  | Contact Form                | HTML + CSS      | HTML5, CSS3          | Forms, validation, styling       |
| app6  | Theme Switcher Form         | HTML + CSS + JS | CSS Variables, JS    | Theme toggle                     |
| app7  | CSS Grid Layout             | HTML + CSS      | CSS Grid             | Multi-column layout              |
| app8  | Flexbox Layout              | HTML + CSS      | Flexbox              | 1D layouts                       |
| app9  | JavaScript Basics           | HTML + JS       | JavaScript           | DOM, console, events             |
| app10 | JS Data Types & Classes     | JS              | JavaScript ES6       | Variables, operators, classes    |
| app11 | Simple Calculator           | HTML + JS       | JavaScript           | Events, switch logic             |
| app12 | Theme Switcher with Storage | HTML + CSS + JS | localStorage         | Persistent themes                |
| app13 | Modules & Async JS          | HTML + JS       | ES6 Modules          | import/export, async             |
| app14 | Random User Album           | HTML + JS       | Fetch API, Bootstrap | API integration                  |
| app15 | Todo Application            | HTML + CSS + JS | Vanilla JS           | CRUD, state management           |
| app16 | DOM Manipulation            | HTML + JS       | JavaScript           | createElement, remove            |

---

# Learning Path

## Beginner – HTML Fundamentals

* app1: Basic HTML structure
* app2: Semantic layout
* app3: Resume structure
* app4: Media elements

## Intermediate – CSS & Layout

* app5: Forms and validation
* app6: Theming with CSS variables
* app7: CSS Grid
* app8: Flexbox

## Advanced – JavaScript & Dynamic Apps

* app9: JS fundamentals
* app10: Data types and classes
* app11: Calculator logic
* app12: Theme persistence
* app13: Modules and async
* app14: API fetch
* app15: Todo CRUD app
* app16: DOM manipulation

---

# App Summaries

## App1: Web Page Structure

Focuses on HTML5 structure and semantic tags.

**Concepts:**

* DOCTYPE
* Meta tags
* Headings hierarchy
* Lists
* Text formatting

**Outcome:** Understand how structured HTML documents work.

---

## App2: Tourist Attractions

Demonstrates semantic page layout.

**Concepts:**

* header, nav, main, section, aside, footer
* Internal anchor links

**Outcome:** Build structured informational pages.

---

## App3: Resume / Portfolio

Professional resume layout.

**Concepts:**

* Images
* Email & phone links
* Tables
* External links

**Outcome:** Structure real-world portfolio pages.

---

## App4: Media Player

HTML5 audio and video embedding.

**Concepts:**

* video and audio tags
* controls, muted, loop
* source element

**Outcome:** Embed multimedia in webpages.

---

## App5: Contact Form

Comprehensive HTML form.

**Concepts:**

* Input types
* Validation
* Fieldset & legend
* Select & datalist
* File uploads

**Outcome:** Build accessible forms.

---

## App6: Theme Switcher Form

Adds theme toggle using CSS variables.

**Concepts:**

* data attributes
* CSS custom properties
* Event listeners

**Outcome:** Implement UI theming.

---

## App7: CSS Grid Layout

Multi-column layout using Grid.

**Concepts:**

* display: grid
* grid-template-columns
* fr unit
* gap

**Outcome:** Build 2D layouts.

---

## App8: Flexbox Layout

Flexible two-column layout.

**Concepts:**

* display: flex
* flex: 1
* justify-content
* align-items

**Outcome:** Master 1D layouts.

---

## App9: JavaScript Basics

Intro to JavaScript in browser.

**Concepts:**

* console.log
* getElementById
* onclick
* Functions

**Outcome:** Understand DOM interaction.

---

## App10: Variables & Data Types

Deep dive into JavaScript fundamentals.

**Concepts:**

* var, let, const
* typeof
* NaN, Infinity
* Type conversion
* Classes and inheritance

**Outcome:** Build strong JS foundation.

---

## App11: Simple Calculator

Interactive arithmetic calculator.

**Concepts:**

* parseFloat
* Switch statement
* Event handling
* preventDefault
* DOM updates

**Outcome:** Handle user input dynamically.

---

## App12: Theme Switcher with Storage

Dark/light theme persistence.

**Concepts:**

* localStorage
* data-theme
* CSS variables
* Event listeners

**Outcome:** Save user preferences.

---

## App13: Modules & Async

Modern ES6 JavaScript features.

**Concepts:**

* import/export
* Default vs named exports
* Spread operator
* Destructuring
* Async/Await
* Promises

**Outcome:** Modular and asynchronous programming.

---

## App14: Random User Album

Fetches API data dynamically.

**Concepts:**

* Fetch API
* Async/Await
* JSON parsing
* Destructuring
* Bootstrap grid

**Outcome:** Integrate external APIs.

---

## App15: Todo Application

Full CRUD todo app.

**Concepts:**

* State management with arrays
* Event delegation
* Dynamic rendering
* Edit/Delete logic
* Conditional UI

**Outcome:** Build dynamic applications without frameworks.

---

## App16: DOM Manipulation

Dynamic element creation and removal.

**Concepts:**

* createElement
* appendChild
* remove
* classList
* Event listeners

**Outcome:** Manipulate DOM programmatically.

---

# Technology Stack

### HTML5

Semantic elements, forms, media, accessibility.

### CSS3

Flexbox, Grid, Variables, Theming.

### JavaScript (ES6+)

DOM API, Events, Arrays, Async/Await, Modules, Classes.

### External Tools

* Bootstrap
* RandomUser API

---

# Common Patterns Used

## Event Listener

```javascript
element.addEventListener("click", handler);
```

## DOM Update

```javascript
document.getElementById("id").textContent = value;
```

## Fetch API

```javascript
const response = await fetch(url);
const data = await response.json();
```

## LocalStorage

```javascript
localStorage.setItem("theme", "dark");
```

---

# Development Setup

1. Open project folder.
2. Use Live Server (recommended).
3. Open index.html.
4. Use DevTools for debugging (F12).

---

# Learning Outcomes

After completing all apps, you will understand:

* HTML document structure
* Semantic elements
* CSS layout systems (Grid & Flexbox)
* Form handling
* JavaScript fundamentals
* DOM manipulation
* Async programming
* API integration
* State management
* Modular architecture

---

# Best Practices Demonstrated

* Semantic HTML
* Clean CSS separation
* Event delegation
* Re-rendering from state
* LocalStorage persistence
* Modular JavaScript
* Async/Await over callback chaining
* Accessibility considerations

---

# Recommended Next Steps

* Add animations with CSS transitions
* Build REST API backend
* Convert Todo app to modular architecture
* Use real APIs instead of mock data
* Deploy apps to GitHub Pages
* Explore React or other frameworks

---

# Author

Mayukh Haldar

---

# License

MIT

---

Frontend development is best learned by building.
These 16 apps provide a progressive path from structure to full interactive applications.
