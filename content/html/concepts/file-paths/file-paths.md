---
Title: 'File Paths'
Description: 'A file path describes the location of a file in a web sites folder structure. They are used to link to external files.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:s
  - 'File Paths'
  - 'Files'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

A **file path** describes the location of a file in a web site's folder structure. They are used to link to external files, like:

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

Here is a helpful image to illustrate what a absolute filepath is.

![Image not Found!](image-resources/abs-filepath.jpeg)

## Relative File Paths

Relative file path are paths that links to a local file in the same folder or on the same server, for example:

- ./about.html
- ./style.css
- ./images/logo.png

Relative file paths begin with `./` followed by a path to the local file. `./` tells the browser to look for the file path from the current folder.

```html
<a href="./about.html">
  The URL for this anchor element is a relative file path.
</a>
```

Here is a helpful image to illustrate a relative filepath is.

![Image not Found!](image-resources/rel-filepath.jpeg)

## Root-Relative File Paths

Root-relative paths are similar to absolute paths, but they start from the root of the website (domain) regardless of the current directory:

- "/images/logo.png" (references an image file from the root of the website)
- "/css/styles.css" (reference stylesheets and scripts from the root as well)
- "/js/script.js" (reference stylesheets and scripts from the root as well)

Path-relative file paths begin with a `/`. This forward slash signals to the web browser that the path should be resolved starting from the root directory of the website.

```html
<a href="/images/logo.png">
  The URL for this anchor element is a root-relative file path.
</a>
```

Here is a helpful image to illustrate a root-relative filepath is.

![Image not Found!](image-resources/root-relative-path.png)

and here is what it looks like in a tree format where the node at the top is the 'root' node denoted by the **'/'** and the rest are the subdirectories in that root directory. 

![Image not Found!](image-resources/root-relative-path-tree.jpeg)

## Link to a Specific Part of the Page

The anchor element `<a>` can create hyperlinks to different parts of the same HTML document using the `href` attribute to point to the desired location with `#` followed by the `id` of the element to link to.

```html
<div>
  <p id="id-of-element-to-link-to">A different part of the page!</p>
</div>

<!-- Later in the page --->

<a href="#id-of-element-to-link-to">Take me to a different part of the page</a>
```

Here is an example image that may be useful for implementation of the anchor element for the purpose going to a different part of the page.

![Image not Found!](image-resources/anchor-specific-page.jpeg)