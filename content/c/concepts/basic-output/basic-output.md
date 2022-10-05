---
Title: 'Basic Output'
Description: 'In the C language the console output is managed by the library stdio.h which has to be included.
Thanks to that a functions that target the C console, like putchar(), can be used.'
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

In the C language, **basic console output** is achieved using functions from the "standard input output" header file (**stdio.h**).

## Header File

C itself has no ability to output any information. In order to so, the **stdio.h** header file must be included in the program, which commonly happens at the top of the file:

```c
#include <stdio.h>
```

Once this is done, the functions included in it can be used.
