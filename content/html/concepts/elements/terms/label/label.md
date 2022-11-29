---
Title: '<label>'
Description: 'Identifies captions for HTML Form elements such as <input> and other UI elements.'
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

The `<label/>` element is used to identify captions for other HTML elements. This is most commonly used with form elements such as the [**`<input>`**](https://www.codecademy.com/resources/docs/html/elements/input/input.md) element. The `<label>` tag also supports the *Event Attributes* and the *Global Attributes* in HTML.

## Syntax

```html
<label>Input Label</label>
```

## Usages

The `<label>` tag can define a label for several elements:

- [`<input>`](../input/input.md)
- [`<meter>`](../meter/meter.md)
- [`<progress>`](../progressput/progress.md)
- [`<select>`](../select/select.md)
- [`<textarea>`](../textarea/textarea.md)

```suggestion
> **Note:** `<label>` tags are essential for good accessbility.
```

```suggestion
> - '<label>' tags creates captions for its coresponding UI elements.
```

```suggestion
> - Also, when a user clicks the text within the `<label>` element, it toggles the corresponding input. This is great for users who have difficulty clicking on small UI elements such as checkboxes.
```

## Atributes

Some common attributes used to set properties for the `<label>` element are shown below:

|   Attribute    |   Data Type   | Description
|   `for`    |   String   | Specifies the id of the form element the `<label>` should be bound to.
|   `form`    |   String   | Specifies which form the `<label>` belongs to.

Multiple label elements can be used for the same UI element.

```html
<form id="contact">
  <label form="contact" for="name">Input Label</label>
  <input id="name" />
</form>
```

> **Note:** UI elements can be connected to any `<label>` element when placed between `<label></label>` tags.

The following examples uses a `<form>` element that features `<input>` elements with corresponding `<label>` tags:

```html
<label for="name">
  Name Input Label
  <input id="name" />
</label>
```

## Multiple labels

Multiple `<label>` elements can be used for the same UI element.

```html
<label for="name">Name Input Label
<input id="name" />
<label for="name">Warning: Name is required</label>
```

> **Note:** Do not place anchors, buttons, or any interactive UI element, between  `<label></label>` tags.

## Example

```suggestion
The following examples uses a `<form>` element that features `<input>` elements with coresponding `<label>` tags:
```

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

![Rendered <input> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/input-tag-example.png)
