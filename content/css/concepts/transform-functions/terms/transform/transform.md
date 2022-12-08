---
Title: 'transform'
Description: 'Rotates, scales, skews, or translates an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Positioning'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`transform`** property rotates, scales, skews, or translates an element.

## Syntax

```pseudo
transform: <values>;
```

The `transition` property can have one or more of the following properties as values:

- `none`
- `matrix(n, n, n, n, n, n)`
- `matrix3d(n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n)`
- `translate(x, y)`
- `translate3d(x, y, z)`
- `translateX(x)`
- `translateY(y)`
- `translateZ(z)`
- `scale(x, y)`
- `scale3d(x, y, z)`
- `scaleX(x)`
- `scaleY(y)`
- `scaleZ(z)`
- `rotate(angle)`
- `rotate3d(x, y, z, angle)`
- `rotateX(angle)`
- `rotateY(angle)`
- `rotateZ(angle)`
- `skew(x-angle, y-angle)`
- `skewX(angle)`
- `skewY(angle)`
- `perspective(n)`

## Example 1

Transforming an `img` element by scaling down by half and rotating 75 degrees.

```css
img {
  transform: scale(0.5, 0.5);
  transform: rotate(75deg);
}
```

## Example 2

Transforming an `img` element by skewing 20 degrees, scaling up by half and rotating 100 degrees in one declaration.

```css
img {
  transform: skew(20deg, 20deg) scale(1.5, 1.5) rotate(100deg);
}
```
