---
Title: 'Links'
Description: 'Create hyperlinks using the `<a>` tag in HTML to navigate between web pages or external resources.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Files'
  - 'Link'
  - 'Tags'
  - 'URL'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In HTML, **links** (also called _hyperlinks_) allow users to navigate between different web pages or external resources. They are created using the [`<a>` (anchor)](https://www.codecademy.com/resources/docs/html/elements/a) tag, which can point to another webpage, file, or location within the current document.

## Syntax

```html
<a href="url">Link Text</a>
```

- `href`: Specifies the destination URL.
- `Link Text`: The clickable text shown to users.

## Link Appearance

By default, links will appear as follows in most browsers:

- Unvisited links are underlined and blue
- Visited links are underlined and purple
- Active links (during click) are underlined and red

### Example

Text wrapped in a linked anchor tag becomes a hyperlink to another page:

```html
<!-- Creating a link -->

<a href="https://www.codecademy.com/learn">My Home</a>
```

The output of the example code will look like this:

![Showcasing the use of html links](https://raw.githubusercontent.com/Codecademy/docs/main/media/text-link.gif)

## Types of Links

### 1. Internal Links

Points to a page within the same website.

```html
<!-- Creating a text link -->

<a href="#data-science-jobs">Data science jobs</a>
```

The output of the example code will look like this:

![Showcasing the usage of internal links in html](https://raw.githubusercontent.com/Codecademy/docs/main/media/internal-link.gif)

### 2. External Link

Points to a web page on a different domain.

```html
<a href="https://example.com">External Site</a>
```

### 3. Image Links

Anything that is inside the anchor tag will be treated as a link. In this case, the Codecademy logo will take the user to the Codecademy home page.

```html
<!-- Creating an image link -->

<a href="http://www.codecademy.com">
  <img src="logo.jpg" alt="Codecademy Logo" />
</a>
```

The result of the example code will appear as:

![Showcasing the use of image as a link in html](https://raw.githubusercontent.com/Codecademy/docs/main/media/image-link.gif)

### 4. Email and Phone Links

Special strings can be passed to the `href` attribute to link email accounts (`"mailto:exmail@address.com"`) or phone numbers (`"tel:###-###-####"`):

```html
<!-- This link will try to create a new email to foo@codecademy.com. -->
<a href="mailto:foo@codecademy.com">foo@codecademy.com</a>

<!-- This link will try to call phone number 234-555-1212. -->
<a href="tel:234-555-1212">234-555-1212</a>
```

The actions defined by these links will be completed depending on the user's device and settings. For example, clicking a phone link while on a cell phone may use the built in dialer to complete the call.

## Frequently Asked Questions

### 1. What does the `target="_blank"` attribute do?

It opens the link in a new browser tab or window.

### 2. Can I link to a file like a PDF or image?

Yes. The `href` attribute can link to any resource, including documents or images.

```html
<a href="files/resume.pdf">Download Resume</a>
```

### 3. How do I link to another section on the same page?

Use `href="#section-id"` where the section has a corresponding `id` attribute.
