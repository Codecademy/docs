---
Title: 'Videos'
Description: 'Embedding videos within a site creates lively and informative pages that are attractive to visitors.'
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

Embedding **videos** within a site creates lively and informative pages that are attractive to visitors. Similar to serving images, serving videos raise concerns about the impact on users due to greater bandwidth requirements as well as the less accessible nature of the medium.

## Video Codec and Format

Unless videos are preloaded or set to automatically play, their impact on page speed should be minimal. However, attention should be paid to video file sizes to guarantee that the greatest number of users can stream them.

Videos typically contain multiple items:

- The collection of images that is the video.
- The audio accompanying those images.
- Any number of subtitles or captions.

Therefore, there is a distinction between the format of the codec used to encode each of these individual items as well as the format of the container meant to package it all together. Container and codec support is browser dependent, with the latest generation of codecs attempting to provide even better video compression with less quality loss.

`MP4` is not only the most widely supported container format, but also supports the largest number of codecs, so it is the default option for containers. The situation for audio codecs is similar, with `AAC` being the default due to its good compression and widespread use. For video codecs, there are two main options or media stacks:

| Container Format | Video Codec | Audio Codec | Use Case                                                                                                                         |
| ---------------- | ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| MP4              | H.264       | AAC         | Compatible with most every browser and used if support is of the utmost concern.                                                 |
| MP4              | AV1         | AAC         | Useed for streaming the absolute smallest files at a given quality. Better compression with better quality, but less compatible. |

## Inserting a Video

A video is inserted onto a page through opening and closing [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video) tags. Self-closing `<source>` tags are nested inside the `<video>` tags:

```pseudo
<video attribute1 attribute2... poster="">
  <source type="video/mp4" src="filename1.filetype" />
  <source type="video/mp4" src="filename2.filetype" />
  ...
  <a href="">Some text</a>
</video>
```

### Example

```html
<video controls autoplay loop poster="big_bunny.jpg">
  <source type="video/mp4" src="big_bunny.mp4" />

  Sorry, your browser doesn't support this video. Click
  <a href="big_bunny.mp4">here</a> to download it instead.
</video>
```

The above code will render this:
![image example](https://raw.githubusercontent.com/Codecademy/docs/main/html-add-media-videos.png)

This example:

- Includes `controls`, `autoplay`, and `loop` attributes.
- Provides a thumbnail for the video with `poster="big_bunny.jpg"`.
- Declares the source file for the video, `big_bunny.mp4`, and its MIME (Multipurpose Internet Mail Extensions) or media type, `video/mp4`.
- Provides a fallback text that allows the user to download the video instead.

To modify the original example to support the `AV1` video codec and fallback to the `H.264` video codec:

```html
<video controls autoplay loop poster="big_bunny.jpg">
  <source type="video/mp4" src="big_bunny_av1.mp4" />
  <source type="video/mp4" src="big_bunny_h264.mp4" />

  Sorry, your browser doesn't support this video. Click
  <a href="big_bunny_h264.mp4">here</a> to download it instead.
</video>
```

## Accessibility with Videos

It is generally discouraged to use videos as the background for a webpage. In many cases, a static image should be considered instead to avoid any potential issues caused by moving images as well as to better support users with screen readers. However, if a video must be used as a background, a few key steps should be taken to best support the most users:

- If the video is purely decorative, `aria-hidden="true"` can denote to screen readers that the video provides no additional context or content and is purely decorative.
- The `prefers-reduced-motion` CSS media query can be used to disable auto-playing videos for certain users.

To convey the same content to users who are not able to view videos, provide either sufficient captions or aria descriptions for the video.

Captions can be added as a child of the `<video>` element using the `<track>` tag with the following key attributes:

- `kind` to describe the text track. Here it is a `caption`, but it can also be `subtitles` or `metadata`.
- `label` is how this option is represented in the user interface.
- `srclang` represents the language for the caption.
- `src` is the actual location of the caption track. Text tracks such as subtitles and captions use the `WebVTT` format as indicated by the `.vtt` extension.

```html
<video controls poster="big_bunny.jpg">
  <source type="video/mp4" src="big_bunny_av1.mp4" />
  <source type="video/mp4" src="big_bunny_h264.mp4" />
  <track kind="caption" label="English" srclang="en" src="big_bunny-en.vtt" />
  <track kind="caption" label="Español" srclang="es" src="big_bunny-es.vtt" />

  Sorry, your browser doesn't support this video. Click
  <a href="big_bunny_h264.mp4">here</a> to download it instead.
</video>
```
