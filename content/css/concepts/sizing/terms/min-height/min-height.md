---
Title: 'min-height'
Description: 'Defines the minimum height of an element.'
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

Defines the minimum height of an element.

## Syntax

```css
min-height: <value>;
```

where `<value>` can be one of the following:

- Length values: `300px`
- Percentage values: `33%`
- Keyword values: `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the `min-height` of the element includes the content, padding and border. `min-height` overrides the `height` and `max-height` properties.

## Example 1

Set the `min-height` of the `.box` element to be `100px`:

```css
.box {
  border: 2px solid black;
  min-height: 100px;
}
```

## Example 2

Set the `min-height` of the `.child-box` element to be `200px`:

```html
<div class="parent-box">
  <div class="child-box">I am a min height of 200px.</div>
</div>
```

```css
.parent-box {
  border: 2px solid blue;
  width: 200px;
  height: 75vh;
}

.child-box {
  border: 2px solid red;
  height: 50%;
  min-height: 200px;
}
```
