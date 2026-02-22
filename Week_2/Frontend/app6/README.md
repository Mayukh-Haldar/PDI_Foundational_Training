# App6: Theme Switcher Contact Form

## Overview

An enhanced contact form with dark and light theme switching using CSS variables and a `data-theme` attribute on the `<html>` element. Demonstrates dynamic theming with JavaScript and clean separation of structure (HTML), styling (CSS), and behavior (JS).

## Purpose

Learn and practice:

* Theme switching using `data-*` attributes
* CSS variables for reusable theme colors
* Attribute selectors like `[data-theme="dark"]`
* DOM access and event listeners in JavaScript
* Building on a multi input contact form (similar to App5)
* Smooth visual transitions using CSS

---

## Key Features

### Theme Toggle Button

```html
<header>
    <h1>A Simple Contact Form</h1>
    <button id="theme-toggle">Toggle Theme</button>
</header>
```

* Button triggers theme changes
* Uses `id="theme-toggle"` for JavaScript selection

---

### Data Attribute on HTML

```html
<html lang="en" data-theme="dark">
```

* Theme is stored as `data-theme`
* CSS reads this to decide which colors to apply
* JavaScript updates it dynamically

---

## Theme Implementation

### JavaScript Logic Used in This App

```javascript
const toggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

toggleBtn.addEventListener("click", function () {
    htmlElement.dataset.theme =
        htmlElement.dataset.theme === "dark" ? "light" : "dark";
});
```

### What This Does

* Finds the button and the `<html>` element
* On click, it switches:

  * `dark → light`
  * `light → dark`

---

## CSS Theming System

### CSS Variables

```css
:root {
    --bg-color: #BDF271;
    --text-color: #00261C;
    --accent-color: #2E7D32;
}
```

These variables represent:

* `--bg-color` for background
* `--text-color` for text
* `--accent-color` for buttons

---

### Dark Theme Override

```css
[data-theme="dark"] {
    --bg-color: #00261C;
    --text-color: #BDF271;
    --accent-color: #2E7D32;
}
```

When `data-theme="dark"` is active, the variables change automatically.

---

### Applying Variables to the Page

```css
body {
    font-family: 'Roboto';
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease;
}
```

* Uses the theme variables
* Adds a transition for smoother switching

---

## Form Elements Included

This app contains a contact form that includes:

* Full Name (text input)
* Email (email input)
* Phone Number (tel input + pattern validation)
* Age (number input with min and max)
* City (select dropdown)
* State (datalist suggestions)
* Gender (radio buttons with ARIA roles)
* Profile Picture (file upload)
* Submit and Reset buttons

---

## Button Styling

```css
button {
    background-color: var(--accent-color);
    color: var(--text-color);
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
}
```

### Hover Effect

```css
button:hover {
    cursor: pointer;
    background-color: var(--text-color);
    color: var(--accent-color);
}
```

---

## Centering the Form Section

```css
#contact-info {
    width: max-content;
    margin: 0 auto;
}
```

This centers the entire fieldset horizontally.

---

## CSS Attribute Selectors

Examples used in this app:

```css
[data-theme="dark"] { }
:root { }
```

Other useful patterns:

```css
html[data-theme="light"] { }
[data-theme] { }
[data-theme^="d"] { }
```

---

## Accessibility Considerations

✓ Labels are linked to inputs using `for` and `id`
✓ Gender radio buttons are grouped with `role="radiogroup"` and `aria-labelledby`
✓ Contrast is handled using variable switching
✓ Toggle button is keyboard accessible by default

---

## File Structure

```text
app6/
├── index.html          # Contact form with theme toggle
├── style.css           # Theme variables and UI styling
└── README.md
```

---

## How to View

1. Open `index.html` in a browser
2. Click **Toggle Theme**
3. Observe background and text color changes
4. Hover over buttons to see hover styling
5. Test the form fields (phone pattern, dropdown, file upload)

---

## Common Issues

| Issue                | Cause                       | Fix                                           |
| -------------------- | --------------------------- | --------------------------------------------- |
| Theme doesn’t change | JS not running              | Check script tag placement and console errors |
| Colors not updating  | CSS selector mismatch       | Ensure `[data-theme="dark"]` exists in CSS    |
| Font not loading     | Google Fonts blocked        | Check internet connection or remove import    |
| Form not centered    | `#contact-info` not applied | Ensure the section has `id="contact-info"`    |

---

## Learning Outcomes

After reviewing this app, you will understand:

* How `data-theme` can control UI themes
* How CSS variables make theme changes easy
* How to switch themes using JavaScript
* How attribute selectors work in CSS
* How to structure a form with multiple input types

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App5](../app5/README.md)** | **[Next: App7 →](../app7/README.md)**
