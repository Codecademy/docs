---
Title: '<header>'
Description: 'Creates a container for introductory content or navigational aids in a document or section.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Accessibility'
  - 'Elements'
  - 'Semantic'
  - 'Structure'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The **`<header>`** element is a semantic HTML container that represents introductory content for its parent section or document. It typically contains a group of introductory or navigational aids for a specific section or the entire webpage. The `<header>` element provides structural meaning to the content, making the page more accessible to users and easier for search engines to understand.

The `<header>` element is commonly used for site headers, article headers, and section headers where introductory content is needed. It typically houses elements such as headings, logos, taglines, navigation menus, search forms, and authorship information. Using this semantic element improves accessibility, search engine optimization, and code readability compared to generic containers like `<div>`.

## Syntax

```pseudo
<header>
  <!-- Header content goes here -->
</header>
```

The `<header>` element doesn't have any specific attributes beyond the global attributes available to all HTML elements:

- `class`: Specifies one or more class names for styling or JavaScript selection
- `id`: Defines a unique identifier for the element
- `style`: Contains inline CSS styling for the element
- `title`: Provides additional information shown as a tooltip
- `data-*`: Custom data attributes for storing private data
- `aria-*`: Accessibility attributes for assistive technologies

**Return value:**

The `<header>` element doesn't return any value but creates a structural section in the HTML document.

## Example 1: Basic Page Header

This example demonstrates a basic website header that contains a logo, heading, and navigation menu.

```html
<header>
  <!-- Logo image -->
  <img src="logo.png" alt="Company Logo" />

  <!-- Main heading -->
  <h1>My Website</h1>

  <!-- Navigation menu -->
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
```

The output produced by this code will be:

![A webpage header displaying a logo, site title, and horizontal navigation menu](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-header-output-1.png)

The above code creates a semantic header section for the webpage that includes a logo, site title, and navigation menu. Using the `<header>` element helps screen readers and search engines understand that this content represents the introductory section of the page.

## Example 2: Article Header

This example shows how to use the `<header>` element within an article to contain information about the article itself:

```html
<article>
  <header>
    <!-- Article title -->
    <h2>Understanding Semantic HTML</h2>

    <!-- Author information -->
    <p>Written by <a href="author.html">J.S Smith</a></p>

    <!-- Publication date -->
    <time datetime="2025-03-15">March 15, 2025</time>

    <!-- Article tags -->
    <p class="tags">
      <span>HTML5</span>
      <span>Semantics</span>
      <span>Web Development</span>
    </p>
  </header>

  <!-- Article content starts here -->
  <p>
    Semantic HTML elements provide meaning to the structure of a web page...
  </p>

  <!-- More article content -->
</article>
```

The output produced by this code will be:

![An article header section with a title, author name, publication date, and tag labels](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-header-output-2.png)

This example demonstrates how the `<header>` element can be used within an `<article>` to group metadata like the title, author information, publication date, and tags. This structure improves accessibility and provides clear information about the article to both users and search engines.

## Example 3: Multiple Headers in a Page

The following example shows how to use multiple `<header>` elements on a single page for different sections.

```html
<!-- Main page header -->
<header id="main-header">
  <h1>My Tech Blog</h1>
  <nav>
    <!-- Main navigation -->
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- First section with its own header -->
  <section id="featured">
    <header>
      <h2>Featured Articles</h2>
      <p>Our most popular content this month</p>
    </header>

    <article>
      <!-- Article with its own header -->
      <header>
        <h3>Getting Started with CSS Grid</h3>
        <p>Posted on <time datetime="2025-05-10">May 10, 2025</time></p>
      </header>
      <p>
        CSS Grid Layout is a two-dimensional layout system designed for the
        web...
      </p>
    </article>
  </section>

  <!-- Another section with its own header -->
  <section id="latest">
    <header>
      <h2>Latest Articles</h2>
      <p>Fresh content from our writers</p>
    </header>

    <!-- Latest articles would go here -->
  </section>
</main>
```

The output produced by this code will be:

![A webpage layout with separate headers for the main site, a featured section, and an article](https://raw.githubusercontent.com/Codecademy/docs/main/media/html-header-output-3.png)

The above example shows how different `<header>` elements can be used at various levels of the document structure: one for the main page, others for individual sections, and yet others for articles within those sections. Each header provides contextual information relevant to its parent element.

## Frequently Asked Questions

### 1. Can I have multiple `<header>` elements on a page?

Yes, you can have multiple `<header>` elements on a page. Each sectioning content or sectioning root element can have its own `<header>`.

### 2. What's the difference between `<header>` and `<head>`?

The `<head>` element contains metadata about the document, such as the title, character encoding, stylesheets, and scripts. It is not visible on the page. The `<header>` element, on the other hand, is a visible part of the page that contains introductory content like headings, logos, and navigation.

### 3. Can a `<header>` element contain another `<header>`?

No, a `<header>` element should not be placed inside another `<header>` element. This would create invalid HTML and may cause unexpected behavior.

### 4. Where should the `<header>` element be placed?

The `<header>` element can be placed at the beginning of the `<body>` to represent the main page header, or at the beginning of an `<article>`, `<section>`, or other sectioning content to represent the header for that section.

### 5. Is `<header>` the same as a heading (`<h1>`, `<h2>`, etc.)?

No, `<header>` is a container element for introductory content, which often includes headings (`<h1>` through `<h6>`) but can also include other elements like navigation, logos, and author information. A heading is a specific text element that denotes a title or subtitle.
