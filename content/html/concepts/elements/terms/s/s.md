---
Title: '<s>'
Description: 'Used to draw attention to one or more words, usually rendered in strike-through text.'
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

The **`<s>`** element is used to highlight no longer pertinent, inaccurate, or wrong text. Browsers render it showing strike-through text.

## Syntax

```pseudo
<s>
  <!-- No longer pertinent, inaccurate, or wrong text here -->
</s>
```

The `<s>` element should only contain text content or other elements meant for text content.

> **Note:** The `<s>` element is semantically different from the `<del>` element because the former is just an edit while the latter conveys an actual update in a document.

## Example

The following is an example of the `<s>` element:

```html
<html>
  <head> </head>
  <body>
    <p>
      <s>worng txet</s>
    </p>
  </body>
</html>
```

The rendered output would look like this:

![Rendered <s> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/s-tag-example.png)
