---
Title: 'Comments'
Description: 'A comment is a piece of text within a style sheet that is not interpreted by the browser. It can be used to provide additional information to aid in understanding the code. By design, comments have no effect on the layout or styling of a document. Comments, are created by an opening / and closing /. Everything in between is commented out. They can be used on a single line, or across multiple lines: css /* A one-line comment / / A comment'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

A comment is a piece of text within a style sheet that is not interpreted by the browser. It can be used to provide additional information to aid in understanding the code. By design, comments have no effect on the layout or styling of a document.

## Syntax

Comments, are created by an opening `/*` and closing `*/`. Everything in between is commented out.

They can be used on a single line, or across multiple lines:

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
  color: aqua;
  font-size: 1.5em;
}
```

**Note:** In CSS, comments cannot be nested. A `/*` `*/` comment syntax cannot have another `/*` `*/` comment syntax inside. The first closing `*/` ends the comment.
