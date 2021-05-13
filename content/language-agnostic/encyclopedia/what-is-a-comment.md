---
Title: "What is a Comment?"  
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags: 
  - "Comments"
  - "Documentation"
  - "Best Practices"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/code-foundations"
---

A _comment_ is a note or explanation in the source code of a computer program. They are added with the purpose of making the code easier for ourselves or other developers to understand in the future, and they are generally ignored by compilers and interpreters. 

Comments are typically formatted as either:

- _Single-line comments_, which start with a comment delimiter and continue until the end of the line.
- _Multi-line comments_, which start with a start delimiter and end with an end delimiter and can span multiple lines.

Some programming languages support only one type of comment. For example, Python comments are single-line comments: They start with `#` and continue to the end of the line. Other languages employ both single-line and multi-line comments. For example, C and C++ have single-line comments that start with `//` and multi-line comments between `/*` and `*/` that can span multiple lines.

## Uses

How best to make use of comments is subject to dispute. Here are some common ways comments are used:

### Code Description

Comments can be used to summarize code or to explain the programmer's intent. They can provide additional information to aid in understanding the code.

### Debugging

When an error is encountered in the program, a common debugging practice is to comment out some code, meaning to add comment syntax causing that block of code to become a comment, so that it will not be executed in the program. This may be done to exclude certain pieces of code from the program. 

By strategically commenting out and running only parts of the program, the source of the error can be determined through process of elimination.

### Metadata

Comments in a computer program often store metadata about a program file.

In particular, many software maintainers put submission guidelines in comments to help people who read the source code of that program to send any improvements they make back to the maintainer.

Other metadata includes: 

- The name of the creator of the original version of the program file
- The date when the first version was created
- The names of other people who have edited the program file so far
- The URL of documentation about how to use the program
- The name of the software license for the program file

