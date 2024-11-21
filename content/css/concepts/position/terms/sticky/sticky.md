---
Title: 'Sticky'
Description: 'Defines an element that toggles between relative and fixed positions depending on the scroll position.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS '
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Sticky** Position in CSS allows an element to toggle between relative and fixed positioning based on the person's scroll position. It commonly keeps certain elements, such as headers or navigation menus, in view when scrolling through content.

## Syntax

```pseudo
position: sticky;
```

- The `position: sticky` property is often used with length or percentage values applied to `top`,`right`, `bottom`, or `left` to define the threshold for switching between relative and fixed positioning.

> **Note:** To ensure `position: sticky` works, the containing block must have a defined height, and the sticky element should not be covered by other positioned elements.

## Example

Make the `.header` element sticky so it remains visible at the top when scrolling past it.

```css
.header {
  position: sticky;
  top: 0; /* Sticks to the top */
  background-color: white;
  padding: 10px;
  z-index: 1000; /* Ensure it's above other content */
}
```

![The GIF illustrates how the header element remains sticky at the top of the viewport during scrolling.](https://raw.githubusercontent.com/Codecademy/docs/main/media/sticky-header-example.gif)
