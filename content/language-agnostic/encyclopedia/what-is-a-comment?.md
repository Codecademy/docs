---
Title: "What is a Comment?"  
Subjects:
  - "code foundations"
  - "computer science"
Tags: 
  - "comment"
  - "documentation"
Catalog Content: 
  - "https://www.codecademy.com/learn/learn-python-3"
  - "https://www.codecademy.com/learn/paths/code-foundations"
---

A _comment_ is a note or explanation in the source code of a computer program. They are added with the purpose of making the code easier for future selves or other fellow developers to understand, and are generally ignored by compilers and interpreters. 

Comments are generally formatted as either:

- _Single-line comments_ start with a comment delimiter and continue until the end of the line.
- _Multi-line comments_ start with a start delimiter and end with an end delimiter and can span multiple lines.

Some programming languages support only one type of comment. For example, Python comments are single-line comments: they start with `#` and continue to the end of the line. Other languages employ both single-line and multi-line comments. For example, C and C++ have single-line comments delimited by `//` and multi-line comments delimited by `/*` and `*/` that can span multiple lines.

## Uses

How best to make use of comments is subject to dispute. Here are some common ways comments are used:

### Code Description

Comments can be used to summarize code or to explain the programmer's intent. According to this school of thought, restating the code in plain English is considered superfluous; the need to re-explain code may be a sign that it is too complex and should be rewritten, or that the naming is bad.

> "Good comments don't repeat the code or explain it. They clarify its intent. Comments should explain, at a higher level of abstraction than the code, what you're trying to do." (Steve McConnell)

### Debugging

A common developer practice is to comment out a code snippet, meaning to add comment syntax causing that block of code to become a comment, so that it will not be executed in the program. This may be done to exclude certain pieces of code from the program, or (more commonly) it can be used to find the source of an error. 

By systematically commenting out and running only parts of the program, the source of an error can be determined.

### Metadata

Comments in a computer program often store metadata about a program file.

In particular, many software maintainers put submission guidelines in comments to help people who read the source code of that program to send any improvements they make back to the maintainer.

Other metadata includes: 

- The name of the creator of the original version of the program file
- The date when the first version was created
- The names of other people who have edited the program file so far
- The URL of documentation about how to use the program
- The name of the software license for this program file
