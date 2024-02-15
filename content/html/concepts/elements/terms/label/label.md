---
Title: '<label>'
Description: 'Identifies captions for other elements in an HTML document.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Form'
  - 'Label'
  - 'Input'
  - 'Interface'
  - 'Tags'
  - 'UI'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<label>`** element is used to identify captions for other elements. It is commonly used with [form](https://www.codecademy.com/resources/docs/html/forms) UI elements such as [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input/input.md) and [`<select>`](https://www.codecademy.com/resources/docs/html/elements/select).

## Syntax

```pseudo
<label for="" form="">
  <!-- Labeled content goes here -->
</label>
```

In addition to having access to event-driven and global attributes, the `<label>` element uses the following attributes:

- A `for` attribute to match the `id` of one or both of the following:
  - A single, valid control element that is nested within the `<label>` element.
  - One or more control elements that exist elsewhere in the document, outside the `<label>` element.
- A `form` attribute that binds the `<label>` to a [`<form>`](https://www.codecademy.com/resources/docs/html/elements/form) element with a matching `id`.

> **Note:** Placing interactive elements (e.g., [`<a>`](https://www.codecademy.com/resources/docs/html/elements/a) and [`<button>`](https://www.codecademy.com/resources/docs/html/elements/button)) inside of a `<label>` poses accessibility issues where the form input becomes difficult to use. Therefore, these elements should be defined outside of the `<label>`.

## Example

The following example uses a `<form>` element that features `<input>` elements with corresponding `<label>` elements:

```html
<html>
  <head> </head>
  <body>
    <form id="label-example">
      <label for="email">Email Address</label>
      <input id="email" type="email" />

      <label for="password">Password</label>
      <input id="password" type="password" />

      <input type="checkbox" /><label>Remember Me</label>

      <label>
        <input type="radio" value="yes" name="contact_me" />
        Business Account
      </label>
      <label>
        <input type="radio" value="no" name="contact_me" />
        Personal
      </label>

      <input type="submit" value="Submit" />
    </form>

    <label form="label-example">Label Example Form</label>
  </body>
</html>
```
