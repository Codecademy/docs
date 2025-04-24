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
<element src="URL_or_file_path">
```

**Parameters:**

- `src`: Specifies the location of the resource. This can be a URL (absolute or relative) or a file path pointing to the resource.

**Return value:**

The `src` attribute doesn’t "return" anything as it's not a function or method but an attribute. Instead, it points to a digital source (e.g., image, video, audio, etc.) and instructs the browser to load that resource into the HTML element.

`src` can also be used in the following elements:

| HTML Tag                                                                     | Description                                                                       |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio)   | Embeds sound files on websites and applications.                                  |
| [`<img>`](https://www.codecademy.com/resources/docs/html/images)             | Embeds online photos, logos, and other pictures into an HTML file.                |
| [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input)   | Creates interactive text boxes for online forms.                                  |
| [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) | Embeds JavaScript and other executive code or data into an HTML file.             |
| [`<track>`](https://www.codecademy.com/resources/docs/html/elements/track)   | Specifies the subtitles and closed captions for `<audio>` and `<video>` elements. |
| [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video)   | Embeds movie clips or other video sources into an HTML file.                      |

## Example 1: Displaying an Image

The following code snippet below shows how the `<img>` element uses the `src` attribute to display an image called `logo.png`:

```html
<img src="logo.png" alt="Codecademy logo" />
```

This will display the following image:

![HTML src attribute image](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-src-img.png)

> **Note:** When using online images or images from the folders in an IDE workspace, always add `alt` text at the end of the `<img>` element just in case the browser has trouble finding them.

## Example 2: Embedding an External Video

The example below shows how a [video](https://www.codecademy.com/resources/docs/html/videos) element uses the `src` attribute in an embedded `<source>` element to display a video called `codey.mp4` from an external source:

```html
<video controls autoplay muted width="560" height="315">
  <source src="codey.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

The gif here shows how the video would be displayed:

![HTML src attribute gif](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-src-attribute-video.gif)

## Example 3: YouTube Video Embedding using `iframe` element

Here’s an example of embedding a YouTube video using the [`iframe`](https://www.codecademy.com/resources/docs/html/elements/iframe) element:

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0QHaxrUkSEU?list=PLFzsFUO-y0HCyF0smKSi0WMhbMR2mqz2V"
  frameborder="0"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

The following gif showcases how the output of this code would look like:

![HTML YouTube embedded video output gif](https://raw.githubusercontent.com/Codecademy/docs/main/media/youtube-embedded-video-output)

In this example, an embedded YouTube video is added to the webpage using the `iframe` element. The `src` attribute in the `<iframe>` tag contains the YouTube video URL, which points to the embedded version of the video.

## Frequently Asked Questions

### 1. What is the difference between URL and `src` in HTML?

- **URL (Uniform Resource Locator)**: A URL is the address of a resource on the internet. It specifies the location of a resource (like an image, video, or webpage) using a protocol (e.g., `http://`, `https://`, `ftp://`) followed by the resource's location.
- **`src` (Source) Attribute**: The `src` attribute in HTML specifies the source location of embedded content (such as an image, video, or audio file). It points to a resource's URL or a local file path. The `src` attribute itself does not define a location on its own, but instead uses a URL to point to the location of an external or internal resource.

### 2. When to use `src` in HTML?

You use the `src` attribute when you want to embed external or internal content into an HTML page. Common scenarios include:

- **Images**: To display an image using the `<img>` tag.

  ```html
  <img src="image.jpg" alt="Image description" />
  ```

- **Videos**: To embed a video using the `<video>` tag.

  ```html
  <video src="video.mp4" controls></video>
  ```

- **Audio**: To embed audio using the `<audio>` tag.

  ```html
  <audio src="audio.mp3" controls></audio>
  ```

- **External Scripts**: To include an external JavaScript file using the `<script>` tag.

  ```html
  <script src="script.js"></script>
  ```

- **Other Content**: To link to other types of media, like `<iframe>` for embedding videos from YouTube or other external sources.

  ```html
  <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
  ```

### 3. What is the full form of `SRC`?

The full form of `SRC` is **Source**. In HTML, it is an attribute used to specify the source location of an external resource, such as an image, video, or script.
