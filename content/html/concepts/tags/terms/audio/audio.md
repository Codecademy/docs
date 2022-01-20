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

HTML supports three different audio format types which are as follows:
- MP3
- WAV
- OGG.

## Syntax
```html
<audio controls>
  <source src="audioFile_name.ogg" type="audio/ogg">
  <source src="audioFile_name.mp3" type="audio/mpeg">
  <h3>Fallback text if audio will not play</h3>
</audio>
```

The `<audio>` tag may contain one or more than one `<source>` tags with different audio sources. The browser will run the first source which is supported by it.

The `<audio>` tag may include `<source>` tags and fallback text. It may also use attributes to convey intention, some common ones are below:

- `autoplay`: if this attribute is present the audio will play automatically.
- `controls`: if this attribute is present the audio will have an overlay allowing the user to control the audio.
- `loop`: it specifies that the audio will start over again, every time it is finished.
- `src`: the URL for the audio that should be shown to the user.