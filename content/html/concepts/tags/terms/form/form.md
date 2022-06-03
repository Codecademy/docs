---
Title: '<form>'
Description: 'Represents an interface to collect and submit user supplied information. This can include open ended text inputs, radio buttons, calendar information, and more.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<form>` tag represents an interface to collect and submit user supplied information. This can include open ended text inputs, radio buttons, calendar information, and more.

## Syntax

```html
<form>
  <!-- Form content lives here -->
</form>
```

`<form>` is a tag that wraps around many other tags to create the form. It also uses attributes to define where the form data goes when the form is submitted. Common attributes are:

- `action`, which specifies the URL to send the form data to
- `method`, which specifies the HTTP Verb used when submitting the form (examples are GET, POST, PATCH, PUT, and DELETE)
- `autocomplete`, which specifies if the browser autocomplete feature should be available in this form

## Example

Suppose that Codecademy needs a form for visitors to create a new account. Here is one possible way to build it:

```html
<html>
  <head> </head>
  <body>
    <h1>Sign up for a new Codecademy account</h1>

    <!-- This form will send the email and password to https://codecademy.com/sign-up using a POST request -->
    <form action="https://codecademy.com/sign-up" method="POST">
      <label>Email Address</label>
      <input name="user_email" type="email" />

      <label>Password</label>
      <input name="user_password" type="password" />

      <!-- Clicking a button with type submit will submit the form it is inside of -->
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

![Output of the example above for form tag](https://raw.githubusercontent.com/Codecademy/docs/main/media/form-example.png)
