---
Title: '<form>'
Description: 'Represents an interface to collect and submit user supplied information. This can include open ended text inputs, radio buttons, calendar information, and more.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Form'
  - 'HTTP'
  - 'Input'
  - 'Interface'
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<form>`** element represents an interface to collect and submit user supplied information. This can include open-ended text inputs, radio buttons, calendar information, and more.

## Syntax

```pseudo
<form>
  <!-- Form content lives here -->
</form>
```

The opening and closing `<form>` tags wrap around many other elements to create the form.

## Attributes

Common attributes of the `<form>` element are shown below:

|   Attribute    | Data Type | Description                                                                                                                                                                                                                                                                    |
| :------------: | :-------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|    `action`    |  String   | Specifies the [URL](https://www.codecademy.com/resources/docs/general/url) to send the form data to.                                                                                                                                                                           |
|    `method`    |  String   | Specifies the [HTTP](https://www.codecademy.com/resources/docs/general/http) verb used when submitting the form. Examples include:<ul><li><code>GET</code></li><li><code>POST</code></li><li><code>PATCH</code></li><li><code>PUT</code></li><li><code>DELETE</code></li></ul> |
| `autocomplete` |  Boolean  | Specifies if the browser autocomplete feature should be available in this form.                                                                                                                                                                                                |

## Example

Suppose that Codecademy needs a form, with required inputs, for visitors to create a new account. Here is one possible way to build it:

```html
<html>
  <head> </head>
  <body>
    <h1>Sign up for a new Codecademy account</h1>

    <!-- This form will send the email and password to https://codecademy.com/sign-up using a POST request -->
    <form action="https://codecademy.com/sign-up" method="POST">
      <label>Email Address</label>
      <input name="user_email" type="email" required />

      <label>Password</label>
      <input name="user_password" type="password" required />

      <!-- Clicking a button with type submit will submit the form it is inside of -->
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

![Output of the example above for form tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/form-example.png)
