---
Title: 'margin-inline'
Description: 'Defines the logical inline start and end margins for an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Margin'
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines the logical inline start and end margins for an element.

## Syntax

```css
margin-inline: <value>;
```

where `<value>` can be one of the following:

- Length: `20px`
- Percentage: `5%`
- Auto: `auto`

> **Note:** This property accepts one or two values. When one value is provided, it applies to both inline-start and inline-end. When two values are provided, the first applies to inline-start and the second to inline-end. Values provided may be negative, placing the element closer.

## Example 1

Set the inline margins of the `h1` element to be `20px`:

```css
h1 {
  margin-inline: 20px;
}
```

## Example 2

Set the inline-start margin of the `h1` element to be `10px` and inline-end margin to be `30px`:

```css
h1 {
  margin-inline: 10px 30px;
}
```

## Example 3

Set the inline margins of the `h1` element to be `5%`:

```css
h1 {
  margin-inline: 5%;
}
```