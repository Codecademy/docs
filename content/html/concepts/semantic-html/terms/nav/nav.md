---
Title: "<nav>"
Description: "Defines a block of navigation links such as menus and tables of contents."
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Semantic"
  - "Tags"
CatalogContent:
  - "learn-html"
  - "paths/front-end-engineer-career-path"
---

The `<nav>` is used to define a block of navigation links such as menus and tables of contents.

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
  <head>
  </head>
  <body>
    <header> 
      <!-- The Codecademy Docs nav bar -->
      <nav>
        <ul>
          <li><a href="#home">My Home</a></li>
          <li><a href="#catalog">Catalog</a></li>   
          <li><a href="#resources">Resoruces</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```
