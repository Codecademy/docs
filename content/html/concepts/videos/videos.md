---
Title: 'Videos'
Description: 'Embedding videos within a site creates more lively and informative pages that are more attractive to visitors.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Accessibility'
  - 'Video'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Embedding videos within a site creates more lively and informative pages that are more attractive to visitors. Similar to serving images, serving video raises concerns on the impact to users due to the higher bandwidth requirements as well as the less accessible nature of the medium.

## Choosing a Video Codec and Format

Unless videos are preloaded or set to automatically play, their impact on page speed should be minimal. However, attention should be paid to video file sizes to guarantee that the greatest numbers of users can stream them.

Videos typically contain multiple items: the collection of images that is the video, the audio accompanying those images, and any number of subtitles or captions. Therefore there is a distinction between the format of the codec used to encode each of these individual items as well as the format of the container meant to package it all together. Container and codec support is browser dependent, with the latest generation of codecs attempting to provide even better video compression with less quality loss.

`MP4` is not only the most widely supported container format, but also supports the largest number of codecs, so it is the default option for containers. The situation for audio codecs is similar, with `AAC` being the default due to its good compression and wide spread use. For video codecs there are two main options: `H.264` for if support is of the upmost concern and `AV1` for streaming the absolute smallest files at a given quality.

In summary there are two main media stacks:

| Container Format | Video Codec | Audio Codec | Use Case                                                    |
| ---------------- | ----------- | ----------- | ----------------------------------------------------------- |
| MP4              | H.264       | AAC         | Compatible with most every browser                          |
| MP4              | AV1         | AAC         | Better compression with better quality, but less compatible |

## Inserting a Video

Below is an example of how a video is commonly inserted into a page:

```html
<video controls poster="spooky_ghost.jpg">
  <source type="video/mp4" src="spooky_ghost.mp4">

  Sorry, your browser doesn't support this video. Click
  <a href="spooky_ghost.mp4">here</a> to download it instead.
</video>
```

This example:

- Sets the `control` attribute to have the browser offer playback controls to the user
- Provides a thumbnail for the video with `poster="spooky_ghost.jpg"`
- Declares the source file for the video, `spooky_ghost.mp4`, and its MIME type, `video/mp4`
- Provides a fallback text that allows the user to download the video instead

Sources are written in preference order, so that the first source listed is played if the browser supports it, with the subsequent sources acting as a fallback. This is usually used to try newer video formats while also providing a fallback for better compatibility. To modify the original example to support the `AV1` video codec and fallback to the `H.264` video codec:

```html
<video controls poster="spooky_ghost.jpg">
  <source type="video/mp4" src="spooky_ghost_av1.mp4">
  <source type="video/mp4" src="spooky_ghost_h264.mp4">

  Sorry, your browser doesn't support this video. Click
  <a href="spooky_ghost_h264.mp4">here</a> to download it instead.
</video>
```

## Accessibility with Videos

It is generally discouraged to use videos as the background for a webpage. In many cases a static image should be considered instead in order to avoid any potential issues caused by moving images as well as to better support users with screen readers. However, if a video must be used as a background, a few key steps should be taken to best support the most users:

- If the video is purely decorative, use `aria-hidden="true"` to denote to screen readers that the video provides no additional context or content and is purely decorative
- Use the `prefers-reduced-motion` CSS media query in order to disable autoplaying videos for certain users

To convey the same content to users who are not able to view videos, provide either sufficient captions or aria descriptons for the video.

Captions can be added as a child of the `<video>` element using the `<track>` tag with the following key attributes:

- `kind` to describe the text track. Here is it is a `caption`, but it can also be `subtitles` or `metadata`
- `label` is how this option is represented in the user interface
- `srclang` represents the language for the caption
- `src` is the actual location of the caption track. Text tracks such as subtitles and captions use the `WebVTT` format as indicated by the `.vtt` extension.

```html
<video controls poster="spooky_ghost.jpg">
  <source type="video/mp4" src="spooky_ghost_av1.mp4">
  <source type="video/mp4" src="spooky_ghost_h264.mp4">
  <track
    kind="caption"
    label="English"
    srclang="en"
    src="spooky_ghost-en.vtt"
  >
  <track
    kind="caption"
    label="Español"
    srclang="es"
    src="spooky_ghost-es.vtt"
  >

  Sorry, your browser doesn't support this video. Click
  <a href="spooky_ghost_h264.mp4">here</a> to download it instead.
</video>
```
