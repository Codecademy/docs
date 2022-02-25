---
Title: '<abbr>'
Description: 'Indicates an acronym or abbreviation of a longer word or phrase.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'DOM'
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<abbr>` tag indicates an acronym or abbreviation of a longer word or phrase. It can use the `title` attribute which is optional but recommended.

## Syntax

Whenever the `<abbr>` tag is used, it should use the `title` attribute, which indicates the meaning of the abbreviation or acronym.
```html
<abbr title=""><!-- The acronym or abbreviation here --></abbr>
```

While using the `title` attribute can semantically helpful, it is still a good practice in accessibility to spell out the word/phrase in the text the first time before applying the `<abbr>` tag. Some browsers also apply default styling to the `<abbr>` tag like dotted underlines or translating the text into small letters.

## Example

```html
<p>
  Tomorrow I'll be heading to the Kennedy Space Center to learn about the National Aeronautics and Space Administration (NASA). Touring through the rockets used in
  <abbr title="National Aeronautics and Space Administration">NASA</abbr>
  will be such fun!
</p>
```

When the mouse moves over the element then it shows the information written inside the `title` attribute on a tooltip.
