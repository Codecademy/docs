---
Title: '<input>'
Description: 'Creates an interactive element, usually used within a form to allow user input. Can be used to make text boxes, color pickers, date pickers, and more.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Creates an interactive element, usually used within a form to allow user input. Can be used to make text boxes, color pickers, date pickers, and more.

## Syntax

```html
<input>
```

`<input>` is a tag that has no closing tag, meaning that it cannot have tags inside of it. It uses attributes to set properties, some common attributes are:

- `type`: represents the input type, common values include
  - `text`: creates a single-line text box
  - `email`: creates a single-line text box that can validate email addresses
  - `password`: creates a single-line text box that hides the input from view
  - `checkbox`: creates a box that can be selected/deselected
  - `radio`: creates a radio button allowing a user to select one choice from many options
  - `number`: creates a text box that accepts numeric inputs only
  - `range`: creates a slider that can accept values from a certain range
  - `date`: creates a calendar picker to choose a date
  - `time`: creates a text field for entering valid times
  - `file`: creates a button that allows the user to send a file with the other form data
  - `submit`: creates a button to submit a form
- `autocomplete`: allows the browser to help the user fill in the field with previously typed data
- `minlength` and `maxlength`: set the minimum and maximum length of the text, email, password inputs
- `min` and `max`: set the minimum and maximum values for numeric inputs, ranges, dates, and times
- `disabled`: marks the input field so that it will not accept input
- `checked`: used with radio buttons to indicate which one is currently selected, and checkboxes to indicate if it is currently checked

## Example

```html
<html>
  <head> </head>
  <body>
    <form>
      <!-- This input type requires the user to enter a valid email address -->
      <label>Email Address</label>
      <input type="email">

      <!-- This input hides the typed password with ****s -->
      <label>Password</label>
      <input type="password">

      <!-- This input provides a checkbox -->
      <input type="checkbox"><label>Remember Me</label>

      <!-- This input provides a radio button group -->
      <label>
        <input type="radio" value="yes" name="contact_me">
        Contact Me
      </label>
      <label>
        <input type="radio" value="no" name="contact_me">
        Do Not Contact Me
      </label>

      <!-- This input will submit the form -->
      <input type="submit" value="Create Account">
    </form>
  </body>
</html>
```
