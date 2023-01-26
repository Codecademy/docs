---
Title: 'Style'
Description: 'The style attribute specifies how a page will be rendered in a web browser.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Style' 
  - 'Attributes'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it. The style attribute specifies how a page will be rendered in a web browser.

## Syntax

Style consist of a name and a value or values in the format `name="value1;value2;"`:

```pseudo
<tag name="value1;value2"></tag>
```

Specific and unique `id` attributes can be assigned to elements to differentiate them, and `id` values can be referenced in CSS and JavaScript to manipulate, format, and perform specific instructions on a single element alone, without affecting others of the same type.

Valid `id` attribute values begin with a letter and must comprise only letters (`a`-`Z`), digits (`0`-`9`), hyphens (`-`), underscores (`_`), and periods (`.`).

```html
<h1 id="th1s_is.v4lid">Hello World</h1>
```

**Note:** While `th1s_is.v4lid` is indeed a valid `id` value, it's best to use a consistent naming scheme such as camel case (`thisIsValid`), dash case (`this-is-valid`), or snake case (`this_is_valid`).

## Example

In the example below, the `<p>` (paragraph) element is given a unique identifier in its `id` attribute, and the text color is set using the `style` attribute:

```html
<p id="my-paragraph" style="color: aqua;">
  Here's some text that is being altered by the HTML attributes
</p>
```