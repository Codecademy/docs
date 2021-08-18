# Content Standards

## Entry Types

Codecademy Docs content will fall into two categories:

### 1. Normal Entries

One or more paragraph-long explanations of a coding concept. Think of them like short Wikipedia pages. For example:

General:
  - [What is a Comment?](https://github.com/Codecademy/docs/blob/main/content/general/concepts/what-is-a-comment/what-is-a-comment.md)
  - [What is SQL?](https://github.com/Codecademy/docs/blob/main/content/general/concepts/what-is-sql/what-is-sql.md)
  - [What is a Bitwise Operator?](https://staging.codecademy.com/resources/docs/general/what-is-a-bitwise-operator)
 
Python:
  - [Lists](https://staging.codecademy.com/resources/docs/python/lists)
  - [Conditionals](https://staging.codecademy.com/resources/docs/python/conditionals)
  - [Dictonaries](https://staging.codecademy.com/resources/docs/python/dictionaries)

### 2. Entries with a Term Table

Some of the entries, such as [Lists](https://staging.codecademy.com/resources/docs/python/lists), will have a terms table at the bottom with more nested entries.

Short lists of key information about a specific function, keyword, tag, or other grouping.
  - For a model example, check out [the .append() entry in the Python Lists entry](https://github.com/Codecademy/docs/tree/main/content/python/concepts/list-methods).

### Relation between Entries  

As a general rule, any given topic should be described by multiple entries in the following structure:
  - 1 language-agnostic encyclopedia entry defining concept X in a general way. Entitled "What is X?".
    -  Example: [What Is a Comment?](https://github.com/Codecademy/docs/blob/main/content/language-agnostic/concepts/what-is-a-comment.md) 
  - Multiple language-specific encyclopedia entries explaining the syntax and nuances of concept X for a given language. Entitled "X in \<Topic>".
    - Example: [Comments in Python](https://github.com/Codecademy/docs/blob/main/content/python/concepts/comments-in-python.md) 
  - Where applicable, 1 or more Glossaries describing the methods and keywords in a language that relate to concept X
    - Example: The [List Methods glossary for Python](https://github.com/Codecademy/docs/tree/main/content/python/concepts/list-methods). (Note: This example is not related to the What is a Comment? and Comments in Python encyclopedia entries).  

Notably, this structure means that you do not have to explain any language-agnostic concepts in an "X in \<Topic>" encyclopedia entry—the reader can read the "What is X" entry to learn that!

### Components of an Entry

All Codepedia entries are Markdown files and should consist of three parts:

- **The file name**
- **The content**, written in Markdown.
- **The metadata** about the content, written in YAML, which appears at the top of the entry.

We'll describe the standards for each of these components separately.

### Standards for the File Name 

The file name should be the title of the entry, in lowercase, with words replaced by dashes and punctuation removed, followed by **.md**. So, to give an example, an encylopedia entry titled "How to Create a Codepedia Entry?" should have the file name **how-to-create-a-codepedia-entry.md**. 

### Standards for the Content 

- All text should be written in Markdown
  - For more details on Markdown, see Codecademy's [Curriculum Markdown Style Guide](http://curriculum-documentation.codecademy.com/content-guidelines/markdown-style-guide/).
- Each subsection should begin with a heading of size H2 (i.e. preceded by `##`)
- All in-line code should be delineated by single backticks (`)

#### Code Blocks

Code examples are an excellent teaching  tool. Many glossary entry types will contain a code example as a standard field. Encyclopedia entries are more flexible, but if your encyclopedia entry doesn't contain any code blocks, take a moment to ask yourself if one would help!
All code blocks should be delineated by triple backticks (```)

- C#: ```cs
- C++: ```cpp
- CSS: ```css
- Error: ```error
- Emojicode: ```emojic
- HTML: ```html
- Java: ```java
- JavaScript: ```js
- PHP: ```php
- Pseudo: ```pseudo
- Python: ```py
- R: ```r
- Ruby: ```rb
- Sass: ```scss
- Shell/Program Output: ```shell
- SQL: ```sql

#### Codebytes: Runnable Code Blocks

Codecademy has a new feature we're calling _Codebytes_ that will allow learners to click a button to run code blocks themselves! The output to the console will appear right below the code block. Codebytes is a great tool to incorporate into some entries (for instance, if you want learners to to think about what a code block will output before they see it in action, or if you want to show a learner how a function that incorporates randomization produces different output each time). 

The syntax is simple: You just add `codebyte/` between the ` ``` ` and the language name in the first line of a normal code block. Here's an example for JavaScript:

````
```codebyte/js
console.log('Hello, World!');
```
````

Currently, Codebytes is set to support the following languages:

- Python
- JavaScript
- Ruby
- C++
- C#
- Go
- PHP

Note: Codebytes sometimes requires the code block to include some boilerplate code. To check what boilerplate is required for your language, select the language from the dropdown [in this demo page](https://www.codecademy.com/codebyte-editor). There you'll find a _Hello World!_ program set up as an example!

### Standards for the Metadata 

| Variable Name   | Description | Example |
|-----------------|-------------|---------|
| Subjects        | Languages and technical fields that the entry relates to. We're storing all of our Subjects in the [subjects.md file](https://github.com/Codecademy/codepedia-content/blob/main/documentation/subjects.md). Please only use Subjects from that list, but if that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!<br /> - We aim to include an average of 1-2 Subjects (and always at least 1!) with every entry | Subjects:<br /> - "Computer Science"<br /> - "Game Development" |
| Tags            | Key words that are relevant to the entry. We're storing all of our Tags in the [tags.md file](https://github.com/Codecademy/codepedia-content/blob/main/documentation/tags.md). Please only use Tags from that list, but if that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!<br /> - We aim to include an average of 3 - 4 tags with every entry. | Tags:<br /> - "React"<br />  - "URL"<br />    - "Strings"<br /> |
| CatalogContent | Slugs of Codecademy course and path landing pages that relate to the entry.<br /> - Please avoid linking to individual content items, because their URLs may change and some are gated by Pro membership<br /> - If including multiple items, please list the most relevant one first. | CatalogContent:<br /> - "introduction-to-javascript"<br /> - "paths/front-end-engineer-career-path" |      

### General Writing Tips:

- Avoid referencing information that isn't strictly related to the topic of the entry. As a rule, you want to assume as little pre-existing knowledge as possible. 
- Avoid using first- and second-person pronouns (e.g. I, we, you) if possible.
- Brevity without sacrificing clarity. Make every word count.
- If the concept is hard, make it easy. If it's dry, make it fun. If it's simple, keep it simple.
- 90% of writing is rewriting.

### File Hosting

If you'd like to include an image, video, gif, or other file in your entry, please upload it to the [/media folder](https://github.com/Codecademy/docs/tree/main/media). That way we'll never have any broken links!

### I've read all the content standards. Now what?

Check out the [encyclopedia entry template](https://github.com/Codecademy/docs/blob/main/documentation/entry-template.md) and [term entry template](https://github.com/Codecademy/docs/blob/main/documentation/term-entry-template.md) in this folder. And start looking for concepts that are currently missing in Codecademy Docs.

For a refresher on how to make a pull request, refer to the [Contribution Guide](https://github.com/Codecademy/docs/CONTRIBUTING.md).
