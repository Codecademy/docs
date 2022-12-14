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


### Single-line Comments

#### Syntax

Single-line comments are created using two consecutive forward slashes. The compiler ignores any text after `//` on the same line.

```cs
// Comment goes here
executing code // Comment goes here
```

#### Example

The following example uses a single-line comment before a line of code:

```cs
// This line will denote a comment in C-sharp
Console.WriteLine("Hello World!");
```

The following example uses a single-line comment after a line of code:

```cs
Console.WriteLine("Hello World!"); // This is a comment
```

### Multi-line Comments

Multi-line comments are created using `/* to begin the comment, and */` to end the comment. The compiler ignores any text in between.

```cs 
/*
This is all commented out.
None of it is going to run!
*/
```

### XML Comments

XML comments are structured comments that **produce API documentation**. The C# compiler produces an XML file that contains structured data representing the comments. Other tools can process that XML output to create human-readable documentation in the form of web pages or PDF files, for example.
API docs, or API description documents, are the collection of references, tutorials, and examples that help developers use your API.

#### Syntax

The following is a single line XML comment:

```cs
\\\ XML Comment goes here
```

The following is a multi-line XML comment:

```cs
/**
XML Comments go here
*/
```

#### Example

Tags embedded in XML comments are used to signal a specific functionality of the XML comment to the compiler.
The <summary> tag in the following example describes a type or a member, in this case the public class MyClass.

```cs 
/// <summary>
///  This class performs an important function.
/// </summary>
public class MyClass {}
```