---
Title: 'transition'
Description: 'Shorthand property that sets different properties to translate an element in a single declaration.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Transitions'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand property that sets different properties to translate an element in a single declaration.

## Syntax

```css
transition: <values>;
```

The `transition` property can have the following properties as values:

- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`

**Note:** The order in which the values are declared does not matter unless a delay is specified. The browser will always recognize the first time value as duration, so to declare a delay value we must first declare a duration value then a delay value.

## Example 1

Transitioning a `div` elements width from 100px to 300px in a linear motion, with a duration of 2 seconds after hovering over the element for 1 second.

```css
div {
  height: 100px;
  width: 100px;
  transition: width 2s 1s linear;
}

div:hover {
  width: 300px;
}
```

The above would be the same as:

```css
div {
  height: 100px;
  width: 100px;
  transition-property: width;
  transition-duration: 2s;
  transition-delay: 1s;
  transition-timing-function: linear;
}

div:hover {
  width: 300px;
}
```
