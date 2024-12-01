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

![Shows result of CSS right property with a position attribute of absolute](https://raw.githubusercontent.com/Codecademy/docs/main/media/css_position_right_absolute.png)

The box element is taken out of the normal DOM flow and positioned 40px away from the right edge of its parent container.

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

![Shows result of CSS right property with a position attribute of relative](https://raw.githubusercontent.com/Codecademy/docs/main/media/css_position_right_relative.png)

The box element is moved 40px to the left of its normal position relative to its right edge.
