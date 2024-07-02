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

Set the position of `.box` element `40px` off the right edge of the nearest relative position ancestor or from the document if none exist.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: absolute;
  right: 40px;
}
```

## Example 2

Set the position of `.box` element `40px` from the elements right edge.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: relative;
  right: 40px;
}
```
