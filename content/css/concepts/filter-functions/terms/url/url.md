---
Title: 'url()'
Description: 'References an external resource such as an image, icon, or other asset provided by the file path or URL.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'CSS'
  - 'Files'
  - 'Images'
  - 'Fonts'
  - 'URL'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

The CSS **`url()`** functional notation is used to reference an external resource (such as an image, font, or icon) from a file path or URL.

## Syntax

```pseudo
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

**Note:** When using resources hosted on another domain, browsers enforce Cross-Origin Resource Sharing (CORS) rules. Fonts in particular may require correct CORS headers to load successfully.

## Example 1

Set the background image of the `.banner-image` class to `cat.png`:

```css
.banner-image {
  background-image: url('../images/cat.png');
}
```

Font Format Hints
In `@font-face` rules, the `url()` function is often paired with the separate `format()` function to provide format hints that help browsers choose which font resource to download and optimize performance.

Common font format hints include:

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
