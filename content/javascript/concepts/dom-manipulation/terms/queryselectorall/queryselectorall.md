---
Title: '.querySelectorAll()'
Description: 'Returns a static (non-live) NodeList of all elements in the document that match the specified CSS selectors.'

Subjects:
  - 'Code Foundations'
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Methods'
  - 'Node'
  - 'Selectors'
CatalogContent:
  - 'introduction-to-javascript'
  - 'paths/front-end-engineer-career-path'
---

# Document: querySelectorAll() method

The document method **`querySelectorAll()`** returns a static (not live) `NodeList` of all elements that match the specified group of selectors.

## Syntax

```pseudo
querySelectorAll(selectors);
```
- **`selectors`**:
This is a string representing one or more CSS selectors used to identify the elements you want to select from the document. You can use any valid CSS selector, including element selectors (e.g., `div`, `p`), class selectors (e.g., `.class-name`), id selectors (e.g., `#id-name`), and complex selectors (e.g., `div > p.class-name`). If multiple selectors are provided, they should be separated by commas (e.g., `'.class-name, #id-name'`).

## Example

In this example, a `NodeList` of all `<p>` elements in the document is obtained:

```js
const matches = document.querySelectorAll("p");
```

This example returns a list of all `<div>` elements in the document with a class of either `note` or `alert`:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Here, we get a list of < p > elements whose immediate parent element is a < div > with the class highlighted and which are located inside a container whose ID is test.

```js
const container = document. querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```


## Codebyte Example (if applicable)

We can currently support:

- JavaScript

We need to use different libraries or tools to parse and manipulate HTML content in ways similar to JavaScript's **.querySelectorAll()**:
- Python
- Ruby
- C++
- C#
- Go
- PHP

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>querySelectorAll Example</title>
</head>
<body>
  <p>This is paragraph 1.</p>
  <p>This is paragraph 2.</p>
  <p>This is paragraph 3.</p>

  <script>
    // Select all <p> elements on the page
    const paragraphs = document.querySelectorAll('p');

    // Loop through each <p> element and add some extra text
    paragraphs.forEach((para, index) => {
      para.textContent += ` - Updated by querySelectorAll (${index + 1})`;
    });
  </script>
</body>
</html>

```
