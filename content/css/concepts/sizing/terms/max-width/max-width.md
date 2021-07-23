---
Title: "max-width"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Box Model"
  - "Positioning"
  - "Responsive"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Defines the maximum width of an element.

## Syntax

```css
max-width: <value>;
```

where `<value>` can be one of the following:

- Length values: `200px`
- Percentage values: `33%`
- Keyword values: `none`, `max-content`, `min-content`, `fit-content`

**Note:** In the case that `box-sizing` is set to `border-box`, the `max-width` of the element includes the content, padding and border. Overrides the `width` property. `min-width` overrides `max-width`.

## Example 1

Set the `max-width` of the `.box` element to be `50%`:

```css
.box {
  border: 2px solid black;
  height: 100px;
  max-width: 50%;
}
```

## Example 2

Set the `max-width` of the `.box` element to be `300px`:

```css
.box {
  border: 2px solid black;
  height: 100px;
  width: 33%;
  max-width: 300px;
}
```
