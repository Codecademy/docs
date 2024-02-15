---
Title: '<ol>'
Description: 'Represents an ordered list of items.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Lists'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<ol>`** element represents an ordered list of items.

## Syntax

```pseudo
<ol>
  <li><!-- Content here --></li>
</ol>
```

By default, each list item is prepended with a number marker. However, this can be changed to ordered letters or Roman numbers with the `type` attribute (ideal for legal or technical documentation).

Ordered lists can also appear unordered if a CSS rule like `list-style-type: disc;` is applied.

## Example

```html
<ol>
  <li>Preheat oven to 325&deg; F 👩‍🍳</li>
  <li>Drop cookie dough 🍪</li>
  <li>Bake for 15 min ⏰</li>
</ol>
```

Each list item appears numbered by default:

![Rendered <ol> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/ol-tag-example.png)
