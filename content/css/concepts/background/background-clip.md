---
Title: "background-clip"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Background"
  - "Box Model"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

Defines the boundary within the element box at which the background is no longer drawn.

## Syntax

```css
background-clip: <value>;
```

Where `<value>` can be the following: `border-box | content-box | padding-box | text | initial`

## Example 1

Set background to the edge of the content box:

```css
body {
  background: #000000;
  border: 3px dashed blue;
  padding: 20px;
  background-clip: content-box;
}
```

## Example 2

Set background to the inside edge of the border:

```css
body {
  background: #000000;
  border: 3px dashed blue;
  padding: 20px;
  background-clip: padding-box;
}
```

## Example 3

Set background to the edge of the border:

```css
body {
  background: #000000;
  border: 3px dashed blue;
  padding: 20px;
  background-clip: border-box;
}
```

## Example 4

Set background within the foreground text:

```css
body {
  background: #000000;
  background-clip: text;
  color: transparent;
}
```
