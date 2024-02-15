---
Title: '<picture>'
Description: 'Represents multiple possible image sources to be applied to different devices and screen-sizes.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Images'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<picture>`** element represents multiple possible image sources to be applied to different devices and screen-sizes. While it has no semantic meaning, the `<picture>` element will separate its contents from the rest of the document.

## Syntax

```pseudo
<picture>
  Zero or more <source> tags go here,
  followed by at least one <img> tag here.
</picture>
```

The `<picture>` element is used with zero or more [`<source>`](https://www.codecademy.com/resources/docs/html/elements/source) elements followed by one [`<img>`](https://www.codecademy.com/resources/docs/html/images) element.

The `<picture>` element that allows developers the flexibility to use different image specifications.

## Example

Using different sources provides more options for the browser with regards to the screen or host device. The `<img>` element is used as the last option of the `<picture>` element, acting as a fallback if any of the sources are invalid.

```html
<html>
  <head> </head>
  <body>
    <picture>
      <source media="(min-width:700px)" srcset="CodecademyLogoLarge.jpg" />
      <source media="(min-width:540px)" srcset="CodecademyLogoSmall.jpg" />
      <img
        src="CodecademyLogoLarge.jpg"
        alt="The Codecademy logo"
        style="width:auto;"
      />
    </picture>
  </body>
</html>
```

![Output of the picture tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/cc_logo.png)

Some use cases for this example include the following:

- Creating a responsive design where an alternative image is used based on the display size.
- Optimizing page load times in situations where certain images take longer to load and having an alternative image that loads faster comes in handy.
