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

## Best Practices

- **Use relative paths** whenever possible to make code maintenance easier.
- **Always include alternative text (`alt`)** when using `<img>` to improve accessibility and SEO.
- **To optimize page loading**, use `loading="lazy"` for images and `defer` or `async` for scripts.
- **When uploading large videos**, consider using a streaming service or CDN to improve performance.

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

## Example 3: Audio

The following code snippet below shows how the `<audio>` element uses the `src` attribute to embed an audio file called `audio.mp3`:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

This will embed an audio player on the webpage.

> **Note:** Providing multiple file formats (`mp3`, `ogg`, etc.) ensures better compatibility across different browsers.

## FAQ

- **How does the `src` attribute work?**
The `src` attribute accepts a relative or absolute URL to embed content. If not specified, the browser can't display the resource.

- **What happens if the `src` attribute is incorrect?**
If the `src` attribute points to a non-existent or incorrect URL, the browser will not be able to load the content, and it may display an error or a broken link.

- **Can `src` be used with more than one file?**
Yes, some tags, like `<source>` inside `<video>`, allow multiple sources and the browser chooses the best available one.