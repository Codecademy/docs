---
Title: 'margin'
Description: 'Shorthand property for margin-top, margin-bottom, margin-left and margin-right to create space around an element or for each side individually. '
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Margin'
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property for `margin-top`, `margin-bottom`, `margin-left` and `margin-right` to create space around an element or for each side individually.

## Syntax

```css
margin: <value>;
```

where `<value>` can be one of the following:

- Keyword: `auto`
- Length: `20px`
- Percentage: `5%`

**Note:** Providing one value will effect the margin of all sides. Providing two values will result in the first value setting the margin of top and bottom and the second value setting the margin of left and right sides. Three values will result in the first value applied to the top, the second value to the left and right, and the third value applied to the bottom side. Four values will apply to top, right, bottom and left.

## Example 1

Set the margin on all sides to `20px` by providing just one value:

```css
h1 {
  background-color: green;
  color: #fff;
  margin: 20px;
}
```

## Example 2

Set the top and bottom margins to `10px` and left and right to `20px` by providing two values:

```css
h1 {
  background-color: green;
  color: #fff;
  margin: 10px 20px;
}
```

## Example 3

Set the top margin to `10px`, right and left to `20px` and bottom to `5px` by providing three values:

```css
h1 {
  background-color: green;
  color: #fff;
  margin: 10px 20px 5px;
}
```

## Example 4

Set the top margin to `10px`, right to `15px`, left to `20px` and bottom to `5px`:

```css
h1 {
  background-color: green;
  color: #fff;
  margin: 10px 15px 20px 5px;
}
```

## Example 5

Center `h1` horizontally:

```css
h1 {
  background-color: green;
  color: #fff;
  width: 80%;
  margin: 0 auto;
}
```
