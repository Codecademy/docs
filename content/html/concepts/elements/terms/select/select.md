---
Title: '<select>'
Description: 'Creates a drop-down list for the user to select from a number of option elements.'
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

The **`<select>`** element creates a dropdown list where the user can select from among a number of [`<option>`](https://www.codecademy.com/resources/docs/html/elements/option) elements.

The `<select>` element is normally used with `<option>` elements for gathering user input in a [form](https://www.codecademy.com/resources/docs/html/forms).

## Syntax

```html
<select name="dropdown name">
  <option value="value of option 1">Text for option 1</option>
  <option value="value of option 2">Text for option 2</option>
  <option value="value of option 3">Text for option 3</option>
</select>
```

The `<select>` element is referenced in the form data with a `name` attribute. Inside, the `<option>` elements will each have a `value` attribute that is submitted with the form if that option is selected.

### Attributes

The attributes that can be used with the `<select>` element include:

- `autofocus` indicates the drop-down list gets the focus automatically when the page loads.
- `disabled` indicates that the drop-down list is disabled.
- `form` specifies the form that the drop-down list belongs to.
- `multiple` indicates that multiple options can be selected.
- `name` specifies the name of the drop-down list.
- `required` indicates that the drop-down list requires a selection before the form can be submitted.
- `size` specifies the number of options visible in the drop-down list.

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
