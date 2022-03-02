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

The `clamp()` function restricts a given value between an upper and lower bound. In this way, it acts like a combination of the [`min()`](https://www.codecademy.com/resources/docs/css/math-functions/min) and [`max()`](https://www.codecademy.com/resources/docs/css/math-functions/max) functions.

## Syntax

```pseudo
<property>: clamp(<lower bound>, <value>, <upper bound>)
```

The `<value>` is valid as long as it is between the `<lower bound>` and `<upper bound>`. This ensures that the `<property>` has a minimum and maximum `<value>`.

Each argument to `clamp()` can be a combination of [CSS units](https://www.codecademy.com/resources/docs/css/units), or evaluations of them, using the following:

- Absolute units: `10px`
- Relative units: `40vh`
- Math expressions: `40vw - 20px`
- Nested math function values: `min(20vw, 200px)`

## Example

```css
.display-font {
  font-size: clamp(2rem, 3vw, 5rem);
}
```

In the example above, `.display-font` elements will have their `font-size` clamped down to span `3%` of the viewport's width. However, it can be no more than `5rem` and no less than `2rem`.
