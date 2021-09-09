---
Title: '<summary>'
Description: 'Used as a label for the <details> element and reveals additional information when clicked.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
  - 'Accessibility'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<summary>` semantic HTML element is used as a label for the `<details>` element.Whether the `<details>` are in an "open" or "closed" state, the `<summary>` text is always visible.

## Syntax

The `<summary>` element includes the summary or caption of the rest of the `<details>` element. The content is always seen whether the `<details>` element is in an open or closed state. The `<summary>` element can only be used as a first child element of the `<details>` element.

```html
<details>
  <summary>Summary goes here</summary>
  <!-- additional content goes here which will be toggled -->
</details>
```

## Example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <details>
      <!-- The summary element -->
      <summary>Summary goes here</summary>
      <p>This is where the additional information goes.</p>
      <!-- This can also include any other content e.g images, text etc. --->
    </details>
  </body>
</html>
```
