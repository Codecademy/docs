---
Title: '<textarea>'
Description: 'An HTML element for multi-line plain-text input.'
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

The **`<textarea>`** element defines a box for multi-line plain-text input.

## Syntax

```

<textarea>
  <!-- content here -->
</textarea>

```

Shown above is the syntax for plain `<textarea>`. All attributes for this field are optional.

### Attributes

Commonly used attributes are shown in the table below.

    | Attribute     | Data Type     | Description  |
    | ------------- |-------------  | -----|
    | `id`          | String        |   Links to `<label>` element |
    | `name`        | String        |   Name of the table |
    | `rows`        | Integer       |   Define the initial rows number|
    | `cols`        | Integer       |   Define the initial columns number |

When not given, the default value is 20 for `cols` and 2 for `rows`.

## Example

Following example demonstrates `<textarea>` with several attributes defined and associated `<label>` element. It can be used for comment section.

```html

<html>
  <head> </head>
  <body>
    <label for="textbox">Share your thoughts:</label>
    <textarea id="textbox" name="textbox"
      rows="21" cols="37">
        Okay, here's the situation...
    </textarea>
  </body>
</html>

```
