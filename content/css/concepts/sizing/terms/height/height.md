---
Title: 'height'
Description: "Defines the height of an element's content area. The content area is the space inside the padding, border, and margin of the element."
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

Defines the height of an element's content area. The content area is the space inside the padding, border, and margin of the element.

## Syntax

```css
height: <value>;
```

where `<value>` can be one of the following:

- Length values: `100px`
- Percentage values: `20%`
- Keyword values: `auto`, `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the height of the element includes the content, padding and border. The `height` property will be overwritten by the `min-height`, and `max-height` properties.

## Example 1

Set the `height` of the `.box` element to be `100px`:

```css
.box {
  height: 100px;
}
```

## Example 2

Set the `height` of the `.box` element to be `100px` including the padding and the border:

```css
.box {
  box-sizing: border-box;
  padding: 20px;
  border: 2px solid black;
  height: 100px;
}
```

## Example 3

Set the `height` of the `.child-box` element to be half the height of the `.parent-box` element:

```html
<div class="parent-box">
  <div class="child-box">I am 50% as tall as my parent.</div>
</div>
```

```css
.parent-box {
  border: 2px solid blue;
  width: 200px;
  height: 200px;
}

.child-box {
  border: 2px solid red;
  height: 50%;
}
```
