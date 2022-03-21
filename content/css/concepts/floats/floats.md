---
Title: 'Floats'
Description: 'The float property moves an element to the left or right within its parent, outside of the default positioning.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Floats'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The float property moves an element to the left or right within its parent, outside of the default positioning.

## Syntax

The `float` property takes 3 different values. They are, `left`, `right`, and `none`. The value `left` makes the element float on the left of a parent. The value `right` makes the element float on the right of a parent. The floating element will render beside elements with the default positioning. The value `none` removes the floating property from an element.

## Example

```html
<section>
  <div class="item_1">
    <p>This is the first item</p>
  </div>
  <div class="item_2">
    <p>This is the second item</p>
  </div>
  <p>This example shows CSS floats</p>
</section>
```

```css
.item_1 {
  float: left;
}

.item_2 {
  float: right;
}
```

The `<div>` tags with the `.item_1` and `.item_2` classes will float to the left and right of the "CSS floats" text, respectively.
