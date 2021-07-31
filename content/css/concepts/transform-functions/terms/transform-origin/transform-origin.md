---
Title: "transform-origin"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Positioning"
  - "Functions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Sets the origin of an elements tranformation.

## Syntax

```css
transform-origin: <values>; 
```

The `transform-origin` property can have up to three values. The first value is for the *x-axis*, second value for the *y-axis* and third value for the *z-axis*. Each axis can have one of the following values:

*x-axis* values:
- `left`
- `center`
- `right`
- lenght value(e.g. `50px`)
- percentage value(e.g. `25%`)

*y-axis* values:
- `top`
- `center`
- `bottom`
- lenght value(e.g.`50px`)
- percentage value(e.g. `25%`)

*z-axis* value"
- lenght value(e.g.`50px`)

**Note 1:** The order in which the *x-axis* and *y-axis* values are declared does not matter if only keywords are used.

**Note 2:** The third value is always represented as the `z-axis` and must always be in lenght value.  
  
## Example 1

Setting an `img` elements transformation origin from the center.

```css
img {
  transform-origin: center;  
}
```

## Example 2

Setting an `img` elements transformation origin from the top left.

```css
img {
  transform-origin: top left;  
}
```

## Example 3

Setting an `img` elements transformation origin from the bottom left with a *z-axis* offset of `100px`.

```css
img {
  transform-origin: bottom left 100px;  
}
```

