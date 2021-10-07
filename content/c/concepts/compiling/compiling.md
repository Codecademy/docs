---
Title: 'Compiling'
Description: 'Compiling is the process that converts code written by a programmer (source code) into a language that the computer understands (machine code).'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Compiling is a term used for converting code written by a programmer in languages such as C, C++, etc. (source code) into machine understandable code (machine code). Compiling is carried out by a compiler. The process of converting source code into machine code is known as Compilation.

## Stages of Compiling a C Program

There are 4 stages in the process of compilation of a C Program.

### 1. Preprocessing

Preprocessing is the first stage in the process of compilation. In this stage:

- Preprocessor commands begin with `#` are interpreted.
- Comments are removed from the source code.
- Macros are expanded.

### 2. Compiling

In this stage, the preprocessed code is translated into assembly code and syntax errors are checked by the compiler.

### 3. Assembly

In this stage, an assembler is used to translate the assembly code into object code (machine code).

### 4. Linking

Linking is the final stage in the process of compilation. In this stage, all the object code from multiple modules is merged together so that it can finally be executed by the processor.
