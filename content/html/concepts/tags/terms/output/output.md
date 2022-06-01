---
Title: '<output>'
Description: 'Displays the result of a calculation or user action.'
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

The `<output>` tag displays the result of a calculation or user action. It is commonly used inside of a [`<form>`](https://www.codecademy.com/resources/docs/html/tags/form) element to dynamically show the result of user input. However, the `<output>` tag can be used on its own.

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
      oninput="result.value=parseInt(sliderInput.value)*2; document.querySelector('span').innerText=sliderInput.value"
      id="calculation-form"
    >
      <label for="slideInput" id="sliderValue">
        Slider Value: <span> </span>
      </label>
      <input name="sliderInput" type="range" value="0" />
      <label for="result"> Output (Slider value * 2): </label>
      <output name="result" for="sliderInput" form="calculation-form"> </output>
    </form>
  </body>
</html>
```

![Example of what the rendered text would look like](https://raw.githubusercontent.com/Codecademy/docs/main/media/output-tag.gif)
