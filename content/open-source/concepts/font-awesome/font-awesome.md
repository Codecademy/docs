---
Title: 'Font Awesome'
Description: 'Font Awesome is an icon toolkit for the web, based on CSS and Less.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'World Wide Web'
  - 'Fonts'
  - 'Icons'
  - 'Open Source'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Font Awesome** is an icon toolkit for the web, based on [CSS](https://www.codecademy.com/resources/docs/css) and [Less](https://lesscss.org/). It was developed by Dave Gandy in 2012 (originally for sites that used [Bootstrap](https://www.codecademy.com/resources/docs/open-source/bootstrap)). The [latest release](https://fontawesome.com/versions) is version 6 (February 2022). The first four versions (1-4) were free to use; all releases of Font Awesome since then (5 & 6) have paid and free versions.

The free versions of Font Awesome is open source and General Public License (GLP) friendly.

## Syntax

Font Awesome is commonly used via [HTML](https://www.codecademy.com/resources/docs/html) by including a line in the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) element of the web page. This allows the use of the Font Awesome icons and their CSS modifiers. The line to include will differ depending on the version being used.

For version 4, it is referenced in a [`<link>`](https://www.codecademy.com/resources/docs/html/elements/link) element via [CDN](https://www.codecademy.com/resources/docs/general/cdn):

```pseudo
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
</head>
```

The free part of version 6 requires a "Kit Code" that can be retrieved by [signing up for a Font Awesome account](https://fontawesome.com/start). The "Kit Code" can then be referenced in a [`<script>`](https://www.codecademy.com/resources/docs/html/elements/script) element:

```pseudo
<head>
  <script
    src="https://kit.fontawesome.com/kitcode.js"
    crossorigin="anonymous"
  ></script>
</head>
```

## Using Font Awesome

Utilizing the fonts and features of Font Awesome require applying different [class](https://www.codecademy.com/resources/docs/html/classes) names to HTML elements on the page. The icons themselves are designed to use inline elements and are displayed with an [`<i>`](https://www.codecademy.com/resources/docs/html/elements/i) element.

Version 4 would use the prefix `fa` followed by the icon name:

```html
<i class="fa fa-check-square"></i>
```

![Font Awesome Check Icon](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-awesome-check.png)

Version 6 uses `fas` followed by the icon name. The `s` stands for "solid". Some icons also have a "regular" version accessed by using `far` instead:

```html
<i class="fas fa-file-code"></i> <i class="far fa-file-code"></i>
```

![Font Awesome Code File Icons](https://raw.githubusercontent.com/Codecademy/docs/main/media/font-awesome-code.png)

There are several different values that can be added to the `class` attribute to modify the appearance of the Font Awesome icons. Several are listed below:
