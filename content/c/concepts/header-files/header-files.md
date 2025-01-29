---
Title: 'Header Files'
Description: 'Allow common functions to be used across multiple files without copying their declarations and definitions.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Conceptual'
  - 'Constructors'
  - 'Programming'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

**Header files**, typically denoted by a **`.h`** suffix, are used to provide forward declarations of functions, data types, macros, and more, but they do not contain the definitions. This prevents multiple definitions across the codebase, adhering to the _One Definition Rule_. While simple functions and data types may occasionally defy this rule, the general best practice is to separate declarations and definitions, with exceptions covered in more advanced topics beyond this summary.

These files are usually paired with a source file that defines the terms declared in the header, allowing them to be reused across multiple source files without redeclaring each function.

Header files come in two forms: _user-defined_ and those from _the standard library_. The developer creates user-defined headers, which are typically situated in the same directory as the source file being worked on (though this can vary depending on the configuration and tools used). Standard library headers like `stdio.h` are found in system directories.

## Syntax

A header file is included in a source file using the `#include` preprocessor directive, followed by the header file's name. For example:

```pseudo
#include <header-file-name.h>
```

This allows the use of functions from the `stdio.h` file, such as `printf`, as shown below:

```c
#include <stdio.h>

int main()
{
  printf("Hello World!");

  return 0;
}
```

For user-defined header files, the syntax is slightly different; instead of `<filename.h>`, `"filename.h"` is used. For example:

```pseudo
#include "myHeader.h"
```

If the header file is not in the same directory as the source file, it can be included using a relative (recommended) or absolute (not recommended) path, like this:

```pseudo
#include "../myHeaders/myHeader.h"
```

A better approach is to configure the compiler to include the directory containing the header files, allowing the header to be included without specifying the full path. Check your Integrated Development Environment (IDE) documentation for specific instructions on configuring this, as the process may vary.

## Header File Construction

A proper header file should only contain declarations, not definitions. The corresponding source file contains the definitions, which generally share the same name as the header. For example, a header file named `myHeader.h` is typically paired with a source file named `myHeader.c`. The header file should also include a header guard and a preprocessor macro that prevents multiple file inclusions. If the contents are not already defined (based on the unique name of the macro), they are included; otherwise, the compiler skips the file. A header guard for `myHeader.h` looks like this:

```pseudo
#ifndef UNIQUE_NAME
#define UNIQUE_NAME

// Declarations here

#endif
```

`UNIQUE_NAME` can be any unique identifier, but the convention is to use the full filename of the header file.

The accompanying C file will include the header file itself (as this is where the functions are declared) and the function definitions. For example:

```pseudo
#include "myHeader.h"

// Function definitions
```

## Example

Here's a simple program that adds two integers and prints the result.

First, the `add.h` header file is defined with the following code:

```c
#ifndef ADD
#define ADD

// Header that declares an addition function

int add(int x, int y);

#endif
```

Next, the paired `add.c` source file is defined with the following code:

```c
#include "add.h"

int add(int x, int y)
{
  return x + y;
}
```

Now, here's the program that calls the `add.h` header, computes a simple addition and prints the answer:

```c
#include <stdio.h>  // Used for printing; notice the angle brackets for standard library headers
#include "add.h"    // Double quotes for user-defined headers

int main() {
  int x = 3;
  int y = 5;
  int result = 0;  // Initialize to zero

  // Compute the addition
  result = add(x, y);

  // Display the result
  printf("%d + %d = %d\n", x, y, result);

  return 0;
}
```

The above code produces the following output:

```shell
3 + 5 = 8
```
