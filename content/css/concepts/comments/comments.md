---
Title: 'Comments'
Description: 'A comment is a piece of text that is ignored by browsers and provides additional information to aid in understanding the code.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

A CSS **comment** is a piece of text within a style sheet that is ignored by the browser. It can be used to provide additional information to aid in understanding the code. By design, comments have no effect on the layout or styling of a document.

## CSS Comments Syntax

CSS Comments are created by an opening `/*` and closing `*/`. Everything in between is commented out.

They can be used on a single line or across multiple lines:

```pseudo
/* A one-line comment */

/*
A comment
which stretches
over several lines
*/
```

> **Note:** In CSS, comments cannot be nested. A `/*...*/` comment syntax cannot have another `/*...*/` comment syntax inside. The first closing `*/` ends the comment.

## Example 1: Adding CSS Comments to Explain Styles

This example uses a CSS comment to explain the style applied to the `<body>` element:

```css
/* This sets the background color of the following element */
body {
  background-color: #f5f5f5;
}
```

## Example 2: Disabling Styles Using CSS Comments

This example uses a CSS comment to disable the styles applied to the `<span>` element:

```css
/*
This disables the styles applied to the following element

span {
  color: aqua;
  font-size: 1.5em;
}
*/
```

## Example 3: Creating Style Sections Using CSS Comments

This example uses CSS comments to create style sections based on the type of elements:

```css
/*
=======================
    Header Styles
=======================
*/

header {
  background: #222;
  color: white;
  padding: 20px;
}

/*
=======================
    Footer Styles
=======================
*/

footer {
  background: #333;
  color: #ccc;
  text-align: center;
  padding: 15px;
}
```

## Frequently Asked Questions

### 1. How do you comment in CSS?

You comment in CSS using `/*` to start and `*/` to end. For example:

```css
/* This is a comment */
```

### 2. How to comment in CSS in VS Code?

In VS Code, you can quickly add or remove CSS comments using keyboard shortcuts:

- **Windows/Linux**: Select the lines and press <kbd>Ctrl + /</kbd>
- **Mac**: Select the lines and press <kbd>Command + /</kbd>

### 3. How do I comment out multiple lines in CSS?

To comment multiple lines in CSS, simply wrap them all between `/*` and `*/`:

```css
/*
h2 {
  font-size: 24px;
  color: green;
}

p {
  line-height: 1.5;
}
*/
```
