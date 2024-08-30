---
Title: '<menu>'
Description: 'Represents an unordered list of items with more semantic meaning than a regular ul element.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Lists'
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<menu>`** element represents an unordered list of items with more semantic meaning than a regular `<ul>` element.

## Syntax

```pseudo
<menu>
  <li><!-- Content here --></li>
</menu>
```

Each item is user-interactive content such as a [link](https://www.codecademy.com/resources/docs/html/links) and [buttons](https://www.codecademy.com/resources/docs/uiux/button).

## Example

The following example is a menu of buttons that might go well with a social media application:

```html
<menu>
  <li><button onclick="like()">Like</button></li>
  <li><button onclick="share()">Share</button></li>
  <li><button onclick="subscribe()">Subscribe</button></li>
</menu>
```

Each list item is a button with text and event listeners, prepended with the default dot marker:

![Rendered <menu> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-menu-tag-example.png)
