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

<a href="https://www.codecademy.com/learn">My Home</a>
```

The output of the example code above will look like this:

![Showcasing the usage of text links](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-link.gif)

### Internal Links

Anchor tags can be used to link to certain parts of a page with a matching `id` attribute:

```html
<!-- Creating a text link -->

<a href="#data-science-jobs">Data science jobs</a>
```

The output of the example code above will look like this:

![Showcasing the usage of internal links](https://raw.githubusercontent.com/Codecademy/docs/main/media/internal-link.gif)

### Image Links

Anything that is inside the anchor tag will be treated as a link. In this case, the Codecademy logo will take the user to the Codecademy home page.

```html
<!-- Creating an image link -->

<a href="http://www.codecademy.com">
  <img src="logo.jpg" alt="Codecademy Logo" />
</a>
```

The output of the example code above will look like this:

![Showcasing the usage of image as a link](https://raw.githubusercontent.com/Codecademy/docs/main/media/image-link.gif)

### Email and Phone Links

Special strings can be passed to the `href` attribute to link email accounts (`"mailto:exmail@address.com"`) or phone numbers (`"tel:###-###-####"`):

```html
<!-- This link will try to create a new email to foo@codecademy.com. -->
<a href="mailto:foo@codecademy.com">foo@codecademy.com</a>

<!-- This link will try to call phone number 234-555-1212. -->
<a href="tel:234-555-1212">234-555-1212</a>
```

The actions defined by these links will be completed depending on the user's device and settings. For example, clicking a phone link while on a cell phone may use the built in dialer to complete the call.

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
