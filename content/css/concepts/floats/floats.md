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

The **`float`** property moves an element to the left or right within its containing element, outside of the default [positioning](https://www.codecademy.com/resources/docs/css/position).

## Syntax

```pseudo
.item_x {
  float: none;
}

.item_y {
  float: left;
}

.item_z {
  float: right;
}
```

The `float` property primarily uses the following three values:

- The `left` value that makes the element float on the left of its container.
- The `right` value that makes the element float on the right of its container.
- The `none` value that causes the element not to float.

## Example

```html
<section>
  <div class="item_1">
    <p>This is the first item and I will float left.</p>
  </div>
  <div class="item_2">
    <p>This is the second item and I will float right.</p>
  </div>
  <br />
  <br />
  <br />
  <p>This example shows CSS floats and I will not float at all.</p>
</section>
```

In the above snippet, the elements with the class `item_1` and `item_2` can be set to float in an external style sheet.

```css
.item_1 {
  float: left;
}

.item_2 {
  float: right;
}

div {
  border: thick double black;
}

section > p {
  margin: auto;
  text-align: center;
  width: 50%;
}
```

The `<div>` tags with the `.item_1` and `.item_2` classes will float to the left and right of the "CSS floats" text, respectively.

![Image of rendered float elements](https://raw.githubusercontent.com/Codecademy/docs/main/media/css_floats.png)
