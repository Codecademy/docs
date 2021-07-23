---
Title: "flex-direction"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Flexbox"
  - "Layout"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition

A property that specifies the direction in which elements are distributed within a container.

## Syntax

```css
#element-container {
  display: flex;
  flex-direction: <flex-value>;
}
```

The `<flex-value>` can be one of four options:
1. Elements arranged left to right: `row` 
2. Elements arranged right to left: `row-reverse` 
3. Elements arranged top to bottom: `column` 
4. Elements arranged bottom to top: `column-reverse` 

## Example 1

Content that is arranged horizontally within a container:

```css
#spam-container {
  display: flex;
  flex-direction: row; 
}
```
