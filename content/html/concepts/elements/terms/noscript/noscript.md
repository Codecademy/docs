---
Title: '<noscript>'
Description: 'Displays content within if Javascript is disabled in the browser or not supported.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<noscript>`** element displays its contents whenever [Javascript](https://www.codecademy.com/resources/docs/javascript) is disabled on the browser.

## Syntax

```html
<noscript>
  <!-- What should display if JavaScript is not enabled or supported. -->
</noscript>
```

The `<noscript>` element has no attributes and what is nested within the tag will be displayed.

## Example

In the example below, if JavaScript isn't enabled, the [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) element will not work and the content inside the `<noscript>` element will render:

```html
<script src="someScript.js"></script>
<noscript>
  <p>
    Please enable Javascript for this page to load. Learn how to
    <a href="https://support.google.com/adsense/answer/12654?hl=en">here</a>
  </p>
</noscript>
```

The output might look like this if Javascript is disabled or not available:

![Output of the example](https://raw.githubusercontent.com/Codecademy/docs/main/media/no-script-tag-example.png)
