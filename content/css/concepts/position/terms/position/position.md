---
Title: 'position'
Description: 'Defines the location of an element.'
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

Defines the location of an element.

## Syntax

```css
position: <value>;
```

where `<value>` can be one of the following:

- `static`: This is the default value of the position property. The element stays in the flow of the document and appears in the actual location where it's located in the markup.
- `relative`: The element does not change positions unless one or several properties of top, right, bottom, or left are declared. It also creates a reference position for absolute positioned child elements.
- `absolute`: The element is removed from the document flow and it's positioned in relation to its closest relative positioned ancestor element.
- `fixed`: The element is removed from the document flow just like the absolute positioned elements. However, unlike the absolute positioned elements, which are relative to an ancestor element, the fixed elements are always relative to the document.
- `sticky`: This value is a mix between the relative and fixed positions. The element is treated as relative until a specific point or threshold is met, at which point the element is then treated as fixed.

## Example 1

Set the position of `.box` element to stick in place at `40px` from the top of the document.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: sticky;
  top: 40px;
}
```

## Example 2

Set the position of `.box` element to a fixed position at `40px` from the top of the document.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: fixed;
  top: 40px;
}
```

## Example 3

Set the position of `.box` element `40px` from the elements top edge.

```css
.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: relative;
  top: 40px;
}
```

## Example 4

Position the `.box` element `40px` from the bottom of the `.ancestor` element.

```html
<div class="ancestor">
  <div class="box"></div>
</div>
```

```css
.ancestor {
  position: relative;
}

.box {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: absolute;
  bottom: 40px;
}
```
