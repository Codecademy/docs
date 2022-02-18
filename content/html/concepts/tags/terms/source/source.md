---
Title: '<source>'
Description: 'Represents an interface for adding source content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<source>` element allows for multiple sources to be in one element incase one type is not supported. The `<source>` element is nested with in an `<video>`, `<img>` or another tag that emeds content. It allwoes for multiple files to be in one element incase one file type is not supported the video can still play with a diffrent type.  Heres an example:

```html

<video>
  <source src = "./video.mp4" type="video/mp4">
  <source src = "./video.webm" type="video/webm">
  Video not supported
</video>
```

The browser would first try and play the `.mp4` video and if it cant it will try the `.webm` video. And if neither of those work it will display `Video not supported`. You can have as many `<source>` elements as you want as long has you have enought files for each one.
