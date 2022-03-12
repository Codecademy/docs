---
Title: 'Comments'
Description: 'An HTML comment is markup that is included in the HTML source, but does not affect the rendering of the HTML document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Comments'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

An HTML comment is markup that is included in the HTML source, but does not affect the rendering of the HTML document. They are used for documenting the HTML code and for "commenting out" HTML that the developer doesn't want to render, but does not desire to delete, generally for historical or debugging purposes.

## Syntax

```html
<!-- comment goes here -->
```

An HTML comment can contain any other HTML markup between the opening `<!--` and the closing `-->` except for another comment. Attempting to nest HTML comments will result in a parsing error.

Also, an HTML comment can be placed anywhere inside another HTML element except inside the tags themselves. In other words they can't be placed between the opening `<` and closing `>` of a another tag.

```html
<p>Some text that <!-- This is a legal comment --> gets displayed</p>

<p <!-- This is an illegal comment -->>Some more text.</p>

<!-- Outer <!-- Illegal inner comment --> Comment -->
```

## Example

```html
<p>This will display.</p>
<!--
  <p>This will not</p>
-->
```
