---
Title: '<main>'
Description: 'Represents the primary content within the body element of the web page.'
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

The `<main>` semantic tag represents the primary content within the `<body>` of the web page. This excludes content from other structural elements such as the [header](https://www.codecademy.com/resources/docs/html/semantic-html/header) or [footer](https://www.codecademy.com/resources/docs/html/semantic-html/footer).

## Syntax

The `<main>` can be placed anywhere inside of the `<body>`:

```pseudo
<body>
  <main>
    <!-- Main content goes here. -->
  </main>
</body>
```

## Example

Below is an example of the `<main>` tag being used to display a list of notable lines from works by Shakespeare:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <header>
      <img
        src="https://cdn.pixabay.com/photo/2014/04/03/11/50/drama-312318_640.png"
        width="200"
        height="200"
      />
    </header>
    <main>
      <h1>My Favorite Shakespeare Lines</h1>
      <ul>
        <li>"To be, or not to be: that is the question." - Hamlet</li>
        <li>
          "Friends, Romans, countrymen, lend me your ears!" - Julius Caesar
        </li>
        <li>
          "Shall I compare thee to a summer’s day? Thou art more lovely and more
          temperate." - Sonnet 1
        </li>
      </ul>
    </main>
    <footer>
      <a href="https://en.wikipedia.org/wiki/William_Shakespeare">
        Learn more about William Shakespeare
      </a>
    </footer>
  </body>
</html>
```
