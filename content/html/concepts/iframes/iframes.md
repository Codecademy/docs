---
Title: 'IFrames'
Description: 'An IFrame is an HTML document embedded inside another HTML document on a website. It provides a smaller version of a browser window that contains various media, such as an advertisement or a video.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Files'
  - 'Link'
  - 'Tags'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

An **IFrame (Inline Frame)** is an HTML document embedded inside another HTML document on a website. The [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe) element provides a smaller version of a browser window that contains various media, such as an advertisement, a YouTube video, etc. Some sites such as Youtube will provide IFrame markup for the user to embed instead of making one on their own.

These smaller windows are known as "browsing contexts", because the [URL](https://www.codecademy.com/resources/docs/general/url) passed to the `<iframe>` tag is still functional as a web page. This makes their usage somewhat controversial as many commercial websites have safeguards against their URL being passed to this particular element.

## Example

The example features an `<iframe>` tag with the URL from the National Park Service passed to the `src` attribute. Additionally, it is advisable and [accessibility-friendly](https://www.codecademy.com/resources/docs/uiux/accessibility) to include alternative text inside the element in the event a problem occurs.

```html
<iframe
  class="i-frame-element"
  src="https://www.nps.gov/caco/index.html"
  width="100vw"
  height="1000"
>
  Alt-text for IFrame
</iframe>
```

![Screenshot of rendered page with i-frame element](https://i.imgur.com/vunCiar.png)
