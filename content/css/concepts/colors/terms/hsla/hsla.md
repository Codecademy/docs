---
Title: 'hsla()'
Description: 'Defines the color by providing the hue value, the saturation value, the luminance value, and an optional alpha value (transparency).'
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

The **`hsla()`** color function defines the color value by providing three comma-separated values with an optional fourth value.

- The first value represents the hue value, the base of the color.
- The second represents the saturation value.
- The third represents the luminance value.
- The optional fourth value represents the alpha value, which is the transparency of the color.

## Syntax

```css
<property>: hsla(hue, saturation, luminance, alpha);
```

- `hue`: A unitless number value. The base of the color. Represents an angle in the color wheel from `0` to `360`.
- `saturation`: A percentage value. Represents the saturation of the base color. `0%` represents a color with no saturation, showing gray. `100%` means the base color is visible as it is.
- `luminance`: A percentage value. Represents the brightness of the base color. `0%` represents a color with no luminance, showing black. `100%` means complete lightness and it shows white. `50%` means the base color is visible as it is.
- `alpha`: A numeric value between `0` and `1`. A `1` value will make the color fully opaque, while a `0` value will make the color fully transparent.

## Example 1

Set the font color of the `h1` element to a shade of purple with an alpha of `0.5`:

```css
h1 {
  color: hsla(270, 50%, 40%, 0.5);
}
```

The following image demonstrates the above `hsla()` color on an h1 element over a background image:

![Demonstrates an h1 heading with 50% opacity over a patterned background image](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-color-hsla-example-1.png)

## Example 2

Set the font color of the `h2` element:

```css
h1 {
  color: hsla(211, 60%, 10%, 0.8);
}
```

The following image demonstrates the above `hsla()` color on an h1 element over a background image:

![Demonstrates an h1 heading with 80% opacity over a patterned background image](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-color-hsla-example-2.png)
