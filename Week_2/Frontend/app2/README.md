# App2: Tourist Attractions of Kolkata

## Overview

An informational website about tourist attractions in Kolkata, India. Demonstrates semantic HTML structure with proper use of header, navigation, sections, aside, main content, and footer.

## Purpose

Learn and practice:

* Semantic HTML structure using `<header>`, `<nav>`, `<section>`, `<main>`, `<aside>`, `<footer>`
* Internal page navigation using anchor links
* Content organization and hierarchy
* Professional page layout
* Clean and meaningful HTML structure

---

## Key Concepts

### Semantic HTML Structure

Proper page structure using semantic elements:

```html
<header>
    <h1>Page Title</h1>
</header>

<nav>
    <ul>
        <li><a href="#section-id">Link</a></li>
    </ul>
</nav>

<main>
    <section id="section-id">
        <h2>Section Title</h2>
        <p>Content</p>
    </section>

    <aside>
        <p>Additional information</p>
    </aside>
</main>

<footer>
    Copyright information
</footer>
```

---

## Page Content

### Title

```
Tourist Attractions of Kolkata
```

### Featured Attractions

1. **Victoria Memorial** – Historical white marble monument
2. **Howrah Bridge** – Iconic bridge over the Hooghly River
3. **Dakshineswar Temple** – Famous temple dedicated to Goddess Kali
4. **Alipore Zoo** – One of the oldest zoos in India

---

## HTML Elements Used

| Element        | Purpose         | Usage                       |
| -------------- | --------------- | --------------------------- |
| `<header>`     | Page header     | Contains main title         |
| `<nav>`        | Navigation      | Internal anchor links       |
| `<main>`       | Main content    | Core content area           |
| `<section>`    | Content section | Groups each attraction      |
| `<aside>`      | Sidebar         | Additional information      |
| `<h1>`, `<h2>` | Headings        | Titles and section headings |
| `<p>`          | Paragraph       | Description text            |
| `<ul>`, `<li>` | List            | Navigation links            |
| `<a>`          | Anchor          | Internal page navigation    |
| `<footer>`     | Footer          | Copyright information       |

---

## Information Hierarchy

```
Header
├── Page Title: "Tourist Attractions of Kolkata"

Navigation
├── Victoria Memorial
├── Howrah Bridge
├── Dakshineswar Temple
└── Alipore Zoo

Main
├── Section: Victoria Memorial
├── Section: Howrah Bridge
├── Section: Dakshineswar Temple
├── Section: Alipore Zoo
└── Aside: City note

Footer
└── Copyright Mayukh Haldar
```

---

## Navigation System

### Internal Anchor Links

```html
<li><a href="#victoria">Victoria Memorial</a></li>
```

Each link connects to a section with matching `id`:

```html
<section id="victoria">
```

This creates smooth internal navigation within the same page.

---

## Semantic Elements Explained

### `<header>`

* Contains introductory content
* Includes the main page title

### `<nav>`

* Contains navigation links
* Helps users jump to different sections

### `<main>`

* Contains primary content
* Only one per page

### `<section>`

* Groups related content
* Each has its own heading
* Improves document structure

### `<aside>`

* Contains supplementary information
* Not primary content
* Useful for notes or related info

### `<footer>`

* Appears at the end of the page
* Contains copyright or contact info

---

## Accessibility Features

✓ Proper heading hierarchy
✓ Semantic HTML structure
✓ Internal navigation with anchor links
✓ Clear content grouping
✓ Meaningful element usage
✓ Language attribute (`lang="en"`)
✓ Character encoding (`UTF-8`)
✓ Responsive viewport meta tag

---

## Best Practices Applied

1. Semantic Structure – Meaningful HTML tags
2. Clear Navigation – Anchor links with section IDs
3. Logical Content Flow – Header → Nav → Main → Footer
4. Organized Sections – Each attraction grouped separately
5. Supplementary Content – Aside element for extra info
6. Responsive Setup – Viewport meta tag

---

## Page Outline

```
H1: Tourist Attractions of Kolkata
    H2: Victoria Memorial
    H2: Howrah Bridge
    H2: Dakshineswar Temple
    H2: Alipore Zoo
```

---

## Learning Outcomes

After reviewing this app, you will understand:

* How to structure a semantic HTML page
* How internal anchor navigation works
* Proper heading hierarchy
* Use of aside for supplementary content
* Clean content organization
* Layout structure fundamentals

---

## How to View

1. Open `index.html` in a browser
2. Click navigation links
3. Observe how the page scrolls to each section
4. Open DevTools (F12)
5. Inspect semantic elements

---

## Practice Exercises

### Add Enhancements

1. Add images inside each section
2. Add `<article>` inside sections
3. Add external links to official websites
4. Add a "Best Time to Visit" section
5. Style with CSS

### Difficulty Levels

**Easy**: Add more attractions
**Medium**: Add images and descriptions
**Hard**: Add CSS styling and responsive design

---

## File Structure

```
app2/
├── index.html
└── README.md
```

---

## Technologies Used

* HTML5
* Semantic HTML elements
* Internal navigation
* Structured layout

---

## Browser Support

All modern browsers fully support:

* Semantic elements
* Anchor navigation
* HTML5 structure

---

## Reference Guide

### Semantic Elements

| Element     | Purpose          |
| ----------- | ---------------- |
| `<header>`  | Page header      |
| `<nav>`     | Navigation       |
| `<main>`    | Main content     |
| `<section>` | Thematic section |
| `<aside>`   | Sidebar content  |
| `<footer>`  | Page footer      |

---

## Common Questions

**Q: Why use `<aside>` here?**
A: To display supplementary information about Kolkata.

**Q: Why use IDs in sections?**
A: To enable internal navigation using anchor links.

**Q: Can `<nav>` be inside `<header>`?**
A: Yes, it is commonly placed inside `<header>`.

---

## Key Takeaways

✓ Semantic HTML improves accessibility
✓ Navigation enhances user experience
✓ Proper structure improves readability
✓ Anchor links allow smooth internal navigation
✓ Organized content improves maintainability

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App1](../app1/README.md)** | **[Next: App3 →](../app3/README.md)**
