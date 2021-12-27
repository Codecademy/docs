---
Title: 'Attributes'
Description: 'Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Attributes'
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Attributes can be added to the opening tag of an HTML element to change its default behavior or provide additional data about it.

Attributes consist of a name and a value in the format `name="value"`:

```pseudo
<tag name="value"></tag>
```

So for example, the `<img>` image element has a mandatory `src` attribute that contains the image file path/URL:

```html
<img src="codecademy_logo.png" />
```

- `src` is the attribute name.
- `codecademy_logo.png` is the attribute value.

HTML elements can have any number of attributes.

The example below displays an image element with three attributes:

```html
<img src="nyan_cat.gif" width="500" height="600" />
```

These declare its source, width, and height.

**Note:** Attribute names are not case-sensitive, but it is good practice to write HTML markup in lowercase.

## Unique ID Attributes

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
