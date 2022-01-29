---
Title: 'Links'
Description: 'The anchor element `<a>` is used to link to another page or to a certain part of the page if you use its `id`. And the `<link>` element defines a link between a document and an external resource.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Files'
  - 'Link'
  - 'Tags'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The anchor element `<a>` is used to link to another page or to a certain part of the page if you use its `id`. And the `<link>` element defines a link between a document and an external resource.

`<a>` links are visible to the end users, whereas `<link>` links are not.

## Anchor Element

The `<a>` anchor element is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL using the hyperlink reference attribute, `href`.

The `href` determines the location the anchor element points to.

### Text Link

```html
<!-- Creating a text link -->

<a href="http://www.codecademy.com">Visit this site</a>
```

### Image Link

```html
<!-- Creating an image link -->

<a href="http://www.codecademy.com"> <img src="logo.jpg">Click this image </a>
```

## Link Element

The `<link>` is used to connect the document to an outside resource, most commonly stylesheets. Unlike most elements, which come as opening and closing tags, the `<link />` is self-closing and only contains attributes.

The two primary attributes are:

- A `rel` to describe the format of the external source.
- An `href` that contains the filepath to the external source.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Links in HTML</title>
    <link rel="stylesheet" href="some/outside/source.css">
  </head>
  <body>
    ...
  </body>
</html>
```
