---
Title: '@font-face'
Description: 'Specifies a custom font to be used to display text.'
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

Specifies a custom font to be used to display text.

## Syntax

The `@font-face` rule allows us to use custom fonts instead of just using "web-safe" fonts. We can give the font a name then point to the file in which the font is stored.

```css
@font-face {
  font-family: /* Font name */ ;
  src: url(' ') /* Link to font */;
}
```

There are different types of **font formats**:

- WOFF (Web Open Font Format)
- WOFF2 (version 2.0 of WOFF but more compressed)
- EOT (Embedded OpenType)
- TTF (TrueType Fonts)
- SVG (Scalable Vector Graphics)

The name of the file in which the font is stored, must end in a supported font format (e.g. **custom_font.woff**, **custom_font.woff2**, **custom_font.ttf**, **custom_font.svg**, **custom_font.eot**).

If the font needs to load faster, then WOFF is the best. This format is supported in most of the browsers.

## Example 1

The below code snippet uses the `font-family` property and the style `superFont` to give the text a unique look.

Specifying a font called `uniqueFont` then linking the URL to the font folder.

```css
@font-face {
  font-family: uniqueFont;
  src: url('unique_font.woff');
}
```

## Example 2

Creating a custom font called `superFont` then applying the font to a `div`.

```css
@font-face {
  font-family: superFont;
  src: url('super_font.ttf');
}

div {
  font-family: superFont;
}
```

> **Note:** Another thing to note while using any font is to check for browser support. If the format that we use is not supported, it will just roll back to the default system font.
