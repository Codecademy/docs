---
Title: '<object>'
Description: 'Represents an external resource such as an image, a nested browsing context, or content to be handled by a browser plugin.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Parameters'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<object>`** element represents some resource external to the HTML document. This resource can be treated as an image, an embedded browsing context, or as content to be handled by a browser plugin.

## Syntax

```html
<object type="MIME type" data="URL of resource"></object>
```

The `<object>` element requires the following attributes to work properly:

- A `type` attribute that tells the browser what content media (MIME) type will be displayed. ("application/pdf", "application/x-java-applet", "audio/mp4", etc.)
- A `data` attribute that contains the URL to the resource being used.

This element may contain zero or more [`<param>`](https://www.codecademy.com/resources/docs/html/elements/param) elements to pass parameters on to the resource it is displaying:

```html
<object type="MIME type" data="URL of resource">
  <param name="parameter name" value="parameter value" />
</object>
```

## Example

```html
<object
  width="420"
  height="315"
  type="video/mp4"
  data="https://www.youtube.com/v/138enunVlfs"
></object>
```
