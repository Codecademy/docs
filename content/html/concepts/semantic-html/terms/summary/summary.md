---
Title: '<summary>'
Description: 'Used as a label for the <details> element and when clicked reveals additional information.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<summary>` semantic HTML element is used as a label for the `<details>` element which is visible no matter what state the `<details>` element is in.

## Syntax

The `<summary>` element includes the summary or caption of the rest of the `<details>` element. The content is always seen whether the `<details>` element is in an open or closed state.

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
