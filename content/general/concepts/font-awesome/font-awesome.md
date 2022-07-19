---
Title: 'Font Awesome'
Description: 'Font Awesome is a very popular icon toolkit for the web, based on CSS and Less.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Libraries'
  - 'World Wide Web'
  - 'Fonts'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Font Awesome** is a very popular icon toolkit for the web, based on [CSS](https://www.codecademy.com/resources/docs/css) and [Less](https://lesscss.org/). It was developed by Dave Gandy in 2012 and is currently up to version 6. All versions through version 4 were free to use, while versions 5 & 6 have paid and free versions.

Font Awesome is most easily used by including a line in the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) element of the web page that allows the use of the Font Awesome icons and their CSS modifiers. The line to include will differ depending on what version you're using.

For version 4, the line to include is:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

Using the free version of 6 requires a "Kit Code" that can be retrieved by [signing up for an account](https://fontawesome.com/start) at Font Awesome. With the "Kit Code" the line to include Font Awesome on a web page is this:

```html
<script src="https://kit.fontawesome.com/kitcode.js" crossorigin="anonymous"></script>
```

Utilizing the fonts and features of Font Awesome require applying different class attributes to HTML elements on the page. The icons themselves are designed to use inline elements and are typically displayed using an [`<i>`](https://www.codecademy.com/resources/docs/html/elements/i) element.

Version 4 would use the prefix `fa` followed by the icon name:

```html
<i class="fa fa-check-square"></i>
```

Version 6 would use `fas` followed by the icon name. The `s` stands for "solid". Some icons also have a "regular" version accessed by using `far` instead.

```html
<i class="fas fa-file-code"></i><i class="far fa-file-code"></i>
```

