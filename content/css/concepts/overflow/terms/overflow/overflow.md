---
Title: 'overflow'
Description: 'Defines how a block level element should handle content that goes beyond its boundaries.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Defines how a block-level element should handle content that goes beyond its boundaries. This is shorthand for [`overflow-x`](https://www.codecademy.com/resources/docs/css/overflow/overflow-x) and [`overflow-y`](https://www.codecademy.com/resources/docs/css/overflow/overflow-y).

## Syntax

```css
overflow: <value>;
```

where `<value>` can be one of the following:

- `visible`: the default value. No content will be clipped and a scrollbar will not appear.
- `hidden`: content will be clipped and no scrollbar will appear.
- `scroll`: content will be clipped and a scrollbar will appear.
- `auto`: content will be clipped if it does not fit in the containing block, and a scrollbar will appear if it does.
- Keyword values: `initial`, `inherit`, `revert`, `unset`.

## Example 1

Any content that overflows will be visible outside of its containing element.

```css
.view-box {
  overflow: visible;
}
```

## Example 2

Provide a scrollbar and clip any content that overflows.

```css
.view-box {
  overflow: scroll;
}
```

## Example 3

Any Content that overflows will not be visible and no scrollbar will appear.

```css
.view-box {
  overflow: hidden;
}
```

The following image demonstrates the three `overflow` properties described above:

![Three div elements with overflow properties of visible, scroll, and hidden](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-overflow.png)
