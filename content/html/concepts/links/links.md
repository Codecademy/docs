---
Title: 'Links'
Description: 'Links are used in HTML to add features to a web page including styling, functionality, hyperlinks, and navigation.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Files'
  - 'Link'
  - 'Tags'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

**Links** are used in HTML to add features to a web page including styling, functionality, hyperlinks, and navigation.

## Hyperlinks

The [`<a>`](https://www.codecademy.com/resources/docs/html/elements/a) anchor tag is used to create hyperlinks in an HTML document. The hyperlinks can point to other webpages, files on the same server, a location on the same page, or any other URL using the hyperlink reference `href` attribute.

### Text Links

Text wrapped in a linked anchor tag becomes a hyperlink to another page:

```html
<!-- Creating a text link -->

<a href="https://www.codecademy.com/pages/contribute-docs">Contribute to Docs</a>
```
In the example, the text "Contribute to Docs" on the upper-right corner of this page is a hyperlink to another page.

![Text Link](./main/media/text-link.png)

### Internal Links

Anchor tags can be used to link to certain parts of a page with a matching `id` attribute:

```html
<!-- Creating a text link -->

<a href="#open positions">Open Positions</a>
```
In the example, the anchor tag is both an image and an internal link that points further down the same page:

![Internal Link](./main/media/open-positions.png)

### Image Links

Anything that is inside the anchor tag will be treated as a link. In this case, the Codecademy logo will take the user to the Codecademy home page.

```html
<!-- Creating an image link -->

<a href="http://www.codecademy.com"> <img src="logo.jpg" />Click this image </a>
```

![Image Link](./main/media/logo.png)

### Email and Phone Links

Special strings can be passed to the `href` attribute to link email accounts (`"mailto:exmail@address.com"`) or phone numbers (`"tel:###-###-####"`):

```html
<!-- This link will try to create a new email to foo@codecademy.com. -->
<a href="mailto:foo@codecademy.com">foo@codecademy.com</a>

<!-- This link will try to call phone number 234-555-1212. -->
<a href="tel:234-555-1212">234-555-1212</a>
```

The actions defined by these links will be completed depending on the user's device and settings. For example, clicking a phone link while on a cell phone may use the built in dialer to complete the call.

In the example, clicking the "press@codecademy.com" will open a new email with the "To" field pre-filled with the address indicated.

![Email Link](./main/media/press_kit.png)

## `<link>` Element

The [`<link>`](https://www.codecademy.com/resources/docs/html/elements/link) element is used to connect the document to an outside resource, most commonly stylesheets, via the [`<head>`](https://www.codecademy.com/resources/docs/html/elements/head) element. Unlike most elements, which come as opening and closing tags, the `<link />` is self-closing and only contains attributes.

The two primary attributes are:

- A `rel` to describe the format of the external source.
- An `href` that contains the filepath to the external source.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Links in HTML</title>
    <link rel="stylesheet" href="some/outside/source.css" />
  </head>
  <body>
    <!-- markup here -->
  </body>
</html>
```
