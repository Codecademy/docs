---
Title: 'Headings'
Description: 'Headings are Markdown elements used for displaying titles, subtitles, or different sections in a website. There are six headings in total. They are made with a hash symbol, #, with 1 being the largest and 6 being the smallest.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Markdown'
  - 'Headings'
  - 'GitHub'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Headings are titles or subtitles that can be used with Markdown. There is a total of 6 different heading options.

To create a heading, add pound symbols `#` to the front of a word or phrase.

The number of number signs used should correspond to the heading level. For example, to create a heading level three `<h3>`, use three number signs (e.g., `### My Header`).

## Syntax

```md
# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6
```

![Rendered markdown headings](https://raw.githubusercontent.com/Codecademy/docs/main/media/rendered-markdown-headings.png)

## Alternate Syntax

Alternatively, on the line below the text:

- Add any number of `==` characters for heading level 1
- Add any number or `--` characters for heading level 2.

```md
# Heading level 1

## Heading level 2
```

## Best Practices

Markdown applications don’t agree on how to handle a missing space between the number signs (`#`) and the heading name.

For compatibility, always put a space between the number signs and the heading name.

✅ Do: `# Breaking News`

🚫 Don't: `#Breaking News`

Headings should have a blank line above and below for compatibility and readability:

```md
... text ends here.

# Heading

More text starts here.
```

## Example

```md
# Headings

This page is about headings.

## The cool things about headings

Headings are a great way to format the page.

## Example

Here's an example of headings.
```
