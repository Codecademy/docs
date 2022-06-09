---
Title: '<a>'
Description: 'Creates a link to another page or to a location in the current page.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Anchor'
  - 'Link'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

The `<a>` HTML tag, also known as the anchor tag, creates a link to another page or to a location in the current page. It can also be used to link to email addresses, phone numbers, and files.

## Syntax

```html
<a href="url">Displayed Text</a>
```

The following attributes are commonly used in the `<a>` tag:

- `href`, which represents the URL that the link points to.
- `target`, which represents where to open and display the URL stored in the `href`.

## Example

The following example shows a list of [links](https://www.codecademy.com/resources/docs/html/links) that utilize the `<a>` tag:

```html
<ul>
  <!-- External Link -->
  <li><a href="https://codecademy.com" target="_blank">Codecademy</a></li>

  <!-- Internal Link -->
  <li><a href="#about-us">About Us</a></li>

  <!-- Image Link -->
  <li>
    <a href="http://www.codecademy.com">
      <img
        src="https://raw.githubusercontent.com/Codecademy/docs/main/media/cc_logo.png"
    /></a>
  </li>

  <!-- Email and Phone Links -->
  <li><a href="mailto:foo@codecademy.com">foo@codecademy.com</a></li>

  <li><a href="tel:234-555-1212">234-555-1212</a></li>
</ul>
```

The rendered output would look like this:

![Rendered anchor tags](https://raw.githubusercontent.com/Codecademy/docs/main/media/rendered-anchor-tags.png)
