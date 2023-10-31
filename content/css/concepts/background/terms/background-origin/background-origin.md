---
Title: 'background-origin'
Description: 'Specifies the background positioning area of a background.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Background'
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Specifies the background positioning area of a background.

## Syntax

**Note:** If the `background-attachment` is `fixed`, then `background-origin` will be ignored.

```css
background-origin: <value>;
```

where `<value>` can be one of the following:

- `content-box`: Relative positioning to the content box.
- `padding-box`: Relative positioning to the padding box.
- `border-box`: Relative positioning to the border box.
- Global values: `inherit`, `initial`, `revert`, `unset`

## Example 1

Set background positioning to the edge of the content box:

```css
.main {
  border: 5px dashed #4d4d4d;
  padding: 1rem;
  background: url(images/background-origin.jpg) no-repeat;
  background-origin: content-box;
}
```

The resulting output of the code block above is:

![Background origin set to padding-box](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-origin-content.png 'background-origin: padding-box')

## Example 2

Set background positioning to the inside edge of the border, respecting its padding:

```css
.main {
  border: 5px dashed #4d4d4d;
  padding: 1rem;
  background: url(images/background-origin.jpg) no-repeat;
  background-origin: padding-box;
}
```

The resulting output of the code block above is:

![Background origin set to padding-box](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-origin-padding.png 'background-origin: padding-box')

## Example 3

Set background positioning to the edge of the border:

```css
.main {
  border: 5px dashed #4d4d4d;
  padding: 1rem;
  background: url(images/background-origin.jpg) no-repeat;
  background-origin: border-box;
}
```

The resulting output of the code block above is:

![Background origin set to padding-box](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-origin-border.png 'background-origin: padding-box')
