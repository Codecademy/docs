---
Title: 'rgb()'
Description: 'Defines the color by providing the red value, the green value, and the blue value.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Color'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `rgb()` function in CSS defines a color by specifying its components using three comma-separated values. The first value represents the red component, the second value represents the green component, and the third value represents the blue component. These values can be provided as either numeric values ranging from 0 to 255 or as percentage values ranging from 0% to 100%. By adjusting the values for each component, you can create a wide range of colors, allowing for precise control over the appearance of elements in your web design.

## Syntax

```css
<property>: rbg(red, green, blue);
```

where `red`, `green`, `blue` can be one of the following:

- Number values: ranging between `0` and `255`
- Percentage values: ranging between `0%` and `100%`

## Example 1

Set the font color of the `h1` element to be white:

```css
h1 {
  color: rgb(255, 255, 255);
}
```

## Example 2

Set the font color of the `p` element to be black:

```css
p {
  color: rgb(0, 0, 0);
}
```

## Example 3

Set the font color of the `h1` element to be a lavender color:

```css
h1 {
  color: rgb(230, 230, 250);
}
```

### Example 4: Customize a button's background color

Set the background color of the `button` element to be a shade of green:

```css
button {
  background-color: rgb(0, 128, 0);
}
