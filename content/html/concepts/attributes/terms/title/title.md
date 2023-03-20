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

> **Note:** Although the `title` attribute can display additional information on the screen, it does not work with touch screens and keyboard-only navigation. Using the `title` attribute is especially important for assistive technologies to help provide a user-friendly browsing experience.

## Syntax

```pseudo
<opening-tag title="text"> content </closing-tag>
```

The `title` attribute can be used with any HTML [`element`](https://www.codecademy.com/resources/docs/html/elements) by adding the attribute to the opening tag. The `text` value of the attribute can be any string, including empty string (`""`) and multi-line text. This `text` will appear next to the element as a tooltip text (hint) while hovering over the element it is used with.

For nested elements, the `title` attribute will be inherited from the parent element if the child element has no `title` attribute.

### Special Use Cases

While any element can have a `title` attribute, it provides a special function for some elements. When the `title` attribute is used with:

- [`<abbr>`](https://www.codecademy.com/resources/docs/html/elements/abbr): The `title` must contain a description or expansion of the abbreviation.
- [`<iframe>`](https://www.codecademy.com/resources/docs/html/elements/iframe): The `title` should describe the embedded content for assistive technologies.
- [`<input>`](https://www.codecademy.com/resources/docs/html/elements/input): This element only displays information when a user is hovering over the element. It is better to use a `<label>` element that is always visible.
- `<link rel="stylesheet">`: The `title` specifies the default and alternate stylesheets.

## Example

In the example below, the `<p>` element uses a `title` attribute to provide further information about the text in the paragraph:

```html
<p title="Also known as water bears or moss piglets.">
  Tardigrades can survive some of the harshest conditions.
</p>
```

This results in a tooltip with the specified text appearing next to the paragraph while hovering over it:

![HTML title attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-title.png)
