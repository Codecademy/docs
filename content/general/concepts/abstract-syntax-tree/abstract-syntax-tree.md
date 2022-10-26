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
  - 'complex-data-structures'
  - 'paths/computer-science'
---

An **abstract syntax tree (AST)** is a language-agnostic, hierarchical representation of the elements comprising the source code of a computer program. With a given AST, it is possible to reproduce code that is functionally identical to the source code that originally generated it. In other words, the code can be reproduced in any language. This is why the generation of ASTs is a critical internal step in compiling, as it allows the compiler to interpret the source code in a way that allows it to translate the original language into equivalent machine code.

## Tokens

Tokenization is the process of breaking source code into an array of fundamental elements, or tokens. The AST is a graph of these tokens, specifically arranged to preserve the context of each element.

For example, the `=` symbol is both a comparison operator and an assignment operator in some languages. Therefore, tokenization will represent the symbol `=` but not communicate its function in the program. In an AST, the token's position in the tree, along with its relation to other tokens, is also represented. So, examining the tree indicates the difference between assigning `a` to `b` with `a = b` on a line by itself and comparing `a` and `b` using an `if` conditional, `if a = b then ...`, even when `=` is represented by the same token in both cases.

If we look at the following pseudocode:

```pseudo
if a = b
  then
    return "equal"
  else
    return a + " not equal to " + b
```

A graphical representation of the AST would look like this:

![Abstract Syntax Tree Graph](https://raw.githubusercontent.com/Codecademy/docs/main/media/abstract-syntax-tree.png 'Abstract Syntax Tree Graph')

Like pseudocode, there are many ways to represent an AST. The output for an AST will vary based on the language and tool used to create it. However, all ASTs should have the property of completely representing the source code in a reproducible manner.

## Uses of an AST

ASTs have many uses in different situations, including:

- By compilers to translate source code into equivalent binary forms.
- In code reviews for identifying redundant elements in a codebase or detecting possible vulnerabilities.
- Efficient refactors such as changing variable names with respect to their scope in the program.
- Isolating a particular method and identifying all sections of the code that refer to that particular method.
