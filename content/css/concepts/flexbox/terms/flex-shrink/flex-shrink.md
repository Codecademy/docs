---
Title: 'flex-shrink'
Description: 'Specifies how much space an item may be scaled down relative to the other items in the container (when items in the flex container are larger than the space available). An item assigned a flex-shrink value of 2, will be scaled twice as much as an item assigned a value of 1.'
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

The `flex-shrink` property specifies how much space an item may be scaled down relative to the other items in the container (when items in the flex container are larger than the space available). An item assigned a `flex-shrink` value of 2, will be scaled twice as much as an item assigned a value of 1.

## Syntax

```css
#element-container {
  display: flex;
  flex-shrink: <flex-value>;
}
```

The `<flex-value>` should be an integer or decimal value. The default value is one; therefore, initially all elements in a container will be scaled by the same factor in order to meet the space available.

## Example 1

An image that will not scale down given flex-shrink conditions:

```css
#img-one {
  display: flex;
  flex-shrink: 0;
}
```
