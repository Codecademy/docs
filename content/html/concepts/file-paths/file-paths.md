---
Title: "File Paths"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "File Paths"
  - "Files"
  - "URL"
CatalogContent:
  - "learn-html"
  - "paths/front-end-engineer-career-path"
---

A file path describes the location of a file in a web site's folder structure. They are used to link to external files, like:
- Websites
- Images
- Videos
- MP3 files
- Style sheets
- JavaScript code

## Absolute File Paths

URL paths in HTML can be absolute paths, like a full URL, for example: 

**https://developer.mozilla.org/en-US/docs/learn**

```html
<a href="https://developer.mozilla.org/en-US/docs/Web">
  The URL for this anchor element is an absolute file path.
</a>
```

## Relative File Paths

Relative file path are paths that links to a local file in the same folder or on the same server, for example: 

**./style.css**

Relative file paths begin with `./` followed by a path to the local file. `./` tells the browser to look for the file path from the current folder.

```html
<a href="./about.html">
  The URL for this anchor element is a relative file path.
</a>
```

## Link to a Specifific Part of the Page

The anchor element `<a>` can create hyperlinks to different parts of the same HTML document using the href attribute to point to the desired location with `#` followed by the `id` of the element to link to.

```html
<div>
  <p id="id-of-element-to-link-to">A different part of the page!</p>
</div>
 
<a href="#id-of-element-to-link-to">Take me to a different part of the page</a>
```
