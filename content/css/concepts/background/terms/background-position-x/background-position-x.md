---
Title: 'background-position-x'
Description: 'Sets the horizontal position of a background image.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Background'
  - 'Layout'
  - 'Positioning'
  - 'Properties'
CatalogContent: 
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The CSS background-position-x property sets the horizontal (x-axis) position of a background image. The position is calculated relative to the box defined by the [`background-origin`](https://www.codecademy.com/resources/docs/css/background/background-origin) property.

If the `background` or [`background-position`](https://www.codecademy.com/resources/docs/css/background/background-position) shorthand properties are declared after `background-position-x`, their values override it.

By default, a background image is positioned at the top-left corner of an element and repeated both horizontally and vertically.

## Syntax

```pseudo
background-position-x: value;
```

**Parameters:**

- `value` can be one of the following:

  - **Position keywords:** `left`, `center`, `right`
  - **Length values:** `10px`, `2em`, `1cm`
  - **Percentage values:** `25%`
  - **Keyword and offset combinations:** `left 20px`, `right 10%`
  - **Comma-separated values (for multiple background layers):** `left`, `right`
  - **Global values:** `inherit`, `initial`, `revert`, `revert-layer`, `unset`

When multiple background images are used, values are applied in order, separated by commas.

## Example

In this example, a `div` element is styled with a centered background image using `background-position-x`:

The HTML code is:

```html
<div>
</div>
```

The CSS code is:

```css
div {
  width: 300px;    
  height: 300px;
  background-color: grey;
  background-image: url("../../../../../../media/cc_logo.png");
  background-repeat: no-repeat;
  background-position-x: center;
}
```

The output of this code is:

![A 300 by 300 pixel grey square with a background image centered horizontally at the top of the container, not repeated.](https://raw.githubusercontent.com/Codecademy/docs/main/media/css_background_position_x_example.png)
