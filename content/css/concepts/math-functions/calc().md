---
Title: "calc()"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Positioning"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Performs mathematical calculations to determine values for properties.

## Syntax

```css
<property>: calc(<expression>)
```

where `<expression>` can be any simple expression combining the following operators, using standard operator precedence rules:

- `+`: addition.
- `-`: subtraction.
- `*`: multiplication.
- `/`: division.


**Note:** spaces are required around the `-` and `+` operators. They are not required for `/` and `*` operators.

## Example 1

Set the value of the `.box` element's `width` property to the result of `50% - 10px`:

```css
.box {
  width: calc(50% - 10px);
}
```

## Example 2

Set the `width` property to `10px` less than the CSS variable `--custom-width`:

```css
.card {
  --custom-width: 33%;
  width: calc(var(--custom-width) - 10px)) 
}
```