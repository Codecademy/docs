---
Title: '<label>'
Description: 'Identifies captions for other elements in an html document.'
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

**NOTE** This tag also supports the *Event Attributes* and the *Global Attributes* in HTML.

## Syntax

```pseudo
<label><!-- Labeled content goes here --></label>
```

## Usages

The `<label>` tag can define a label for several elements:

- [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input)
- [`<select>`](https://www.codecademy.com/resources/docs/html/elements/select)
- `<meter>`
- `<progress>`
- `<textarea>`

**Note:** `<label>` tags are essential for good accessbility. `<label>` tags creates captions for its coresponding UI elements. Also, a user clicks the text within the `<label>` element, it toggles the corresponding input. This is great for users who have difficulty clicking on small UI elements such as checkboxes.

## Atributes

Some common attributes used to set properties for the `<label>` element are shown below:

- `for`: Specifies the id of the form element the `<label>` should be bound to.
- `form`:  Specifies which form the `<label>` belongs to.

Multiple label elements can be used for the same UI element.

```html
<form id="contact">
  <label form="contact" for="name">Input Label</label>
  <input id="name" />
</form>
```

> **Note:** UI elements can be connected to any `<label>` element placed between `<label></label>` tags.

The following examples uses a `<form>` element that features `<input>` elements with corresponding `<label>` tags:

```html
<label for="name">
  Name Input Label
  <input id="name" />
</label>
```

## Multiple

Multiple `<label>` elements can be used for the same UI element.

```html
<label for="name">Name Input Label
<input id="name" />
<label for="name">Warning: Name is required</label>
```

**Note:** You should not put anchors, buttons, any interactive UI element, between  `<label></label>` tags.

## Example

The following example uses a `<form>` element that features `<input>` elements with coresponding `<label>` tags:

```html
<html>
  <head> </head>
  <body>
    <form>
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
  </body>
</html>
```
