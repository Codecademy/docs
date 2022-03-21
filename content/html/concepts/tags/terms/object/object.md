---
Title: '<object>'
Description: 'Represents an external resource such as an image, a nested browsing context, or content to be handled by a browser plugin.'
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

## Example

```html
<object
  width="420"
  height="315"
  type="video/mp4"
  data="https://www.youtube.com/v/138enunVlfs"
></object>
```
