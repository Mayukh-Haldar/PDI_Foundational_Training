# App5: Contact Form

## Overview

A comprehensive HTML contact form with multiple input types and basic CSS styling. Demonstrates form creation, built-in HTML validation, grouping fields using fieldset and legend, accessibility improvements using labels and ARIA roles, and file upload configuration.

## Purpose

Learn and practice:

* Form creation and submission basics
* Common HTML input types
* Validation attributes (`required`, `pattern`, `min`, `max`)
* Grouping related fields using `<fieldset>` and `<legend>`
* Dropdowns using `<select>` and autocomplete using `<datalist>`
* Radio button groups with accessibility roles
* File uploads using `multipart/form-data`
* Styling with external CSS and Google Fonts import

---

## Form Structure

```html
<form action="" enctype="multipart/form-data">
    <fieldset>
        <legend>Contact Information</legend>
        <!-- Form fields -->
    </fieldset>
</form>
```

### Why `enctype="multipart/form-data"`?

It is required when your form includes file uploads (`<input type="file">`).

---

## Header Styling

The header uses inline CSS:

```html
<header style="color: brown; background-color: blue;">
    <h1>A Simple Contact Form</h1>
</header>
```

---

## Form Fields

### 1. Full Name

```html
<label for="fullname">Full Name:</label>
<input type="text"
       id="fullname"
       name="fullname"
       placeholder="John Doe"
       required>
```

* **Type**: text
* **Required**: Yes
* **Purpose**: Collects user's name

---

### 2. Email

```html
<label for="email">Email:</label>
<input type="email"
       id="email"
       name="email"
       placeholder="john.doe@example.com"
       required>
```

* **Type**: email (built-in email validation)
* **Required**: Yes

---

### 3. Phone Number (Pattern Validation)

```html
<label for="phone">Phone Number:</label>
<input type="tel"
       id="phone"
       name="phone"
       pattern="[0-9]{10}"
       placeholder="1234567890"
       required>
<small>Format: 1234567890 (10 digits)</small>
```

* **Type**: tel
* **Validation**: Exactly 10 digits using regex pattern
* **Required**: Yes

---

### 4. Age (Min/Max Validation)

```html
<label for="age">Age:</label>
<input type="number"
       id="age"
       name="age"
       min="1"
       max="120"
       required>
```

* **Type**: number
* **Min**: 1
* **Max**: 120
* **Required**: Yes

---

### 5. City (Dropdown)

```html
<label for="city">City:</label>
<select id="city" name="city" required>
    <option value="">--Please Choose a City--</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Bengaluru">Bengaluru</option>
    <option value="Mysuru">Mysuru</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Pune">Pune</option>
</select>
```

* **Type**: select dropdown
* **Required**: Yes
* **Default option**: Forces user to pick a valid city

---

### 6. State (Datalist Autocomplete)

```html
<label for="state">State:</label>
<input type="text"
       id="state"
       name="state"
       list="states"
       placeholder="Select or type state"
       required>

<datalist id="states">
    <option value="West Bengal">
    <option value="Karnataka">
    <option value="Andhra Pradesh">
    <option value="Telangana">
    <option value="Tamil Nadu">
</datalist>
```

* **Type**: text input with dropdown suggestions
* **Feature**: user can type or choose suggestion
* **Required**: Yes

---

### 7. Gender (Radio Buttons with ARIA)

```html
<div role="radiogroup" aria-labelledby="gender-label">
    <span id="gender-label">Gender:</span>

    <input role="radio" type="radio" id="male" name="gender" value="Male" checked>
    <label for="male">Male</label>

    <input role="radio" type="radio" id="female" name="gender" value="Female">
    <label for="female">Female</label>

    <input role="radio" type="radio" id="other" name="gender" value="Other">
    <label for="other">Other</label>
</div>
```

* **Type**: radio buttons
* **Grouping**: by `name="gender"`
* **Accessibility**: ARIA radiogroup + label association
* **Default selected**: Male

---

### 8. Profile Picture (File Upload)

```html
<label for="profile-pic">Profile Picture:</label>
<input type="file"
       id="profile-pic"
       name="profile-pic"
       accept="image/*"
       capture="environment">
```

* **Type**: file
* **Accept**: only images
* **Capture**: opens camera on mobile devices (environment/back camera preference)

---

### 9. Buttons

```html
<button type="submit">Send</button>
<button type="reset">Reset</button>
```

* **Send**: submits form (action is empty, so it won’t actually post anywhere yet)
* **Reset**: clears all fields

---

## Validation Used

| Validation                | Used On     | What it does              |
| ------------------------- | ----------- | ------------------------- |
| `required`                | Most fields | Prevents empty submission |
| `type="email"`            | Email       | Ensures email format      |
| `pattern="[0-9]{10}"`     | Phone       | Allows only 10 digits     |
| `min="1"` / `max="120"`   | Age         | Restricts age range       |
| Empty `<option value="">` | City        | Forces selection          |

---

## CSS Styling

### Current `style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

body {
    background-color: aquamarine;
    font-size: Roboto;
    font-family: monospace;
    color: blue
}
```

### Notes About the CSS

* Google Fonts Roboto is imported
* Body background is aquamarine
* Text color is blue
* Font family is set to monospace
* `font-size: Roboto;` is not a valid value for font-size (font-size should be like `16px`, `1rem`, etc.)

---

## HTML Elements Used

| Element      | Purpose                  |
| ------------ | ------------------------ |
| `<header>`   | Page heading             |
| `<main>`     | Main page content        |
| `<section>`  | Form container           |
| `<form>`     | Form input submission    |
| `<fieldset>` | Groups related fields    |
| `<legend>`   | Fieldset heading         |
| `<label>`    | Accessible field labels  |
| `<input>`    | User inputs              |
| `<select>`   | Dropdown selection       |
| `<datalist>` | Autocomplete suggestions |
| `<option>`   | Dropdown list values     |
| `<small>`    | Helper text              |
| `<button>`   | Submit and reset actions |
| `<footer>`   | Page footer              |

---

## Accessibility Features

✓ Labels linked to inputs using `for` + `id`
✓ Fieldset and legend provide context to screen readers
✓ ARIA role usage for radio group
✓ Helper text for phone number format
✓ Clear headings and sections

---

## File Structure

```
app5/
├── index.html
├── style.css
└── README.md
```

---

## How to View

1. Open `index.html` in a browser
2. Try submitting empty form to see required validations
3. Enter invalid email format to see browser email validation
4. Enter a phone number not matching 10 digits to test pattern validation
5. Upload an image using profile picture input
6. Click Reset to clear the form

---

## Practice Exercises

### Easy

1. Add more cities to the dropdown
2. Add a textarea for message
3. Add a checkbox for newsletter subscription

### Medium

4. Add another fieldset for “Preferences”
5. Add password input with minlength
6. Add CSS styling for inputs and buttons

### Hard

7. Add JavaScript validation and custom error messages
8. Save form data to localStorage
9. Submit form data to a backend API

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App4](../app4/README.md)** | **[Next: App6 →](../app6/README.md)**
