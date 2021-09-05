---
Title: 'padding'
Description: 'Shorthand property for padding-top, padding-bottom, padding-left and padding-right that sets the space between the content and margin of an element or for each side individually.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Padding'
  - 'Box Model'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property for `padding-top`, `padding-bottom`, `padding-left` and `padding-right` that sets the space between the content and margin of an element or for each side individually.

## Syntax

```css
padding: <value>;
```

where `<value>` can be one of the following:

- Length: `20px`
- Percentage: `5%`

**Note:** Providing one value will effect the padding of all four borders. Providing two values will result in the first value setting the padding of top and bottom and the second value setting the padding of left and right sides. Three values will result in the first value applied to the top, the second value to the left and right, and the third value applied to the bottom. Four values will apply to top, right, bottom and left.

## Example 1

Set the padding on all sides to `20px`:

```css
h1 {
  border: 2px solid green;
  padding: 20px;
}
```

## Example 2

Set the top and bottom padding to be `4px` and left and right to `2px`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  padding: 4px 2px;
}
```

## Example 3

Set the top padding to `10px`, right and left to `20px` and bottom to `5px`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  padding: 10px 20px 5px;
}
```

## Example 4

Set the top padding to `10px`, right to `15px`, left to `20px` and bottom to `5px`:

```css
h1 {
  border-color: green;
  border-style: dashed;
  padding: 10px 15px 20px 5px;
}
```
