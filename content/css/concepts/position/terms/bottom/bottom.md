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

Specifies the distance of an element from the bottom of its current location if the element itself has `position: relative` declared or from the bottom of its nearest ancestor when the ancestor has `position: relative` and the element has `position: absolute` declared. `position: fixed` positioned an element relative to the viewport. It takes the element out of the normal flow and remains fixed, not affected by scrolling.

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
![Shows the use of CSS bottom attribute with element position set to absolute](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-absolute-bottom.png)

The blue box `position: absolute` is positioned `40px` from the bottom edge of its containing element `position: relative`.


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
![Shows the use of CSS bottom attribute with element position set to relative](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-relative-bottom.png)

The blue box `position: relative` is positioned `40px` above its default position, represented by the dashed box within the containing element `position: relative`.

## Example 3

Set the position of `.box` element `40px` from the bottom edge of the viewport. 

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: fixed;
  bottom: 40px;
}
```

The blue box `position: fixed` is taken out of the normal document flow and its position with bottom property sets its distance 40px above the bottom edge of the viewport. It doesn't move when the page is scrolled.
