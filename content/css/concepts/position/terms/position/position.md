---
Title: 'position'
Description: 'Defines how elements are placed within the document.'
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

The **position** property defines how elements are placed within the document.

## Syntax

```pseudo
position: <value>;
```

where `<value>` can be one of the following:

- `static`: This is the default value of the position property. The element stays in the flow of the document and appears in the actual location where it's located in the markup.
- `relative`: The element does not change positions unless one or several properties of top, right, bottom, or left are declared. It also creates a reference position for absolute positioned child elements.
- `absolute`: The element is removed from the document flow and it's positioned in relation to its closest relative positioned ancestor element.
- `fixed`: The element is removed from the document flow just like the absolute positioned elements. However, unlike the absolute positioned elements, which are relative to an ancestor element, the fixed elements are always relative to the document.
- `sticky`: This value is a mix between the relative and fixed positions. The element is treated as relative until a specific point or threshold is met, at which point the element is then treated as fixed.

## Example 1

The following example features three `.box` elements with different `position` values:

```css
.box1 {
  height: 100px;
  width: 100px;
  background-color: red;
  position: sticky;
  top: 30px;
}

.box2 {
  height: 100px;
  width: 100px;
  background-color: blue;
  position: fixed;
  top: 80px;
}

.box3 {
  height: 100px;
  width: 100px;
  background-color: green;
  position: relative;
  top: 80px;
}
```

Here's what the above examples look like:

![CSS Position Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-example.png)

The first box is sticky to the top of the document. The second is set to a fixed position 40px from the top of the page. The third box position is 80px from the element's top edge.

## Example 2

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

This is what the above example looks like:

![CSS Position Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-position-example2.png)
