---
Title: 'Comments'
Description: 'A comment is a piece of text within a program that is not executed.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Syntax'
  - 'Comments'
  - 'Documentation'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

A **comment** is non-executable text in a program, used to explain code, enhance readability, and provide context for developers.

### Why Use Comments

- **Improve readability**: Explain complex code, making it easier to understand.
- **Provide context**: Clarify the intent behind code decisions for future reference.
- **Aid in debugging**: Temporarily disable parts of the code during testing.
- **Documentation**: Describe the behavior of functions, methods, or classes for generating documentation.

### Single-line Comments

For single-line comments, the compiler ignores any text after two consecutive forward slashes (`//`) on the same line.

```cs
// Comment goes here
executing code // Comment goes here
```

### Multi-line Comments

Multi-line comments begin with `/*` and end with `*/`. The compiler ignores any text in between.

```cs
/*
This is all commented out.
None of it is going to run!
*/
```

### Example

The following examples show various comment styles:

```cs
// This line will denote a comment in C-sharp.
Console.WriteLine("Hello World!"); // This is a comment.
/*
This is a multi-line
comment.
*/
```

### XML Comments

[XML](https://www.codecademy.com/resources/docs/general/xml) comments are structured comments that produce [API](https://www.codecademy.com/resources/docs/general/api) documentation. The C# compiler produces an XML file that contains structured data representing the comments. Other tools can process that XML output to create human-readable documentation in the form of web pages or PDF files, for example.

#### Syntax

The following is a single-line XML comment, which uses three forward slashes (`///`):

```cs
/// XML Comment goes here
```

Multi-line XML comments are similar to regular multi-line comments, except that an extra asterisk `*` is used in the opening:

```cs
/**
XML Comments go here
*/
```

#### Example

XML tags in comments signal functionality to the compiler. The <summary> tag describes a type or member, like in the public class `MyClass`.

```cs
/// <summary>
///  This class performs an important function.
/// </summary>
public class MyClass {}
```
