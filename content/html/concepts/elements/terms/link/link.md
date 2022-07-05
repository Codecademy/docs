---
Title: '<link>'
Description: 'Connects the current page with an external file.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Files'
  - 'Link'
  - 'Tags'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<link>`** element connects the current web page with an external file such as a stylesheet or a library.

## Syntax

```html
<head>
  <title>Links in HTML</title>
  <link rel="stylesheet" href="some/outside/source.css" />
</head>
```

The two primary attributes are:

- A `rel` to describe the format of the external source.
- An `href` that contains the filepath to the external source.

It is best practice that the `<link>` element is always defined inside the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) element.

## Example

The following example shows how the `<link>` element can also be used to make icons for the page, including Apple [PWA](https://www.codecademy.com/resources/docs/general/progressive-web-application) home screen icons:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Links in HTML</title>
    <link rel="stylesheet" href="some/outside/source.css" />
    <link rel="icon" href="favicon.ico" />

    <!-- After iOS 7-->
    <link rel="apple-touch-icon" href="apple-icon-114.png" type="image/png" />

    <!-- iOS 7 and before -->
    <link
      rel="apple-touch-icon-precomposed"
      href="apple-icon-114.png"
      type="image/png"
    />
  </head>
  <body>
    <!-- markup here -->
  </body>
</html>
```
