---
Title: '<button>'
Description: 'Represents a button meant to be clicked by the user.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Interface'
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<button>`** element represents a [button](https://www.codecademy.com/resources/docs/uiux/button) meant to be clicked by the user.

While buttons are often associated with [form](https://www.codecademy.com/resources/docs/html/forms) submission, they can be used for any part of the page which needs an interface for user interaction.

## Syntax

```html
<button>
  <!-- Button content lives here -->
</button>
```

Opening and closing `<button>` tags wrap around a block of content. By default, it appears inline, like a [`<span>`](https://www.codecademy.com/resources/docs/html/elements/span) element, and is styled to appear consistent with buttons on the device it is viewed on.

It is possible for the content to be plain text or other HTML [elements](https://www.codecademy.com/resources/docs/html/elements). This can include [lists](https://www.codecademy.com/resources/docs/html/lists), [paragraphs](https://www.codecademy.com/resources/docs/html/elements/p), or even [images](https://www.codecademy.com/resources/docs/html/images).

### Attributes

There are a large number of available attributes that provide extra meaning to the browser. A few of the common ones are shown below:

|  Attribute  | Data Type | Description                                                                                                                                                                                                                                                                                                   |
| :---------: | :-------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `autofocus` |  Boolean  | Automatically makes the button focused on the page.                                                                                                                                                                                                                                                           |
| `disabled`  |  Boolean  | Makes the button unusable.                                                                                                                                                                                                                                                                                    |
|   `type`    |  String   | Sets the intended behavior of the button, including:<ul><li>`submit`: This button should submit the form it is a part of.</li><li>`reset`: This button should reset the values in the form it is a part of.</li><li>`button`: This button should neither submit nor reset the form it is a part of.</li></ul> |

## Example

Suppose there is a form that needs both a submit and reset button, and that the submit button should have an image rather than text. It might be coded in the following way:

```html
<html>
  <head> </head>
  <body>
    <form>
      <label>Your Name</label>
      <input type="text" name="user_name" />
      <!-- More form elements -->
      <button type="reset">Reset Form</button>
      <button type="submit"><img src="submit.png" alt="Submit Form" /></button>
    </form>
  </body>
</html>
```

![Output of the button tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-button-example.png)
