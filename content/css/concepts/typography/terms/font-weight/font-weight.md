---
Title: 'font-weight'
Description: 'To set the text to be thicker or thinner.'
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

To set the text to be thicker or thinner.

## Syntax

```css
font-weight: <font-weight-value>;
```

The `font-style-value` can be the following:

- `normal`
- `bolder`
- `bold`
- `initial`
- `inherit`
- `lighter`

or can be in the form of numerical values from `100` to `900`. The default value is `normal` while the default numerical value is `400`.

## Example 1

Set the `p` tag to `bold`:

```css
p {
  font-weight: bold;
}
```

The image below shows what text looks like with a bold font weight:

![A paragraph of text styled with a bold font weight.](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-font-weight-bold.png)

## Example 2

Set the `p` tag to `600`:

```css
p {
  /* This code snippet give the text a semi-bold style */
  font-weight: 600;
}
```

The image below shows what text looks like when the font weight is set to 600:

![A paragraph of text styled with a font weight of 600.](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-font-weight-600.png)

> **Note:** The way font weight renders can differ from browser to browser. For certain languages, it is not advised to use font weight. This includes languages with complex scripts such as Chinese and Japanese.
