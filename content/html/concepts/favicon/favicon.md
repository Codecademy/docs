---
Title: 'Favicon'
Description: 'A favicon is a small icon that is displayed in the browser's address bar and tab title for a website.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Favicon'
  - 'Documentation'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

A favicon (short for "favorite icon") is a small icon that is displayed in the browser's address bar and tab title for a website. It is used to help users quickly identify the website and distinguish it from other tabs or bookmarks.

To add a favicon to your website, you need to create a small image that will be used as the favicon, and then include a link to it in the head of your HTML document using the `link` element. Here's an example of how to do this:

```html
<link rel="shortcut icon" type="image/x-icon" href="/path/to/favicon.ico" />
```

The `link` element with the `rel` attribute set to "shortcut icon" tells the browser that the linked resource is a favicon. The `type` attribute specifies the type of the favicon (in this case, "image/x-icon"), and the `href` attribute specifies the location of the favicon file.

Any image format that is supported by web browsers can be used as a favicon, but the most common format is .ico. An .ico file can be created using an image editor or online converter tool.

With the favicon file and the `link` element in the HTML, the favicon should be displayed in the browser's address bar and tab title for the website.
