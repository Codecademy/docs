---
Title: 'src'
Description: 'Specifies the location of a digital source.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Elements'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`src`** attribute specifies the location of a digital source, which is typically a URL or a [file path](https://www.codecademy.com/resources/docs/html/file-paths). It is required for HTML elements like [`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) so that they can appear on a website or application.

## Syntax

```pseudo
<element  src="url">
```

`src` can also be used in the following elements:

| HTML Tag                                                                     | Description                                                                       |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio)   | Embeds sound files on websites and applications.                                  |
| [`<img>`](https://www.codecademy.com/resources/docs/html/images)             | Embeds online photos, logos, and other pictures into an HTML file.                |
| [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input)   | Creates interactive text boxes for online forms.                                  |
| [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) | Embeds JavaScript and other executive code or data into an HTML file.             |
| [`<track>`](https://www.codecademy.com/resources/docs/html/elements/track)   | Specifies the subtitles and closed captions for `<audio>` and `<video>` elements. |
| [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video)   | Embeds movie clips or other video sources into an HTML file.                      |

## Example 1: Image

The following code snippet below shows how the `<img>` element uses the `src` attribute to display an image called `logo.png`:

```html
<img src="logo.png" alt="Codecademy logo" />
```

This will display the following image:

![HTML src attribute image](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-src-img.png)

> **Note:** When using online images or images from the folders in an IDE workspace, always add `alt` text at the end of the `<img>` element just in case the browser has trouble finding them.

## Example 2: Video

The example below shows how a [video](https://www.codecademy.com/resources/docs/html/videos) element uses the `src` attribute in an embedded `<source>` element to display a video called `codey.mp4`:

```html
<video controls autoplay muted width="560" height="315">
  <source src="codey.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

The gif below shows how the video would be displayed:

![HTML src attribute gif](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-src-attribute-video.gif)

> **Note:** This example demonstrates how to display a video from a local source. To display a video from an external source, such as YouTube, use the [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe) element to embed videos from these platforms.
