---
Title: '<embed>'
Description: 'Inserts external content such as a video, image, page, and more.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Images'
  - 'Video'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<embed>` tag renders an element that wraps around interactive content, including images, videos, and even other web pages. This is achieved with tools such as browser plug-ins. However, since most modern browsers no longer support plug-ins, there are other tags to use instead of `<embed>`. This includes:

- Playing video content with the [`<video>`](https://www.codecademy.com/resources/docs/html/tags/video) tag.
- Displaying images with the [`<img>`](https://www.codecademy.com/resources/docs/html/tags/img) tag.
- Rendering additional markup with the [`<iframe>`](https://www.codecademy.com/resources/docs/html/tags/iframe) tag.

Since those tags are available, using the `<embed>` tag is discouraged.

## Syntax

The `<embed>`tag is self-closing and accepts at least four properties:

- The `type` of content to be embedded.
- The `src` of the content.
- The content's `height`, measured in pixels.
- The content's `width`, measured in pixels.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Learning about HTML</title>
  </head>
  <body>
    <embed type="image/jpg" src="my_image.jpg" width="300" height="200">
  </body>
</html>
```
