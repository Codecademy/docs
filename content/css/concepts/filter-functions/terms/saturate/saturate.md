---
Title: 'saturate()'
Description: 'Increases or decreases the color intensity of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Functions'
  - 'Colors'
  - 'Elements'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, the `saturate()` function increases or decreases the [color](https://www.codecademy.com/resources/docs/css/colors) intensity of an element.

## Syntax

```pseudo
filter: saturate(<value>);
```

The required `<value>` can either be a positive decimal number or a positive percentage number, such as (but not limited to):

- Decimal value: `0`, `0.5`, `1.0`, `1.5`, ...
- Percentage value: `0%`, `50%`, `100%`, `150%`, ...

> Note: The value defaults to `1` or `100%`, leaving the target element unchanged. Higher values will increase the saturation. A value of `0` or `0%` will remove all the colors, leaving the element completely unsaturated. Negative values are not allowed.

## Example

The following example sets the saturation of a color to `50%` and `1.5` (or `150%`):

```css
.logo-image-2 {
  filter: saturate(50%);
}

.logo-image-3 {
  filter: saturate(1.5);
}
```

Here is the output for the above example:

![Output for the above example on saturate()](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-filterfunction-saturate-example.png)

Here, the first image shows the original saturation at `saturate(100%)`, the second image is less saturated at `saturate(50%)`, and the last image is more saturated with `saturate(1.5)`.
