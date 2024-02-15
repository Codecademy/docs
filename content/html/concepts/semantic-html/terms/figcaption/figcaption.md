---
Title: '<figcaption>'
Description: 'Describes the media encapsulated within the <figure> element.'
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

The `<figcaption>` semantic HTML element describes the media encapsulated within the `<figure>` element.

## Syntax

Developers will normally use `<figcaption>` within the `<figure>` element to group the media and description. This way, if a developer decides to change the position of the media, the description will follow along with it.

```html
<figure>
  <!-- An image, diagram, or code snippet goes inside figure -->
  <figcaption>Some text describing the above</figcaption>
</figure>
```

For example:

```html
<figure>
  <img src="dota2.jpg" />
  <figcaption>This picture shows characters from the game Dota 2.</figcaption>
</figure>
```

## Example

Suppose the current page wants to include an image and a image caption:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <article>
      <h2>Functional Programming in JavaScript</h2>
      <p>
        One of the fun things we can do with functional programming in
        JavaScript is <b>currying</b>. Here we have an example of taking a
        function with two inputs and turning it into a curried version:
      </p>
      <!-- The figure element -->
      <figure>
        <img src="currying.gif" />
        <figcaption>
          The GIF shows the transition from a normal function to a curried
          version.
        </figcaption>
      </figure>
    </article>
  </body>
</html>
```
