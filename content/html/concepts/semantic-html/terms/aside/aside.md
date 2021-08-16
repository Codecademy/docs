---
Title: "<aside>"
Description: "The <aside> semantic tag represents a part of a page which is relevant to the current content, but not a part of it directly. It can be used for related links, for clarifying a statement from the current article, or even for advertising meant for the current page. "
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

 

The `<aside>` semantic tag represents a part of a page which is relevant to the current content, but not a part of it directly. It can be used for related links, for clarifying a statement from the current article, or even for advertising meant for the current page. 

## Syntax

```html
<aside>
  <!-- Aside content goes inside the tag -->
</aside>
``` 

`<aside>` is a tag that wraps around a block of HTML giving it semantic meaning. It has no special attributes, and by default will act similarly to a `<div>`.

## Example

Suppose the current page wants to feature a definition of an important term without having it be a part of the text the term appears in:

```html
<html>
  <head>
  </head>
  <body>
    <article>
      <h2>Functional Programming in JavaScript</h2>
      <!-- Lots of paragraphs before this point -->
      <p>One of the fun things we can do with functional programming in JavaScript is <b>currying</b>. Here we have an example of taking a function with two inputs and turning it into a curried version</p>
      <aside>
        <p>
          <b>Definition</b>: Currying is the process of converting a function with multiple inputs into a sequence of functions, each taking a single argument and returning the next function in the sequence. The final function in the sequence will then return the same value that the original function would have returned.
        </p>
      </aside>
      <code>
        <!-- Code snippet for article goes here -->
      </code>
    </article>
  </body>
</html>
```

We could use CSS to pull that `<aside>` to the right side of the current article, and have it stand out as a thing worth reading that is in service to the current text.
