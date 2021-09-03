---
Title: '<details>'
Description: 'Encapsulated the <summary> element and any additional details which are only visible when the element is in an open state.'
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

The `<details>` semantic HTML element encapsulated the <summary> element and any additional elements which are only visible when the element is in an open state.
There is a small triangle which shows the state of the element and by clicking on the element or using the space bar you can toggle between revealing and hiding additional information.

## Syntax

The `<details>` element can be in 2 states, open and closed. When in the closed state, only the content in the `<summary>` element is visible.
However when the `<details>` element is toggled into an open state, the `<summary>` and any additional content inside the `<details>` element are visible.

```html
<details>
  <!-- summary element and extra content go here -->
</details>
```

## Example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <!-- The details element -->
    <details>
      <summary>Summary goes here</summary>
      <p>This is where the additional information goes.</p>
      <!-- This can also include any other content --->
    </details>
  </body>
</html>
```
