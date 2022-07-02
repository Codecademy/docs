---
Title: '<cite>'
Description: 'Represents a citation to a referenced work such as a book, a song, or a painting.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<cite>`** element represents a citation to a referenced work such as a book, a song, or a painting. It needs to include only the title of the work being referenced.

## Syntax

```html
<cite>
  <!-- Title of work goes here -->
</cite>
```

Text is wrapped in opening and closing `<cite>` tags. That text may also be wrapped in a link to an external source for the citation, if one is available.

## Example

Suppose there is an article on the integral, from calculus, on this page. It features a direct quote from Wikipedia, so it will need to be cited.

```html
<html>
  <head> </head>
  <body>
    <figure>
      <blockquote>
        The major advance in integration came in the 17th century with the
        independent discovery of the fundamental theorem of calculus by Leibniz
        and Newton.
      </blockquote>
      <figcaption>
        From
        <cite
          ><a href="https://en.wikipedia.org/wiki/Integral#Leibniz_and_Newton"
            >Integral</a
          ></cite
        >, on Wikipedia.
      </figcaption>
    </figure>
  </body>
</html>
```

![Output of the cite tag example](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-cite-example.png)
