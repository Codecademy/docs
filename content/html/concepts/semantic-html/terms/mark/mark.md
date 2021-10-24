---
Title: '<mark>'
Description: "Represents part of a text that should be rendered as marked or highlighted, due to its being particularly relevant in its specific context. It can be used to draw the reader's attention to a specific word, phrase or section."
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'HTML'
  - 'Semantic'
  - 'Syntax'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<mark>` semantic tag represents part of a text that should be rendered as marked or highlighted, due to its being particularly relevant in its specific context. It can be used to draw the reader's attention to a specific word, phrase or section.

## Syntax

```html
<mark>
  <!-- Mark content goes inside the tag -->
</mark>
```

`<mark>` requires a closing tag and wraps around a block of text. By default, browsers will render it as black font on a yellow background, but this can be changed via CSS.

## Example

### Highlighting key concepts

A typical usage example would be to highlight key concepts in a text, so that they immediately stand out to the reader and can be easily singled out.

```html
<html>
  <head> </head>
  <body>
    <p>
      <!-- Main concepts in the paragraph are enclosed in <mark> tags and will be rendered highlighted  -->
      The <mark>properties</mark> of the noble gases can be well explained by
      modern theories of atomic structure: Their
      <mark>outer shell of valence electrons</mark> is considered to be
      <mark>"full"</mark>, giving them little tendency to participate in
      chemical reactions, and it has been possible to prepare only a few hundred
      noble gas compounds. The melting and boiling points for a given noble gas
      are close together, differing by less than 10 °C (18 °F); that is, they
      are <mark>liquids over only a small temperature range</mark>.
    </p>
  </body>
</html>
```
