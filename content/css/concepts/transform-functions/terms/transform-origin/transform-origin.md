---
Title: 'transform-origin'
Description: "Sets the origin of an element's tranformation."
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

The `transform-origin` property sets the origin of an element's tranformation.

## Syntax

```css
transform-origin: <values>;
```

The `transform-origin` property can have up to three values:

- The first value is for the x-axis.
- The second value is for the y-axis.
- The third value is for the z-axis.

Each axis can have one of the following values:

x-axis values:

- `left`
- `center`
- `right`
- Length value (e.g. `50px`)
- Percentage value (e.g. `25%`)

y-axis values:

- `top`
- `center`
- `bottom`
- Length value (e.g. `50px`)
- Percentage value (e.g. `25%`)

z-axis value:

- This can only be a length value (e.g.`50px`)

**Note:** The order in which the x-axis and y-axis values are declared does not matter if only keywords are used.

## Example 1

Setting an `img` elements transformation origin from the center.

```css
img {
  transform-origin: center;
}
```

## Example 2

Setting an `img` elements transformation origin from the top left.

```css
img {
  transform-origin: top left;
}
```

## Example 3

Setting an `img` elements transformation origin from the bottom left with a _z-axis_ offset of `100px`.

```css
img {
  transform-origin: bottom left 100px;
}
```
