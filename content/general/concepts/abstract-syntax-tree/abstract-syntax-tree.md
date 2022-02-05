---
Title: 'Abstract Syntax Tree'
Description: 'An abstract syntax tree is a language-agnostic, hierarchical representation of the elements comprising the source code of a computer program.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Code Editors'
  - 'Conceptual'
  - 'Developer Tools'
  - 'Documentation'
CatalogContent:
  - 'paths/computer-science'
---

An abstract syntax tree (AST) is a language-agnostic, hierarchical representation of the elements comprising the source code of a computer program. With a given AST, it is possible to reproduce code that is functionally identical to the source code that originally generated it. In other words, the code can be reproduced in any language. This is why the generation of ASTs is a critical internal step in compiling, as it allows the compiler to interpret the source code in a way that allows it to translate the original language into equivalent machine code.

Tokenization is the process of breaking source code into its fundamental elements (tokens). The source code can be thought of as an array of such tokens. The AST is a graph of these tokens, specifically arranged to preserve the context of each element. For example, in some languages, `=` is both a comparison operator and an assignment operator. Simple tokenization will represent the symbol `=` but not communicate its function in the program. In an AST, the token's position in the tree and relation to other tokens is also represented. So, examining the tree indicates the difference between assigning `a` to `b`,`a = b`, on a line by itself and comparing `a` and `b` using an `if` conditional, `if a = b then ...`, even when `=` is the same token in both cases.

If we look at the following pseudocode:

```pseudo
if a = b
  then
    return "equal"
  else
    return a + " not equal to " + b
```

A graphical representation of the AST would look like this:

![Abstract Syntax Tree Graph](https://raw.githubusercontent.com/Codecademy/docs/abstract-syntax-tree/media/abstract-syntax-tree.png "Abstract Syntax Tree Graph")

Like pseudocode, there are many ways to represent an AST. The output for an AST will vary based on the language and tool to create it. However, all ASTs should have the property of completely representing the source code in a reproducible manner.

## Uses of an AST

- ASTs are used by compilers to translate source code into equivalent binary forms.
- ASTs can be used in code review to quickly identify functionally similar elements in large repositories, such as identifying commonly occurring vulnerabilities in a program.
- ASTs can be used for efficient refactoring like changing variable names with respect to the scope of the particular variable.
- ASTs can be used to isolate a particular method and identify all sections of the code that refer to that particular method.
