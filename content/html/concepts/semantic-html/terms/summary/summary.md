---
Title: '<summary>'
Description: 'Acts as a label for the <details> element and reveals additional information when clicked.'
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

The `<summary>` semantic HTML element is used as a summary, label, or caption, for the `<details>` element.

Whether the `<details>` element is in an "open" or "closed" state, the `<summary>` text is always visible.

## Syntax

The `<summary>` element can only be used as a first child element of the `<details>` element.

```html
<details>
  <summary>Summary goes here</summary>
  <!-- Additional content goes here which will be toggled -->
</details>
```

## Example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <details>
      <summary>Course Prerequisites</summary>
      <p>
        To enroll in ECON 102, you must've passed ECON 101 in a previous
        semester.
      </p>
      <!-- This can also include any other content e.g., images and GIFs -->
    </details>
  </body>
</html>
```

![Output of the summary tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-summary-example.png)
