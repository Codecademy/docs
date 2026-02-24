---
Title: 'margin-block'
Description: 'margin-block property defines margin at the start and end of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Margin'
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
---

Defines margin at the start and end of an element. It depends on the block direction.

## Syntax

```css
margin-bottom: <value>;
margin-bottom: <value1> <value2>;
```

If there is only one value, that value is used for start and end margins for an element.
If there are two values, <value1> represents start margin and <value2> represents end margin.

`<value>` can be one of the following:

- Length: `20px` `-20%`
- Percentage: `5%` `-5%`

**Note:** Values provided may be negative. To specify start and end margin direction use `writing-mode` property.

## Example 1

Sets the start and end margin:

```css
h1 {
  margin-block: 20px;
}
```

## Example 2

Sets the start margin to `5%` and end margin `-10px`:

```css
h1 {
  margin-block: 5% -10px;
}
```

## Example 3

Sets right margin to `10px` and left margin to `20px`

```css
h1 {
  margin-block: 10px 20px;
  writing-mode: vertical-rl;
}
```
