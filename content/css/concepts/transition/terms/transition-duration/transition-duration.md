---
Title: "transition-duration"
Description: "Specifies how long an elements transition should take to complete. "
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Transitions"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-css"
  - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path"
  - "https://www.codecademy.com/learn/paths/full-stack-engineer-career-path"
---

## Definition 

Specifies how long an elements transition should take to complete. 

## Syntax

```css
transition-duration: <value>;
```

The `transition-duration` value can be specified by one of the folllowing:
- Seconds: `2s`
- Milliseconds: `125ms`

**Note**: We can give a comma-separated list of values to set different durations for properties of the same element. The duration of all properties will be the same if a single value is provided. 

## Example 1

Setting a `h1` element to complete its transition over a duration of `3` seconds.

```css
h1 {
  transition-duration: 3s; 
}
```

## Example 2

Setting a `div` elements height transition to last `4` seconds and color transiton to last `200` milliseconds.

```css
div {
  transition-duration: 4s, 200ms;
  transition-property: height, color; 
}
```