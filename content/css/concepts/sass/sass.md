---
Title: 'SASS'
Description: 'SASS (Syntactically Awesome Style Sheets) is a preprocessor scripting language that extends CSS.'
Subjects:
  - 'Web Development'
  - 'Web Design'
Tags:
  - 'Development'
  - 'Preprocessor'
  - 'CSS'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**SASS (Syntactically Awesome Style Sheets)** is a preprocessor scripting language that extends CSS. It provides additional features and capabilities to make writing CSS more efficient and maintainable. SASS files are compiled into regular CSS before being used by web browsers.

> **Note:** SASS has two syntaxes: SCSS (.scss) and indented syntax (.sass). SCSS (Sassy Cascading Style Sheets) is the most commonly used and is similar to CSS, allowing code to be written with curly braces and semicolons. The indented syntax is less common and uses indentation and newlines instead of curly braces and semicolons. Both syntaxes are supported, and the examples are available in both formats.

### SASS Example

```scss
.container
  width: 100%
  margin: 0 auto
  padding: 20px

.title
  font-size: 24px
  color: #333
```

### SCSS Example

```scss
.container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  color: #333;
}
```

## Key Features

### Variables

SASS allows for the definition of reusable variables, making it easy to store and reuse values in stylesheets.

```scss
$primary-color: #007bff;
$font-size: 16px;

.container {
  background-color: $primary-color;
  font-size: $font-size;
}

.heading {
  color: $primary-color;
  font-size: $font-size + 4px;
}
```

### Nesting

SASS allows nesting of selectors inside one another, providing a cleaner and more readable structure.

```scss
.container {
  width: 100%;

  .header {
    background-color: #007bff;
    color: #fff;
  }

  .content {
    padding: 20px;

    .section {
      margin-bottom: 20px;
    }
  }
}
```

### Mixins

SASS supports mixins, which are reusable blocks of styles that can be included in different selectors, promoting code reuse.

```scss
@mixin button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
}

.button {
  @include button;
}

.special-button {
  @include button;
  font-weight: bold;
}
```

### Partials and Import

SASS allows the splitting of stylesheets into smaller modular files called partials. These partials can be imported into other SASS files using the `@import` syntax. By prefixing partial filenames with an underscore (\_partial.scss), it indicates that they are not meant to be compiled into a separate CSS file. This modular approach, often referred to as partials, helps organize styles and promote reusability in SASS development.

```scss
// _variables.scss (Partial)
$primary-color: #007bff;
$font-size: 16px;

// main.scss (Main file)
@import 'variables';

.container {
  background-color: $primary-color;
  font-size: $font-size;
}

// _buttons.scss (Partial)
.button {
  padding: 10px 20px;
  background-color: $primary-color;
  color: #fff;
  border: none;
}

// main.scss (continued)
@import 'buttons';

.special-button {
  font-weight: bold;
  @extend .button;
}
```

### Extensions and Inheritance

SASS provides the ability to extend and inherit styles, reducing code duplication.

```scss
// Base styles for buttons
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
}

// Extend the base button styles for a special button
.special-button {
  @extend .button;
  font-weight: bold;
}

// Extend the base button styles for a disabled button
.disabled-button {
  @extend .button;
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Operators

Operators in SASS are symbols that perform mathematical operations on values. They include arithmetic operators ( `+, -, *, /`), comparison operators (`==, !=, >, <`), and logical operators (`and, or, not`). They enable dynamic calculations and conditional logic within SASS stylesheets.

```scss
// Define variables
$width: 200px;
$padding: 20px;
$font-size: 16px;

// Perform calculations using operators
.container {
  width: $width + 50px;
  padding: $padding / 2;
  font-size: $font-size * 1.2;
}

// Use comparison operator
.success {
  color: green;
  background-color: if($width > 300px, yellow, white);
}
```

## Using SASS

To use SASS, you need to compile your SASS files into regular CSS. There are several ways to compile SASS:

- **Command Line:** Use the command line to run the SASS compiler and generate CSS files.
- **Build Tools and Task Runners:** Various build tools and task runners, like Gulp or Webpack, have SASS compilation plugins that automate the process.
- **Online Editors:** There are online SASS editors that compile SASS code into CSS directly in the browser.

## Getting Started

To get started with SASS, follow these steps:

1. Install a SASS compiler or use an online SASS editor.
2. Create a new SASS file with the `.scss` extension.
3. Write some SASS code, taking advantage of features like variables, nesting, mixins, and more.
4. Compile the SASS file into CSS using the chosen method.
5. Link the compiled CSS file to the HTML document.

That's it! Take advantage of the power of SASS to write more flexible and maintainable stylesheets.

Remember to make use of official SASS documentation and online resources to explore more advanced features and techniques.
