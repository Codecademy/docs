---
Title: 'margin-block'
Description: 'Sets the margins on the block-start and block-end sides of an element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Box Model'
  - 'Margin'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The **`margin-block`** property sets the margins on the block-start and block-end sides of an element, controlling vertical spacing based on the writing mode and text direction.

## Syntax

```pseudo
margin-block: <value>;
```

**Parameters:**

- `<value>`: Specifies the margin size for block-start and block-end. Can be a length (`px`, `em`, `rem`), percentage (`%`), `auto`, or global values (`inherit`, `initial`, `unset`, `revert`).

**Return value:**

None. Sets a layout style on the element; it does not return a value.

## Example 1

The following example sets the start and end margin:

```css
h1 {
  margin-block: 20px;
}
```

This will display:

![margin-block-example-1](https://raw.githubusercontent.com/Codecademy/docs/main/media/margin-block-example-1.png)

## Example 2

The following example sets the start margin to `5%` and end margin `-10px`:

```css
h1 {
  margin-block: 5% -10px;
}
```

This will display:

![margin-block-example-2](https://raw.githubusercontent.com/Codecademy/docs/main/media/margin-block-example-2.png)

## Example 3

The following example demonstrates block margins in vertical writing mode:

```css
h1 {
  margin-block: 10px 20px;
  writing-mode: vertical-rl; /* block-start is top, block-end is bottom in vertical mode */
}
```

This will display:

![margin-block-example-3](https://raw.githubusercontent.com/Codecademy/docs/main/media/margin-block-example-3.png)
