---
Title: 'hsl()'
Description: 'Defines the color by providing the hue value, saturation value, and the luminance value.'
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

The `hsl()` function defines the color value by providing three comma separated values. The first value represents the hue value, the base of the color. The second represents the saturation value, and the third represents the luminance value.

## Syntax

```css
<property>: hsl(hue, saturation, luminance);
```

- `hue`: A unitless number value. The base of the color. Represents an angle in the color wheel from `0` to `360`.
- `saturation`: A percentage value. Represents the saturation of the base color. `0%` represents a color with no saturation at all and it shows gray. `100%` means the base color is full.
- `luminance`: A percentage value. Represents the brightness of the base color. `0%` represents a color with no luminance at all and it shows black. `100%` means full lightness and it shows white. `50%` means the base color is full.

## Example 1

Set the font color of the `h1` element to `yellow`:

```css
h1 {
  color: hsl(60, 100%, 50%);
}
```

## Example 2

Set the font color of the `h1` element to a shade of purple:

```css
h1 {
  color: hsl(270, 50%, 40%);
}
```
