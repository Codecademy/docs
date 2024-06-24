---
Title: 'footnotes'
Description: 'Footnotes are subscript numbers that appears at the end of a word or phrase. This is used in documentation to add notes and references in a way that does not clutter the files.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Footnotes'
  - 'Documentation'
  - 'GitHub'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In Markdown,**footnotes** are subscript numbers to add notes and references to documentation in a way that keeps the content organized.

## Syntax

In Markdown, short footnotes uses the following syntax,

```md
This is a text[^1]
[^1]: This is a reference.
```

For footnotes that are more than a sentence, use the following syntax:

```md
[^bignote]:
    This is a reference that is used to correlate it to the document.
    It is It is best to read it alongside the paragraph it is used to help users gain a better understanding the docuemntation.
```

## Example #1

In below example, the sentence uses compares the tool, Pieces to Tinkerbell and its footnotes elaborates on who Tinkerbell is. This is done to make the correlation clearer for a user who might not be familiar with this character.
Think of Pieces as a technical Tinkerbell from Peter Pan[^2]

[^2]: This is a fairytale about a forever young boy would takes a group of British children to his home island, Neverland

When rendered, it looks like this

> Think of Pieces as a technical Tinkerbell from Peter Pan[^2]

## Example #2

## Things to consider when using Footnotes

When writing documentation, consider the following strategies to use footnotes effectively:

- **Don't add a space between the word and the number that has the caret next to it and is encased in brackets:** It'll make the footnote not appear.
- **Use them sporadically:** Footnotes can make it difficult for users to navigate documentation so determine if the sentence can be easily comprehended.
