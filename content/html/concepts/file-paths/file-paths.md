---
Title: 'File Paths'
Description: 'A file path describes the location of a file in a website's folder structure. They are used to link to external files.'
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

A **file path** describes the location of a file in a website's folder structure. They are used to link to external files, like:

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

Here is a helpful image to illustrate what an absolute file path is:

![This image was used to demonstrate the absolute path of a URL](https://raw.githubusercontent.com/Codecademy/docs/main/media/abs-filepath.png)

## Relative File Paths

Relative file paths are paths that link to a local file in the same folder or on the same server, for example:

- ./about.html
- ./style.css
- ./images/logo.png

Relative file paths begin with `./` followed by a path to the local file. `./` tells the browser to look for the file path from the current folder.

```html
<a href="./about.html">
  The URL for this anchor element is a relative file path.
</a>
```

Here is a helpful image to illustrate what a relative file path is:

![This image is used to try to explain that relative path with a tree example and explanation ](https://raw.githubusercontent.com/Codecademy/docs/main/media/rel-filepath.png)

## Root-Relative File Paths

Root-relative paths are similar to absolute paths, but they start from the root of the website (domain) regardless of the current directory:

- "/images/logo.png" (references an image file from the root of the website)
- "/css/styles.css" (reference stylesheets and scripts from the root as well)
- "/js/script.js" (reference stylesheets and scripts from the root as well)

Path-relative file paths begin with a `/`. This forward slash signals to the web browser that the path should be resolved starting from the website's root directory.

```html
<a href="/images/logo.png">
  The URL for this anchor element is a root-relative file path.
</a>
```

Here is a helpful image to illustrate what a root-relative file path is:

![This image is here to show what the root folder looks like](https://raw.githubusercontent.com/Codecademy/docs/main/media/root-relative-path.png)

and here is what it looks like in a tree format where the node at the top is the 'root' node denoted by the `/ ` and the  rest are the subdirectories in that root directory. 

![This image is here to visualize what a root directory looks like with all of its subdirectories](https://raw.githubusercontent.com/Codecademy/docs/main/media/root-relative-path-tree.png)

## Link to a Specific Part of the Page

The anchor element `<a>` can create hyperlinks to different parts of the same HTML document using the `href` attribute to point to the desired location with `#` followed by the `id` of the element to link to.

```html
<div>
  <p id="id-of-element-to-link-to">A different part of the page!</p>
</div>

<!-- Later in the page --->

<a href="#id-of-element-to-link-to">Take me to a different part of the page</a>
```

Here is an example image that may be useful for implementing the anchor element for going to a different part of the page:

![This image was to show how to use the anchor element to go to a specific part of a page](https://raw.githubusercontent.com/Codecademy/docs/main/media/anchor-specific-page.png)
