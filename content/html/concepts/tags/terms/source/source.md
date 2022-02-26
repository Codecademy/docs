---
Title: '<source>'
Description: 'Represents an interface for adding source content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'DOM'
  - 'Elements'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<source>` element allows for multiple sources or file formats to be associated with the `<audio>`, `<video>`, and `<picture>` tags. In case one source is incompatible with a given browser, another one can be referenced. If all else fails, the browser will attempt to display fallback content. The `<sourse>` tag is a child of a `<audio>`, `<video>`, or `<picture>` and has atleast 1 attribute. The `src` attribute needs to be in every `<source>` tag with the file path to the media.

## Example

```html
<video controls>
  <source src="./video.mp4" type="video/mp4" />
  <source src="./video.webm" type="video/webm" />
  Video not supported
</video>
```

The browser will first try and play the **./video.mp4** file and if it can't it will try the **./video.webm** file. If neither of those work one of the following will happen:

* `<video>` will remain inline within the page's markup with only the controls visible (if they're enabled).
* Fallback content (like "Video not supported") is displayed for browsers that do not support HTML5, which includes the `<audio>` or `<video>` tags.

A large amount of `<source>` elements can be used as long as there is a valid file sourced for each one.
