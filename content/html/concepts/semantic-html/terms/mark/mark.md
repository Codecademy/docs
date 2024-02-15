---
Title: '<mark>'
Description: 'Represents part of a text that should be rendered as marked or highlighted.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Semantic'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<mark>` semantic HTML element represents part of a text that should be rendered as marked or highlighted, due to being particularly relevant in its specific context. It can be used to draw the reader's attention to a specific word, phrase, or section.

## Syntax

```html
<mark>
  <!-- Mark content goes inside the tag -->
</mark>
```

Using the `<mark>` element requires an opening and closing tag that wraps around a block of text. By default, browsers will render it as a black font on a yellow background, but this can be restyled via CSS.

## Example

In the example below, the `<mark>` element is used to highlight important words and phrases:

<!-- prettier-ignore -->
```html
<p>
  <!-- Main concepts in the paragraph are in <mark> tags and will be highlighted -->
  The <mark>properties</mark> of the noble gases can be well explained by modern theories of atomic structure: Their <mark>outer shell of valence electrons</mark> is considered to be <mark>"full"</mark>, giving them little tendency to participate in chemical reactions, and it has been possible to prepare only a few hundred noble gas compounds. The melting and boiling points for a given noble gas are close together, differing by less than 10 °C (18 °F); that is, they are <mark>liquids over only a small temperature range</mark>.
</p>
```

The resulting markup would look like this:

![Image of the result of the above code](https://raw.githubusercontent.com/Codecademy/docs/main/media/mark-example.png)
