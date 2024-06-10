---
Title: '<applet>'
Description: 'Used to embed Java applets in HTML documents but is no longer supported.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Obsolete'
CatalogContent:
  - 'learn-html'
  - 'learn-java'
  - 'paths/front-end-engineer-career-path'
---

The **`<applet>`** element was used to embed Java applets into an HTML page. It has since been deprecated and removed from the [HTML specification](https://html.spec.whatwg.org/). This tag should no longer be used as browsers no longer support it.

## Syntax

The original syntax for the `<applet>` element looked like this:

```html
<!-- This is no longer supported -->
<applet code="url of Java class file" width="300" height="300">
  Text displayed when no Java runtime is available.
</applet>
```

A `code` attribute specified the URL for the Java class file. The element could also use common attributes like `width` and `height` to define its dimensions on the page.

The `<applet>` element could include one or more [`<param>`](https://www.codecademy.com/resources/docs/html/elements/param) tags to pass parameters to the Java applet.

![An image showing an example of a Java applet in a historical web context](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-elements-applet.gif)
