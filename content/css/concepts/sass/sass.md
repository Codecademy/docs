---
Title: 'Sass'
Description: 'Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that extends CSS.'
Subjects:
  - 'Web Design'
  - 'Web Development'
Tags:
  - 'CSS'
  - 'Development'
  - 'Preprocessor'
  - 'Style'
CatalogContent:
  - 'learn-css'
  - 'paths/front-end-engineer-career-path'
---

**Sass (Syntactically Awesome Style Sheets)** is a preprocessor scripting language that extends CSS. It provides additional features and capabilities to make writing CSS more efficient and maintainable. Sass files are compiled into regular CSS before being used by web browsers.

> **Note:** Sass has two syntaxes: SCSS (`.scss`) and indented syntax (`.Sass`). SCSS (Sassy Cascading Style Sheets) is the most commonly used and is similar to CSS, allowing code to be written with curly braces and semicolons. The indented syntax is less common and uses indentation and newlines instead of curly braces and semicolons. Both syntaxes are supported, and the examples are available in both formats.

## Getting Started with Sass

To get started with Sass, follow these steps:

1. Install a Sass compiler or use an online Sass editor.
2. Create a new Sass file with the `.scss` extension.
3. Write some Sass code, taking advantage of features like variables, nesting, mixins, and more.
4. Compile the Sass file into CSS using the chosen method.
5. Link the compiled CSS file to the HTML document.

## Example: Using Sass

Here is an example using SCSS (.scss) syntax:

```css
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

Here is an example using indented syntax (.Sass):

```css
.container
  width: 100%
  margin: 0 auto
  padding: 20px

.title
  font-size: 24px
  color: #333
```

## Key Features of Sass

Let's explore the key features of Sass one-by-one.

### Variables

Sass allows for the definition of reusable variables, making it easy to store and reuse values in stylesheets:

```css
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

Sass allows nesting of selectors inside one another, providing a cleaner and more readable structure:

```css
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

Sass supports mixins, which are reusable blocks of styles that can be included in different selectors, promoting code reuse:

```css
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

Sass allows the splitting of stylesheets into smaller modular files called partials. These partials can be imported into other Sass files using the `@import` syntax. By prefixing partial filenames with an underscore (\_partial.scss), it indicates that they are not meant to be compiled into a separate CSS file. This modular approach, often referred to as partials, helps organize styles and promote reusability in Sass development:

```css
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

Sass provides the ability to extend and inherit styles, reducing code duplication:

```css
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

Operators in Sass are symbols that perform mathematical operations on values. They include arithmetic operators ( `+, -, *, /`), comparison operators (`==, !=, >, <`), and logical operators (`and, or, not`). They enable dynamic calculations and conditional logic within Sass stylesheets:

```css
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

## Frequently Asked Questions

### 1. What is Sass in CSS?

Sass is a CSS preprocessor that provides features like variables, nesting, mixins, and functions. It compiles into regular CSS, making stylesheets more reusable, organized, and easier to maintain.

### 2. Is Sass better than CSS?

Sass is better for large projects due to variables, nesting, and code reuse. But modern CSS now has variables, nesting, and other features, so for smaller projects plain CSS is often enough.

### 3. Is Sass still used in 2025?

Yes, Sass is still used, especially in big projects and frameworks like Bootstrap. However, many new projects lean on modern CSS, PostCSS, or Tailwind, since browsers now support similar features.
