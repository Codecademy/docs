---
Title: 'clamp()'
Description: 'Restricts a given value between an upper and lower bound.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Responsive'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `clamp()` function restricts a given value between an upper and lower bound. In this way acts like a combination of the [`min()`]https://www.codecademy.com/resources/docs/css/math-functions/min and [`max()`](https://www.codecademy.com/resources/docs/css/math-functions/max) functions.

## Syntax

```pseudo
<property>: clamp(<lower bound><value><upper bound>)
```

The value will be the given `<value>` as long as it is between the `<lower bound>` and `<upper bound>`. The minimum value returned will be the `<lower bound>` and the maximum value returned will be the `<upper bound>`.

Each argument of the `clamp()` function can be one of the following:

- Length values: `10px`
- Relative length values: `40vh`
- Nested math function values: `min(20vw, 200px)`
- Math expressions using arithmetic operators: `40vw - 20px`

## Example

```css
.display-font {
  font-size: clamp(2rem, 3vw, 5rem);
}
```

This results in a font size for `.display-font` elements that will change with the viewport width, but not smaller than 2rem or larger than 5rem.
