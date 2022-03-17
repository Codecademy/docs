---
Title: 'Comments'
Description: 'HTML comments are markup included in the HTML source that do not affect the rendering of the HTML document.'
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

HTML comments are markup included in the HTML source that do not affect the rendering of the HTML document. They are used for documenting the HTML code and commenting out HTML that the developer doesn't want to render but does not desire to delete. This is generally for historical or debugging purposes.

## Syntax

```html
<!-- Comment goes here -->
```

An HTML comment can contain any other HTML markup between the opening `<!--` and the closing tag `-->` except for another comment. Attempting to nest HTML comments will result in unexpected behavior because the comment is closed at the first `-->` it encounters. All text after the first `-->` will render, including the outer enclosing `-->`. Thus, when commenting out HTML code, the developer must make sure any interior comments are removed or strip the trailing `-->`s.

Also, an HTML comment can be placed anywhere inside another HTML element except inside the tags themselves. In other words, they can't be placed between the left angle `<` and right angle bracket`>` of a tag.

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
