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

The HTML tag `<a>`, also known as the anchor tag, creates a link to another page or to a location in the current page.

It can also be used to link to email addresses, phone numbers, and files.

## Syntax

```html
<a href="url">Displayed Text</a>
```

`<a>` is a tag that commonly uses the following attributes to create a link from the current page to a valid URL:

- `href`, which represents the URL that the link points to
- `target`, which represents where to open and display the URL stored in the `href`

## Examples

### External Link

Suppose the page should include a link to Codecademy, that it should be opened in a new tab, and that the text of the link should be Codecademy:

```html
<a href="https://codecademy.com" target="_blank">Codecademy</a>
```

### Internal Link

Suppose the page should include a link to a specific section on the current page. This can be done by adding an `id` to the tag that should be scrolled to and a link whose `href` is equal to that `id`, prefaced with the hash symbol.

```html
<article id="about-us">
  <!-- More HTML here -->
</article>

<!-- This link will scroll the current view back to the article above. -->
<a href="#about-us">About Us</a>
```

### Email and Phone

Suppose the page should allow the browser to open an application to send an email or call a phone number from within the page:

```html
<!-- This link will try to create a new email to foo@codecademy.com. -->
<a href="mailto:foo@codecademy.com">foo@codecademy.com</a>

<!-- This link will try to call phone number 234-555-1212. -->
<a href="tel:234-555-1212">234-555-1212</a>
```

The actions defined by these links will be completed depending on the user's device and settings. For example, clicking a phone link while on a cell phone may use the built in dialer to complete the call.

### Image Links

Suppose the page needs a clickable logo:

```html
<!-- This link will be an image -->
<a href="http://www.codecademy.com"> <img src="logo.jpg">Click this image </a>
```

Anything that is inside the anchor tag will be treated as a link. In this case the Codecademy logo will take the user to the Codecademy home page.
