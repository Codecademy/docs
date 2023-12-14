---
Title: 'drop-shadow()'
Description: 'Creates a drop shadow effect on an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Functions'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Creates a drop shadow effect on an element.

## Syntax

```css
filter: drop-shadow(<offset-h> <offset-v> <blur> <color>);
```

- `<offset-h>` (required): The horizontal offset of the shadow. Negative values will move the shadow to the left.
- `<offset-v>` (required): The vertical offset of the shadow. Negative values will move the shadow up.
- `<blur>` (optional): The blur of the shadow. A default value of `0` will create a hard shadow.
- `<color>` (optional): The color of the shadow. If unset, the value will be the `color` property value.

## Example 1

Give the image a drop shadow offset horizontally `12px`, vertically `12px` with a blur of `5px` and a color of `red`.

```css
.banner-image {
  filter: drop-shadow(12px 12px 5px red);
}
```

## Example 2

Give the image a drop shadow offset horizontally `-12px`, vertically `-12px` with a blur of `2em` and a color of `purple`.

```css
.banner-image {
  filter: drop-shadow(-12px -12px 2em purple);
}
```

![Comparison between a original image and the image with the drop-shadow filter](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunction-drop-shadow.png)

The first image on the left is the original, and the image on the right has the `drop-shadow` filter set at `(12px 12px 5px red)`.
