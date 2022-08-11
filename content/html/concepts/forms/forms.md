---
Title: 'Forms'
Description: 'In HTML, forms are used for gathering and sending user input to an external source for processing.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Form'
  - 'HTTP'
  - 'Input'
  - 'Interface'
  - 'Paragraphs'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, forms are used for gathering and sending user input to an external source (like a [server](https://www.codecademy.com/resources/docs/general/server)) for processing. This is done with the [`<form>`](https://www.codecademy.com/resources/docs/html/elements/form) tag, which contains various labels and [inputs](https://www.codecademy.com/resources/docs/html/elements/input).

## Example

The following example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <form method="post" action="http://server1">
      Enter your name:
      <input type="text" name="fname" />
      <br />

      Enter your age:
      <input type="text" name="age" />
      <br />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>
```
