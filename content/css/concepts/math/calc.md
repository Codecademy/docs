---
Title: "calc()"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Functions"
  - "Positioning"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

To perform simple mathematic calculation.

## Syntax

```css
calc(value);
```

- `calc(value)` can perform addition, subtraction, multiplication or division.
- Absolute lengths and relative lengths are available to put to perform calculation.

## Example 1

To calculate the total width of the `div` using absolute lengths.

```css
div {
  width: calc(10px + 120px);
}
```

## Example 2

To calculate the total width of the `div` using relative lengths.

```css
div {
  width: calc(100% - 10%);
}
```
