---
Title: '<del>'
Description: 'Shows text that is to be removed from a document, usually rendered in strike-through text.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
  - 'Style'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<del>`** element is used to show a deleted portion of text and is commonly intended to show the changes made to a document while keeping a history of the changes made. Though the style can be changed using [CSS] (https://www.codecademy.com/resources/docs/css/typography/text-decoration), browsers render it as strike-through text: ~~example~~

> **Note:** The `<del>` element is semantically different from the `<s>` element because the former conveys an update in a document while the latter does not.

## Syntax

```pseudo
<del>
  <!-- deleted text here -->
</del>
```

The `<del>` element should only contain text content or other elements meant for text content.

## Example

The following is an example of the `<del>` element:

```html
<html>
  <head> </head>
  <body>
    <p>This is <del>deleted</del> text.</p>
  </body>
</html>
```

The rendered output would look like this:

![Rendered <del> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/del-tag-example.png)
