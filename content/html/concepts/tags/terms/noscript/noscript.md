---
Title: '<noscript>'
Description: 'Displays if the user disabled Javascript in the browser.'
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
  <!-- What should display if JS is not enabled -->
</noscript>
```

The tag has no attributes and what is nested within the tag will be displayed (if JS is not enabled).
  
## Example

```html
<script href="someScript.js"></script>
<no-script>
  <p>Please enable Javascript for this page to load. Learn how to <a href="https://support.google.com/adsense/answer/12654?hl=en">here</a></p>
</noscript>
  
Output of the example if JS is not enabled:
  
![Output of the example](https://raw.githubusercontent.com/Codecademy/docs/main/media/no-script-tag-example.png)
