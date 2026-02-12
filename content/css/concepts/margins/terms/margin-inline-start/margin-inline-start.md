Title: 'margin-inline-start'
Description: 'Defines the logical inline start margin of an element based on writing mode and direction.'
Subjects:
  - 'Code Foundations'
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'CSS'
  - 'Box Model'
  - 'Margin'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---


# `margin-inline-start`

The `margin-inline-start` CSS property sets the start margin along the inline axis of an element. 
It maps to a physical margin (`margin-left` or `margin-right`) depending on the element’s writing mode, direction, and text orientation. 
This property is useful for creating layouts that adapt to left-to-right and right-to-left languages. 

## Syntax 

```css
margin-inline-start: <length>;          /* e.g. 1em, 10px */
margin-inline-start: <percentage>;      /* e.g. 10% */
margin-inline-start: auto;              /* browser calculates margin */
```

## Example

```css
.box {
  margin-inline-start: 10px;
  padding: 1em;
  border: 1px solid #333;
}
```
