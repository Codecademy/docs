---
Title: '<track>'
Description: 'An HTML element that specifies subtitles, closed captioning, and other text files for media elements.'
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

The **`<track>`** element is used to add subtitles, closed captions, or other text-based content to `<video>` or `<audio>` elements in an HTML file.

## Syntax

```pseudo
<element
source= src="url">
<track src="text-based file description" kind="type of text"
 other attribute="description">
 </element>
```

`<track>` can be paired with the following attributes:

| HTML Attribute | Description                                                                                                                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chapters`     | Utilized when a user navigates through the audio or film.                                                                                                                                     |
| `default`      | Implies that the track should be enabled unless the user's preferences indicate that another track is best suited for the project. Can only be used with **one** `<track>` element at a time. |
| `description`  | Describes textual description of the video content. This is best suited for users who are blind or if the video cannot be seen.                                                               |
| `kind`         | Describes how the track's text should be used (e.g. `captions`, `subtitles`, `descriptions`, and `chapters`).                                                                                 |
| `label`        | Describes list of available text tracks.                                                                                                                                                      |
| `metadata`     | Tracks used by scripts, not available to users.                                                                                                                                               |
| `src`          | The track's URL, it **must** be valid and in a Web Video Text Tracks (.vtt, WebVTT) file format.                                                                                              |
| `srclang`      | Track text data's language.                                                                                                                                                                   |

## Example 1: Audio

The snippet below shows the `<track>` tag with the `captions` attribute for an [`<audio>`](https://www.codecademy.com/resources/docs/html/elements/audio) element:

```html
<audio controls>
  <source src="cat.mp4" type="audio/mpeg" />
  <track
    kind="captions"
    src="path_to_captions.vtt"
    srclang="en"
    label="English"
  />
</audio>
```

## Example 2: Video

The snippet below shows the `<track>` tag with the `captions` attribute for a [`<video>`](https://www.codecademy.com/resources/docs/html/elements/video) element:

```html
<video controls width="200">
  <source src="https://www.youtube.com/watch?v=0QHaxrUkSE" type="video/mp4" />
  <track
    default
    kind="captions"
    src="https://youtube.com/captions.vtt"
    srclang="en"
  />
</video>
```
