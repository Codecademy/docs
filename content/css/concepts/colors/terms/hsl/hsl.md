---
Title: 'hsl()'
Description: 'Defines the color by providing the hue value, saturation value, and the luminance value.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Color'
  - 'Functions'
  - 'Methods'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`hsl()`** function defines the hue, saturation, and luminance of an [element's](https://www.codecademy.com/resources/docs/html/elements) color value.

## Syntax

```pseudo
<property>: hsl(hue, saturation, luminance);
```

- `hue`: A unitless number value. The base of the color. Represents an angle in the color wheel from `0` to `360`.
- `saturation`: A percentage value. Represents the saturation of the base color. `0%` represents a color with no saturation at all and it shows gray. `100%` means the base color is full.
- `luminance`: A percentage value. Represents the brightness of the base color. `0%` represents a color with no luminance at all and it shows black. `100%` means full lightness and it shows white. `50%` means the base color is full.

## Example 1

```css
h1 {
  color: hsl(60, 100%, 50%);
}
```

Sets the font color of the `h1` element to `yellow`:

![hsl() Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-hsl-example-1.png)

## Example 2

```css
h1 {
  color: hsl(270, 50%, 40%);
}
```

Sets the font color of the `h1` element to a shade of purple:

![hsl() Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-hsl-example-2.png)
