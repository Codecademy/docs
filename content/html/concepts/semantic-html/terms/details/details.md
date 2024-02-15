---
Title: '<details>'
Description: 'Encapsulates the <summary> element and any additional details which are only visible when the element is in an open state.'
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

The `<details>` semantic HTML element encapsulates the `<summary>` element and any additional elements that are only visible when the `<details>` element is in an open state.

There is a small triangle which shows the state of the element. By clicking on the element or using the <kbd>space</kbd> bar, the state can be toggled between revealing and hiding additional information.

## Syntax

The `<details>` element can be in two states, closed and open:

- When in the closed state, only the content in the `<summary>` element is visible.
- However, when the `<details>` element is toggled into an open state, the `<summary>` and any additional content inside the `<details>` element are visible.

The `<details>` element must contain a `<summary>` element which will provide a label for the hidden additional details.

```html
<details>
  <summary>Summary Text Here</summary>
  <!-- Extra content here -->
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
      <summary>Course Prerequisites</summary>
      <p>This is where the additional information goes.</p>
      <!-- This can also include any other content -->
    </details>
  </body>
</html>
```

![Output of the details tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-details-tag-example.png)
