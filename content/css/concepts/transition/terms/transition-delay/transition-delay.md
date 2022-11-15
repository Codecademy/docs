---
Title: 'transition-delay'
Description: 'Specifies how long an element should wait before beginning a transition. '
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

The **`transition-delay`** property specifies how long an element should wait before beginning a transition.

## Syntax

```pseudo
transition-delay: <value>;
```

The `transition-delay` value can be specified by one of the following:

- Seconds: `2s`
- Milliseconds: `125ms`

> **Note:** A comma-separated list of values can be used to set different delays for properties of the same element. The delay of all properties will be the same if a single value is provided.

## Example 1

Specifying a `h1` element to wait 3.5 seconds before beginning a transition.

```css
h1 {
  transition-delay: 3.5s;
}
```

## Example 2

Specifying a `div` elements left margin transition to wait 200 milliseconds and width transition to wait 1 second before transitioning.

```css
div {
  transition-delay: 200ms, 1s;
  transition-property: margin-left, width;
}
```
