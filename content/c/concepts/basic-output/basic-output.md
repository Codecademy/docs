---
Title: 'Basic Output'
Description: 'Basic console output is managed by the standard header file for input and output in C.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Print'
  - 'Output'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

In the C language, **basic console output** is achieved using functions from the "standard input output" header file (`stdio.h`).

## Header File

C itself has no ability to output any information. In order to do so, the `stdio.h` header file must be included in the program, which commonly happens at the top of the file:

```c
#include <stdio.h>
```

Once this is done, the functions included in it can be used.
