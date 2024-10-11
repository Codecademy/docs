---
Title: 'sticky'
Description: 'Defines an element that toggles between relative and fixed position, depending on the scroll.'
Subjects:
  - 'Web Development'
  - 'CSS'
Tags:
  - 'Positioning'
  - 'Sticky'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Sticky Position** in CSS allows an element to toggle between relative and fixed positioning based on the user's scroll position. It's commonly used to keep certain elements, such as headers or navigation menus, in view when scrolling through content.

## Syntax

```css
.element {
  position: sticky;
  top: <length> | <percentage>;
  /* You can also use bottom, left, or right */
}

```
where `<value>` and `<percentage>` can be one of the following:
*   **Length value**: `25px`  
    Specifies a fixed length, such as pixels or any other unit of measure (e.g., `em`, `rem`, `vh`).
    
*   **Percentage value**: `5%`  
    Defines a percentage of the containing block's size. For example, a percentage of the width or height of the nearest positioned ancestor.
    
**Note:**  
The `position: sticky` property allows an element to switch between relative and fixed positioning based on the scroll position. It remains in its normal flow until a defined threshold (like `top` or `bottom`) is reached. For it to work, the containing block must have a defined height, and the sticky element should not be obscured by other positioned elements.

## Example 1

Make the `.header` element sticky, so it remains visible at the top when scrolling past it.

```css
.header {
  position: sticky;
  top: 0; /* Sticks to the top */
  background-color: white;
  padding: 10px;
  z-index: 1000; /* Ensure it's above other content */
}
```

![Animation with reverse animation-direction](https://raw.githubusercontent.com/Codecademy/docs/main/media/StickyHeaderExample.gif)
