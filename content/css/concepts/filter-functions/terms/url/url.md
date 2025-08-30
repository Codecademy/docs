---
Title: 'url()'
Description: 'References an external resource such as an image, icon, or other asset provided by the file path or URL.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'World Wide Web'
  - 'Files'
  - 'CSS'
  - 'Url'
  - 'Images'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
  - 'paths/full-stack-engineer-career-path'
---

A CSS function that accepts a file path or URL as its parameter and references an external resource-such as an image, font, icon, or other asset-for use in a stylesheet.

## Syntax

```css
/* Common form */
property: url(<path-to-file>);

/* With modifiers */
property: url(<path-to-file> <url-modifier>*);
```

Here the required `<path-to-file>` can be one of the following:

- Relative path: `url("images/cat.png")`
- Absolute path: `url("https://www.google.com/images/cat.png")`
- Data URI: `url("data:image/png;base64,...")`
- Blob URL: `url("blob:https://google.com/1234-5678")`

**Note:** Due to Cross-Origin-Resources (CORS), resources hosted on another domain will need permission to render to prevent malicious code from executing.

## Example 1

Set the background image of the .banner-image class to cat.png:

```css
.banner-image {
  background-image: url('../images/cat.png');
}
```

**Note:** Relative paths are resolved from the CSS file's location, not the HTML file.

Though rarely used, the optional `<url-modifier>*` provides additional information about the resource (path provided) to the browser. This piece of code informs what resource type the path is, increases performance optimization by handling how and if the file will be downloaded, and clarifies the correct file extension. The `*` at the end represents that there can be zero, one, or more then one modifier added. The modifier argument is used in `@font-face` majority of the time with the `format()` modifier.

Here `<url-modifier>*` can be one of the following:

- WOFF2 format: `url("fonts/MyFont.woff2") format("woff2")`
- WOFF format: `url("fonts/MyFont.woff") format("woff")`
- TrueType format: `url("fonts/MyFont.ttf") format("truetype")`
- OpenType format: `url("fonts/MyFont.otf") format("opentype")`
- Embedded OpenType (legacy IE): `url("fonts/MyFont.eot") format("embedded-opentype")`
- SVG fonts (legacy): `url("fonts/MyFont.svg") format("svg")`

## Example 2

Load a custom font called `customFont` with multiple formats for compatibility:

```css
@font-face {
  font-family: 'customFont';
  src: url('fonts/customFont.woff2') format('woff2'), url('fonts/customFont.woff')
      format('woff'), url('fonts/customFont.ttf') format('truetype');
}

h1 {
  font-family: 'customFont', serif;
}
```
