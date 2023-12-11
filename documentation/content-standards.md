# Content Standards

There are two types of Codecademy Docs entries:

## 1. Entry

These are regular entries that give detailed explanations of a coding concept. Think of them like short Wikipedia pages. Some of them are language-agnostic entries that fall in the "General" topic, while others are language-specific entries that fall in topics like "C", "C++", "CSS", "Emojicode", and "Python".

General (language-agnostic):

- [Comment](https://www.codecademy.com/resources/docs/general/comment)
- [IDE](https://www.codecademy.com/resources/docs/general/developer-tools/ide)
- [Array](https://www.codecademy.com/resources/docs/general/data-structures/array)

Python (language-specific):

- [Lists](https://www.codecademy.com/resources/docs/python/lists)
- [Conditionals](https://www.codecademy.com/resources/docs/python/conditionals)
- [Dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries)

Some of these entries, such as the Python's [Lists](https://www.codecademy.com/resources/docs/python/lists) entry, will have a terms table at the bottom with more nested term entries.

## 2. Term Entry

Term entries are like sub-entries that covers a concept's functions, methods, properties, etc. They are featured in a table of links located at the bottom of its relevant concept entry.

The Python's [Lists](https://www.codecademy.com/resources/docs/python/lists) entry, for example, features a table of term entries including:

- [`.append()`](https://www.codecademy.com/resources/docs/python/lists/append) ([GitHub](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/terms/append/append.md))
- [`.clear()`](https://www.codecademy.com/resources/docs/python/lists/clear) ([GitHub](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/terms/clear/clear.md))
- [`.copy()`](https://www.codecademy.com/resources/docs/python/lists/copy) ([GitHub](https://github.com/Codecademy/docs/blob/main/content/python/concepts/lists/terms/copy/copy.md))

## Components of an Entry

All Codecademy Docs entries are Markdown files and should consist of three parts:

- The `file name`, with the `.md` extension.
- The metadata about the content, written in YAML, which appears at the top of the entry.
- The content, written in Markdown, with the first use of new terminology in **bold**.
  - If an entry for the terminology exists, opt for a hyperlink.
  - Include examples with code snippets when necessary.
  - Templates for these entries can be found in the [repo documentation](https://github.com/Codecademy/docs/tree/main/documentation).

We'll describe the standards for each of these components separately.

### File Name

All entry file names use the `.md` format and follow the standards listed under ["File Names" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#file-names).

### Content

- All text should be written in Markdown
  - For more details on our standards for Markdown content, see Codecademy's [Curriculum Markdown Style Guide](http://curriculum-documentation.codecademy.com/content-guidelines/markdown-style-guide/).
- All entries should follow the guidelines set forth in the [Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md).

### Code Blocks

Code examples are an excellent teaching tool. Many term entries will contain a code example as a standard field. Encyclopedia entries are more flexible, but if your encyclopedia entry doesn't contain any code blocks, take a moment to ask yourself if one would help! For details on how to format code blocks see ["Code" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#code).

All code blocks should be delineated by triple backticks (```). Languages can be specified for syntax highlighting. For a list of supported languages, see ["Supported Code Blocks" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#supported-code-blocks)

### Codebytes: Runnable Code Blocks

Codecademy has a feature called [Codebytes](https://www.codecademy.com/codebyte-editor) that will allow learners to click a button to run code blocks themselves! The output to the console will appear next to the code block.

Codebytes is a great tool to incorporate into some entries (for instance, if you want learners to think about what a code block will output before they see it in action, or if you want to show a learner how a function that incorporates randomization produces different output each time).

The syntax is simple: You just add `codebyte/` between the ` ``` ` and the language name in the first line of a normal code block.

Here's an example for JavaScript:

````
## Codebyte Example

```codebyte/javascript
console.log('Hello, World!');
```
````

For a list of supported languages, see ["Supported Codebyte Blocks" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#supported-codebyte-blocks)

> **Note:** Codebytes sometimes requires the code block to include some boilerplate code. To check what boilerplate is required for your language, select the language from the dropdown [in this demo page](https://www.codecademy.com/codebyte-editor). There you'll find a "Hello World!" program set up as an example!

### Metadata

Each entry must begin with a metadata section. For guides to writing an entry's metadata, see the ["Metadata" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#metadata) and the templates for [concept entries](https://github.com/Codecademy/docs/blob/main/documentation/concept-entry-template.md) and [term entries](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md).

> **Note:** Topic entries follow a different metadata template than concepts and terms. See our [topic entry template](https://github.com/Codecademy/docs/blob/main/documentation/topic-entry-template.md) for more details.

### General Writing Tips

- Follow the [Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md).
- Avoid referencing information that isn't strictly related to the topic of the entry. As a rule, you want to assume as little pre-existing knowledge as possible.
- Avoid using first- and second-person pronouns (e.g. "I", "we", "you") if possible.
- Brevity without sacrificing clarity. Make every word count and be clear and concise.
- If the concept is hard, make it easy. If it's dry, make it fun. If it's simple, keep it simple.
- 90% of writing is rewriting.
- Minimize the length of your sentences, and each one should communicate a point (paragraphs should be a maximum of 4-6 lines).
- Use white spaces, lists, and Markdown tables wherever possible to improve readability and aid comprehension.
- Always expand and explain an abbreviation the first time it is mentioned.
- Be aware of your target audience and write to their level.
- Use punctuation properly.
- Avoid using idioms as well as complex and non-contextual grammar.
- Run your content through proofreading tools (e.g. Grammarly, Prowriting Aid, Hemingway App) to check for grammar and spelling errors.
- Re-read your contents carefully, considering every line written.
- The description of your content should contain keywords for SEO purposes.

### File Hosting

You may use images or GIFs in your entries. They are often helpful in illustrating content, especially output to the end user. To attach an image to your entry, use the guidelines specified under ["File Hosting" in the Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md#file-hosting).

### I've read all the content standards. Now what?

Review the [Docs Style Guide](https://github.com/Codecademy/docs/blob/main/documentation/style-guide.md) for an in-depth explanation of what's expected out of a Docs entry.

Check out the [concept entry template](https://github.com/Codecademy/docs/blob/main/documentation/concept-entry-template.md) and [term entry template](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md) in this folder. And take a look at [GitHub Issues](https://github.com/Codecademy/docs/issues) to see where help is needed!

For a refresher on how to make a Pull Request, head back to the [Contribution Guide](https://github.com/Codecademy/docs/blob/main/.github/CONTRIBUTING.md). 🎒
