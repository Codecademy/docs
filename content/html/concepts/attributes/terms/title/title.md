---
Title: 'title'
Description: 'Contains information about the element it belongs to.'
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

The **`title`** global attribute contains information about the element it belongs to.

## Syntax

```pseudo
<opening-tag title="text"></closing-tag>
```

The `title` global attribute can be used on any HTML [`element`](https://www.codecademy.com/resources/docs/html/elements) by adding the attribute to the opening-tag. The `text` value of the attribute can be any text, even multi-line text. This text will appear as a tooltip text while hovering over the element it is attached to.

Inheritance

### Special Use Cases

- <link rel="stylesheet">, creates an alternate stylesheet.
- If included on the <abbr> opening tag, the title must be a full expansion of the abbreviation or acronym. Instead of using title, when possible, provide an expansion of the abbreviation or acronym in plain text on first use, using the <abbr> to mark up the abbreviation. This enables all users know what name or term the abbreviation or acronym shortens while providing a hint to user agents on how to announce the content.
- While title can be used to provide a programmatically associated label for an <input> element, this is not good practice. Use a <label> instead.

## Example

In the example below, the `<p>` element is given a `title` attribute to provide further information about the text in the paragraph:

```html
<p title="Also known as water bears or moss piglets.">Tardigrades can survive some of the harshest conditions.</p>
```

This results in a tooltip with the specified text appearing while hovering over the paragraph:

![HTML title attribute](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-attribute-title.png)
