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

The **`lch()`** function defines colors using the LCH (Lightness, Chroma, Hue) color space, which provides a more perceptually uniform way to represent colors compared to traditional RGB or HSL color spaces.

## Syntax

```pseudo
<property>: lch(lightness chroma hue);
```

- `lightness`: A percentage value from `0%` to `100%`. Represents the brightness of the color. `0%` is completely black, `100%` is completely white, and `50%` represents the mid-tone.
- `chroma`: A number value (typically `0` to `150` or higher). Represents the colorfulness or intensity of the color. `0` represents a neutral gray with no color, while higher values represent more vivid colors.
- `hue`: A unitless number value representing an angle in the color wheel from `0` to `360`. `0` represents red, `120` represents green, and `240` represents blue.

## Example 1

```css
h1 {
  color: lch(50% 100 50);
}
```

Sets the font color of the `h1` element to a vibrant orange-yellow color with medium lightness:

![lch() Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-lch-example-1.png)

## Example 2

```css
p {
  color: lch(70% 50 260);
}
```

Sets the font color of the `p` element to a light purple color with moderate chroma:

![lch() Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-colors-lch-example-2.png)
