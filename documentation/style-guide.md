# Docs Style Guide

Welcome to Codecademy Docs! This document is a general guide about entry standards. Following this guide will reduce the number of potential edits that will need to be made to your PR.

## Types of Entries

There are three types of Docs entries:

- Topics
  - Written by the maintainers as needed.
  - Cover a broad category such as a programming languages like [Java](https://www.codecademy.com/resources/docs/java) and [C++](https://www.codecademy.com/resources/docs/cpp), or extensive subjects like ([Open Source](https://www.codecademy.com/resources/docs/open-source) and [Cybersecurity](https://www.codecademy.com/resources/docs/cybersecurity).
  - Vary in structure from a couple of paragraphs to a multiple section entry.
- Concepts
  - Are provided as a list under each parent topic.
  - Cover a small piece of the parent topic such as a class, library, control structure, or language element.
  - For non-language topics, can be any discrete subject within the parent topic. (Such as [Linux](https://www.codecademy.com/resources/docs/open-source/linux) under [Open Source](https://www.codecademy.com/resources/docs/open-source))
  - For [General](https://www.codecademy.com/resources/docs/general) concepts, can be any computer/code related subject not broad enough for its own topic entry.
  - Concepts typically have at least a couple of paragraphs and multiple sections. (see: [Headers/Sections](#headerssections))
  - We provide a [template for a concept entry](https://github.com/Codecademy/docs/blob/main/documentation/entry-template.md).
- Terms
  - Are provided as a list under each parent concept.
  - Cover small elements of a concept, typically a method, function, property, or command.
  - Terms are typically shorter in length than concepts.
  - Terms typically have no more than two or three sections. (see: [Headers/Sections](#headerssections))
  - We provide a [template for a term entry](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md).

## Writing Entries

- Entries _must_ be completely original work. Copying from other websites (in whole or in part) is plagiarism and is unacceptable in Docs.
- Entries are all written using Markdown.
- Do not use HTML in place of Markdown formatting.
- Bold the first occurrence of the concept or term in the body of the entry.
- Bold should not be used for emphasis.
- Use italics for emphasis when necessary.
- Do not use italics for new terms.
- Always expand and explain abbreviations when using them for the first time.
- When referring to properties and methods, include the leading dot, and for methods include trailing parenthesis: `.property`, `.method()`.
- When referring to elements as they would appear in code (properties, methods, functions, commands, expressions, etc.) set them off with Markdown’s inline-code syntax i.e. backticks: (\`...\`). (see: [Code](#code))
- With bulleted lists:
  - A line break should precede and follow the list.
  - There should be no line breaks between items in the list.
  - Full sentences should be punctuated appropriately, with leading capitals and ending punctuation.
- Avoid using first and second person pronouns, i.e. "I", "we", and "you".
- Avoid words or phrases that assume the reader’s knowledge such as "easy", "obviously", "simply", "of course", and so on.
- Always use an Oxford comma.
- Limit the entry to the concept or term being illustrated. i.e. if you find yourself writing about a method or property in a concept entry, it would be better to give it its own term entry.
- Use a "note" to inform the reader of points of potential confusion or warn of potential pitfalls.
  - A "note" occupies its own line with line breaks before and after.
  - A "note" uses the Markdown blockquote format followed by the word "Note:" in bold, followed by the note text: `> **Note:** Note Text.`
  - A "note" should be brief. Generally, one line of text.
- Be as concise as possible without sacrificing clarity.
- Always check for grammar and spelling errors.

## Headers/Sections

- Do not use any h1 headers (in Markdown preceded by `#`).
- Do not include a title header, that is automatically provided by the metadata.
- Do not include a header before the introductory paragraph(s).
- Main headers should be h2 (`##`).
- Sub headers should be h3 (`###`).
- Headers should be written in Title Case.
- Headers should not include ending punctuation.
- Headers should not exceed 5 words.
- Line breaks should precede and follow each header/sub header.

Concept and term entries for a language function, method, command or other language structure will typically have two or three sections with the corresponding headers:

- `## Syntax` for the section introducing the syntax of the term.
- `## Example` for the section with a code block showing the term in use.
- `## Codebyte Example` for those languages that support codebytes, the section with a runnable codebyte example.
- There can be more headers and sub headers in cases where the complexity of the subject warrants it.

## Code

Markdown inline code syntax, i.e. single backticks (\`...\`), should be used to set off the following:

- Classes, methods, functions, commands and other language keywords.
- References, such as variable or macro names, referring to a code block.
- Numbers and operators when referring to their use in code.
- Expressions and inline examples of code.
- File paths.

In code blocks:

- Do not use tabs for indents. Use two spaces.
- In code given as examples, the entire block should be runnable as written.
- All code blocks should be syntactically correct.
- Examples should be complete and not be broken into smaller blocks.
- Comments should be capitalized and punctuated like a normal sentence.
- Line breaks should precede and follow each code block.
- There are four general types of code blocks in Docs:
  - "Syntax" blocks.
    - Used with a `## Syntax` header.
    - Shows the general syntax of a language element.
    - Use ```pseudo blocks.
    - They are usually followed by a description of parameters, return values etc.
  - "Example" blocks.
    - Used with a `## Example` header. (also `## Examples` or `## Example 2` etc.)
    - Shows example code.
    - Use blocks appropriate to the language used. (see: [Code Blocks in Content Standards](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md#code-blocks).)
    - They are usually preceded by a description of what the example does.
    - Often followed by an "Output" block.
    - Output should be illustrated in a separate "Output" block rather than listed as comments in the example code.
  - "Output" blocks.
    - Follows an "Example" block.
    - Shows the output from an example.
    - Use a ```shell block.
    - Usually preceded by a sentence like, "This example results in the following output:"
  - "Codebyte Example" blocks.
    - Used with a `## Codebyte Example` header.
    - Typically, only one per entry.
    - Typically, appears at the end of the entry.
    - Displays example code that is runnable.
    - Use codebyte blocks appropriate to the language. (see: [Codebytes in Content Standards](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md#codebytes-runnable-code-blocks).)
    - They are usually preceded by a description of what the example does.
    - They are not followed by an "Output" block.
- Code blocks may appear differently than the above if the entry warrants it.

## Links

- Use Markdown syntax for links: `(text)[url]`.
- Do not link to parent concept or topic entries. The Docs navigation provides those for each entry.
- Do not link out to external third-party documentation. (Such as Wikipedia.)
- You are encouraged to link out to other relevant Docs topics, concepts, or terms the first time they appear.
- In some cases, it may be appropriate to link out to external standards documents or entities. (Example: [XML 1.0 Specification](http://www.w3.org/TR/REC-xml), [World Wide Web Consortium](https://www.w3.org/standards/), [Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux))
- When linking items outside the document, use the full path. When linking to items inside the document (i.e. Headers) use a relative path.
- Images are stored in the media folder and should be linked to using the following url: "https://raw.githubusercontent.com/Codecademy/docs/main/media/" followed by the image name. (Note the image link will not work until a PR is merged.)
- If there are parentheses in the link, replace them with `%28` and `%29`.

## Metadata

Each Docs entry is preceded by metadata that provides information about how the entry is displayed.

The metadata for a concept or term entry should look like this:

```
---
Title: 'The Title'
Description: 'A brief description'
Subjects:
  - 'A subject name'
  - 'A second subject name'
  - 'An nth subject name'
Tags:
  - 'A tag'
  - 'A second tag'
  - 'An nth tag'
CatalogContent:
  - 'learn-example-course'
  - 'path/example-path'
---
```

- The metadata starts on the first line of the entry.
- The metadata begins and ends with three dashes (`---`) on their own line.
- There should be a line-break after the last line of the metadata.
- There should not be extra line breaks within the metadata.
- The data for `Title:` and `Description:` appear as single-quoted strings on the same line.
- Do not use apostrophes or quotes in the title or description.
- Do not use boldface or italics in the title or description.
- The description should be short, typically one sentence.
- The description should be echoed in the introductory paragraph of the entry, i.e. The information in the description should appear in the introduction to the entry.
- `CatalogContent:` appears without spaces.
- The items for `Subjects:`, `Tags:`, and `CatalogContent:` appear as bulleted lists of single-quoted strings, starting on the next line.
- The items for `Subjects:`, `Tags:`, and `CatalogContent:` are indented two spaces before the dash.
- For `Subjects:`
  - Items are languages and technical fields that the entry relates to.
  - Items come from [this list](https://github.com/Codecademy/docs/blob/main/documentation/subjects.md).
  - Should have one to two items. Always at least one.
- For `Tags:`
  - Items are key words that are relevant to the entry.
  - Items come from [this list](https://github.com/Codecademy/docs/blob/main/documentation/tags.md).
  - Should have three to four items.
  - If you wish to use a new tag, add it in the appropriate place in the [tags.md](https://github.com/Codecademy/docs/blob/main/documentation/tags.md) file as part of your PR.
- For `CatalogContent:`
  - Items are slugs of Codecademy course and Path landing pages that relate to the entry.
  - For items use [this document](https://github.com/Codecademy/docs/blob/main/documentation/catalog-content.md) as a guide.
  - Should have two items.
