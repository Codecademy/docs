---
Title: "transform-style"
Description: "Specifies if an elements children are positioned in 3D space or flattened."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Positioning"
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Specifies if an elements children are positioned in 3D space or flattened.

## Syntax

```css
transform-style: <value>; 
```

The `transform-style` property can have one of two values:

- `preserve-3d`: The children of an element will be positioned in 3D space.
- `flat`: The children of an element will not be positioned in 3D space. 
  
## Example 1

Preserving the 3D space of a `div` elements children elements.

```css
div {
  transform-style: center;  
}
```