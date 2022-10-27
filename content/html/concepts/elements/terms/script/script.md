---
Title: '<script>'
Description: 'Used to insert runnable code into a document, usually JavaScript. Can be used both to include a script within the HTML document, or to load an external script from another source.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Elements'
  - 'Script'
  - 'Tags'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<script>`** element is used to insert runnable code into a document, usually [JavaScript](https://www.codecademy.com/resources/docs/javascript). It can be used both to include a script within the HTML document, or to load an external script from another source.

## Syntax

```html
<!-- In-document script -->
<script>
  // JavaScript code goes here
</script>

<!-- External script -->
<script src="filename.js"></script>
```

The `<script>` element can be used without attributes, but some common attributes are used to modify the behavior:

- When provided, the `src` attribute will load an external script.
- The `async` attribute executes the script as soon as it is loaded, ignoring other pending actions in the browser.
- The `defer` attribute requires the script to wait to execute until the content in the `<body>` has finished loading into the browser.

The `<script>` element is allowed to be placed both into the `<head>` and `<body>`, and their behavior with respect to loading and executing depends on which one they are in, and the attributes they are given.

## Example

This example demonstrates the multiple places where a `<script>` element may live, and how execution affects their location and attributes:

```html
<html>
  <head>
    <!-- Will load and run file "deferred_app.js" only once the body below is fully loaded into memory -->
    <script defer src="deferred_app.js"></script>

    <!-- Will load and run file "async_app.js" as soon as it finishes loading -->
    <script async src="async_app.js"></script>

    <!-- Will run before the body finishes loading into memory -->
    <script>
      console.log('Goodbye, World!');
    </script>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>
      Traditionally, a Hello World application represents the first step a new
      programmer takes into learning a new language.
    </p>

    <!-- Will naturally run after the other body content is fully loaded into memory -->
    <script>
      console.log('Hello, World!');
    </script>
  </body>
</html>
```
