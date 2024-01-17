---
Title: 'bottom'
Description: 'Specifies the distance of an element from the bottom of the specified position.'
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

Specifies the distance of an element from the bottom of its current location if the element itself has `position: relative` declared or from the bottom of its nearest ancestor when the ancestor has `position: relative` and the element has `position: absolute` declared.

## Syntax

```css
bottom: <value>;
```

where `<value>` can be one of the following:

- Length value: `20px`
- Percentage value: `5%`
- Keyword value: `auto`, `inherit`

**Note:** If none of the ancestors have `position: relative` declared, the absolute positioned element will traverse the DOM until it reaches the <body> tag, at which point it will position itself at the bottom of the page regardless of its location in the source HTML.

## Example 1

Set the position of `.box` element `40px` from the bottom of the nearest relative position ancestor or from the document if none exist.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: absolute;
  bottom: 40px;
}
```
![Shows use CSS bottom attribute with element position set to absolute](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-bottom-position-absolute.png)

The blue box `position: absolute` is positioned 40px from the bottom edge of its containing element `position: relative`

## Example 2

Set the position of `.box` element `40px` from the elements bottom edge.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: relative;
  bottom: 40px;
}
```
![Shows use CSS bottom attribute with element position set to relative](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-bottom-position-relative.png)

The blue box `position: relative` is positioned 40px above its default position, within the containing element `position: relative`.