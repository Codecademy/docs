---
Title: 'Comments'
Description: 'HTML comments are used to add notes within code that are not displayed in the browser.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Comments'
  - 'Documentation'
  - 'Syntax'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**HTML comments** are used to add notes within code that are not displayed in the browser. They help developers document their code, temporarily disable sections of markup, and leave notes for themselves or other team members without affecting the webpage's appearance.

## Syntax

To create a comment in HTML, the content must be placed between the opening comment tag `<!--` and the closing comment tag `-->`. Anything between these tags will be ignored by the browser when rendering the page.

```html
<!-- Comments go between these tags. -->
```

There are several ways to use comments in HTML.

## Single-Line Comments

Single-line HTML comments are commonly used for brief explanations:

```html
<!-- Navigation menu -->
<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
  </ul>
</nav>
```

## Commenting Out Code

Developers often comment out HTML to temporarily disable it during development or debugging:

```html
<div class="container">
  <p>This paragraph will be displayed.</p>
  <!-- <p>This paragraph has been commented out and won't appear.</p> -->
</div>
```

## Comments Within Elements

HTML comments can be placed inside elements between tags, but not within the tags themselves:

```html
<p>
  This text
  <!-- This comment is inside the paragraph element -->
  will display with the comment hidden.
</p>
```

This renders properly, but the following example would cause errors:

```html
<p <!-- This comment placement is incorrect -->
  >This text will not display properly.
</p>
```

## Nested comments

Nested cooments are not recommended because they may cause unexpected behavior. An HTML comment ends at the first occurrence of a closing tag (`-->`), so anything written after that may be rendered on the page—even if it's intended to be hidden. Example:

```html
<!-- Outer comment <!-- Inner comment -->
This text will render. -->
```

This example will render as follows:

![HTML Comments A](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-comments-2.png)

In this example, the browser sees the first `-->` as the end of the comment and renders everything after it. To avoid this, do not place comments within other comments.

## Example - Basic Use of Comments in HTML

Here's a practical example showing how to use HTML comments:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Comments Demo</title>
  </head>
  <body>
    <h1>HTML Comments Example</h1>

    <!-- This heading is commented out -->
    <!-- <h2>This won't be visible</h2> -->

    <p>This text is visible on the page.</p>

    <p>
      Another visible paragraph
      <!-- with a hidden comment -->.
    </p>
  </body>
</html>
```

This will render as follows:

![HTML Comments B](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-comments-3.png)
