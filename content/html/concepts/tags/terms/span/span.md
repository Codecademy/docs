---
Title: '<span>'
Description: 'Used for grouping related text or elements for styling and scripting.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Structure'
  - 'Style'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, the `<span>` tag is used for grouping text or elements together for styling and scripting. Unlike the block-level [`<div>` tag](https://www.codecademy.com/resources/docs/html/tags/div), `<span>` is an inline tag.

## Syntax

```html
<span><!-- Place content here. --></span>
```

The `<span>` tag is usually wrapped inside another tag such as `<li>` or `<p>`. It can also use global attributes such as the following:

- Selecting with `class` and `id` attributes for stylesheet rules or DOM manipulation.
- Inline styling with the `style` attribute.
- Creating custom property values with the `data-*` attribute.

This tag should only be used whenenver there is no [semantic element](https://www.codecademy.com/resources/docs/html/semantic-html) to use instead.

## Example

In the example below, a familiar poem is marked up with `<span>` wrapped in a single `<p>` tag:

```html
<p>
  Roses are <span style="color: red;">Red</span>,<br />
  Violets are <span style="color: blue;">Blue</span>,<br />
  We think HTML is <span style="color: orange">awesome</span>!<br />
  What about <span style="text-decoration: underline;">you</span>?
</p>
```

![Rendered markup with styled span tags.](https://raw.githubusercontent.com/Codecademy/docs/main/media/span-tag-image.png)
