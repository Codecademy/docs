# Content Standards

### Entry Types
Codepedia content will fall into two categories:

#### Encyclopedia Entries
One or more paragraph-long explanations of a coding concept. Think of them like short Wikipedia pages.
  - For an example, check out the [Functions encyclopedia entry on our demo site](https://codecademy.github.io/codepedia/entries/functions/)! 

#### Glossary Entries
Short lists of key information about a specific function, keyword, tag, or other grouping. Glossary entries will be grouped into _glossaries_, or tables of glossary entries on the same subject
  - For an example of a competitor's implementation, you can check out [this entry on W3Schools about the abs() function in Python](https://www.w3schools.com/python/ref_func_abs.asp).

### Components of an Entry

All Codepedia entries are Markdown files and should consist of three parts:

- **The file name**
- **The content**, written in Markdown.
- **The metadata** about the content, written in YAML, which appears at the top of the entry.

We'll describe the standards for each of these components separately.

### Standards for the file name 

The file name should be the title of the entry, in lowercase, with words replaced by dashes, followed by ``.md``. So, to give an example, an encylopedia entry titled "How to Create a Codepedia Entry" should have the file name ``how-to-create-a-codepedia-entry.md``. 

### Standards for the content 

- All text should be written in Markdown
  - For more details on Markdown, see Codecademy's [Curriculum Markdown Style Guide](http://curriculum-documentation.codecademy.com/content-guidelines/markdown-style-guide/).
- The content should begin with a brief title of size H1 (i.e. preceded by "# ")
- This title should not exceed 30 characters unless absolutely necessary
- Each subsection should begin with a title of size H2 (i.e. preceded by "## ")
- All in-line code should be delineated by single backticks (`)

#### Code Blocks
Code examples are an excellent teaching  tool. Many glossary entry types will contain a code example as a standard field. Encyclopedia entries are more flexible, but if your encyclopedia entry doesn't contain any code blocks, take a moment to ask yourself if one would help!
All code blocks should be delineated by triple backticks (```)
- C#: ```cs
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
- Shell/Program Output: ```
- SQL: ```sql

#### Runnable Code Blocks
Codecademy has an upcoming feature we're calling _Codebytes_ that will allow learners to click a button to run and see the output of a code block embedded anywhere on our site. We're excited about this feature, and we highly recommend using it wherever you can!

The syntax is simple. Here's an example for pseudocode:

````pseudo
<codebyte>
```pseudo
code!
```
</codebyte>
````
Currently, Codebytes is set to support the following languages:
- Python
- JavaScript
- Ruby

### Standards for the metadata 

| Variable Name   | Description | Example |
|-----------------|-------------|---------|
| Subjects        | Coding subject(s) that the entry relates to. Please first look to use [Subjects that are already listed on Author](https://author.codecademy.com/browse/categories). If those Subjects feel insufficient, please reach out on #codepedia-production and we'll look into creating new ones!<br /> - Tip: You can also see the list of existing subjects on the left side of [codecademy.com/catalog](https://www.codecademy.com/catalog). | Subjects:<br /> - "Computer Science"<br /> - "Game Development" |
| Tags            | Key words that are relevant to the entry. Please first look to use [tags that are already listed on Author](https://author.codecademy.com/browse/tags). If those tags feel insufficient, ple ase reach out on #codepedia-production and we'll look into creating new ones!<br /> - With Tags, more is better! We aim to include at least 4 tags with every entry. | Tags:<br /> - "React"<br />  - "URL"<br />    - "String"<br /> - "Syntax" |
| Catalog Content | URL(s) of Codecademy course and path landing pages that relate to the entry.<br /> - Please avoid linking to individual content items, because their URLs may change and some are gated by Pro membership<br /> - If including multiple URLs, please list the most relevant one first. | Catalog Content:<br /> - "https://www.codecademy.com/learn/introduction-to-javascript"<br /> - "https://www.codecademy.com/learn/paths/front-end-engineer-career-path" |      


### General writing tips:

- Avoid referencing information that isn't strictly related to the topic of the entry. As a rule, you want to assume as little pre-existing knowledge as possible. 
- Avoid using first- and second-person pronouns (e.g. I, we, you) if possible.
- Brevity without sacrificing clarity. Make every word count.
- If the concept is hard, make it easy. If it's dry, make it fun. If it's simple, keep it simple.
- 90% of writing is rewriting.


### I've read all the content standards. Now what?
Check out the [encyclopedia entry template](https://github.com/Codecademy/codepedia-content/blob/main/documentation/encyclopedia-entry-template.md) and  [glossary entry template](https://github.com/Codecademy/codepedia-content/blob/main/documentation/glossary-entry-template.md) in this folder. Then check out which entries you're assigned in [the assignment sheet](https://docs.google.com/spreadsheets/d/1e31MNRVTo5VijcuPFjqWymw8_A1BbShGEW_LuCqXZZA/edit#gid=0), create those entries, and submit a pull request!
