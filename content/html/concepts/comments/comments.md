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

```html
<!-- Comments go between these tags. -->
```

An HTML comment can contain any other HTML markup between the opening `<!--` and the closing tag `-->` except for another comment. Attempting to nest HTML comments will result in unexpected behavior because the comment is closed at the first `-->` it encounters. All text after the first `-->` will render, including the outer enclosing `-->`. Thus, when commenting out HTML code, the developer must make sure any interior comments are removed or strip the trailing `-->`s.

Comments can also be placed anywhere inside another [element](https://www.codecademy.com/resources/docs/html/elements). However, they cannot be placed inside the element tags themselves (e.g. between the left angle `<` and right angle bracket`>` of a tag).

```pseudo
<p>Some text that <!-- This is a legal comment --> gets displayed</p>

<p <!-- This is an illegal comment -->>Some more text.</p>

<!-- Outer comment <!-- Inner comment --> This text will render. -->
```

## Example

```html
<p>This will display.</p>
<!--
  <p>This will not</p>
-->
```
