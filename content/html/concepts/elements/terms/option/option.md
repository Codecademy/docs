---
Title: '<option>'
Description: 'Represents one option in a dropdown created by the select tag.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<option>`** element represents one possible selection in the dropdown created by the [`<select>`](https://www.codecademy.com/resources/docs/html/elements/select) tag.

The `<select>` element is typically used with `<option>` elements to gather user input in a [form](https://www.codecademy.com/resources/docs/html/forms).

## Syntax

```html
<select name="dropdown name">
  <option value="value of option 1">Text for option 1</option>
  <option value="value of option 2">Text for option 2</option>
  <option value="value of option 3">Text for option 3</option>
</select>
```

The `<select>` element is given a `name` attribute to reference it in the form data, and the `<option>` elements will each have a `value` attribute to pass along when the form is submitted with that option selected.

### Attributes

The attributes that can be used with the `<option>` tag include:

- `disabled` indicates that the option should be disabled.
- `label` specifies a shorter label for an option.
- `selected` indicates that the option is pre-selected when the page loads.
- `value` specifies the value to be sent when the option is selected.

## Example

The example form below allows the user to select one of four different types of meals:

```html
<html>
  <head> </head>
  <body>
    <form>
      <label for="food">Select Meal Type</label>
      <select name="food" id="food">
        <option value="1">Beef</option>
        <option value="2">Chicken</option>
        <option value="3">Fish</option>
        <option value="4">Vegetarian</option>
      </select>
      <input type="submit" value="Order Dinner" />
    </form>
  </body>
</html>
```
