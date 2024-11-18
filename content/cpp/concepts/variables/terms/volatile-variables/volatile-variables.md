---
Title: 'Volatile Variables'
Description: 'Volatile variables in C++ are excluded from optimization and caching by the compiler. Marking a variable as volatile is useful when the variables value may be subject to external changes outside of the program itself'
Subjects:
  (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md)
  - 'Computer Science'
  - 'Code Foundations'
Tags: (https://github.com/Codecademy/docs/blob/main/documentation/tags.md)
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Volatile variables** in C++ will not be optimized and cached by the compiler. Marking a variable as volatile is useful when it's value may be subject to external changes outside of the program itself, by making the compiler read the latest value from memory instead of a previously cached version that may be out of date. However, volatile does not guarantee atomicity or memory synchronization between threads, only the prevention of compiler optimization.

## Syntax

To declare a variable as volatile, the `volatile` keyword needs to be placed before the variable type:

```pseudo

volatile datatype variablename;

```

## Example

An Example section that provides an example demonstrating the concept in use

[Text, code, images, etc. about example 1]

## Codebyte Example (if applicable)

A Codebyte Example section that provides a codebyte example demonstrating the concept in use

We can currently support:

- C++

See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
