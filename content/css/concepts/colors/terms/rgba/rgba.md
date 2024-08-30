---
Title: 'rgba()'
Description: 'Defines the color by providing the red value, the green value, the blue value, and an optional alpha value (transparency).'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Color'
  - 'Functions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The `rgba()` color function defines the color value by providing three comma separated values along with an optional fourth value.

- The first value represents the red value.
- The second represents the green value.
- The third represents the blue value.
- The optional fourth value represents the alpha value, the transparency of a color.

## Syntax

```css
<property>: rbg(red, green, blue, alpha);
```

where `red`, `green`, `blue` can be one of the following:

- Number values: ranging between `0` and `255`
- Percentage values: ranging between `0%` and `100%`

where `alpha` is a numeric value between `0` and `1`. A `1` value will make the color fully opaque, while a `0` value will make the color fully transparent.

## Example 1

Set the transparency of `h1` element's `color` to be `.5`:

```css
h1 {
  color: rgba(0, 0, 0, 0.5);
}
```

## Example 2

Set the transparency of `h2` element's `color` to be `25%` opaque:

```css
h2 {
  color: rgba(0, 0, 0, 25%);
}
```

The `h1` and `h2` elements will render similar to:

![CSS color examples](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-rgba-example.png)
