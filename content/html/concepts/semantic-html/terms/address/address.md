---
Title: '<address>'
Description: 'Represents the contact information of a business or person.'
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

The **`<address>`** tag is a semantic HTML element that is used to indicate that an organization or person's contact information is being provided. This tag can include information such as a mailing address, links to social media, email, phone number, URLs, etc. This element can also be used in various areas such as the top of the webpage or its bottom.

> **Note:** Only contact information should be presented within the `<address>` tag. Content such as a blog post's publication date should be added within the applicable elements, for example, the `<time>` tag.

## Syntax

```html
<address>
  <!-- contact information goes here -->
</address>
```

## Example 1

The code snippet below shows the `<address>` tag being used to convey a person's email address and phone number:

```html
<p>Want to work together? Contact me via the information below:</p>
<address>
  <a href="mailto:roodang@smail.com">roodang@smail.com</a><br />
  <a href="tel:+13165552398">(316).555.2398 </a>
</address>
```

## Example 2

The snippet below shows the tag being used to share a company's contact information:

```html
<address>
  Written by <a href="mailto:stoopplants@tmail.com">Stoop Branch </a>.<br />
  Visit us at:<br />
  Tree Opius<br />
  Box 354, Palm Tree<br />
  USA
</address>
```
