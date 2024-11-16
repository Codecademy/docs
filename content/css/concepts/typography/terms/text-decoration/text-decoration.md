---
Title: 'text-decoration'
Description: 'Adds a line beneath, over, or through the text.'
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

The **text-decoration** CSS property adds a line beneath, over, or through the text. To reset it, the property can be set to `none`.

The line can also be styled as wavy, dotted, or in a custom colour.

## Syntax

```css
text-decoration: <text-decoration-value>;
```

The `text-decoration-value` can be the following:

- `none`
- `underline`
- `overline`
- `line-through`

## Examples

### Paragraph with an underline

```css
p {
  text-decoration: underline;
}
```

```HTML
<p>Example Paragraph</p>
```

![text decoration underline](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-decoration-underline.png)

### Paragraph with an overline

```css
p {
  text-decoration: overline;
}
```

```HTML
<p>Example Paragraph</p>
```

![text decoration overline](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-decoration-overline.png)

### Paragraph with a line through

```css
p {
  text-decoration: line-through;
}
```

```HTML
<p>Example Paragraph</p>
```

![text decoration line through](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-decoration-line-through.png)

### Paragraph with a wavy red underline

```css
p {
  text-decoration: red wavy underline;
}
```

```HTML
<p>Example Paragraph</p>
```

![text decoration red wavy underline](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-decoration-red-wavy-underline.png)
