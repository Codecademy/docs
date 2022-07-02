---
Title: 'Preprocessors'
Description: 'A preprocessor scans the C program source code before it is compiled, allowing the source code to expand macros, include other files, and conditionally compile blocks of source code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Command Line'
  - 'Developer Tools'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

Preprocessors in C scan the source code before it is [compiled](https://www.codecademy.com/resources/docs/c/compiling) and transform it with tools like macros.

Preprocessor commands and macros are included in the source code file and are interpreted before the source code is passed to the compiler.

The preprocessor can modify the final code that is compiled or provide messages to the developer during preprocessing.

## Common Uses of Preprocessor Commands

### Including Additional Files

One of the most common preprocessor commands is `#include` which is used to include the text contents of some other file into the one being compiled.

```c
#include <stdio.h>
```

The preprocessor will replace `#include <stdio.h>` with the text contents of the file **stdio.h**.

### Conditional Compilation

The preprocessor includes several statements used for conditional compilation:

- `#if`
- `#elif`
- `#else`
- `#endif`
- `#ifdef`: shorthand for `#if defined(...)`
- `#ifndef`: shorthand for `#if !defined(...)`

```c
#if HELLO > 0
  printf("Hello world!");
#endif
```

If the macro `HELLO` is greater than zero, then the `printf("Hello world!")` command will be compiled. If not, then the command will be omitted from the final code being compiled.

```c
#ifdef _WIN32
  // Compile for 32-bit Windows system
#elif defined(_WIN64)
  // Compile for a 64-bit Windows system
#else
  // Compile for something else
#endif
```

The example above will compile different code for different operating systems based on if the macros `_WIN32` or `_WIN64` exist.

### Defining Macros

When the preprocessor encounters a [macro](https://www.codecademy.com/resources/docs/c/macros) in the source code, it will replace the macro with the value it has been assigned. Macros are defined by using `#define` and can be undefined using `#undef`.

```c
#define PI 3.1416
```

After this line, every time the preprocessor encounters the macro `PI`, it will replace it with 3.1416 in the source code.

```c
#undef PI
```

After this line, trying to use the macro PI will result in a compilation error.
