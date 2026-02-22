# App3: Resume / Portfolio

## Overview

A professional resume webpage showcasing profile image, contact information, social media links, work experience, and education details. Demonstrates structured HTML layout using semantic elements, tables, multiple link types, and section organization.

## Purpose

Learn and practice:

* Image insertion and sizing
* Creating hyperlinks (email, phone, external links)
* Building structured HTML tables
* Resume page organization
* Contact information formatting
* Social media integration
* Semantic HTML usage

---

## Key Features

### Profile Image

```html
<img src="Profile.png" 
     alt="Profile Image of Mayukh Haldar" 
     width="300" 
     height="380">
```

* Displays profile image
* Includes descriptive alt text
* Fixed width and height

---

### Contact Links

```html
<!-- Email link -->
<a href="mailto:mayukhhaldar1@gmail.com">
    mayukhhaldar1@gmail.com
</a>

<!-- Phone link -->
<a href="tel:+91-9432182153">
    +91-9432182153
</a>

<!-- External links -->
<a href="https://www.linkedin.com/in/mayukh-haldar/">
    LinkedIn
</a>
```

---

### Education Table

```html
<table border="2">
    <thead>
        <th>Degree</th>
        <th>University</th>
        <th>Subject</th>
    </thead>
    <tbody>
        <tr>
            <td>B.Tech</td>
            <td>MAKAUT</td>
            <td>CSE</td>
        </tr>
    </tbody>
</table>
```

---

## Resume Sections

### Header – Profile Section

* Profile image
* Name: Mayukh Haldar
* Email and phone links
* Location: Kolkata, West Bengal

---

### Social Links

* LinkedIn Profile
* GitHub Profile

Located inside a `<nav>` element.

---

### Professional Experience

#### PDI CMS Intern

**Deloitte India – Jan 2026 – Present**

* PDI Training
* Capstone Project

#### Data Science and Machine Learning Intern

**Webel – Aug 2024 – Oct 2024**

* RAG Project
* Proshno Sathi

---

### Educational Summary

Structured table showing:

* B.Tech – MAKAUT – CSE
* AISSCE – CBSE – Science

---

## HTML Elements Used

| Element                | Purpose                         |
| ---------------------- | ------------------------------- |
| `<header>`             | Profile image section           |
| `<section>`            | Content grouping                |
| `<article>`            | Contact details container       |
| `<nav>`                | Social links                    |
| `<img>`                | Profile image                   |
| `<a>`                  | Hyperlinks                      |
| `<ul>`, `<li>`         | Responsibilities list           |
| `<table>`              | Education details               |
| `<thead>`              | Table header                    |
| `<tbody>`              | Table body                      |
| `<hr>`                 | Section divider                 |
| `<h1>`, `<h2>`, `<h3>` | Headings                        |
| `<strong>`             | Emphasis for company & duration |

---

## Advanced Link Types

### Email Link

```html
<a href="mailto:mayukhhaldar1@gmail.com">
```

* Opens default mail client
* Can include subject:

  ```
  mailto:email@example.com?subject=Resume Inquiry
  ```

---

### Phone Link

```html
<a href="tel:+91-9432182153">
```

* Opens dialer on mobile
* Uses international format with country code

---

### External Link

```html
<a href="https://github.com/Mayukh-Haldar">
```

For better security:

```html
<a href="https://github.com/Mayukh-Haldar"
   target="_blank"
   rel="noopener noreferrer">
```

---

## Resume Layout Structure

```
┌─────────────────────────┐
│      PROFILE IMAGE      │
└─────────────────────────┘

┌─────────────────────────┐
│  NAME & CONTACT INFO    │
└─────────────────────────┘

┌─────────────────────────┐
│  SOCIAL LINKS           │
└─────────────────────────┘

┌─────────────────────────┐
│  EXPERIENCE             │
└─────────────────────────┘

┌─────────────────────────┐
│  EDUCATION (TABLE)      │
└─────────────────────────┘
```

---

## Table Structure

```
┌────────┬──────────┬────────┐
│ Degree │ University │ Subject │
├────────┼──────────┼────────┤
│ B.Tech │ MAKAUT   │ CSE    │
├────────┼──────────┼────────┤
│ AISSCE │ CBSE     │ Science│
└────────┴──────────┴────────┘
```

---

## Accessibility Features

✓ Descriptive alt text
✓ Proper table structure
✓ Clear heading hierarchy
✓ Semantic HTML usage
✓ Contact links with correct formats
✓ Language attribute (`lang="en"`)

---

## Best Practices Applied

1. Semantic HTML structure
2. Clear resume organization
3. Proper link formatting
4. Table for structured data
5. Strong emphasis for company & duration
6. Image alt text for accessibility
7. Logical content separation

---

## Learning Outcomes

After reviewing this app, you will understand:

* How to insert and size images
* How email and phone links work
* How to structure resume sections
* How to create and organize tables
* Professional resume layout structure
* Contact information formatting
* Social media integration

---

## How to View

1. Open `index.html` in browser
2. Click email link
3. Click phone link (works best on mobile)
4. Inspect table structure (F12)
5. Check image display

---

## Practice Exercises

### Easy

* Add Skills section
* Add Projects section
* Update contact details

### Medium

* Add Certifications
* Add Languages section
* Add multiple experience entries

### Hard

* Add CSS styling
* Make layout responsive
* Add downloadable PDF button
* Add print-friendly design

---

## File Structure

```
app3/
├── index.html
├── Profile.png
└── README.md
```

---

## Technologies Used

* HTML5
* Semantic elements
* Tables
* Hyperlinks
* Images

---

## Browser Support

All modern browsers fully support:

* Email and phone links
* Images and sizing
* HTML tables
* Semantic elements

---

## Next Steps

1. Add CSS styling
2. Make resume responsive
3. Add more professional sections
4. Deploy online
5. Convert to PDF format

---

## Key Takeaways

✓ Resume structure matters for readability
✓ Proper link types improve user experience
✓ Tables organize education effectively
✓ Semantic HTML improves accessibility
✓ Contact methods should be prominent
✓ Clean layout enhances professionalism

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App2](../app2/README.md)** | **[Next: App4 →](../app4/README.md)**
