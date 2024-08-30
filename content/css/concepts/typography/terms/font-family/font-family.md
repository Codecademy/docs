---
Title: 'font-family'
Description: 'Specify the typeface in a rule set.'
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

Specify the typeface in a rule set.

## Syntax

```css
font-family: <font-family-name>;
```

Where `<font-family-name>` can be the following:

- `Roboto`
- `"Open Sans"`
- or can be selected from [Google Fonts](https://fonts.google.com/) that suites you.

If a font family name is not available, browsers will display their default font. When using a multi-word font name, wrap them in quotes.

## Example 1

Set the `h1` tag to `Roboto`:

```css
h1 {
  font-family: Roboto;
}
```

## Example 2

Set the `p` tag to Roboto and Noto Sans:

```css
p {
  /* Font stack */
  font-family: Roboto, 'Noto Sans';
}
```

If the primary `font-family` is not supported it will defer to the fallback font. Multiple fonts can be chained to create a font stack.

> **Note:** To use multiple languages in the same tag, like '你好 World!', the declared font may not be supported for the Chinese language. In that case, the Chinese text will be shown in the default font.
