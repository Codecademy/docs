---
Title: '<span>'
Description: 'Used for grouping related text or elements for styling and scripting.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Structure'
  - 'Style'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<span>`** element is used for grouping text or elements together for styling and scripting. Unlike the block-level [`<div>`](https://www.codecademy.com/resources/docs/html/elements/div) element, `<span>` is an inline element that is usually wrapped inside another element. ([`<li>`](https://www.codecademy.com/resources/docs/html/elements/li), [`<p>`](https://www.codecademy.com/resources/docs/html/elements/p), etc.)

This element should only be used whenever there is no [semantic element](https://www.codecademy.com/resources/docs/html/semantic-html) to use instead.

## Syntax

```pseudo
<span attributes=""><!-- Place content here. --></span>
```

The `<span>` element can be selected with [attributes](https://www.codecademy.com/resources/docs/html/attributes), such as `class` or `style`.

## Example

In the example below, a familiar poem is marked up with `<span>` wrapped in a single `<p>` element:

```html
<p>
  Roses are <span style="color: red;">Red</span>,<br />
  Violets are <span style="color: blue;">Blue</span>,<br />
  We think HTML is <span style="color: orange">awesome</span>!<br />
  What about <span style="text-decoration: underline;">you</span>?
</p>
```

![Rendered markup with styled span tags.](https://raw.githubusercontent.com/Codecademy/docs/main/media/span-tag-image.png)
