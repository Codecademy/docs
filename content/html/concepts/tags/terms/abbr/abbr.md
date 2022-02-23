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

The `<abbr>` tag indicates an acronym or abbreviation of a longer word or phrase. It can contain the `<title>` attribute which isn't mandatory despite being recommended.

## Syntax

```html
<abbr><!-- The acronym or abbreviation goes in here --></abbr>
```

Whenever the `<abbr>` tag is used, it should use the `title` attribute, which indicates the meaning of the abbreviation or acronym.
Users don't see the text in the attribute, but browsers, search engines, and assistive technologies do use this information. Some browsers also apply default styling to the `<abbr>` tag like dotted underlines or translating the text into small letters.

## Example

```html
<p>
  Tomorrow I'll be heading to the
  <abbr title="National Aeronautics and Space Administration">NASA</abbr>
  department for a guided tour.
</p>
```

When the mouse moves over the element then it shows the information written inside the `title` attribute on a tooltip.
