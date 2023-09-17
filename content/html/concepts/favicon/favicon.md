---
Title: 'Favicon'
Description: 'A favicon is an icon that is displayed in the address bar for a browser and tab title for a website.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Favicon'
  - 'Documentation'
  - 'Icons'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

A **favicon** (short for "favorite icon") is an icon that is displayed in the browser's address bar and tab title for a website. It is used to help users quickly identify the website and distinguish it from other tabs or bookmarks.

![Codecademy's favicon](https://raw.githubusercontent.com/Codecademy/docs/main/media/favicon-codecademy.png)

## Syntax

```html
<head>
  <link rel="shortcut icon" type="image/x-icon" href="/path/to/favicon.ico" />
</head>
```

Favicons originate as small images (usually 16 x 16 pixels) that are added to a [`<link>`](https://www.codecademy.com/resources/docs/html/elements/link) element, which is included in the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) of the HTML document.

The following attributes are used in the `<link>` element for favicons:

- The `rel` attribute tells the browser that the linked resource is a favicon; setting to `"shortcut icon"` should accommodate most versions of the major browsers.
- The `type` attribute specifies the format of the linked resource (i.e., `"image/x-icon"` for favicons).
- The `href` attribute specifies the [file path](https://www.codecademy.com/resources/docs/general/file-paths) of the favicon file.

> **Note:** The most common file format for favicons are files with the `.ico` extension. However, other image formats may be supported depending on the browser (e.g., `.png`, `.gif`, and `.jpeg`). An `.ico` file can be created using an image editor or online converter tool.

With the favicon file and the `link` element in the HTML, the favicon should be displayed in the browser's tab title for the website.
