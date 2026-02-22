# App15: Todo Application

## Overview

A fully functional Todo Application built using **HTML, CSS, and Vanilla JavaScript**.

This app allows users to:

* Add new todos
* Edit existing todos
* Delete todos
* Cancel editing mode
* Dynamically update the UI

It demonstrates form handling, dynamic DOM manipulation, event delegation, state management, and basic CRUD operations — all without any frameworks.

---

## Purpose

Learn and practice:

* Form submission handling
* Preventing default browser behavior
* DOM manipulation
* Dynamic table rendering
* Array state management
* Edit and delete functionality
* Event delegation
* Conditional UI updates
* Clean UI design using CSS

---

# Features

### Add Todo

* User enters title and description
* Clicks **Add Todo**
* Todo appears in the table

### Edit Todo

* Click **Edit**
* Fields auto-fill
* Button changes to **Update Todo**
* Cancel option appears

### Delete Todo

* Click **Delete**
* Todo removed immediately

### Cancel Edit

* Resets form
* Restores Add mode
* Hides Cancel button

---

# Application Structure

```
app15/
│
├── index.html   # UI structure + JavaScript
├── style.css    # Styling
└── README.md
```

---

# HTML Structure

## Form Section

```html
<form id="todoForm">
  <input type="text" id="title" required />
  <textarea id="description" required></textarea>
  <button type="submit">Add Todo</button>
  <button type="button" id="cancelBtn">Cancel</button>
</form>
```

### Accessibility Used

* `aria-labelledby`
* Proper `label` associations
* Semantic structure (`section`, `article`, `table`)

---

## Todo Table

```html
<table>
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody id="todoTable"></tbody>
</table>
```

Dynamic rows are injected via JavaScript.

---

# JavaScript Logic

## State Variables

```javascript
let todos = [];
let editIndex = null;
```

* `todos` → stores all todo objects
* `editIndex` → tracks which item is being edited

---

## Adding or Updating Todo

```javascript
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title || !description) return;

  if (editIndex === null) {
    todos.push({ title, description });
  } else {
    todos[editIndex] = { title, description };
    editIndex = null;
    resetEditMode();
  }

  form.reset();
  renderTodos();
});
```

### Key Concepts:

* `preventDefault()` stops page refresh
* Trim input to remove spaces
* Conditional logic for add vs edit
* Re-render table after changes

---

## Rendering Todos

```javascript
function renderTodos() {
  table.innerHTML = "";

  todos.forEach((todo, index) => {
    const row = table.insertRow();
    row.insertCell(0).innerText = todo.title;
    row.insertCell(1).innerText = todo.description;

    const actionCell = row.insertCell(2);
    actionCell.innerHTML = `
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
  });
}
```

### Why Re-render?

Instead of modifying individual rows, we:

1. Clear the table
2. Rebuild everything from `todos` array

This keeps UI consistent with state.

---

## Event Delegation for Edit & Delete

```javascript
table.addEventListener("click", function (e) {
  const index = e.target.dataset.index;

  if (e.target.classList.contains("delete-btn")) {
    todos.splice(index, 1);
    renderTodos();
  }

  if (e.target.classList.contains("edit-btn")) {
    titleInput.value = todos[index].title;
    descriptionInput.value = todos[index].description;

    editIndex = index;
    submitBtn.innerText = "Update Todo";
    cancelBtn.style.display = "inline-block";
  }
});
```

### Why Event Delegation?

Instead of adding listeners to each button:

* One listener on `<tbody>`
* Detect which button was clicked
* Improves performance and simplicity

---

## Reset Edit Mode

```javascript
function resetEditMode() {
  editIndex = null;
  form.reset();
  submitBtn.innerText = "Add Todo";
  cancelBtn.style.display = "none";
}
```

Restores default add state.

---

# CSS Styling Highlights

### Layout

* Centered container
* Card-style section
* Clean typography

### Buttons

* Green → Add
* Yellow → Edit
* Red → Delete

### Table

* Full width
* Styled header
* Clean borders

---

# Application Flow

```
User enters data
      ↓
Clicks Add Todo
      ↓
Data stored in array
      ↓
Table re-rendered
      ↓
User can Edit or Delete
      ↓
State updates
      ↓
UI updates automatically
```

---

# Concepts Demonstrated

* CRUD operations (Create, Read, Update, Delete)
* Event handling
* State management using arrays
* DOM creation & manipulation
* Template literals
* Conditional rendering
* UI state control
* Event delegation
* Clean CSS layout

---

# How to Run

1. Open folder in VS Code
2. Use Live Server
3. Open `index.html`
4. Start adding todos

---

# Improvements You Can Add

## Easy

* Add due date field
* Add checkbox for completed
* Add input validation message

## Medium

* Store todos in `localStorage`
* Add search functionality
* Add sorting (by title)

## Hard

* Add drag and drop
* Add filters (All, Completed, Pending)
* Add dark mode
* Convert to modular JS
* Add animations

---

# Possible Enhancements (localStorage example)

```javascript
localStorage.setItem("todos", JSON.stringify(todos));
```

```javascript
const storedTodos = JSON.parse(localStorage.getItem("todos"));
```

---

# Common Mistakes to Avoid

❌ Forgetting `preventDefault()`
❌ Not clearing table before re-render
❌ Not resetting editIndex
❌ Directly modifying DOM without updating state
❌ Not trimming input

---

# Learning Outcomes

After completing this app, you will understand:

* How to build a dynamic web application
* Managing application state
* Implementing edit and delete logic
* Handling user input safely
* Updating UI based on state changes
* Clean separation of structure and styling

---

# Key Takeaways

✓ Always manage state separately from UI
✓ Re-render from state for consistency
✓ Use event delegation for dynamic elements
✓ Reset UI properly after editing
✓ Keep logic simple and readable

---

## Author

Mayukh Haldar

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App14](../app14/README.md)** | **[Next: App16 →](../app16/README.md)**
