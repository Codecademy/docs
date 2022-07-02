---
Title: '<nav>'
Description: 'Defines a block of navigation links such as menus and tables of contents.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<nav>` element is used to define a [list](https://www.codecademy.com/resources/docs/html/lists) of [navigation](https://www.codecademy.com/resources/docs/uiux/navigation) links such as menus and tables of contents.

## Syntax

```html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#blog">Blog</a></li>
  </ul>
</nav>
```

It is important to note that `<nav>` can be used inside of the `<header>` element, but it can also be used on its own.

## Example

Take a look at the navigation bar at the top of this Codecademy Docs page. It should look something like this in semantic HTML:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <header>
      <!-- The Codecademy Docs nav bar -->
      <nav>
        <ul>
          <li><a href="https://www.codecademy.com/learn">My Home</a></li>
          <li><a href="https://www.codecademy.com/catalog">Catalog</a></li>
          <li><span title="Resources" class="dropdown">Resources</span></li>
          <li><span title="Community" class="dropdown">Community</span></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```
