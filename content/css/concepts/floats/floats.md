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

The `float` property primarily uses the following three values:

* The `left` value that makes the element float on the left of its container.
* The `right` value that makes the element float on the right of its container.
* The `none` value that causes the element not to float.

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
