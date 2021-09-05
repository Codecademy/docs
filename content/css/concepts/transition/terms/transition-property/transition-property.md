---
Title: 'transition-property'
Description: 'Specifies the property or properties of an element that a transition effect should apply to. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Transitions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Specifies the property or properties of an element that a transition effect should apply to.

## Syntax

```css
transition-property: <values>;
```

The `transition-property` can have one of the following values:

- `all`: Default value, applies transition effect to all properties.
- `none`: No property will have transitioning effect.
- A single property name (e.g. `height`).
- A comma-separated lost of property names (e.g.`margin-right, margin-left, width`).

**Note**: Make sure to declare a `transition-duration` property, otherwise the duration will be 0 and have no transitioning effect.

## Example 1

Setting a `p` element to have a transition effect on all its properties.

```css
p {
  height: 100px;
  width: 100px;
  background-color: green;
  transition-duration: 2s;
  transition-property: all;
}

p:hover {
  height: 150px;
  width: 200px;
  background-color: blue;
}
```

## Example 2

Setting a `div` element to have a transition effect on its height, width, and top margin properties.

```css
div {
  height: 100px;
  width: 100px;
  margin-top: 20px;
  margin-right: 50px;
  background-color: green;
  transition-duration: 2s;
  transition-property: height, width, margin-top;
}

div:hover {
  height: 50px;
  width: 50px;
  margin-top: 40px;
}
```
