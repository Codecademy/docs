---
Title: '<input>'
Description: 'Creates an interactive element, usually used within a form to allow user input. It can be used to make text boxes, color pickers, date pickers, and other UI elements.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Form'
  - 'Input'
  - 'Interface'
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<input>`** element creates an interactive element, usually used within a [form](https://www.codecademy.com/resources/docs/html/forms) to allow user input. It can be used to make text boxes, [color pickers](https://www.codecademy.com/resources/docs/uiux/color-picker), date pickers, and other [UI](https://www.codecademy.com/resources/docs/uiux/ui-design) elements.

## Syntax

```html
<input />
```

The `<input>` element has no closing tag, meaning that it cannot have elements inside of it.

### Attributes

Some common attributes used to set properties for the `<input>` element are shown below:

|   Attribute    |   Data Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| :------------: | :-----------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autocomplete` |    String     | Allows the browser to help the user fill in the field with previously typed data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|   `checked`    |    Boolean    | Used with radio buttons to indicate which one is currently selected, and checkboxes to indicate if it is currently checked.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|   `disabled`   |    Boolean    | Marks the input field so that it will not accept input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|     `max`      | Number/String | Sets the maximum value for numeric inputs, ranges, dates, and times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|     `min`      | Number/String | Sets the minimum value for numeric inputs, ranges, dates, and times.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|  `maxlength`   |    Integer    | Sets the maximum length of text, email, and password inputs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  `minlength`   |    Integer    | Sets the minimum length of text, email, and password inputs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|   `required`   |    Boolean    | Specifies that the field must include a value. Can be written as `required="true"` or as just `required`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|     `type`     |    String     | Represents the input type, including common values like:<ul><li>`text`: Creates a single-line text box.</li><li>`email`: Creates a single-line text box that can validate email addresses.</li><li>`password`: Creates a single-line text box that hides the input from view.</li><li>`checkbox`: Creates a box that can be selected/deselected.</li><li>`radio`: creates a radio button allowing a user to select one choice from many options.</li><li>`number`: Creates a text box that accepts numeric inputs only.</li><li>`range`: Creates a slider that can accept values from a certain range.</li><li>`date`: Creates a calendar picker to choose a date.</li><li>`time`: Creates a text field for entering valid times.</li><li>`file`: Creates a button that allows the user to send a file with the other form data.</li><li>`submit`: Creates a button to submit a form.</li></ul> |

## Example

The following example uses `<form>` input elements. Within these elements, the `for` attribute is used to link the [`<label>`](https://www.codecademy.com/resources/docs/html/elements/label) to the `id` of the `<input>` element:

```html
<html>
  <head> </head>
  <body>
    <form>
      <!-- This input type requires the user to enter a valid email address -->
      <label for="email">Email Address</label>
      <input type="email" id="email" />

      <!-- This input hides the typed password with ****s -->
      <label for="password">Password</label>
      <input type="password" id="password" name="password" />

      <!-- This input provides a checkbox -->
      <input type="checkbox" id="remember" value="remember" /><label
        for="remember"
        >Remember Me</label
      >

      <!-- This input provides a radio button group -->
      <label>
        <input type="radio" value="yes" name="contact_me" />
        Contact Me
      </label>
      <label>
        <input type="radio" value="no" name="contact_me" />
        Do Not Contact Me
      </label>

      <!-- This input will submit the form -->
      <input type="submit" value="Create Account" />
    </form>
  </body>
</html>
```

![Rendered <input> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/input-tag-example.png)
