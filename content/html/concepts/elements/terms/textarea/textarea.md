---
Title: '<textarea>'
Description: 'Displays multi-line plain-text input.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Input'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<textarea>`** element defines a box for multi-line plain-text input that is collected from the user.

## Syntax

```pseudo
<textarea>
  <!-- Content here -->
</textarea>
```

[Attributes](https://www.codecademy.com/resources/docs/html/attributes) are optional.

### Attributes

Commonly used attributes are shown in the table below:

| Attribute | Data Type | Description                        |
| --------- | --------- | ---------------------------------- |
| `id`      | String    | Links to `<label>` element.        |
| `name`    | String    | Name of the table.                 |
| `rows`    | Integer   | Define the initial rows number.    |
| `cols`    | Integer   | Define the initial columns number. |

When not given, the default value is 20 for `cols` and 2 for `rows`.

## Example

The following example demonstrates `<textarea>` with several attributes defined and an associated `<label>` element:

```html
<html>
  <head> </head>
  <body>
    <label for="textbox">Share your thoughts:</label>
    <textarea id="textbox" name="textbox" rows="1" cols="30">
        Okay, here's the situation...
    </textarea>
  </body>
</html>
```

This will display:

![HTML Elements Textarea label](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-elements-textarea.png)
