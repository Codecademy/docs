---
Title: 'text-overflow'
Description: 'Specifies how hidden content is signaled to the user.'
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

Specifies how hidden content is signaled to the user.

## Syntax

```css
text-overflow: <value>;
```

The following values can be applied to the `text-overflow` property:

- `clip`: Default value. Cuts off/hides the overflowing content.
- `ellipsis`: Displays an ellipsis, "...".
- `" "`: A custom string set by the author.

**Note:** The properties `white-space: nowrap;` and `overflow: hidden;` are required for `text-overflow` to work.

## Example 1

Setting a `div` so that overflowing text is represented with an ellipsis.

```css
div {
  text-overflow: ellipsis;

  /* Additional properties required for text-overflow to function: */
  overflow: hidden;
  white-space: nowrap;
}
```
