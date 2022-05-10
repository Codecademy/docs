---
Title: '<output>'
Description: 'Represents the result of a calculation or user action.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<output>` displays the result of a calculation or user action.

The `<output>` tag is typically used inside of a `<form>` element to dynamically show the result of user input, but it can also be used on its own.

## Syntax

```html
The result of 5 + 5 is <output name="operation-result">10</output>
```

The `<output>` tag requires opening and closing tags that wrap around the result.

### Attributes

The `<output>` tag takes the following attributes:

- `for` indicates the id of one or multiple elements (separated by a space) whose values are factored in the calculation.
- `form` indicates one or more forms the `<output>` element belongs to.
- `name` indicates the name of the element.

## Example

The example form below features an output element displaying the slider value multiplied by two.

```html
<html>
  <head> </head>
  <body>
    <form
      oninput="result.value=parseInt(sliderInput.value)*2"
      id="calculation-form"
    >
      <input name="sliderInput" type="range" value="0" />
      <output name="result" for="sliderInput" form="calculation-form"></output>
    </form>
  </body>
</html>
```
