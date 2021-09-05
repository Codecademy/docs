---
Title: 'width'
Description: "Defines the width of an element's content area. The content area is the space inside the padding, border, and margin of the element."
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Box Model'
  - 'Positioning'
  - 'Responsive'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines the width of an element's content area. The content area is the space inside the padding, border, and margin of the element.

## Syntax

```css
width: <value>;
```

where `<value>` can be one of the following:

- Length values: `330px`
- Percentage values: `50%`
- Keyword values: `auto`, `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the width of the element includes the content, padding and border. The `width` property will be overridden by the `min-width`, and `max-width` properties.

## Example 1

Set the `width` of the `.box` element to be `40em`:

```css
.box {
  background-color: blue;
  width: 40em;
}
```

## Example 2

Set the `width` of the `.box` element to be `100px` including the padding and the border:

```css
.box {
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid black;
  width: 100px;
}
```

## Example 3

Set the `width` of the `.child-box` element to be half the width of the `.parent-box` element:

```html
<div class="parent-box">
  <div class="child-box">I am 50% as wide as my parent.</div>
</div>
```

```css
.parent-box {
  border: 2px solid blue;
  width: 200px;
}

.child-box {
  border: 2px solid red;
  width: 50%;
}
```
