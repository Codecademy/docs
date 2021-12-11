---
Title: 'Elements'
Description: 'An HTML element is a piece of content in an HTML document and uses the following syntax: html  content   The HTML element is everything from the opening tag to the closing tag: html Hello World!'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Attributes'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

An HTML element is a piece of content in an HTML document and uses the following syntax:

```html
<opening tag> content <closing tag></closing></opening>
```

The HTML element is everything from the opening tag to the closing tag:

```html
<p>Hello World!</p>
```

- `<p>` is the opening tag.
- `Hello World!` is the content.
- `</p>` is the closing tag.

**Note:** Some HTML elements have no content (like the `<br>` element). These elements are called empty elements. Empty elements do not have a closing tag, so they are referred to as self-closing. Also, self-closing tags such as `<br>` can have a slash at the end like this `<br />` but it is not required and will render the same.

## Nested HTML Elements

HTML elements can be nested, which means that elements can contain other elements inside them, or nested. All HTML documents consist of nested HTML elements.

The following example contains four HTML elements: `<html>`, `<body>`, `<h1>`, and `<p>`:

```html
<!DOCTYPE >
<html>
  <body>
    <h1>Blog Post</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

## HTML Structure

HTML is organized into a family tree structure. HTML elements can have parents, grandparents, siblings, children, grandchildren, etc.

```html
<body>
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
  </div>
</body>
```

So here are the relationships for `<h1>`:

- `<h1>` is the child of `<div>`
- `<div>` is the parent of the `<h1>`
- `<h1>` is the grandchild of `<body>`
- `<body>` is the grandparent of the `<h1>`
- `<h1>` is the sibling of `<h2>`
