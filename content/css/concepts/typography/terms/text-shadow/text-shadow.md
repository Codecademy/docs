---
Title: 'text-shadow'
Description: 'Adds shadow to text. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Fonts'
  - 'Typography'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Adds shadow to text.

## Syntax

```css
text-shadow: 2px 4px 10px blue;
```

The shadow is created with a combination of x and y offsets from the element, blur radius, and color:

- value 1 (required): Offsets the x-axis.
- Value 2 (required): Offsets the y-axis.
- Value 3 (optional): Sets the blur radius.
- Value 4 (optional): Sets the color of the shadow.

**Note:** We can add multiple text shadows by comma separating.

## Example 1

Creating a basic text shadow.

```css
h1 {
  /* x-offset | y-offset */
  text-shadow: 2px 4px;
}
```

## Example 2

Creating a text shadow with blur effect and blue color.

```css
h1 {
  /* x-offset | y-offset | blur-radius | color */
  text-shadow: 2px 4px 10px blue;
}
```

## Example 3

Adding multiple text-shadows.

```css
h1 {
  /* x-offset | y-offset | blur-radius | color */
  text-shadow: 2px 4px 10px #00e9ec, 3px 6px 5px green;
}
```
