---
Title: 'background-position-y'
Description: 'Sets the vertical position of a background image inside an element.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Background'
  - 'Box Model'
  - 'Positioning'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

In CSS, **`background-position-y`** controls how far up or down the background image is placed inside an element, letting you adjust its vertical alignment without affecting the horizontal position.

## Syntax

```pseudo
background-position-y: <value>;
```

**Parameters:**

- `value`: Specifies the vertical position of the background image. Common values include:
  - `top`, `center`, `bottom`
  - Length values like `10px`, `2rem`
  - Percentage values like `50%`

**Return value:**

- None. This property sets a style rule and does not return a value

> **Note:** This property will be overridden if `background` or `background-position` properties are applied after it.

## Example 1: Keyword-based vertical positioning

In this example, `background-position-y` uses keywords to align the background image at the top, center, or bottom of the element while keeping the horizontal position unchanged:

```css
.img {
  border: 2px dashed black;
  width: 200px;
  height: 200px;
  background-image: url('./assets/box.png');
  background-repeat: no-repeat;
}

.img.top {
  background-position-y: top;
}

.img.center {
  background-position-y: center;
}

.img.bottom {
  background-position-y: bottom;
}
```

The resulting output of the code block above is:

![Background-position-y-keywords](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-y-keywords.png)

## Example 2: Value-based vertical positioning

In this example, `background-position-y` uses percentage and length values to precisely control how far down the background image is positioned inside the element:

```css
.img {
  border: 2px dashed black;
  width: 200px;
  height: 200px;
  background-image: url('./assets/box.png');
  background-repeat: no-repeat;
}

.img.top {
  background-position-y: bottom 20%;
}

.img.center {
  background-position-y: bottom 7rem;
}

.img.bottom {
  background-position-y: bottom 2cm;
}
```

The resulting output of the code block above is:

![Background-position-y-multiple-values](https://raw.githubusercontent.com/Codecademy/docs/main/media/background-position-y-multiple-values.png)
