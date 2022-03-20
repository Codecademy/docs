---
Title: '<object>'
Description: 'Represents some resource external to the HTML document that can be treated as an image, a nested browsing context, or content to be handled by a browser plugin.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'Parameters'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<object>` tag represents some resource external to the HTML document. This resource can be treated as an image, an embedded browsing context, or as content to be handled by a browser plugin.

The `<object>` tag requires at least the `type` and `data` attributes specified. The `type` attribute tells the browser what MIME type of content is to be displayed, such as "application/pdf", "application/x-java-applet" or "audio/mp4". The `data` attribute contains the URL to the resource being used.

An `<object>` element may contain zero or more [`<param>`](https://www.codecademy.com/resources/docs/html/tags/param) elements to pass parameters on to the resource it is displaying.

## Syntax

```html
<object type="MIME type" data="URL of resource"></object>
```

With a parameter:

```html
<object type="MIME type" data="URL of resource">
  <param name="parameter name" value="parameter value" />
</object>
```
