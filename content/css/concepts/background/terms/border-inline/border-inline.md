---
Title: 'border-inline'
Description: 'Sets the width, style, and color of an element’s inline-start and inline-end borders.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Borders'
  - 'Box Model'
  - 'Colors'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`border-inline`** property is a shorthand property that sets the width, style, and color of an element’s inline-start and inline-end borders. The physical sides affected depend on the writing mode and text direction.

## Syntax

```pseudo
border-inline: <value>;
```

**Parameters:**

- `<value>`: May include one or more of the following, in any order:
  - `<line-width>`: Sets the border thickness (e.g., `1px`, `thin`, `medium`, `thick`).
  - `<line-style>`: Sets the border style (e.g., `solid`, `dashed`, `dotted`, `double`, `none`).
  - `<color>`: Sets the border color (e.g., `red`, `#333`, `rgb(0 0 0)`).
  - **Global values:** `inherit`, `initial`, `revert`, `revert-layer`, `unset`.

If a single value is provided, it applies to both inline-start and inline-end borders.

**Return value:**

None. Sets the computed values of `border-inline-start` and `border-inline-end`.

## Example 1

The following example sets the inline borders of the `p` element to be blue, 2 pixels thick, and solid:

```css
p {
  border-inline: 2px solid blue;
}
```

## Example 2

The following example set the inline borders of the `div` element to be red, 5 pixels thick, and dashed:

```css
div {
  border-inline: dashed 5px red;
}
```

In a left-to-right writing mode, this applies borders to the left and right sides of the element. In a right-to-left writing mode, the inline start and end sides adjust automatically.
