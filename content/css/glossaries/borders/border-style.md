---
Title: "border-style"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Borders"
  - "Box Model"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 
Sets the style of the border. The default value is `none`.

## Syntax

```css
border-style: <line-style>;
```

where `<line-style>` can be the following values:

- `none`
- `hidden`
- `dotted`
- `dashed`
- `solid`
- `double`
- `groove`
- `ridge`
- `inset`
- `outset`

## Example

Set border of the `h1` element to be green, 3 pixels thick, and dotted.

```css
h1 {
  border-color: green;
  border-width: 3px;
  border-style: dotted;
}
```

```css
h1 {
  border-style: dashed solid;
}

- Top and bottom borders are dashed.
- Left and right borders are solid.
