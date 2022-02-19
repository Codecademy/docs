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

The browser will first try and play the **./video.mp4** file and if it can't it will try the **./video.webm** file. And if neither of those work it will display "Video not supported". A large amount of `<source>` elements can be used as long as there is a valid file sourced for each one.
