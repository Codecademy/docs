---
Title: 'flex-direction'
Description: 'A property that specifies the direction in which elements are distributed within a container.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A property that specifies the direction in which elements are distributed within a container.

## Syntax

```css
#element-container {
  display: flex;
  flex-direction: <flex-value>;
}
```

The `<flex-value>` can be one of four options:

- Elements arranged left to right: `row`
- Elements arranged right to left: `row-reverse`
- Elements arranged top to bottom: `column`
- Elements arranged bottom to top: `column-reverse`

## Example 1

Content that is arranged horizontally within a container:

```css
#spam-container {
  display: flex;
  flex-direction: row;
}
```
