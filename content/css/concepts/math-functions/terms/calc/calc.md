---
Title: 'calc()'
Description: 'Performs mathematical calculations to determine values for properties.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Positioning'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Performs mathematical calculations to determine values for properties.

## Syntax

```css
<property>: calc(<expression>);
```

where `<expression>` can be any simple expression combining the following operators, using standard operator precedence rules:

- `+`: addition.
- `-`: subtraction.
- `*`: multiplication.
- `/`: division.

**Note:** Spaces are required around the `-` and `+` operators. They are not required for `/` and `*` operators.

## Example 1

Calculate the total width of the `div` using absolute lengths.

```css
div {
  width: calc(10px + 120px);
}
```

This will be `130px` wide.

## Example 2

Set the value of the `.box` element's `width` property to the result of `50% - 10px`:

```css
.box {
  width: calc(50% - 10px);
}
```

Absolute lengths and relative lengths are both available to perform calculations.

## Example 3

Set the `width` property to `10px` less than the CSS variable `--custom-width`:

```css
.card {
  --custom-width: 33%;
  width: calc(var(--custom-width) - 10px));
}
```
