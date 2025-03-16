---
Title: '.innerHTML'
Description: 'Sets or fetches the HTML content inside an element in the DOM.'
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

The **`.innerHTML`** property in JavaScript is a fundamental DOM (Document Object Model) manipulation tool that allows setting or retrieving the HTML content inside an element. It allows developers to dynamically modify a webpage's content by reading or writing HTML markup as a string. When setting `.innerHTML`, the browser parses the provided string as HTML and updates the DOM accordingly. This property is particularly useful for inserting multiple elements or complex HTML structures at once.

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
- The provided HTML string is parsed and valid HTML tags are converted to DOM elements.
- Be cautious with user-provided content as `.innerHTML` can execute scripts, making it vulnerable to XSS (Cross-Site Scripting) attacks.
- For plain text content, consider using `.textContent` for better security and performance.
- If an element contains event handlers, replacing `.innerHTML` will remove them. Consider `.appendChild()` for better control.

## Example

Here's how to use `.innerHTML` to modify content in a `<div>`:

```js
// Select the <div> element with the id 'container'
const container = document.getElementById('container');

// Set new HTML content
container.innerHTML = '<p>This paragraph was added using innerHTML!</p>';

// Get the current HTML content
console.log(container.innerHTML); // "<p>This paragraph was added using innerHTML!</p>"

// Replace with more complex HTML
container.innerHTML = `
  <h2>Dynamic Content</h2>
  <p>First paragraph</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
`;
```

The above code produces the following output:

```shell
"<p>This paragraph was added using innerHTML!</p>"
```

After execution, the `<div>` will contain:

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
