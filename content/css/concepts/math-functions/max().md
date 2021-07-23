---
Title: "max()"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Responsive"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Sets the largest value from a list of one or more comma-separated expressions as the value for a CSS property. 

## Syntax

```css
<property>: max(<expression>, <expression>)
```

where `<expression>` can be one of the following:

- Length values: `10px`
- Relative length values: `40vh`
- Nested math function values: `min(20vw, 200px)`
- Math expressions using arithmetic operators: `40vw - 20px`

## Example 1

Set the `width` of the `.box-max` to whichever value is greater, `50vw` or `700px`:

```css
.box-max {
  background-color: blue;
  height: 100px;
  width: max(50vw, 700px); 
}
```

## Example 2

Set the `height` of the `.box-max` to whichever value is greater, `40vh` or `600px`:

```css
.box-max {
  background-color: blue;
  width: 500px; 
  height: max(40vh, 600px);
}
```
