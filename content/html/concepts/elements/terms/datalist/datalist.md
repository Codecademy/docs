---
Title: '<datalist>'
Description: 'Displays pre-defined values to a user while typing into an input box.'
Subjects:
  - 'Computer Science'
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Elements'
  - 'Form'
  - 'Id'
  - 'Input'
  - 'Lists'
  - 'Values'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<datalist>`** element displays pre-defined values to a user while typing into an input box. The user may enter any value and the `<datalist>` element will provide autosuggestions.

## Syntax

```pseudo
<input list="input_list" >

<datalist id="input_list">
  <option value="option1" >
  <option value="option2" >
  <option value="option3" >
</datalist>
```

A `<datalist>` element may have one or more [`<option>`](https://www.codecademy.com/resources/docs/html/elements/option) elements that each represent a suggestion that appears in a drop-down list when a user enters input.

A <datalist> is then linked to a an [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input) element by matching its `id` attribute with the `list` attribute of the `<input>` element.

## Example

The following example demonstrates a `<datalist>` that autosuggests different school subjects. Its `id` is matched with the `<input>` element's `list` attribute, thus linking the two:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Learning About Datalists</title>
  </head>
  <body>
    <input list="school-subjects" name="subject-choice" id="subject-choice" />
    <datalist id="school-subjects">
      <option value="English"></option>
      <option value="Math"></option>
      <option value="History"></option>
      <option value="Physics"></option>
      <option value="Biology"></option>
      <option value="Economics"></option>
    </datalist>
  </body>
</html>
```
