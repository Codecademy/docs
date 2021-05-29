---
Title: "<article>"
Subjects:
  - "Web Development"
  - "Web Design"
Tags:
  - "Semantic"
  - "HTML Tags"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-html"
---

## Definition 

The semantic HTML tag `<article>` represents a part of a page which is self-contained, and could be published elsewhere. Some common uses of the `<article>` tag  include blog posts or magazine articles.

## Syntax

```html
<article>
  <!-- Article content goes inside the tag. -->
</article>
``` 

`<article>` is a tag that wraps around a block of HTML giving it semantic meaning. It has no special attributes, and by default will act similarly to a `<div>`.

## Examples

Suppose that there is a need to layout multiple posts about coding practices for a new site. It would be semantically correct to use the `<article>` tag, as below: 

```html
<h1>FizzBuzz Feed</h1>

<article>
  <h2>How I Learned to Love Conditionals</h2>
  <p>First paragraph of first article.</p>
  <p>Second paragraph of first article.</p>
</article>

<article>
  <h2>Nineteen New Uses for HTML Canvas</h2>
  <p>First paragraph of second article.</p>
  <p>Second paragraph of second article.</p>
</article>
```