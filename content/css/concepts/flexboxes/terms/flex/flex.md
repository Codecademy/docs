---
Title: "flex"
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

A shorthand that combines the `flex-grow` , `flex-shrink` and `flex-basis` properties. This syntax allows for the concise delineation of flex item parameters with one line of code.

## Syntax

```css
#item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}

/* flex-shrink and flex-basis are optional */
```

The values can be any of the following options:
- A keyword: `auto` 
- A length: `200px` 
- An integer or decimal: `1` , `.5` 

Default values are `0 1 auto`.

## Example 1

An element that will occupy twice the space as other items in the same container:

```css
#item-foo {
  flex: 2 0 auto;
}
```
