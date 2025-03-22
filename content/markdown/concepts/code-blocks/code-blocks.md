---
Title: 'Code Blocks'
Description: 'Code blocks can be used to display multiple lines of code. They preserve formatting and provide syntax highlighting when possible.'
Subjects:
  - 'Developer Tools'
  - 'Web Development'
Tags:
  - 'Markdown'
  - 'GitHub'
  - 'Documentation'
CatalogContent:
  - 'learn-html'
  - 'paths/front-end-engineer-career-path'
---

Code blocks can be used to display multiple lines of code. They preserve formatting and provide syntax highlighting when possible.

## Basic Usage

To create a basic code block, wrap the code with three backticks (` ``` `):

````md
```
This is a code block.
```
````

The result will look like this:

```
This is a code block.
```

An alternative way to create a code block is by adding four `spaces` before each line of code:

```
[space][space][space][space]This is a line of code.
[space][space][space][space]This is a line of code.
```

The result will look like this:

```
    This is a line of code.
    This is a line of code.
```

However, the recommended way to create a code block in GitHub Markdown is using triple backticks (```).

## Syntax Highlighting

Optionally, a language can be specified for a code block to enable syntax highlighting. This can be done by appending the language to the starting backticks. The indent lines method (four `spaces`) does not support syntax highlighting, so using the former method is preferred:

````md
```js
console.log('Hello world');
```
````

The result will look like this:

```js
console.log('Hello world');
```
