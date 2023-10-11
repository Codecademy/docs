---
Title: 'src'
Description: 'An HTML attribute used to specify the location of a digital resource.'
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

The HTML **`src`** attribute specifies the location of the resource to be embedded in an element. It is used in a variety of elements, including the 
[`<img>`](https://www.codecademy.com/resources/docs/html/elements/img) element to embed images, the [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) element to embed JavaScript code, and the [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio) and [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video) elements to embed audio and video files. 

The **`src`** attribute tells the browser where to find and load the resource associated with the HTML element. 

The value of the **`src`** attribute can be an absolute URL or a relative URL. An absolute URL specifies the full path to the resource, including the domain name. A relative URL specifies the path to the resource relative to the current document.

## Syntax

```pseudo
<element  src="url">
```

`src` can be used in the following elements:

| HTML Tag                                                                     | Description                                                                       |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`<img>`](https://www.codecademy.com/resources/docs/html/images)  | Embeds online photos, logos, and other pictures into an HTML file. |                                   
| [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video)   | Embeds movie clips or other video sources into an HTML file.|
| [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio)   | Embeds sound files on websites and applications. |
| [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) | Embeds JavaScript and other executive code or data into an HTML file. |
| [`<iframe>`](https://www.codecademy.com/resources/docs/html/iframes)   | Embeds an external web page into an HTML file. |
| [`<track>`](https://www.codecademy.com/resources/docs/html/elements/track ) | Specifies the subtitles and closed captions for `<audio>` and `<video>` elements. |

## Example 1: Image

The provided snippet demonstrates how the **`src`** attribute specifies the source of the image file, "logo.png," which will be displayed on the web page.

```html
<img src="logo.png" alt="Codecademy logo" />
```


## Example 2: Video

The provided snippet illustrates that the **`src`** attribute specifies the source of a video file, which will be used in conjunction with the [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video) element for playback:

```html
<video
  width="200"
  src="https://youtu.be/0QHaxrUkSE"
  controls
></video>
```


## Example 3: Audio

The provided snippet illustrates that the **`src`** attribute  points to an audio file ("music.mp3") that can be played using the [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio) element. The "controls" attribute adds audio controls like play, pause, and volume:

```html
<audio src="music.mp3" controls></audio>
```

## Example 4: Script

The provided snippet illustrates that the **`src`** attribute is used in this case to link an external JavaScript file ("script.js") to the HTML document for executing client-side scripts:

```html
<script src="script.js"></script>
```