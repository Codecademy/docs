---
Title: '.innerHTML'
Description: 'Sets or gets the HTML content inside an element in the JavaScript DOM.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'ES6'
  - 'Properties'
  - 'Strings'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

The **`.innerHTML`** property in JavaScript is a fundamental [DOM (Document Object Model) manipulation](https://www.codecademy.com/resources/docs/javascript/dom-manipulation) tool that allows setting or retrieving the HTML content inside an element. It allows developers to modify a webpage's content dynamically by reading or writing HTML markup as a string. When setting `innerHTML`, the browser parses the provided string as HTML and updates the DOM accordingly. This property is particularly useful for inserting multiple elements or complex HTML structures at once.

## Syntax

```pseudo
// Getting HTML content
const content = element.innerHTML;

// Setting HTML content
element.innerHTML = htmlString;
```

- `element`: The DOM element whose content is being accessed or modified.
- `htmlString`: A string containing HTML markup to be injected.
When reading `.innerHTML`, it returns the current HTML string inside the element.

### Notes

- Setting `.innerHTML` replaces all existing content within the element.
- The provided HTML string is parsed, and valid HTML tags are converted to DOM elements.
- Be cautious with user-provided content as `.innerHTML` can execute scripts, making it vulnerable to XSS (Cross-Site Scripting) attacks.
- For plain text content, consider using `.textContent` for better security and performance.
- If an element contains event handlers, replacing `.innerHTML` will remove them. Consider `appendChild` for better control.

## Example

Here's how to use `.innerHTML` to modify content in a `<div>`:

```js
// HTML: <div id="container"></div>

// Select the element
const container = document.getElementById('container');

// Set HTML content
container.innerHTML = '<p>This paragraph was added with innerHTML!</p>';

// Get HTML content
console.log(container.innerHTML); // "<p>This paragraph was added with innerHTML!</p>"

// Add more complex HTML
container.innerHTML = `
  <h2>Dynamic Content</h2>
  <p>First paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`;
```

```html
<div id="container">
  <h2>Dynamic Content</h2>
  <p>First paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

## Codebyte Example

Run this example to see `.innerHTML` in action:

```codebyte/js
// Create a parent div
const parentDiv = document.createElement("div");
document.body.appendChild(parentDiv);

// Set initial content
parentDiv.innerHTML = "<p>Initial content</p>";
console.log("Initial HTML:");
console.log(parentDiv.outerHTML);

// Update content with more complex HTML
parentDiv.innerHTML = `
  <h3>Updated Content</h3>
  <p>This content was set using innerHTML</p>
  <ul>
    <li>Easy to add</li>
    <li>Multiple elements</li>
    <li>At once!</li>
  </ul>
`;

console.log("\nUpdated HTML:");
console.log(parentDiv.outerHTML);
```
