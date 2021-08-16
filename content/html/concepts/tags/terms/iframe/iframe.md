---
Title: "<iframe>"
Description: "Represents a container used to embed a second web page inside the current one. It can be used for content from the same domain as the parent, or even from a second domain."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Tags"
CatalogContent:
  - "learn-html"
  - "paths/front-end-engineer-career-path"
---

 

Represents a container used to embed a second web page inside the current one. It can be used for content from the same domain as the parent, or even from a second domain.

## Syntax

```html
<iframe></iframe>
``` 

`<iframe>` is a tag that uses attributes to define important properties. It should not contain any tags between the opening and closing tags. Common attributes are:

* `src`, which specifies the URL to embed
* `height`, which specifies the height of the `<iframe>` and defaults to 150 pixels
* `width`, which specifies the width of the `<iframe>` and defaults to 300 pixels

Additional attributes set security policies (using `csp` or `referrerpolicy` attributes), or enable features for the iframe (using `allow` or `sandbox` attributes)

## Example

```html
<html>
  <head>
  </head>
  <body>
    <h1>This text is from the current webpage</h1>

    <!-- This will add https://codecademy.com to the current page in an embedded frame -->
    <iframe height=300 width=300 src="https://codecademy.com"></iframe>
  </body>
</html>
```
