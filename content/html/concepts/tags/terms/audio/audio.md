---
Title: '<audio>'
Description: 'Represents an interface for adding audio content to the page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Represents an interface for adding audio content to the page.

HTML supports the following audio format types:

- MP3
- WAV
- OGG.

## Syntax

```html
<audio controls>
  <source src="audioFile_name.ogg" type="audio/ogg" />
  <source src="audioFile_name.mp3" type="audio/mpeg" />
  <h3>Fallback text if audio will not play</h3>
</audio>
```

The `<audio>` tag may contain one or more `<source>` tags with different audio formats. The browser will run the format most suitable for the browser.

The `<audio>` tag may include `<source>` tags and fallback text. It may also use attributes to convey intention, some common ones are below:

- `autoplay`: if this attribute is present the audio will play automatically.
- `controls`: if this attribute is present the audio will have an overlay allowing the user to control the audio.
- `loop`: specifies that when the audio ends, it will begin again.
- `src`: the URL for the audio that should be shown to the user.
