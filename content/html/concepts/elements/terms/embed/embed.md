---
Title: '<embed>'
Description: 'Inserts external content such as a video, image, page, and more.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Images'
  - 'Tags'
  - 'Video'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<embed>`** element renders an element that wraps around interactive content, including [images](https://www.codecademy.com/resources/docs/html/images), [videos](https://www.codecademy.com/resources/docs/html/videos), and even other web pages. This is achieved with tools such as browser plug-ins. However, since most modern browsers no longer support plug-ins, there are other tags to use instead of `<embed>`. This includes:

- Playing video content with the [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video) element.
- Displaying images with the [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) element.
- Rendering additional markup with the [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe) element.

Since those tags are available, using the `<embed>` element is discouraged.

## Syntax

```pseudo
<embed type="" src="" width="" height="" />
```

The `<embed>`element is self-closing and accepts at least four properties:

- The `type` of content to be embedded (e.g. "image/jpg").
- The `src` of the content.
- The content's `height`, measured in pixels.
- The content's `width`, measured in pixels.

## Example

The following example showcases the `<embed>` element:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Learning about HTML</title>
  </head>
  <body>
    <embed type="image/jpg" src="my_image.jpg" width="300" height="200" />
  </body>
</html>
```
