---
Title: '<li>'
Description: 'Represents a single item in a list of items. It and the other list items must be wrapped in an <ol>, <ul>, or <menu> tag.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Lists'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<li>`** element represents a single [list](https://www.codecademy.com/resources/docs/html/lists) item. This element must be wrapped in an `<ol>`, `<ul>`, or `<menu>` element.

## Syntax

```html
<li>Text for list item</li>
```

Content is required to be between the opening and closing `<li>` tags. It can hold any valid HTML, and each `<li>` element will be indented and preceded either with a number (for ordered lists), or a dot (for unordered lists and menus).

## Example

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h3>My Favorite Things</h3>
    <ul>
      <li>Rain drops on roses</li>
      <li>Whiskers on kittens</li>
      <li>Bright copper kettles</li>
      <li>Warm woolen mittens</li>
    </ul>

    <h3>To-do List</h3>
    <ol>
      <li>Make bed</li>
      <li>Brush teeth</li>
      <li>Have breakfast</li>
      <li>Continue learning HTML</li>
    </ol>
  </body>
</html>
```

This will output the following;

![Rendered <li> tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/li-tag-example.png)
