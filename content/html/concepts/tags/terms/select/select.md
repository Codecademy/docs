---
Title: '<select>'
Description: 'Creates a drop-down list for the user to select from a number of option elements.'
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

The `<select>` tag creates a dropdown list where the user can select from among a number of [`<option>`](https://www.codecademy.com/resources/docs/html/tags/option) elements.

The `<select>` element is typically used with the `<option>` elements to gather user input in a [form](https://www.codecademy.com/resources/docs/html/forms).


## Syntax

```html
<select name="dropdown name">
  <option value="value of option 1">Text for option 1</option>
  <option value="value of option 2">Text for option 2</option>
  <option value="value of option 3">Text for option 3</option>
</select>
```

The `<select>` element is given a `name` attribute to reference it in the form data, and the `<option>` elements will each have a `value` attribute to pass along when the form is submitted with that option selected.

## Example

Here's a simple form that allows the user to select one of four different types of meals.

```html
<html>
  <head> </head>
  <body>
    <form>
      <label for="food">Select Meal Type</label>
      <select name="food" id="food">
        <option value"1">Beef</option>
        <option value"2">Chicken</option>
        <option value"3">Fish</option>
        <option value"4">Vegetarian</option>
      </select>
      <input type="submit" value="Order Dinner" />
    </form>
  </body>
</html>
```
