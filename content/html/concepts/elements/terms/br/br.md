---
Title: '<br>'
Description: 'Represents a break in text. It is used when text needs to span multiple lines rather than being in-line, such as in an address.'
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

The **`<br>`** element represents a break in text. It is used when text needs to span multiple lines rather than being in-line, such as in an address.

## Syntax

```pseudo
Text that will appear on one line.<br />Text that will appear on the next line.
```

The `<br>` is a self-closing tag and will move the text after it to a new line. The forward-slash `/` is optional.

## Example

In the example below, text for an address is contained in a single `<p>` element. If the address were to be printed on a label, it should be formatted in a standard way to avoid confusion. This is done with self-closing `<br>` tags:

```html
<html>
  <head> </head>
  <body>
    <h3>Payment Address:</h3>
    <p>
      5000 Sheffield Street <br />
      Suite #210 <br />
      Smithville Flats, MO, 11110
    </p>
  </body>
</html>
```

![Output of the br tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-br-example.png)
