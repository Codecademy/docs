---
Title: 'overflow-x'
Description: 'Defines how a block level element should handle content that goes beyond its x-axis boundary.'
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

Defines how a block level element should handle content that goes beyond its x-axis boundary.

## Syntax

```css
overflow-x: <value>;
```

where `<value>` can be one of the following:

- `visible`: the default value. No content will be clipped and a scrollbar will not appear.
- `hidden`: content will be clipped and no scrollbar will appear.
- `scroll`: content will be clipped and a scrollbar will appear.
- `auto`: content will be clipped if it does not fit in the containing block, and a scrollbar will appear if it does.
- Keyword values: `initial`, `inherit`, `revert`, `unset`.

## Example 1

Clip any content that overflows without providing a scrollbar to view overflow content.

```css
.view-box {
  overflow-x: hidden;
}
```

## Example 2

Provide a scrollbar and clip any content that overflows.

```css
.view-box {
  overflow-x: scroll;
}
```

## Example 3

Any overflowing content will be visible outside its container.

```css
.view-box {
  overflow-x: visible;
}
```

The following image demonstrates each of the `overflow-x` properties described above:

![Three examples of a div with a fixed width, each with a different overflow-x property](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-overflow-x.png)
