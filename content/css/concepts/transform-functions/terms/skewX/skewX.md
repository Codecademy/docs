---
Title: skewX()
Description: A function that skews (tilts) an element along the x-axis
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Functions'
  - 'positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

**skewX()** is a CSS transform function that skews (tilts) an element along the x-axis based on the given value.

## Synthax

```css
transform: skewX(<value>);
```

The `<value>` can be:

- Degrees(deg): `-45deg`
- Radians(rad): `0.6rad`
- Gradian(grad): `200grad`
- Turns(turn): `0.2turn`

**note**: `<value>` can take both positive and negative values.

## Example1

Skew our `.box` element along the x-axis by 30deg:

```css
.box {
  width: 50px;
  height: 60px;
  background-color: red;
  transform: skewX(30deg);
}
```

The output of the code above is shown below:

![A box element skewed 30 degrees along the x-axis by CSS skewX function](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-transform-skewX-1.jpg)

## Example2

Skew our `.box` element along the x-axis by 0.2turn:

```css
.box {
  width: 50px;
  height: 60px;
  background-color: red;
  transform: skewX(-0.2turn);
}
```

The output of the code above is shown below:

![A box element skewed -0.2 turns along the x-axis by CSS skewX function](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-transform-skewX-2.jpg)
