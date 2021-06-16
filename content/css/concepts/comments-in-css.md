---
Title: "Comments in CSS"
Subjects:
  - "Web Development"
  - "Web Design"
Tags: 
  - "Comments"
  - "Documentation"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-csss"
  - "https://www.codecademy.com/learn/paths/web-development"
---

A CSS comment is used to add explanatory notes to the code or to prevent the browser from interpreting specific parts of the style sheet. By design, comments have no effect on the layout of a document.

## Syntax

Comments can be placed wherever white space is allowed within a style sheet. They can be used on a single line, or traverse multiple lines.

```css
/* A one-line comment */

/*
A comment
which stretches
over several lines
*/
```

Here is an example use case:

```css
/* The comment below is used to
   disable specific styling */

span {
  color: blue;
  font-size: 1.5em;
}
```

The `/*` `*/` comment syntax is used for both single and multiline comments. There is no other way to specify comments in external style sheets.

However, when using the HTML `<style>` element, you may use `<!--` `-->` to hide CSS from older browsers, although this is not recommended. 

As with most programming languages that use the `/*` `*/` comment syntax, comments cannot be nested. In other words, the first instance of `*/` that follows an instance of `/*` closes the comment.