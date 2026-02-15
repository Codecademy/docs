---
Title: 'margin-inline-start'
Description: 'Defines the logical inline start margin of an element based on writing mode, direction, and text orientation.'
Subjects:
  - 'Code Foundations'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Box Model'
  - 'Margin'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`margin-inline-start`** CSS property sets the margin at the start side of an element along the inline axis. It maps to the physical margin corresponding to the inline start edge, depending on the element’s `writing-mode`, `direction`, and `text-orientation`. This property is useful for building layouts that automatically adapt to left-to-right (LTR), right-to-left (RTL), and vertical writing modes.

## Syntax

```pseudo
margin-inline-start: <length>;
margin-inline-start: <percentage>;
margin-inline-start: auto;
```

**Parameters:**

- `<length>`: A fixed margin value such as `px`, `em`, or `rem`.
- `<percentage>`: A value relative to the inline size of the containing block.
- `auto`: Lets the browser calculate the margin.
- `inherit`: Inherits the value from the parent element.
- `initial`: Sets the property to its default value (`0`).
- `revert`: Reverts the property to the value established by the user-agent or user styles.
- `revert-layer`: Reverts the property to the value defined in a previous cascade layer.
- `unset`: Acts as `inherit` if the property is inheritable; otherwise acts as `initial`.

**Return value:**

None. This property sets the inline-start margin of an element and contributes to the element's computed layout value.

## Example

In this example, `margin-inline-start` adds 10px of space at the beginning of the inline axis. In a left-to-right layout it appears on the left; in a right-to-left layout it appears on the right:

```css
.box {
  margin-inline-start: 10px;
  padding: 1em;
  border: 1px solid #333;
}
```

![Output of margin-inline-start](../media/margin-inline-start-output-image.png)
