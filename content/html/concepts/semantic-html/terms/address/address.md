---
Title: '<address>' 
Description: 'Used to provide a person or organization's contact information' 
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

**Note:** Only contact information should be presented within the `<address>` tag. Content such as an blog post's publication date should be use within their respective elements, for example, the `<time>` tag.

## Syntax

```html
<address>
  <!-- contact information goes here -->
</address>
```

## Example 1

The below code snippet shows the `<address>` tag being used to convey a person's email address and phone number:

```html
<p>Want to work together? Contact me via the information below:</p>
<address>
  <a href="mailto:janesmith@gmail.com">janesmith@gmail.com</a><br />
  <a href="tel:+13165452398">(316) 545-2398</a>
</address>
```

## Example #2

The snippet below shows a food blogger and their company's contact information:

```html
<address>
  Written by <a href="mailto:jasminebakes@gmail.com">Jasmine Sanchez</a>.<br />
  Visit us at:<br />
  Fairytale Confections<br />
  Box 354, Agrabah<br />
  USA
</address>
```
