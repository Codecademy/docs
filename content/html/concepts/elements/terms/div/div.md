---
Title: '<div>'
Description: 'Represents a generic division of content. It has no semantic meaning, but will separate its contents from the rest of the document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<div>`** element represents a generic division of content. It has no semantic meaning, but will separate its contents from the rest of the document.

## Syntax

```html
<div>
  <!-- Content lives here -->
</div>
```

The `<div>` tags that wraps around a block of HTML. By default it is a block element, meaning its contents will start on a new line and the content that follows will start on a new line.

## Example

A `<div>` is a good choice when no other tag matches the content type. Additionally it is often used to help style an entire page, or sections of a page via the `class` or `id` attribute.

```html
<html>
  <head> </head>
  <body>
    <!-- This div wraps the entire site applying the styles from the dark-mode class -->
    <div class="dark-mode">
      <!-- Site content lives here -->
    </div>
  </body>
</html>
```
