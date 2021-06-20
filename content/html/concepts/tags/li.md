---
Title: "<li>"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Tags"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-html"
  - "https://www.codecademy.com/learn/paths/web-development"
---

## Definition 

Represents a single item in a list of items. It and the other list items must be wrapped in an `<ol>`, `<ul>`, or `<menu>` tag.

## Syntax

```html
<li>Text For List Item</li>
``` 

`<li>` is a tag that requires content between it and its closing tag. It can contain any valid HTML, and each `<li>` tag will be indented and preceded either with a number (for ordered lists), or a dot (for unordered lists and menus).

## Example

```html
<html>
  <head>
  </head>
  <body>
    <h3>My Favorite Things</h3>
    <!-- The ol creates an ordered list, content from each li tag will have a number before it -->
    <ol>
      <!-- This will look like:     1. Rain drops on roses -->
      <li>Rain drops on roses</li>
      <!-- This will look like:     2. Whiskers on kittens -->
      <li>Whiskers on kittens</li>
      <li>Bright copper kettles</li>
      <li>Warm woolen mittens</li>
    </ol>
  </body>
</html>
```