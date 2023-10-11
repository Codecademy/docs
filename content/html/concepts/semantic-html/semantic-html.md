---
Title: 'Semantic HTML'
Description: 'Semantic HTML is the use of HTML tags that represent the content so that browsers can appropriately parse the content of the site.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Semantic'
  - 'Browsers'
  - 'Development'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**Semantic HTML** introduces meaning to the code we write. Developing with semantic HTML means using HTML tags that are representative of the content so that browsers can appropriately parse the content of the site.

## Non-Semantic Tags

Tags such as a `<div>` or `<span>` represent non-semantic HTML: these tags do not convey any information about their content. These tags are multipurpose containers that can support a variety of content. The use of these tags obscures the contents of a page and does not capitalize on the inbuilt attributes available in the use of the appropriate semantic tags.

```html
<!-- Non Semantic HTML -->
<div id="footer">
  <p>This is a footer</p>
</div>
```

## Semantic Tags

Semantic tags, such as `<header>` or `<footer>`, are designated for a specific purpose, which is communicated by the tag name. In addition to providing better clarity to the organization and content of a page, semantic tags enable additional features for accessibility. For example, using the `<button>` tag for controlling any embedded media also allows for navigation, and use of the button via keyboard.

```html
<!-- Semantic HTML -->
<footer>
  <p>This is a footer.</p>
</footer>
```

## Why Use Semantic HTML?

- Accessibility: Semantic HTML makes webpages accessible for mobile devices and for people with disabilities as well. This is because screen readers and browsers are better able to interpret the content of the site.

- Readability: Semantic HTML also makes the website’s source code easier to read for other web developers.

- SEO: It improves the website SEO, or Search Engine Optimization, which is the process of increasing the number of people that visit a webpage. With better SEO, search engines are better able to identify the content of a website and weigh the most important content appropriately.

## Testing and Validating for Browser Compatibility

Testing and validating for browser compatibility is essential in web development to ensure a consistent user experience. Stick to well-supported modern semantic HTML tags, checking their compatibility using resources like [Can I use](https://caniuse.com/). Additionally, employ validation tools like the [W3C Markup Validation Service](https://validator.w3.org/) to maintain code quality, identify errors, and ensure compliance with web standards, enhancing compatibility across various browsers and devices. 

## Semantic HTML Best Practices

Use Semantics for Meaning: Choose semantic HTML Tags wisely: It is important to choose tags that accurately convey the content's meaning and purpose. Avoid common mistakes like using `<article>` and `<section>` tags interchangeably. In the following example, using `<article>` for each subsection correctly represents self-contained content (news articles), while `<section>` encapsulates the broader category 'Technology News,' aligning with their intended semantic purposes.

```html
<section>
  <h1>Technology News</h1>
  <article>
    <h2>Latest Smartphone Releases</h2>
    <p>Discover the newest smartphones hitting the market...</p>
    <!-- Article content here -->
  </article>
  <article>
    <h2>Upcoming Tech Events</h2>
    <p>Stay updated on the latest tech events & conferences...</p>
    <!-- Article content here -->
  </article>
</section>
```

Proper Nesting: Structure with intent. Proper nesting is a fundamental aspect of semantic HTML. So, it is crucial to structure content logically to reflect hierarchical relationships between semantic elements. For instance, avoid the common mistake of placing the `<aside>` element directly within the main content; `<aside>` is intended to be positioned to the side, separate from the primary content.

```html
<main>
  <article>
    <!-- Main content -->
  </article>
  <aside>
    <!-- Sidebar content -->
  </aside>
</main>
```

## Drawbacks of Using Semantic HTML

Using semantic HTML tags is generally recommended for creating accessible and well-structured web content, but there are potential challenges to consider, such as increased complexity, limited browser support, a learning curve for new developers, and the need for ongoing maintenance. Additionally, for very simple web pages or prototypes, using minimal HTML may be more efficient due to potential file size concerns in performance-sensitive applications.
