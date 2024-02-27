# Docs Style Guide

Welcome to Codecademy Docs! This document is a general guide to entry standards. Following this guide will reduce the number of potential edits that will need to be made to your PR.

## Types of Entries

There are three types of Docs entries:

### Topics

- Written by the maintainers as needed.
- Cover a broad category such as a programming languages like [Java](https://www.codecademy.com/resources/docs/java) and [C++](https://www.codecademy.com/resources/docs/cpp) or extensive subjects like [Open Source](https://www.codecademy.com/resources/docs/open-source) and [Cybersecurity](https://www.codecademy.com/resources/docs/cybersecurity).
- Vary in structure from a few paragraphs to an entry with multiple sections.

### Concepts

- Provided as a list under each [topic](#topics).
- Cover a small piece of the parent topic such as a [class](https://www.codecademy.com/resources/docs/general/data-structures/class), library, control structure, or language element.
- For non-language topics, the entry can be any discrete subject within the parent topic. (Such as [Linux](https://www.codecademy.com/resources/docs/open-source/linux) under [Open Source](https://www.codecademy.com/resources/docs/open-source))
- For [General](https://www.codecademy.com/resources/docs/general) concepts, the entry can be any computer/code-related subject not broad enough for its own topic entry.
- Concepts typically have at least a few paragraphs and multiple sections. (see: [Headers/Sections](#headerssections))
- We provide a [template for a concept entry](https://github.com/Codecademy/docs/blob/main/documentation/concept-entry-template.md).

### Terms

- Are provided as a list under each parent [concept](#concepts).
- Cover small elements of a concept, typically a method, function, property, or command.
- Terms are typically shorter in length than concepts.
- Terms typically have no more than two or three sections. (see: [Headers/Sections](#headerssections))
- We provide a [template for a term entry](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md).

## File Names

- All entry file names use the `.md` file extension.
- They must match the title of the entry in the metadata. (e.g., "Three.js" -> `three-js.md`) (see: [Metadata](#metadata))
- Words must be separated by dashes, not spaces or underscores. (e.g., "Data Types" -> `data-types.md`)
  - If the title or name is meant to be in PascalCase: "HashTable" -> `hashtable.md`
  - If the title or name is meant to be in camelCase: ".forEach()" -> `forEach.md` (without the `.` and `()`).
  - If the title isn't in camelCase, it should be all lowercase.
- The name should always begin with a lowercase letter. (e.g., "Array" -> `array.md`, "HTML" -> `html.md`)
- Punctuation must not be included in the file name, even if it exists in the entry name. (e.g., "Moore's Law" -> `moores-law.md`, "Three.js" -> `three-js.md`, `.nextAfter()` -> `nextAfter.md`)

## Writing Entries

- Entries _must_ be completely original work. Copying from other websites (in whole or part) is plagiarism and unacceptable in Docs.
- Entries are all written using Markdown.
- Do not use HTML in place of Markdown formatting.
- Bold the first occurrence of the concept or term (the subject) in the body of the entry. Any additional new concepts/terms introduced in the text must also be in bold. If there is already an existing doc entry for the concept/term, link the term instead of using bold.
- Bold should not be used for emphasis.
- Use italics for emphasis when necessary.
- Do not use italics for new terms.
- Always expand and explain abbreviations when using them for the first time.
- When referring to properties and methods, include the leading dot; for methods, include trailing parenthesis: `.property`, `.method()`.
- When referring to elements as they appear in code (properties, methods, functions, commands, expressions, etc.), use Markdown's inline-code syntax, i.e. backticks: (\`...\`). (see: [Code](#code))
- With bulleted lists:
  - A line break should precede and follow the list.
  - There should be no line breaks between items in the list.
  - Full sentences should be punctuated with leading capitals and ending punctuation.
- Avoid using first and second-person pronouns, i.e. "I", "we", and "you".
- Avoid words or phrases that assume the reader's knowledge, such as "easy", "obviously", "simply", "of course", and so on.
- Always use an [Oxford comma](https://www.grammarly.com/blog/what-is-the-oxford-comma-and-why-do-people-care-so-much-about-it/).
- Limit the entry to the concept or term being illustrated. i.e., if you find yourself writing about a method or property in a concept entry, it would be better to give it its own term entry.
- Use a "note" to inform the reader of points of potential confusion or to warn of potential pitfalls.
  - A "note" occupies its own line with line breaks before and after.
  - A "note" uses the Markdown blockquote (`>`) format followed by the word "Note:" in bold (`**`), followed by the note text:
    - `> **Note:** Note Text.`
  - A "note" should be brief. Generally, one line of text.
- Be as concise as possible without sacrificing clarity.
- Always check for grammar and spelling errors.

## Headers/Sections

- Do not use any `h1` headers (in Markdown preceded by `#`).
- Do not include a title header. It is automatically provided by the metadata.
- Do not include a header before the introductory paragraph(s).
- Main headers should be `h2` (`##`).
- Sub headers should be `h3` (`###`).
- Headers should be written in Title Case.
- Headers should not include ending punctuation.
- Headers should not exceed 5 words.
- Line breaks should precede and follow each header/subheader.

Concept and term entries for a language function, method, command or other language structure will typically have two or three sections with the corresponding headers:

- `## Syntax` for the section introducing the term's syntax.
- `## Example` for the section with a code block showing the term used.
- `## Codebyte Example` for those languages that support codebytes, the section with a runnable codebyte example.
- There can be more headers and subheaders in cases where the complexity of the subject warrants it.

## Code

Markdown inline code syntax, i.e. single backticks (\`...\`), should be used for the following:

- Classes, methods, functions, commands and other language keywords.
- References, such as variable or macro names, referring to a code block.
- Numbers and operators when referring to their use in code.
- Expressions and inline examples of code.
- File paths.

In code blocks:

- Do not use tabs for indents. Use two spaces.
- In code examples, the entire block should be runnable as written.
- All code blocks should be syntactically correct.
- Examples should be complete and not be broken into smaller blocks.
- Comments should be capitalized and punctuated like a normal sentence.
- Line breaks should precede and follow each code block.
- There are four general types of code blocks in Docs:
  - "Syntax" blocks.
    - Used with a `## Syntax` header.
    - Shows the general syntax of a language element.
    - Use ` ```pseudo ` blocks.
    - They are usually followed by a description of parameters, return values, etc.
  - "Example" blocks.
    - Used with a `## Example` header. (also `## Examples` or `## Example 2` etc.)
    - Shows example code.
    - Use blocks appropriate to the language used (see: [Supported Code Blocks](#supported-code-blocks)).
    - They are usually preceded by a description of what the example does.
    - Often followed by an "Output" block.
    - Output should be illustrated in a separate "Output" block rather than listed as comments in the example code.
  - "Output" blocks.
    - Follows an "Example" block.
    - Shows the output from an example.
    - Use a ` ```shell ` block.
    - Usually preceded by a sentence like, "This example results in the following output:"
  - "Codebyte Example" blocks.
    - Used with a `## Codebyte Example` header.
    - Typically, only one per entry.
    - Typically, it appears at the end of the entry.
    - Is original code, not a copy of a prior example in Docs or an existing example on another site.
    - Displays example code that is runnable.
    - Use codebyte blocks appropriate to the language (see: [Supported Codebyte Blocks](#supported-codebyte-blocks)).
    - They are usually preceded by a description of what the example does.
    - They are not followed by an "Output" block.

> **Note:** Code blocks may appear differently than the above if the entry warrants it.

### Supported Code Blocks

Code blocks can reference a language to support syntax highlighting. The following languages are supported:

- C: ` ```c `
- C#: ` ```cs `
- C++: ` ```cpp `
- CSS: ` ```css `
- Error: ` ```error `
- Emojicode: ` ```emojic `
- Golang: ` ```go `
- HTML: ` ```html `
- Java: ` ```java `
- JavaScript: ` ```js `
- Kotlin: ` ```kotlin `
- Lua: ` ```lua `
- Luau: ` ```lua `
- Markdown: ` ```md `
- PHP: ` ```php `
- Plaintext: ` ```plaintext `
- Pseudo: ` ```pseudo `
- Python: ` ```py `
- R: ` ```r `
- Ruby: ` ```rb `
- Rust: ` ```rust `
- Sass: ` ```scss `
- Scheme: ` ```scheme `
- Shell/Program Output: ` ```shell `
- SQL: ` ```sql `
- Swift: ` ```swift `

### Supported Codebyte Blocks

Codebytes can be used with the following languages:

- C++: ` ```codebyte/cpp `
- C#: ` ```codebyte/csharp `
- Go: ` ```codebyte/golang `
- JavaScript: ` ```codebyte/javascript `
- PHP: ` ```codebyte/php `
- Python: ` ```codebyte/python `
- Ruby: ` ```codebyte/ruby `
- Scheme: ` ```codebyte/scheme `

## Links

- Use Markdown syntax for links: `[text](url)`.
- Do not link to parent concept or topic entries. The Docs navigation provides those for each entry.
- Do not link to external third-party documentation. (Such as Wikipedia.)
- You are encouraged to link out to other relevant Docs topics, concepts, or terms the first time they appear.
- In some cases, linking out to external standards documents or entities may be appropriate. (Example: [XML 1.0 Specification](http://www.w3.org/TR/REC-xml), [World Wide Web Consortium](https://www.w3.org/standards/), [Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux))
- When linking items outside the document, use the full path. Use a relative path when linking to items inside the document (i.e., Headers).
- If there are parentheses in the link, replace them with `%28` and `%29`.

## File Hosting

- If you'd like to host files such as images or GIFs, please upload them to the [/media folder](https://github.com/Codecademy/docs/tree/main/media).
- Images should be linked to the URL: "https://raw.githubusercontent.com/Codecademy/docs/main/media/" followed by the image name.
- File names should use dashes (`-`) to separate words rather than spaces or underscores.
- File names should be in lowercase.
- Images should be used for diagrams, UI illustrations, and showing output to the user.
- Images should not be used to illustrate code. [Code blocks](#code) should be used instead.
- Use descriptive "Alt text" with images to describe the image, diagram, or animation.
  - The "Alt text" should be in square brackets, before the URL in an image tag: `![Text that describes the image, diagram, or animation](https://path.to/image)`

> **Note:** Image links will not work until a PR is merged.

<!---blank--->

> **Note:** Some existing images may use `https://static-assets.codecademy.com/Courses/` in their links. These come from existing Codecademy course content and are for internal use only. Please disregard those and use the above format instead.

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

> **Note:** The template above does not apply to topic entries. See our [topic entry template](https://github.com/Codecademy/docs/blob/main/documentation/topic-entry-template.md) for more details.

- The metadata starts on the first line of the entry.
- The metadata begins and ends with three dashes (`---`) on their own line.
- There should be a line break after the last line of the metadata.
- There should not be extra line breaks within the metadata.
- The `Title` and `Description:` data appear as single-quoted strings on the same line.
- Do not use apostrophes or quotes in `Title:` or `Description:`.
- Do not use boldface or italics in `Title:` or `Description:`.
- `Description:` should be short, typically one sentence.
- `Description:` should be repeated in the introductory paragraph of the entry, i.e., The information in `Description:` should appear in the introduction to the entry.
- `Description:` for a coding term should begin with a present-tense verb, i.e., "Returns", "Calculates", "Outputs", etc.
- `CatalogContent:` appears without spaces.
- The items for `Subjects:`, `Tags:`, and `CatalogContent:` appear as bulleted lists of single-quoted strings, starting on the next line.
- The items for `Subjects:`, `Tags:`, and `CatalogContent:` are indented two spaces before the dash.
- For `Subjects:`
  - Items are languages and technical fields that the entry relates to.
  - Items come from [this list](https://github.com/Codecademy/docs/blob/main/documentation/subjects.md).
  - Should have one to two items. Always at least one.
- For `Tags:`
  - Items are keywords that are relevant to the entry.
  - Items come from [this list](https://github.com/Codecademy/docs/blob/main/documentation/tags.md).
  - Should have three to four items.
  - If you wish to use a new tag, add it in the appropriate place (alphabetical order) in the [tags.md](https://github.com/Codecademy/docs/blob/main/documentation/tags.md) file as part of your PR.
- For `CatalogContent:`
  - Items are slugs of Codecademy courses and path landing pages related to the entry.
  - For items, use [this document](https://github.com/Codecademy/docs/blob/main/documentation/catalog-content.md) as a guide.
  - Should have two items.
