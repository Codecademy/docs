---
Title: '<meta>'
Description: 'Represents an interface to provide metadata pertaining to the document. Metadata is data that is used to describe the document that contains it. The <meta> must be placed inside <head> section for the document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents an interface to provide metadata pertaining to the document. Metadata is data that is used to describe the document that contains it. The `<meta>` must be placed inside `<head>` section for the document.

## Syntax

```html
<meta>
```

`<meta>` is a tag that has no closing tag, meaning that it cannot have tags inside of it. It uses attributes to set properties, some common attributes are:

- `charset`: describes the character encoding used when writing the document
- `name`: describes the type of meta tag, may include things like `"author"`, `"description"`, `"keywords"`, and `"color-scheme"`
- `content`: accompanies `name` to provide the appropriate content specific to the value of `name`.

## Example

```html
<html>
  <head>
    <!-- Sets the character set used to create this HTML file -->
    <meta charset="utf-8">
    <!-- Details the author of the document -->
    <meta name="author" content="Jasmine the Gorilla">
    <!-- Provides a description used to improve discovery in search engines -->
    <meta
      name="description"
      content="A short fable about the origin of bananas, and the joy they provide."
    >
    <!-- Sets the color scheme to dark if possible, but lets the browser know that light will render correctly, too -->
    <meta name="color-scheme" content="dark light">
  </head>

  <body></body>
</html>
```
