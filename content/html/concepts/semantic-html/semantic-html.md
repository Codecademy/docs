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
  <p>This is a footer</p>
</footer>
```

## Why Use Semantic HTML?

- Accessibility: Semantic HTML makes webpages accessible for mobile devices and for people with disabilities as well. This is because screen readers and browsers are better able to interpret the content of the site.

- Readability: Semantic HTML also makes the website’s source code easier to read for other web developers.

- SEO: It improves the website SEO, or Search Engine Optimization, which is the process of increasing the number of people that visit a webpage. With better SEO, search engines are better able to identify the content of a website and weigh the most important content appropriately.
