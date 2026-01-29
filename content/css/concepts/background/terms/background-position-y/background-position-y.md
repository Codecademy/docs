---
Title: 'background-position-y'
Description: 'Sets the initial vertical position for every background image. The position is relative to the position layer set by background-origin.'
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

## Syntax

**Note:** This property will be overridden if `background` or `background-position` properties are applied after it.

```css
background-position-y: <value>;
```

where `<value>` can be one of the following:

- Keywords values
  - `top`: aligns top edge of the background image with the top edge of the container
  - `center`: aligns center of the background image with the center of the container
  - `bottom`: aligns the bottom of the background image with the bottom edge of the container
- Percentage values:
  - `0%`: top edge of the background image is aligned with top edge of the container
  - `50%%`: centers the background image inside a container
  - `100%`: bottom edge of the background image is aligned with bottom edge of the container
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
