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

```html
<!-- This is no longer supported -->
<applet code="url of Java class file">
  Text displayed when no Java runtime is available.
</applet>
```

A `code` attribute supplied the URL for a given Java class file. It could also use common attributes like `width` and `height`.

The `<applet>` element included zero or more [`<param>`](https://www.codecademy.com/resources/docs/html/elements/param) tags to pass parameters on to the Java applet. Its functionality is now incorporated into the [`<object>`](https://www.codecademy.com/resources/docs/html/elements/object) tag.

```html
<!-- This is no longer supported -->
<applet code="url of Java class file">
  <param name="name of parameter" value="value of parameter" />
  Text displayed when no Java runtime is available.
</applet>
```

## Example

```html
<!-- This is no longer supported -->
<applet code="myApplet.class" height="300" width="300">
  <param name="input" value="This is deprecated HTML" />
  This browser doesn't support Java applets.
</applet>
```
