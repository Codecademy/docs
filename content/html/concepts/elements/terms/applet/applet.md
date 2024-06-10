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
  - 'Deprecated'
CatalogContent:
  - 'learn-html'
  - 'learn-java'
  - 'paths/front-end-engineer-career-path'
---

The **`<applet>`** element was used to embed Java applets into an HTML page. It has since been deprecated and removed from the [HTML specification](https://html.spec.whatwg.org/). This tag should no longer be used as browsers no longer support it.

## Why Was `<applet>` Deprecated?

The `<applet>` tag was deprecated for several reasons:

- **Security Vulnerabilities**: Java applets required the Java plugin, which posed significant security risks over time.
- **Compatibility Issues**: The need for a Java plugin made applets incompatible with many devices and browsers, hindering the user experience.
- **Advancements in Web Technologies**: The rise of HTML5 and JavaScript frameworks offered more secure and versatile ways to create interactive and dynamic content without external plugins.

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

```html
<!-- This is no longer supported -->
<applet code="url of Java class file">
  <param name="name of parameter" value="value of parameter" />
  Text displayed when no Java runtime is available.
</applet>
```

## Modern Alternatives

> **Note:** The `<applet>` element is deprecated due to security and compatibility concerns. The [`<object>`](https://www.codecademy.com/resources/docs/html/elements/object) or [`<embed>`](https://www.codecademy.com/resources/docs/html/elements/embed) tags can be used as modern alternatives.

### `<object>` Tag Example

```html
<object
  type="application/x-java-applet"
  data="myApplet.class"
  width="300"
  height="300"
>
  <param name="name" value="value" />
  Alternative content for browsers that do not support Java applets.
</object>
```

### `<embed>` Tag Example

```html
<embed
  type="application/x-java-applet"
  src="myApplet.class"
  width="300"
  height="300"
/>
Alternative content for browsers that do not support embed tags.
```

## Example of Deprecated Usage

Here is an example of how `<applet>` was used, which is no longer supported:

```html
<!-- This is no longer supported -->
<applet code="myApplet.class" height="300" width="300">
  <param name="input" value="This is deprecated HTML" />
  This browser doesn't support Java applets.
</applet>
```

![An image showing an example of a Java applet in a historical web context](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-elements-applet.gif)
