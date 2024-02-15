---
Title: '<code>'
Description: 'Represents source code contained in the text.'
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

The **`<code>`** element represents source code contained in the text.

## Syntax

```html
<code><!-- Code snippet lives here --></code>
```

`<code>` is a tag that wraps around a block of text. By default it appears inline with the surrounding text, and can be used with a `<pre>` tag to create formatted code blocks across multiple lines.

## Example

Suppose the document contains a description of what a JavaScript function aims to accomplish, as well as the code for that function:

```html
<html>
  <head> </head>
  <body>
    <!-- Here <code> is being used inline, and the text add() will be shown in a monospace font -->
    <p>
      The function <code>add()</code> is defined below. It will take two inputs,
      and return the sum of them as an output.
    </p>

    <!-- Here <code> is being used with a <pre> tag to allow the formatted code to span multiple lines -->
    <pre>
      <code>function add(x, y) {
        return x + y;
      }</code>
    </pre>
  </body>
</html>
```
