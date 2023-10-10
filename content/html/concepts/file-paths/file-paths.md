---
Title: 'File Paths'
Description: 'A file path describes the location of a file in a web sites folder structure. They are used to link to external files.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'File Paths'
  - 'Files'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
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

**<span>https\:<span>\/\/codecademy\.com/resources/docs**

```html
<a href="https://www.codecademy.com/resources/docs">
  The URL for this anchor element is an absolute file path.
</a>
```

## Relative File Paths

Relative file path are paths that links to a local file in the same folder or on the same server.

Consider a folder:

```
my-project
├── index.html
├── about.html
├── image
|   └── logo.png
└── post-1
    └── post-1.html
```

Accessing files from `index.html` for example:

```html
<a href="./about.html">
  The URL for this anchor element is a relative file path.
</a>

<img
    src="./image/logo.png"
    alt="The URL for this img element is a relative file path."
/>
```

Relative file paths begin with `./` followed by a path to the local file. `./` tells the browser to look for the file path from the current folder.

It's also possible to access files in upper level, using `../` which tells the browser to look for the file path from one level up.

The code clip below is from `post-1.html`:

```html
<a href="../about.html">
  The URL for this anchor element is a relative file path.
</a>

<img
    src="../image/logo.png"
    alt="The URL for this img element is a relative file path."
/>
```

## Link to a Specific Part of the Page

The anchor element `<a>` can create hyperlinks to different parts of the same HTML document using the `href` attribute to point to the desired location with `#` followed by the `id` of the element to link to.

```html
<div>
  <p id="id-of-element-to-link-to">A different part of the page!</p>
</div>

<!-- Later in the page --->

<a href="#id-of-element-to-link-to">Take me to a different part of the page</a>
```
