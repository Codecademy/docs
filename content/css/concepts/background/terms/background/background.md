---
Title: 'background'
Description: 'Shorthand way of expressing the various background properties of one or more element backgrounds in any order using a single declaration.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Borders'
  - 'Images'
  - 'Box Model'
  - 'Colors'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Shorthand way of expressing the various background properties of one or more element backgrounds in any order using a single declaration.

## Syntax

```css
background: <value>;
```

where `<value>` can be any of the following:

- Attachment value: `scroll`, `fixed`
- Blend mode value: `dark`, `light`
- Clip value: `content-box`, `padding-box`, `border-box`
- Color value: `rgba(255, 0, 255, 0.3)`
- Image value: `url('cat.png')`
- Origin value: `content-box`, `padding-box`, `border-box`
- Position value: `top`, `50% 50%`
- Repeat value: `repeat`, `repeat-x`, `round`
- Size value: `contain`, `cover`

## Example 1

Sets `rebeccapurple` as the background color:

```css
body {
  background: rebeccapurple;
}
```

This will display:

![CSS Background Example 1](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-example-1.png)

## Example 2

Specifies the background-color, the background-image property to set the image to the background, background-repeat to specify the image to not be repeated, background-attachment to specify the image to be fixed and background-position to specify the image to be in center:

```css
body {
  background: blue url('whale.png') no-repeat fixed center;
}
```

This will display:

![CSS Background Example 2](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-background-example-2.png)
