---
Title: 'Footnotes'
Description: 'Footnotes are subscript numbers that appear at the end of a word or phrase.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Footnotes'
  - 'Documentation'
  - 'Git'
  - 'GitHub'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

In Markdown, **footnotes** are subscript numbers to add notes and references to documentation in a way that keeps the content organized.

## Syntax

In Markdown, short footnotes use the following syntax:

```md
This is a text[^1].
[^1]: This is a reference.
```

For footnotes that are more than a sentence, the following syntax is used:

```md
[^bignote]: This is a reference that is used to correlate it to the document. It is best to read it alongside the paragraph it is used to help users gain a better understanding of the documentation.
```

## Example

In the below example, the sentence compares the tool `Pieces` to the character `Tinkerbell` and its footnote provides information about the story that includes the character. This is done to make the correlation clearer for a user who might not be familiar with the story:

```md
Think of Pieces as a technical Tinkerbell from Peter Pan[^2].

[^2]: This is a fairytale about a forever young boy who takes a group of British children to his home island, Neverland.
```

When rendered, it looks like this:

```md
Think of Pieces as a technical Tinkerbell from Peter Pan[^2].
```

## Guidelines

When writing documentation, the following guidelines can be followed to use footnotes effectively:

- A space should not be added between the word and the footnote indicator. It'll make the footnote not appear.
- Using footnotes sporadically can make it difficult for users to navigate documentation to determine if the sentence can be easily comprehended.
