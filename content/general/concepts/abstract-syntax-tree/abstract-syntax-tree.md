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

Tokenization is the process of breaking source code into its basic fundamental elements (tokens). The source code can be thought of as an array of such tokens. The AST is a graph of these tokens, specifically arranged to preserve the context of each element. For example, in some languages, `=` is both a comparison operator and an assignment operator. Simple tokenization will represent the symbol `=` but not communicate its function in the program. In an AST, the token's position in the tree and relation to other tokens is also represented. So, examining the tree indicates the difference between assigning `a` to `b`,`a = b`, on a line by itself and comparing `a` and `b` using an `if` conditional, `if a = b then ...`, even when `=` is the same token in both cases.

Like pseudocode, there is no common format for representing an AST. The output for an AST will vary based on the language that is used and the tool that is used to create the AST. However, all ASTs will have the property of completly representing the source code in a reproducable manner.

## Uses of an AST

- ASTs are used by compilers to translate source code into equvelant binary forms.
- ASTs can be used in code review to quickly identify functionally similar elements in large repositories, such as identifying vulnrabilities that may be repeated in many places.
- ASTs can be used to quickly do things like chanage variable names with respect to the scope of the particular variable.
- ASTs can be used to isolate a particular method and identify all sections of the code that refer to that particular method.
