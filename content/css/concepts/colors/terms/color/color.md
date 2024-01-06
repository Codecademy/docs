---
Title: 'color'
Description: 'To set color property values for an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Style'
  - 'Colors'
  - 'CSS'
  - 'Design'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

To set **`color`** property values for an element. `color` sets the color of an element's textual and decorative parts and text.

## Syntax

```css
color: value;
```

The `value` of the color property can be any of the following:

- Name of the color (e.g., `aqua`, `khaki`, `red`)
- RGB (red, green, and blue) colors (e.g., `rgb(249, 2, 171)`)
- Hexadecimal colors (e.g., `#ff0000`)

## Example

The `h1` tag is set to be orange in color, and the `p` tag is set as pink in color. The background color, black/#000000/rgb(0,0,0), is only set for context:

```css
body {
  background-color: black;
}
h1 {
  color: orange;
}
p {
  color: pink;
}
```

```css
body {
  background-color: #000000;
}
h1 {
  color: #ffa500;
}
p {
  color: #ffc0cb;
}
```

```css
body {
  background-color: rgb(0,0,0);
}
h1 {
  color: rgb(255,165,0);
}
p {
  color: rgb(255,192,203);
}
```

Three examples were given in the example block above, each of them would yield or translate to the same output:

![Shows how the color property responds to different elements](https://raw.githubusercontent.com/Codecademy/docs/main/media/colors-image-output.png)
