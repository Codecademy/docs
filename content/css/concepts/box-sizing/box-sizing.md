---
Title: 'Box Sizing'
Description: 'The box-sizing property determines whether to use the border and padding of an element to calculate its total width.'
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

The `box-sizing` property allows us to include the padding and boarder in the calculation of an element's height and width.

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
## Example 3

The following image has two `div` containers with a width of 300px, border of 1px and padding of 20px. Inside each container there is a `div` with a width of 100%.

The first container `div` is set to `border-box`. Its total width including the black border, tan padding and blue `div` is 300px.

The second container `div` is set to `content-box`. The width of the blue content `div` is 300px. The total width of the container `div` with padding and border and content `div` is 342px.

![Box Sizing Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/box-sizing-example.png 'Box-Sizing Example')
