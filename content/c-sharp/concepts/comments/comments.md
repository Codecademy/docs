---
Title: 'C# Comments'
Description: 'A comment is a piece of text within a program that is not executed.'
Subjects: 
  - 'Computer Science'
  - 'Code Foundations'  
Tags: 
  - 'Syntax'
  - 'Comments'
CatalogContent: 'C#-Course'
---

## Comments

A **comment** is a piece of text within a program that is not executed. It can be used to provide additional information to aid in understanding the code.


### Single-line Comments

Single-line comments are created using two consecutive forward slashes. The compiler ignores any text after `//` on the same line.

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

#### Documentation

    *Single-line: `///`
    *Multi-line: `/** */`


#### API Documentation

API docs, or API description documents, are the **collection** of references, tutorials, and examples that **help developers use your API**.


#### Example

```cs 
/// <summary>
///  This class performs an important function.
/// </summary>
public class MyClass {}
```


Interested in helping build Docs? Read the [Contribution Guide](https://github.com/Codecademy/docs/blob/main/.github/CONTRIBUTING.md) or share your thoughts in this [feedback form](https://codecademyready.typeform.com/to/hzVIWDgz?typeform-source=www.codecademy.com).