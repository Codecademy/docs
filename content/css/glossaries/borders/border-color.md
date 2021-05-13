---
Title: "border-color"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Borders"
  - "Box Model"
  - "Colors"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Sets the color of the border. The default value is the current element color.

## Syntax

```css
border-color: <color>;
```

where `<color>` can be one of the following:

- Color name: `red`
- RGB value: `rgb(255, 0, 0)`
- Hexadecimal value: `#FF0000`
- HSL value: `hsl(0, 100%, 50%)`

## Example 1

Set border of the `h1` element to be green, 3 pixels thick, and dotted:

```css
h1 {
  border-color: green;
  border-width: 3px;
  border-style: dotted;
}
```

## Example 2

Set the top and bottom borders `coral` and the left and right borders `beige`:

```css
h1 {
  border-color: coral beige;
}
```
