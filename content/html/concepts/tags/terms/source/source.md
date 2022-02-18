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
  - 'Semantic'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<source>` element allows for multiple sources to be in one element in case one type is not supported. The `<source>` element is nested within an `<video>`, `<img>` or another tag that embeds content. It allows for multiple files to be in one element in case one file type is not supported the video can still play with a different type.  Here's an example:

```html

<video>
  <source src = "./video.mp4" type="video/mp4">
  <source src = "./video.webm" type="video/webm">
  Video not supported
</video>
```

The browser would first try and play the `.mp4` video and if it can't it will try the `.webm` video. And if neither of those work it will display `Video not supported`. You can have as many `<source>` elements as you want as long as you have enough files for each on
