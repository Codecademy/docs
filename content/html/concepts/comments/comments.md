---
Title: 'Comments'
Description: 'HTML comments are used for documentation and excluding markup from being rendered.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

HTML comments are used for documentation and excluding markup from being rendered. Like with [comments](https://www.codecademy.com/resources/docs/general/comment) in other languages, developers may also use HTML comments for historical or debugging purposes.

## Syntax

HTML comments always start with an opening `<!--` and end with a closing tag `-->`. They may contain anything from text to other markup that will not be rendered.

```html
<!-- Comments go between these tags. -->
```

Nested comments are not recommended because they may cause unexpected behavior. Comments generally end after the first closing tag `-->`. Anything after that will be rendered on the page, including all outer closing tags. Thus, when commenting out HTML code, developers should remove any interior comment tags (or at least the trailing ones `-->`).

```pseudo
<!-- Outer comment <!-- Inner comment --> This text will render. -->
```

This example will render as follows:

![HTML Comments A](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-comments-2.png)

Comments can also be placed anywhere inside another [element](https://www.codecademy.com/resources/docs/html/elements).

```pseudo
<p>Some text that <!-- This is a legal comment --> gets displayed</p>
```

However, they cannot be placed inside the element tags themselves (e.g. between the left angle `<` and right angle bracket `>` of a tag).

```pseudo
<p <!-- This is an illegal comment -->>Some more text.</p>
```

## Example

```html
<p>This will display.</p>
<!--
  <p>This will not</p>
-->
```

This will render as follows:

![HTML Comments B](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-comments-1.png)
