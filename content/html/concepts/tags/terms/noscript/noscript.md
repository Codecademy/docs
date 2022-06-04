---
Title: '<noscript>'
Description: 'Displays content within if Javascript is disabled in the browser or not supported.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<noscript>` tag will display its contents when the user disabled Javascript for that site.
  
## Syntax
  
```html
<noscript>
  <!-- What should display if JavaScript is not enabled or supported. -->
</noscript>
```

The tag has no attributes and what is nested within the tag will be displayed (if JS is not enabled).
  
## Example

```html
<script href="someScript.js"></script>
<no-script>
  <p>Please enable Javascript for this page to load. Learn how to <a href="https://support.google.com/adsense/answer/12654?hl=en">here</a></p>
</noscript>
```
  
The output might look like this:
  
![Output of the example](https://raw.githubusercontent.com/Codecademy/docs/main/media/no-script-tag-example.png)
