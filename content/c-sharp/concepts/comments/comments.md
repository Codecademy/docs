---
Title: 'Comments'
Description: 'A comment is a non-executable text segment within code.'
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

A **comment** is a non-executable text segment within code. It is used to provide explanations, improve readability, and offer context for developers.


## Single-line Comments

Single-line comments start with `//` and continue to the end of the line. They can appear on an empty line or on the same line as executable code. They are ignored by the compiler.

```cs
// This is a single-line comment
int number = 10; // Explains the variable
```

## Multi-line Comments

Multi-line comments begin with `/*` and end with `*/`. The compiler ignores any text in between, and they can span multiple lines.

```cs
/* 
This is a
multi-line comment
*/
```
Multi-line comments can also be inserted within a line of code, allowing for additional executable code after the comment, as they are explicitly closed with `*/`.

```cs
int number = 10; /* Multi-line comment */ int anotherNumber = 20;
```

## Example

This example shows the different ways comments can be used in C#.

```cs
using System;

namespace CommentExample
{
    class Program
    {
        static void Main(string[] args)
        {
            // This is a single-line comment on an empty line

            Console.WriteLine("Hello, World!"); // This is a single-line comment following a line with code

            /*
            This is a multi-line comment block
            spanning several lines.
            It can be used to describe a section of code
            or provide detailed explanations.
            */

            int number = 10; /* This is a multi-line comment inserted within a line of code */ int anotherNumber = 20;

            // This is another single-line comment
            Console.WriteLine("The number is: " + number);
            Console.WriteLine("Another number is: " + anotherNumber);
        }
    }
}
```

## XML Comments

[XML](https://www.codecademy.com/resources/docs/general/xml) comments are structured comments that produce [API](https://www.codecademy.com/resources/docs/general/api) documentation. The C# compiler produces an XML file that contains structured data representing the comments. Other tools can process that XML output to create human-readable documentation in the form of web pages or PDF files, for example.

### Syntax

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

### Example

XML tags embedded in XML comments are used to signal a specific functionality of the XML comment to the compiler. The `<summary>` tag in the following example describes a type or a member, in this case, the public class `MyClass`:

```cs
/// <summary>
///  This class performs an important function.
/// </summary>
public class MyClass {}
```
