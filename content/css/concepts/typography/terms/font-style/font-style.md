---
Title: 'font-style'
Description: 'To set the font style in which text will appear.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Fonts'
  - 'Typography'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

Changing the **font-style** selection will determine if the font is vertical or has a degree of slant. The most commonly used varient of font-style is `italic`.

![font-styles in html.](https://github.com/SarahCarlock/codecademyDocs/assets/112113100/4dce07d9-bd71-447c-94c6-d8468d66e150)

![font-styles visual examples.](https://github.com/SarahCarlock/codecademyDocs/assets/112113100/fcb3817f-86ac-47f5-a44e-386da8ad439a) 

## Syntax

```css
font-style: <font-style-value>;
```

The `font-style-value` can be the following:

- `normal`
- `italic`
- `oblique`
- `inherit`
- `initial`

## Examples

### `normal`: text will be in it's basic design. This is the default style in Cascading Style Sheets (CSS).

```css
p {
  font-style: normal;
}
```

### `italic`: _text will be tilted, some characters will be replaced with a specialized tilted character (e.g. "a" to "ɑ" in the font Calibri)._

```css
p {
  font-style: italic;
}
```

### `oblique`: gives text a minor slant to the font without changing any characters. It is less supported and may not always be available.

```css
p {
  font-style: oblique;
}
```

### `inherit`: text will take on the style used by the parent element.

```css
p {
  font-style: inherit;
}
```

### `initial`: sets the text font-style to it's default style, similar to `normal`.

```css
p {
  font-style: initial;
}
```