---
Title: 'lch()'
Description: 'Defines color by using lightness, chroma, and hue values in the LCH color space.'
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

The **`lch()`** function defines colors using the LCH (Lightness, Chroma, Hue) color space, which provides a uniform way to represent colors compared to traditional RGB or HSL color spaces.

## Syntax

```pseudo
<property>: lch(lightness chroma hue / alpha);
```

- `lightness`: A percentage value from `0%` to `100%`. Represents the brightness of the color. `0%` is completely black, `100%` is completely white, and `50%` represents the mid-tone.
- `chroma`: A number value (typically `0` to `150` or higher). Represents the colorfulness or intensity of the color. `0` represents a neutral gray with no color, while higher values represent more vivid colors.
- `hue`: An angle value on the color wheel. It can be given with units like `deg`, `rad`, or `turn`, or as a unitless number interpreted as degrees. Angles wrap, so they are not limited to `0`–`360`; for reference, `0deg` represents red, `120deg` represents green, and `240deg` represents blue.
- `alpha` (optional): A number from `0` to `1`, or a percentage from `0%` to `100%`, representing the opacity of the color. `0` (or `0%`) is fully transparent, `1` (or `100%`) is fully opaque. Defaults to `1` if omitted.

## Example 1

```css
h1 {
  color: lch(50% 100 50);
}
```

Sets the font color of the `h1` element to a vibrant orange-yellow color with medium lightness:

![lch() Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-lch-example-1.jpg)

## Example 2

```css
p {
  color: lch(70% 50 260);
}
```

Sets the font color of the `p` element to a light purple color with moderate chroma:

![lch() Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-lch-example-2.jpg)

## Example 3

```css
div {
  background-color: lch(60% 80 120 / 0.5);
}
```

Sets the background color of the `div` element to a semi-transparent green color with 50% opacity:

![lch() Example 3](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-lch-example-3.jpg)
