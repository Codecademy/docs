---
Title: 'Attributes'
Description: 'HTML attributes can be added to the opening tag of an HTML element to change the elements default behavior or provide additional information about the element. They consist of a name and a value using the following syntax: name="value".'
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

HTML attributes can be added to the opening tag of an HTML element to change the element's default behavior or provide additional information about the element.

They consist of a name and a value using the following syntax: `name="value"`.

```pseudo
<tag name="value"></tag>
```

So for example, the `<img>` image element has a mandatory `src` attribute that contains the image file path/URL:

```html
<img src="codecademy_logo.png" />
```

- `src` is the attribute name.
- `codecademy_logo.png` is the attribute value.

All HTML elements can have attributes. Multiple of them, too!

```html
<img src="nyan_cat.gif" width="500" height="600" />
```

**Note:** Attribute names are case insensitive, but it is a good practice to keep HTML markup lowercase.

## Unique ID Attributes

In HTML, specific and unique `id` attributes can be assigned to different elements in order to differentiate between them.

When needed, the `id` value can be called upon by CSS and JavaScript to manipulate, format, and perform specific instructions on that element and that element only.

Valid `id` attributes should begin with a letter and should only contain letters (`a`-`Z`), digits (`0`-`9`), hyphens (`-`), underscores (`_`), and periods (`.`).

```html
<h1 id="th1s_is.v4lid">Hello World</h1>
```

## Example

In the provided example, we are giving the `<p>` paragraph element an unique identifier using the `id` attribute and changing the color of the default text using the `style` attribute:

```html
<p id="my-paragraph" style="color: aqua;">
  Here's some text that is being altered by the HTML attributes
</p>
```
