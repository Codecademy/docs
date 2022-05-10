---
Title: '<acronym>'
Description: 'Creates text that will be displayed when hovered over.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Accessibility'
  - 'DOM'
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<acronym>` was used to highlight acronyms before it was deprecated. The [`<abbr>`](https://www.codecademy.com/resources/docs/html/tags/abbr) tag is used instead. When the tag is used, the acronym will be signified with a dotted underline for the word or phrase.
  
## Syntax

```html
<p>A great place to learn to code is <acronym title="Codecademy">CC</acronym><p>
```
  
The `title` attribute adds meaning of the acronym. It is not required but, when omitted, nothing will happen when it is hovered over.
## Example
```html
<p>
  Tomorrow I'll be heading to the Kennedy Space Center to learn about the
  National Aeronautics and Space Administration (NASA). Touring through the
  rockets used in
  <acronym title="National Aeronautics and Space Administration">NASA</acronym>
  will be such fun!
</p>
```
![Acronym example](https://raw.githubusercontent.com/Codecademy/docs/main/media/abbr-example.png)
