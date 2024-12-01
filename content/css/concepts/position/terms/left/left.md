---
Title: 'left'
Description: 'Specifies the distance of an element from the left of the specified position.'
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

Specifies the distance of an element from the left of its current location if the element has `position: relative` declared or from the left of its nearest ancestor when the ancestor has `position: relative` and the element has `position: absolute` declared.

## Syntax

```css
left: <value>;
```

where `<value>` can be one of the following:

- Length value: `20px`
- Percentage value: `5%`
- Keyword value: `auto`, `inherit`

**Note:** If none of the ancestors have `position: relative` declared, the absolute positioned element will traverse the DOM until it reaches the <body> tag, at which point it will position itself at the left of the page regardless of its location in the source HTML.

## Example 1

Set the position of `.box` element `40px` off the left edge of the nearest relative position ancestor or from the document if none exist.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: absolute;
  left: 40px;
}
```

![Example of position being absolute](https://raw.githubusercontent.com/Codecademy/docs/main/media/example-css-left%28%29-absolute.png)

## Example 2

Set the position of `.box` element `40px` from the elements left edge.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: relative;
  left: 40px;
}
```

![Example of position being relative](https://raw.githubusercontent.com/Codecademy/docs/main/media/example-css-left%28%29-relative.png)
