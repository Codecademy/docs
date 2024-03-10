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

Changing the **`font-style`** selection will determine if the font is vertical or has a degree of slant. The most commonly used variant of `font-style` is `italic`.

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

## Example

`normal`: text will be in it's basic design. This is the default style in Cascading Style Sheets (CSS).

```css
p {
  font-style: normal;
}
```

`italic`: text will be tilted, and some characters will be replaced with a specialized tilted character (e.g. "a" to "ɑ" in the font `Calibri`).

```css
p {
  font-style: italic;
}
```

`oblique`: gives text a minor slant to the font without changing any characters. It is less supported and may not always be available.

```css
p {
  font-style: oblique;
}
```

`inherit`: text will take on the style used by the parent element.

```css
p {
  font-style: inherit;
}
```

`initial`: set the text `font-style` to its default style, similar to `normal`.

```css
p {
  font-style: initial;
}
```

![Different variants of the font-style attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-styles-example.png) 
