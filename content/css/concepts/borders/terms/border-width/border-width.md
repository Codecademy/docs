---
Title: 'border-width'
Description: 'Shorthand property that sets the width for the overall border of an element or for each side individually.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Box Model'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property that sets the width for the overall border of an element or for each side individually.

## Syntax

```css
border-width: <value>;
```

where `<value>` can be the following:

- Width keyword: `medium`, `thin`, `thick`
- Length: `5px`

**Note:** Providing one value will effect the width of all four borders. Providing two values will result in the first value setting the width of top and bottom borders and the second value setting the width of left and right. Three values will result in the first value applied to the top, the second value to the left and right, and the third value applied to the bottom. Four values will apply to top, right, bottom and left.

## Example 1

Set all borders of the `h1` element to `medium` width:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: medium;
}
```

## Example 2

Set the width of the border top and bottom to be `4px` and left and right to `2px`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 4px 2px;
}
```

## Example 3

Set the width of the border top to `10px`, right and left to `medium` and bottom to `thick`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 10px medium thick;
}
```

## Example 4

Set the width of the border top to `10px`, right to `thin`, left to `20px` and bottom to `thick`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  border-width: 10px thin 20px thick;
}
```
