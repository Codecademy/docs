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

The `<source>` element allows for multiple sources to be in one element in case one type is not supported. The `<source>` element is nested within an `<video>`, `<img>` or another tag that embeds content. It allows for multiple files to be referenced in one element in case a file type is not supported. If one file type can not be displayed, the browser will attempt to display the next.

## Example

```html
<video>
  <source src="./video.mp4" type="video/mp4" />
  <source src="./video.webm" type="video/webm" />
  Video not supported
</video>
```

The browser will first try and play the **./video.mp4** file and if it can't it will try the **./video.webm** file. If neither of those work one of the following will happen:

* `<video>` will remain inline within the page's markup with only the controls visible (if they're enabled).
* Fallback content (like "Video not supported") is displayed for browsers that do not support HTML5, which includes the `<audio>` or `<video>` tags.

A large amount of `<source>` elements can be used as long as there is a valid file sourced for each one.
