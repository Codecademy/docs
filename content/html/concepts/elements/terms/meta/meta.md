---
Title: '<meta>'
Description: 'Represents an interface to provide metadata pertaining to the document. Metadata is data that is used to describe the document that contains it.'
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

The **`<meta>`** element represents an interface to provide metadata pertaining to the document. Metadata is data that is used to describe the document that contains it. The `<meta>` element must be placed inside the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) element of the document.

## Syntax

```html
<meta />
```

The `<meta>` element that has no closing tag, meaning that it cannot have elements inside of it. It uses attributes to set properties, some common attributes are:

- `charset`: describes the character encoding used when writing the document
- `name`: describes the type of meta tag, may include things like `"author"`, `"description"`, `"keywords"`, and `"color-scheme"`
- `content`: accompanies `name` to provide the appropriate content specific to the value of `name`.

## Example

```html
<html>
  <head>
    <!-- Sets the character set used to create this HTML file -->
    <meta charset="utf-8" />
    <!-- Details the author of the document -->
    <meta name="author" content="Jasmine the Gorilla" />
    <!-- Provides a description used to improve discovery in search engines -->
    <meta
      name="description"
      content="A short fable about the origin of bananas, and the joy they provide."
    />
    <!-- Sets the color scheme to dark if possible, but lets the browser know that light will render correctly, too -->
    <meta name="color-scheme" content="dark light" />
  </head>

  <body></body>
</html>
```
