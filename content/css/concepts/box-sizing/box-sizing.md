---
Title: 'Box Sizing'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Box Model'
  - 'Padding'
  - 'Borders'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The `box-sizing` property allows us to include the padding and boarder in the calculation of an element's height and width. This is a slightly more advanced so no need to use it if you are just getting started to code.

## Syntax

```css
box-sizing: <value>;
```

The `box-sizing` property has two values.

- `border-box`: Any assigned padding or border is included in the calculation of an elements height or width. If an elements width is set to `100px` and padding is set to `30px`, the padding will be included in the elements set width resulting in the total width still being `100px`.
- `content-box`: Default CSS behavior, the assigned height or width of an element plus any padding will be the total height or weight. If an elements width is set to `100px` and padding is set to `50px`, the total width for the element will be `150px`.

## Example 1

Setting a `div` elements `box-sizing` to `border-box`.

```css
.div {
  box-sizing: border-box;
}
```

## Example 2

Setting a `div` elements `box-sizing` to `content-box`.

```css
.div {
  box-sizing: content-box;
}
```
