---
Title: '<audio>'
Description: 'Represents an interface for adding audio content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents an interface for adding audio content to the page.

HTML supports the following audio formats:

- MP3
- WAV
- OGG

## Syntax

```html
<audio controls>
  <!-- Source tags with different audio formats go here -->
</audio>
```

The **`<audio>`** element may contain one or more [`<source>`](https://www.codecademy.com/resources/docs/html/elements/source) elements with different audio formats. The browser will run the format most suitable for the browser.

The `<audio>` tag may include `<source>` tags and fallback text. It may also use attributes to convey intention, such as the ones listed below:

- Using `autoplay` automatically plays the audio.
- Using `controls` has an overlay to allow the user to control the audio.
- Using `loop` specifies that when the audio ends, it will begin again.
- Setting `src` to the URL for the audio to be shown to the user.

## Example

```html
<audio controls>
  <source src="audioFile_name.ogg" type="audio/ogg" />
  <source src="audioFile_name.mp3" type="audio/mpeg" />
  <h3>Fallback text if audio will not play</h3>
</audio>
```

![Audio Element](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-audio-element-example.png)

In the example above, the `<audio>` element contains the `controls` attribute to display user controls for the audio content such as a play and pause button. In addition, there are two `<source>` tags with different audio formats. If the browser doesn't support the `.ogg` file format, it will use the `.mp3` file. Lastly, the text that follows the `<source>` tags will display if the `<audio>` tag is not supported by the browser.
