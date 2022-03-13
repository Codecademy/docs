---
Title: 'Floats'
Description: ''
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Floats'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The `float` propertie moves an element with in its parent.

## Syntax

The `float` propertie takes 5 diffrent values. They are, `left`, `right`, and `none`. The value `left` makes the element float on the left of a parent. The value `right` makes the element float on the right of a parent. The value `none` make the element not float at all.

## Example 1

```html
  <section>
    <div class="item_1">
      <p>This is the first item</p>
    </div>
    <div class="item_2">
      <p>This is the second item</p>
    </div>
    <p>This example shows CSS floats.</p>
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

The div with the class `item_1` will float to the left of the text `This example shows CSS floats.` And the div with the class `item_2` will float to the right of the text `This example shows CSS floats.`