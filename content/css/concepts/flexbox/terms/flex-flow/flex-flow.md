---
Title: 'flex-flow'
Description: 'A shorthand for specifying the flex-direction and flex-wrap properties. Defining flex-flow provides the parameters for child elements to be organized across the horizontal and vertical axes.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Flexbox'
  - 'Layout'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The `flex-flow` property is a shorthand for specifying the `flex-direction` and `flex-wrap` properties. Defining `flex-flow` provides the parameters for child elements to be organized across the horizontal and vertical axes.

## Syntax

```css
#element-container {
  display: flex;
  flex-flow: <flow-value> <flow-value>;
}
```

A `<flow-value>` can be any of the values available for `flex-direction` and `flex-wrap`:

- flex-direction: `row`, `row-reverse`, `column`, `column-reverse`
- flex-wrap: `wrap`, `nowrap`, `wrap-reverse`

## Example 1

Content that is spaced horizontally and wrapping top to bottom:

```css
#spam-container {
  display: flex;
  flex-flow: row wrap;
}
```
