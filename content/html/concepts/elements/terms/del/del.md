---
Title: '<del>'
Description: 'Used to show deleted portion text by a document, usually rendered in strikethrough text.'
Subjects:
- 'Web Development'
- 'Web Design'
  Tags:
- 'Elements'
- 'Tags'
- 'Style'
  CatalogContent:
- 'learn-html'
- 'paths/front-end-engineer-career-path'
---

The **`<del>`** element is used to show a deleted portion of text and is commonly intended to show the changes made to a document while keeping a history of the changes made. Browsers render it showing strike-through text. Its behavior equals the `<s>` element but is semantically different, `<s>` is usually used to show no longer pertinent, inaccurate, or wrong text.

## Syntax

```html
<del>
  <!-- deleted text here -->
</del>
```

The **`<del>`** element should only contain text content or other elements meant for text content.

## Example

```html
<html>
  <head> </head>
  <body>
    <p>It show <del>deleted</del> text</p>
  </body>
</html>
```

![Rendered <del> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/del-tag-example.png)
