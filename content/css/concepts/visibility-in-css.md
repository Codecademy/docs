---
Title: "visibility"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "visibility"
  - "tables"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

The visibility property shows or hides an element. If the element is hidden, it will still take up space within the page.

## Syntax

```css
visibility: <value>;
```

The visibility property has three values. 

- `visible`: Shows the element.
- `hidden`: Hides the element.
- `collapse`: Hides both the element and the space it would have occupied. 

**Note:** `collapse` should only be used with `<table>` rows, row groups, columns, and column groups. If `collapse` is used on other elements, it will be treated the same as `hidden`. Using `collapse` on `<table>` is useful because it will hide a row or column without affecting the table layout.  

## Example 1

Showing an `<h1>` element.

```css
h1 {
  visibility: visible; 
}
```

## Example 2

Hiding an `<h1>` element. 

```css
h1 {
  visibility: hidden; 
}
```

## Example 3

Hiding a `<tr>` element within a table. 

```css
tr {
  visibility: collapse; 
}
```
