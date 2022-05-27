---
Title: '<video>'
Description: 'Represents an interface for adding video content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents an interface for adding video content to the page.

## Syntax

```html
<!-- Surrounding source tag -->
<video>
  <source src="filename.mp4" type="video/mp4" />
  <h3>Fallback text if video will not play</h3>
</video>

<!-- With src attribute -->
<video src="filename.mp4">
  <h3>Fallback text if video will not play</h3>
</video>
```

The `<video>` tag may include `<source>` tags and fallback text. It may also use attributes to convey intention, some common ones are below:

- `autoplay`: if this attribute is present the video will play automatically
- `controls`: if this attribute is present the video will have an overlay allowing the user to control the video
- `height` and `width`: control the height and width of the video element, in pixels
- `poster`: the URL for a photo to show the user while the video is loading
- `src`: the URL for the video that should be shown to the user

## Example

```html
<html>
  <head> </head>
  <body>
    <video controls height="480" poster="spooky_ghost.jpg">
      <source type="video/webm" src="spooky_ghost.webm" />

      Sorry you can't watch this video in your browser. Click
      <a href="spooky_ghost.webm">here</a> to download it, instead.
    </video>
  </body>
</html>
```

<video src="https://raw.githubusercontent.com/Codecademy/docs/main/media/html-video-tag-example.mp4?raw=true">
  <h3>This video is not supported.</h3>
</video>
