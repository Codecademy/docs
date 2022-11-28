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

```suggestion
The **`<label/>`** element is used to identify captions for other HTML elements. This is most commonly used with form elements such as the [**`<input>`**](../input/input.md) element. The <label> tag also supports the *Event Attributes* and the *Global Attributes* in HTML.
```

## Syntax

```html
<label>Input Label</label>
```

## Usages

```suggestion
The `<label>` tag can define a label for several elements:
```

- [`<input>`](../input/input.md)
- [`<meter>`](../meter/meter.md)
- [`<progress>`](../progressput/progress.md)
- [`<select>`](../select/select.md)
- [`<textarea>`](../textarea/textarea.md)

```suggestion
> **Note:** `<label>` tags are essential for good accessbility.
```

```suggestion
> - They allow screenreaders to connect this caption to its coresponding ui elements.
```

```suggestion
> - Also, when a user clicks the text within the **`<label>`** element, it toggles the coresponding input. This is great for users who have difficulty clicking on very small ui elements such as checkboxes.
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

```suggestion
> **Note:** UI elements can be connected to any **`<label>`** element when placed between `<label></label>` tags.
```

The following examples uses a `<form>` element that features `<input>` elements with corresponding `<label>` tags:

```html
<label for="name">
  Name Input Label
  <input id="name" />
</label>
```

## Multiple labels

Multiple `<label>` elements can be used for the same ui element.

```html
<label for="name">Name Input Label
<input id="name" />
<label for="name">Warning: Name is required</label>
```

```suggestion
> **Note:** Do not place anchors, buttons, or any interactive UI element, between  `<label></label>` tags.
```

## Example

The following examples uses a `<form>` element that features `<input>` elements with coresponding `<label>` tags:

```html
<html>
  <head> </head>
  <body>
    <form>
      <!-- This input type requires the user to enter a valid email address -->
      <label for="email">Email Address</label>
      <input id="email" type="email" />

      <!-- This input hides the typed password with ****s -->
      <label for="password">Password</label>
      <input id="password" type="password" />

      <!-- This input provides a checkbox -->
      <input type="checkbox" /><label>Remember Me</label>

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
