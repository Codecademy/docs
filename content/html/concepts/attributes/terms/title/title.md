---
Title: 'title'
Description: 'Contains and can display the specified information about the element it belongs to.'
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

The **`title`** global attribute contains and can display the specified information about the element it belongs to.

> **Note:** Although the `title` attribute can display additional information on the screen, it does not work with touch screens, keyboard-only navigation, or assistive technologies.

## Syntax

```pseudo
<opening-tag title="text"></closing-tag>
```

The `title` attribute can be used with any HTML [`element`](https://www.codecademy.com/resources/docs/html/elements) by adding the attribute to the opening tag. The `text` value of the attribute can be any string, including empty string (`""`) and multi-line text. This `text` will appear next to the element as a tooltip text (hint) while hovering over the element to which it is attached.

For nested elements, the `title` attribute will be inherited from the parent element if the child element has no `title` attribute.

### Special Use Cases

While any element can have a `title` attribute, for some elements it provides a special function. When the `title` attribute is used with:

- an [`<abbr>`](https://www.codecademy.com/resources/docs/html/elements/abbr) element, it must contain a description or expansion of the abbreviation.
- an [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe) element, it should describe the embedded content for assistive technologies.
- an [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input) element in forms the information is only visible when hovering over the element. It is better to use a `<label>` element, that is visible all the time.
- a `<link rel="stylesheet">` element, it specifies the default and alternate stylesheets.

## Example

In the example below, the `<p>` element is given a `title` attribute to provide further information about the text in the paragraph:

```html
<p title="Also known as water bears or moss piglets.">Tardigrades can survive some of the harshest conditions.</p>
```

This results in a tooltip with the specified text appearing next to the paragraph while hovering over it:

![HTML title attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-title.png)
