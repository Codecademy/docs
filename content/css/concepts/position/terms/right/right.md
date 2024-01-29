---
Title: 'right'
Description: 'Specifies the distance of an element from the right of the specified position.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Specifies the distance of an element from the right of its current location if the element has `position: relative` declared or from the right of its nearest ancestor when the ancestor has `position: relative` and the element has `position: absolute` declared.

## Syntax

```css
right: <value>;
```

where `<value>` can be one of the following:

- Length value: `20px`
- Percentage value: `5%`
- Keyword value: `auto`, `inherit`

**Note:** If none of the ancestors have `position: relative` declared, the absolute positioned element will traverse the DOM until it reaches the <body> tag, at which point it will position itself at the right of the page regardless of its location in the source HTML.

## Example 1

Set the position of `.box` element `40px` from the elements right edge.

```css
.box {
  height: 500px;
  width: 500px;
  position: absolute;
  right: 40px;
}
```
![Shows use CSS right(40px) attribute with element position set to absolute](https://github.com/Codecademy/docs/assets/156298118/ee234bd0-1e98-430f-82a9-8aef78874275)

## Example 2

Set the position of `.box` element `100px` from the elements right edge.

```css
.box {
  height: 500px;
  width: 500px;
  position: absolute;
  right: 100px;
}
```
![Shows use CSS right(100px) attribute with element position set to absolute](https://github.com/Codecademy/docs/assets/156298118/3ef150d5-d602-4fee-a3ac-76aa8e27cc07)

## Example 3

Set the position of `.box` element `100px` from the elements right edge and set the position from static to relative.

```css
.box {
  height: 500px;
  width: 500px;
  position: relative;
  right: 100px;
}
```
![Shows use CSS right(100px) attribute with element position set to absolute](https://github.com/Codecademy/docs/assets/156298118/a64a875d-9cdd-47e9-b7d1-055d25b3b4d8) ![Shows use CSS right(100px) attribute with element position set to relative](https://github.com/Codecademy/docs/assets/156298118/4cb1e6ff-dbfc-453e-b8e1-a90cc2c6ba78)