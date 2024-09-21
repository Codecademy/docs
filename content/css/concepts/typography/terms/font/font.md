---
Title: 'font'
Description: "Shorthand property that sets different properties for an element's font in a single declaration."
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Fonts'
  - 'Typography'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

The **`font`** property is a shorthand property that sets different properties for an elements font in a single declaration.

## Syntax

```pseudo
font: <values>;
```

The `font` property can have the following properties as `<values>`:

Required values:

- `font-family`
- `font-size`

Optional values:

- `line-height`
- `font-weight`
- `font-stretch`
- `font-style`
- `font-variant`

> **Note:** Some edge cases to keep in mind:
>
> - `font-style`, `font-variant`, and `font-weight` must come before `font-size`.
> - `line-height` must be declared after `font-size` and only following a forward slash.

## Example 1

Setting an `h1` elements font to Georgia italic, size of 10px, and line height of 40px in a single declaration.

```css
h1 {
  font: italic 10px/40px Georgia, sans-serif;
}
```

The above would be the same as:

```css
h1 {
  font-style: italic;
  font-size: 10px;
  line-height: 40px;
  font-family: Georgia, sans-serif;
}
```

## Example 2

Setting an `h2` font with all seven properties in one declaration.

```css
h2 {
  /* font-stretch | font-style | font-variant | font-weight | font-size | line-height | font-family */
  font: expanded italic small-caps bolder 20px/30px cursive;
}
```
