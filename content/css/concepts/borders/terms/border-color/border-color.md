---
Title: 'border-color'
Description: 'Sets the color of the border. The default value is the current element color.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Sets the color of the border. The default value is the current element color.

## Syntax

```css
border-color: <color>;
```

where `<color>` can be one of the following:

- Color keyword: `red`, `transparent`, `darkblue`
- Hexadecimal value: `#FF0000`
- RGB value: `rgb(255, 0, 0)`
- RGBA value: `rgba(255, 0, 255, 0.3)`
- HSL value: `hsl(0, 100%, 50%)`
- HSLA Value: `hsla(180, 80%, 100%, 0.8)`

## Example 1

Set the border of the `h1` element to be green, 3 pixels thick, and dotted:

```css
h1 {
  border-color: green;
  border-width: 3px;
  border-style: dotted;
}
```

![h1 element with a green dotted 3px border](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-color-example1.png)

## Example 2

Set the top and bottom borders `coral` and the left and right borders `beige`:

```css
h1 {
  border-color: coral beige;
}
```

![h1 element with coral top and bottom borders, and beige left and right borders](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-border-color-example2.png)
