---
Title: '<figure>'
Description: 'Encapsulates media such as an image, diagram, or code snippet.'
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

The `<figure>` semantic HTML element is used to encapsulate media such as an image, diagram, or code snippet.

## Syntax

`<figure>` is a tag that wraps around a block of HTML giving it semantic meaning. It has no special attributes, and by default will act similarly to a `<div>`.

```html
<figure>
  <!-- An image, diagram, or code snippet goes inside the tag -->
</figure>
```

The `<figcaption>` element is used to describe the media encapsulated within the `<figure>` element. Developers will normally use `<figcaption>` within the `<figure>` element to group the media and description. This way, if a developer decides to change the position of the media, the description will follow along with it.

```html
<figure>
  <img src="qwerty.jpg" />
  <figcaption>The image shows the layout of a qwerty keyboard.</figcaption>
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
