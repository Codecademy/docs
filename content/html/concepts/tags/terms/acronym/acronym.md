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
  
## `<acronym>` tag

The `<acronym>` was used to highlight acronyms before it was deprecated. Now use the [`<abbr>`](https://www.codecademy.com/resources/docs/html/tags/abbr) tag instead. When using the tag there will be a dotted underline for the word to signify that it is an acronym.
  
## Syntax

Use the `title` attribute to add the meaning of the acronym. It is not required but, when omitted, nothing will happen when it is hovered over.
  
```html
<p>A great place to learn to code is <acronym title="Codecademy">CC</acronym><p>
```
  
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
