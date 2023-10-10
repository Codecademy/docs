---
Title: 'background-position'
Description: 'It defines the initial position of a background image within containing element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The background-position property defines the initial position of a background image within containing element.

## Syntax

```css
background-position: <value1> <value2>;
```
The `<value1>` specifies the position along the X-axis (horizontal axis), and it can be expressed as a length (e.g., pixels), a percentage, or a keyword and `<value2>`specifies the position along the Y-axis (vertical axis), and it can also be expressed as a length, a percentage, or a keyword.

where `<value1>` and `<value2>` can be one of the following keywords:

- `center top`: The position of background image is `center` along X-axis(horizontal axis) and `top` along Y-axis(vertical axis).
- `center center`: The position of background image is `center` along X-axis(horizontal axis) and `center` along Y-axis(vertical axis).
- `center bottom`: The position of background image is `center` along X-axis(horizontal axis) and `bottom` along Y-axis(vertical axis).
- `left top`: The position of background image is `left` along X-axis(horizontal axis) and `top` along Y-axis(vertical axis).
- `left center`: The position of background image is `left` along X-axis(horizontal axis) and `center` along Y-axis(vertical axis).
- `left bottom`: The position of background image is `left` along X-axis(horizontal axis) and `bottom` along Y-axis(vertical axis).
- `right top`: The position of background image is `right` along X-axis(horizontal axis) and `top` along Y-axis(vertical axis).
- `right center`: The position of background image is `right` along X-axis(horizontal axis) and `center` along Y-axis(vertical axis).
- `right bottom`: The position of background image is `right` along X-axis(horizontal axis) and `bottom` along Y-axis(vertical axis).
- `x% y%`: The position of background image is `x%` away from the left along X-axis(horizontal axis) and `y%` away from top along Y-axis(vertical axis).
- `xpos ypos`: The position of background image is `xpx` form the left along X-axis(horizontal axis) and `ypx` away from top along Y-axis(vertical axis).
- `initial`: Sets this property to its default value.
- `inherit`: Inherits this property from its parent element.

## Example 1

```css
body { 
  background-image: url('background_img.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 50%;
}
```

## Example 2

```css
body { 
  background-image: url('background_img.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: right bottom;
}
```
