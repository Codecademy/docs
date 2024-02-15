---
Title: '<section>'
Description: 'Defines elements in a document, such as chapters, headings, or any other area of the document with the same theme.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Tags'
  - 'Elements'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<section>`** element defines elements in a document, such as chapters, headings, or any other area of the document with a common theme.

For example, content with the same theme such as articles about cricket can go under a single `<section>`. A website’s home page could be split into sections for the introduction, news items, and contact information.

## Syntax

```pseudo
<section>
  <!-- Elements in a document with a common theme -->
</section>
```

In the following code, we created a `<section>` element to encapsulate the code. In `<section>`, we added a `<h2>` element as a heading and an `<article>` as well.

```html
<section>
  <h2>Fun Facts About Cricket</h2>
  <article>
    <p>A single match of cricket can last up to 5 days.</p>
  </article>
</section>
```

## Example

Suppose the current page wants to add two sections:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <!-- One section -->
    <section>
      <h2>Fun Facts About Cricket</h2>
      <article>
        <p>A single match of cricket can last up to 5 days.</p>
      </article>
    </section>
    <!-- Another section -->
    <section>
      <h2>Fun Facts About Cicada</h2>
      <article>
        <p>Some cicadas could explode with fungus.</p>
      </article>
    </section>
  </body>
</html>
```

## Alternative Elements

The `<section>` element should only be used if no other suitable element is available. Some alternatives include the following:

- The [`<header>`](https://www.codecademy.com/resources/docs/html/semantic-html/header) element describes that the content inside is the header of the page.
- The [`<nav>`](https://www.codecademy.com/resources/docs/html/semantic-html/nav) element describes that the content inside is a navigation system of the page.
- The [`<main>`](https://www.codecademy.com/resources/docs/html/semantic-html/main) describes that the content inside is the main content of the page.
- The [`<footer>`](https://www.codecademy.com/resources/docs/html/semantic-html/footer) element describes that the content inside is the footer of the page.
