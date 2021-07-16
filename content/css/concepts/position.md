---
Title: "position"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Positioning"
  - "Box Model"
  - "Layout"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

The `position` property dictates how an element is positioned in the document.

## Syntax

```css
position: <value>;
```

The `position` property has five values that can be applied. 

- `static`: The element follows the normal flow of the document, being rendered in order from top to bottom.

- `relative`: The element is positioned relative to its original position. If an attribute of `top:10px;` is applied to the element, it will move 10 pixels down based on its original position. 

- `absolute`: The element ignores the normal flow of the document and other elements will behave as if the element doesn't exist. This allows for the element to be placed anywhere on the document without disturbing the positioning of other elements. 

- `fixed`: The element acts the same as `absolute` but stays in the same position regardless of scrolling. 

- `sticky`: A combination of `relative` and `fixed`, the element behaves like `relative` until a scroll threshold is met which then the element behaves like `fixed`.


## Example 1

Setting an `h1` element to a `position` of `static`.

```css
h1 {
  position: static; 
}
```

## Example 2

Setting an `h1` element to a `position` of `relative`.

```css
h1 {
  position: relative; 
}
```

## Example 3

Setting an `h1` element to a `position` of `absolute`.

```css
h1 {
  position: relative; 
}
```

## Example 4

Setting an `h1` element to a `position` of `fixed`.

```css
h1 {
  position: fixed; 
}
```

## Example 5

Setting an `h1` element to a `position` of `sticky`.

```css
h1 {
  position: sticky; 
}
```