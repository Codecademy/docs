---
Title: "flex-grow"
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

A property that specifies how much space an item may occupy relative to the other items in the container. An item assigned a flex-grow value of 3, will stretch to occupy 3 times more space than an item assigned a value of 1.

## Syntax

```css
#element-container {
  display: flex;
  flex-grow: <flex-value>;
}
```

The `<flex-value>` should be an integer or decimal value. The default value is zero, which limits an item to the initial or default size regardless of the available space.

## Example 1

Item three will stretch to occupy twice as much space as the other items:

```css
#main-container {
  margin: 2% 1% 0 1%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: stretch;
}

#item-1 {
  display: flex;
  flex-grow: 1;  
}

#item-2 {
  display: flex;
  flex-grow: 1;  
}

#item-3 {
  display: flex;
  flex-grow: 2;  
}
```
