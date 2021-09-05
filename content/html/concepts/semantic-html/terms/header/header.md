---
Title: '<header>'
Description: 'Represents a part of a page which is meant to be introductory. It can include heading tags, a logo, a search bar, and navigation elements.'
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

The `<header>` semantic tag represents a part of a page which is meant to be introductory. It can include heading tags, a logo, a search bar, and navigation elements.

Headers are not limited to the beginning of the whole page, but can be at the beginning of subsections within page as well.

## Syntax

```html
<header>
  <!-- Header content goes inside the tag -->
</header>
```

`<header>` is a tag that wraps around a block of HTML giving it semantic meaning. It has no special attributes, and by default will act similarly to a `<div>`.

## Examples

### Website Header

Before the main content is shown to the users of Bongo Ltd., they should see: the company logo, a form which allows them to search the site, and a few links to common pages across the site.

```html
<html>
  <head> </head>
  <body>
    <header>
      <!-- Company Logo -->
      <img src="bongo_logo.jpg" alt="Bongo Ltd." />

      <!-- Search Bar -->
      <form>
        <!-- ... -->
      </form>

      <!-- Navigation Links -->
      <nav>
        <!-- ... -->
      </nav>
    </header>
    <main>
      <!-- Site content goes here -->
    </main>
  </body>
</html>
```

A header like this might be present across multiple pages on the site since it provides common branding and persists helpful features such as search and navigation as the user moves between pages.

### Article Header

At the start of an article the user should see the title, who wrote it, and a short summary of what the article is about.

```html
<html>
  <head> </head>
  <body>
    <article>
      <!-- Introduce the article here -->
      <header>
        <h2>How to Find the Moon</h2>
        <h4>Posted by DavidBowiesYamamotoPants at 2:38PM on 05/23/21</h4>
        <p>
          By reading this article you will gain Amateur Level Expertise in
          locating the moon in the night sky.
        </p>
      </header>

      <!-- First section of the article lives here -->
      <section>
        <h3>Step One: Be Outside</h3>
        <!-- ... -->
      </section>
    </article>
  </body>
</html>
```

This is a great use of a semantic element, and also will help the designer when it comes to styling the articles.
