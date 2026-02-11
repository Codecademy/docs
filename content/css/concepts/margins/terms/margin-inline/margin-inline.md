---
Title: 'margin-inline'
Description: 'Defines the logical inline start and end margins for an element.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Box Model'
  - 'Margin'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`margin-inline`** property sets the logical inline-start and inline-end margins of an element. These logical margins adjust automatically based on the element’s writing mode and text direction.

## Syntax

```pseudo
margin-inline: <value>;
```

Or, alternatively:

```pseudo
margin-inline: <start> <end>;
```

**Parameters:**

- `<value>`: Specifies the inline margins. Acceptable values include:
  - Length values such as `20px`, `2rem`
  - Percentage values such as `5%`
  - `auto`
  - Global values such as `inherit`, `initial`, `unset`, and `revert`

**Return value:**

None. This property sets the inline margins of an element.

> **Note:** This property accepts one or two values. When one value is provided, it applies to both inline-start and inline-end. When two values are provided, the first applies to inline-start and the second to inline-end. Values provided may be negative, placing the element closer.

## Example 1

This example sets the inline margins of the `h1` element to be `20px`:

```css
h1 {
  margin-inline: 20px;
}
```

## Example 2

This example sets the inline-start margin of the `h1` element to be `10px` and inline-end margin to be `30px`:

```css
h1 {
  margin-inline: 10px 30px;
}
```

## Example 3

The following example sets the inline margins of the `h1` element to be `5%`:

```css
h1 {
  margin-inline: 5%;
}
```
