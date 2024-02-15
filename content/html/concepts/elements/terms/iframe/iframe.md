---
Title: '<iframe>'
Description: 'Represents a container used to embed a second web page inside the current one. It can be used for content from the same domain as the parent, or even from a second domain.'
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

The **`<iframe>`** element represents a container used to embed a second web page inside the current one. It can be used for content from the same domain as the parent, or even from a second domain.

## Syntax

```pseudo
<iframe></iframe>
```

`<iframe>` is an element that uses attributes to define important properties. It should not contain any elements between the opening and closing tags. Common attributes are:

- `src`, which specifies the URL to embed
- `height`, which specifies the height of the `<iframe>` and defaults to 150 pixels
- `width`, which specifies the width of the `<iframe>` and defaults to 300 pixels

Additional attributes set security policies (using `csp` or `referrerpolicy` attributes), or enable features for the iframe (using `allow` or `sandbox` attributes)

## Example

```html
<html>
  <head> </head>
  <body>
    <h1>This text is from the current webpage</h1>

    <!-- This will add https://www.codecademy.com/learn to the current page in an embedded frame -->
    <iframe
      height="300"
      width="300"
      src="https://www.codecademy.com/learn"
    ></iframe>
  </body>
</html>
```

This will render the following output:

![Rendered <iframe> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/i-frame-tag-example.png)
