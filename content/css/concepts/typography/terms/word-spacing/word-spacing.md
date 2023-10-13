---
Title: 'word-spacing'
Description: 'Sets space between words.'
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

The **`word-spacing`** attribute is used to set the size of spaces between words.

## Syntax

```pseudo
word-spacing: <word-spacing-value>;
```

The CSS units for `word-spacing-value` can be:

- `px`
- `em`

## Example

Given the following HTML `p` tag:

```html
<p>
  Docs is a community-driven collection of code documentation for popular
  programming languages and frameworks. Interested in helping build it?
</p>
```

Set the space between the words to `0.5em`:

```css
p {
  word-spacing: 0.5em;
}
```

This will display:

![Word Spacing Style on a Paragraph](https://raw.githubusercontent.com/Codecademy/docs/main/media/css-typography-word-spacing.png)

> **Note:** For word spacing, using `em` values are recommended because the spacing can be set to match the size of the font.
