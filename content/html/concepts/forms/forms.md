---
Title: 'Forms'
Description: 'The HTML  element is used to collect and send information to an external source.  can contain various input elements. When a user submits the form, information in these input elements is passed to the source which is named in the action attribute of the form. html  Enter your name:'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Forms'
  - 'Paragraphs'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The HTML `<form>` element is used to collect and send information to an external source.

`<form>` can contain various input elements. When a user submits the form, information in these input elements is passed to the source which is named in the `action` attribute of the form.

## Syntax

```html
<form method="post" action="http://server1">
  Enter your name:
  <input type="text" name="fname">
  <br>

  Enter your age:
  <input type="text" name="age">
  <br>

  <input type="submit" value="Submit">
</form>
```

## Submitting a Form

Once we have collected information in a form we can send that information somewhere else by using the `action` and `method` attribute:

- The `action` attribute tells the form to send the information. A URL is assigned that determines the recipient of the information.
- The `method` attribute tells the form what to do with that information once it’s sent. An HTTP verb is assigned to the `method` attribute that determines the action to be performed.

```html
<form action="/index3.html" method="PUT"></form>
```

## Required Attribute

In HTML, input fields have an attribute called `required` which specifies that the field must include a value.

The example code block shows an input field that is required. The attribute can be written as `required="true"` or simply `required`.

```html
<input type="password" name="password" required>
```
