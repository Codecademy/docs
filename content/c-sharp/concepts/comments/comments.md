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

A **comment** is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.

## Why Use Comments?

1. **Documentation**: Help document what specific parts of the code do, making it easier for others (or yourself) to understand when revisiting the code later.
2. **Debugging**: Temporarily disable code without removing it, making debugging easier.
3. **Clarity**: Improve the readability of the code, especially in complex sections.

## Single-line Comments

A **single-line comment** is a comment that occupies a single line. It starts with two forward slashes (`//`), and everything after those slashes on that line is ignored by the compiler.

### Example

```cs
// This is a single-line comment
Console.WriteLine("This code will execute."); // Inline comment explaining the code

```

### Multi-line Comments

A **multi-line comment** is used for comments that span multiple lines. It begins with `/*` and ends with `*/`. The compiler ignores everything in between.

```cs
/*
This is a multi-line comment.
It can span multiple lines.
*/
Console.WriteLine("This code will also execute.");
```

### XML Comments

[XML](https://www.codecademy.com/resources/docs/general/xml) comments are structured comments that produce [API](https://www.codecademy.com/resources/docs/general/api) documentation. The C# compiler produces an XML file that contains structured data representing the comments. Other tools can process that XML output to create human-readable documentation in the form of web pages or PDF files, for example.

#### Syntax

The following is a single-line XML comment, which uses three forward slashes (`///`):

```cs
/**
XML Comments go here
*/
```

Multi-line XML comments are similar to regular multi-line comments, except that an extra asterisk `*` is used in the opening:

```cs
/**
XML Comments go here
*/
```

#### Example

XML tags embedded in XML comments are used to signal a specific functionality of the XML comment to the compiler. The `<summary>` tag in the following example describes a type or a member, in this case, the public class `MyClass`:

```cs
/// <summary>
///  This class performs an important function.
/// </summary>
public class MyClass {}
```

```cs
// Another XML comment example
/// <summary>
/// This method calculates the sum of two integers.
/// </summary>
/// <param name="a">The first integer</param>
/// <param name="b">The second integer</param>
/// <returns>The sum of a and b</returns>
public int Add(int a, int b) {
    return a + b;
}
```
