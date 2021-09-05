---
Title: 'flex'
Description: 'A shorthand that combines the flex-grow, flex-shrink, and flex-basis properties. This syntax allows for the concise delineation of flex item parameters with one line of code.'
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

The `flex` property is a shorthand that combines the `flex-grow`, `flex-shrink`, and `flex-basis` properties. This syntax allows for the concise delineation of flex item parameters with one line of code.

## Syntax

```css
#item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
}
```

The values can be any of the following options:

- A keyword: `auto`
- A length: `200px`
- An integer or decimal: `1` , `.5`

`flex-shrink` and `flex-basis` are optional.

Default values are `0 1 auto`.

## Example 1

An element that will occupy twice the space as other items in the same container:

```css
#item-foo {
  flex: 2 0 auto;
}
```
