---
Title: 'background-color'
Description: 'Defines a color for the background of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`background-color`** property defines a color for the background of an [HTML element](https://www.codecademy.com/resources/docs/html/elements).

## Syntax

```pseudo
background-color: <value>;
```

Where `<value>` can be one of the following:

- Color keyword: `blue`, `transparent`, `rebeccapurple`
- Hexadecimal value: `#FF0000`
- RGB value: `rgb(255, 0, 0)`
- RGBA value: `rgba(255, 0, 255, 0.3)`
- HSL value: `hsl(0, 100%, 50%)`
- HSLA value: `hsla(180, 80%, 100%, 0.8)`
- Special keyword values: `currentColor`, `transparent`

## Example 1

Set background color of the [`h1`](https://www.codecademy.com/resources/docs/html/elements/h1-h6) element to be `green`:

```css
h1 {
  background-color: green;
}
```

![Shows h1 element with green background over an aquamarine background](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-color-example-1.png)

## Example 2

Set the background color of the `h1` element to be `transparent`:

```css
h1 {
  background-color: transparent;
}
```

![Shows h1 element with transparent background over an aquamarine background](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-color-example-2.png)
