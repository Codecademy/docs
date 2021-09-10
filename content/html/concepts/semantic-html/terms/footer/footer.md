---
Title: '<footer>'
Description: 'Represents a part of a page which is meant to be at the end of a completed block of content. Common uses include copyright information for the page or additional links to relevant pages.'
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

The `<footer>` semantic tag represents a part of a page which is meant to be at the end of a completed block of content. If it is at the end of an entire page it might include copyright information for the page or additional links to relevant pages, and if it is at the end of an article it might include information about the author.

## Syntax

```html
<footer>
  <!-- Footer content goes inside the tag -->
</footer>
```

`<footer>` is a tag that wraps around a block of HTML giving it semantic meaning. It has no special attributes, and by default will act similarly to a `<div>`.

## Examples

### Website Footer

After the main content is shown to the users of Bongo Ltd., they should see navigation links to the pages that are not featured in the header as well as copyright information for the current page.

```html
<main>
  <!-- Site content goes here -->
</main>
<footer>
  <nav>
    <a href="/partners">Bongo Ltd. Partner Companies</a>
    <a href="/careers">Careers @ Bongo Ltd.</a>
    <!-- More links go here-->
  </nav>
  <h3>Copyright 2021, Bongo Ltd.</h3>
</footer>
```

A footer like this might be present across multiple pages on the site, even though related navigation links may be different depending on the main content from that page.

### Article Footer

At the end of the article we wish to show author information, as well as social media links for sharing of the article.

```html
<html>
  <head> </head>
  <body>
    <article>
      <!-- Article header and other sections go here -->

      <section>
        <!-- Final section content goes here -->
      </section>

      <footer>
        <p>Article written by Josie Sweets for Skim Milk Magazine, June 2019</p>
        <nav>
          <a>Share on Instagram</a>
          <a>Share on Tumblr</a>
          <a>Share on Twitter</a>
        </nav>
      </footer>
    </article>
  </body>
</html>
```

This is a great use of a semantic element, and also will help the designer when it comes to styling the articles.
