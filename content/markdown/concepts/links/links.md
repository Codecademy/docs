---
Title: 'Links'
Description: 'In Markdown, a link is created by enclosing the link text in square brackets and then following it immediately with the URL in parentheses.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'URL'
  - 'GitHub'
  - 'Documentation'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In Markdown, a link is created by enclosing the link text in square brackets, `[Link text]`, and then following it immediately with the URL in parentheses, `(https://website-name.com)`.

```pseudo
[Link text](https://website-name.com)
```

For example:

```md
We just updated our [Docs Contribution Guide](https://www.codecademy.com/pages/contribute-docs)!
```

The output would look like:

We just updated our [Docs Contribution Guide](https://www.codecademy.com/pages/contribute-docs)!

## Accessibility: Link Titles

A title for a link can be optionally added. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in quotation marks `""` after the URL inside the parentheses.

Including link titles improves accessibility by providing additional context for screen readers and users navigating with the keyboard.

```md
[Link text](https://website-name.com "Link title")
```

For example:

```md
My favorite Craigslist category is [Missed Connections](https://newyork.craigslist.org/d/missed-connections/search/mis "The best place on the internet").
```

The output would look like:

My favorite Craigslist category is [Missed Connections](https://newyork.craigslist.org/d/missed-connections/search/mis "The best place on the internet").

## URLs and Email Addresses

To turn a URL or email address into a clickable link, enclose it in angle brackets `<URL or email>`.

- `<https://www.codecademy.com/resources/docs>`
- `<foo42@hotmail.com>`

The rendered output looks like this:

- <https://www.codecademy.com/resources/docs>
- <foo42@hotmail.com>

## Internal Linking

To create links to navigate to other sections within the same document, or sections within other documents on the same website, use a relative path (when linking to sections in other documents) with the `#` symbol, followed by the section's title. Ensure the title is in lowercase, omit any punctuation and replace spaces with hyphens.

For example, to link to the "Accessibility: Link Titles" section above:

```md
[Accessibility: Link Titles](#accessibility-link-titles)
```

The output would look like:

[Accessibility: Link Titles](#accessibility-link-titles)
