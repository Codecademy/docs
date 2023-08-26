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

A title for a link can be optionally added. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses `()` after the URL.

Links should have link titles so that screenreaders can narrate them as well as a user can <kbd>Tab</kbd> through the page.

```md
[Link text](https://website-name.com 'Link title')
```

For example:

```md
My favorite Craigslist category is [Missed Connections](https://newyork.craigslist.org/d/missed-connections/search/mis 'The best place on the internet').
```

The output would look like:

My favorite Craigslist category is [Missed Connections](https://newyork.craigslist.org/d/missed-connections/search/mis 'The best place on the internet').

## URLs and Email Addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets `<` `>`.

- `<https://www.codecademy.com/resources/docs>`
- `<hotmale@hotmail.com>`

The rendered output looks like this:

- <https://www.codecademy.com/resources/docs>
- <hotmale@hotmail.com>
