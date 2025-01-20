---
Title: 'Header Files'
Description: 'Header files are used in C to allow common functions to be used across multiple files without copying their declarations and definitions.'
Subjects:
  - 'Code Foundations
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

**Header files**, normally denoted by a '.h' suffix, are files used to provide forward declarations of functions, data types, macros, etc., but are not used to provide the definitions; this is to not have multiple definitions throughout the codebase (One Definition Rule). Exceptions exist, such as very simple functions and data types, but the general advice is to separate definitions and declarations; these exceptions fall under more advanced topics beyond the scope of this summary. They are often accompanied by a source file that then provides the definitions of the terms declared in the header file. Creating header files this way allows said terms to be easily reused across multiple source files without redeclaring each function wherever it is used.

Header files also come in user-defined forms, as well as those found in the standard library. The former are those made by the user and kept in the same directory as the source file currently being worked on (exceptions do exist depending on the configuration and capabilities of what is used to write and compile the code). The latter are those found in the system directory - for example, [```stdio.h```](https://en.wikipedia.org/wiki/C_file_input/output) (standard input and output).

## Syntax

### Header File Usage

A header file is added to a source file through the ```#include``` preprocessor followed by the name of the header file you wish to include. For example:

```#include <stdio.h>```

Which will allow you to use the functions contained within the stdio.h file such as ```printf```. As shown below:

```
#include <stdio.h>

int main()
{
    printf(
        "Hello World!")
    return 0;
}
```

For user defined header files the syntax is slightly different, instead of ```<filename.h>```, ```"filename.h"``` is used instead. For example:

```#include "myHeader.h"```

If the header file is not co-located with the source file, then the header file can be included using a relative (best practice) or absolute (not recommended) path. For example:

```#include "../myHeaders/myHeader.h"```

A better way, though, is to simply tell your compiler to include these additional directories, and then you can call the header file directly without a path. Please consult the documentation of your Integrated Development Environment (IDE) for specific directions on how to do this, as it is different for each IDE.

### Header File Construction

A proper header file only contains declarations and not definitions, the definitions are contained within a paired source file that best practice denotes has the same name, an example pairing would be ```myHeader.h``` and ```myHeader.c```. This header file will also contain a header guard, which is a preprocessor macro that tells the compiler to check if the contents have already been defined (based on the unique name of the macro) and, if not, to include the terms within the header file, and if already defined not to define it again (One Definition Rule). A header guard for the ```myHeader.h``` file looks like this at the top of the file:

```
#ifndef UNIQUE_NAME
#define UNIQUE_NAME

// Your declarations here

#endif
```

`UNIQUE_NAME` can be any unique identifier, but the convention is to use the full filename of the header file.

The accompanying C file will include the header file itself (as this is where the functions are declared) and the function definitions. For example:

```
#include "myHeader.h"

//Your function definitions
```


## Example

Now that we've seen that a header file contains forward declarations of functions paired with a C file that defines these functions and how to include this header into a program, let's see a simple program that adds two integers and then prints the output.


First, `add.h` is defined and contains the following code:

```
#ifndef ADD
#define ADD

// Header that declares an addition function

int add(int x, int y);

#endif
```

The paired `add.c` source file contains the following code:

```
#include "add.h"

int add(int x, int y)
{
    return x + y;
}
```

Now let's see the program that calls the add.h header, computes a simple addition and prints the answer to the console:

```
int main()
{
    #include <stdio.h> // Used to print to the window. Notice the usage of <> due to it being part of the standard library
    #include "add.h" // " used due to it being a user-defined header
    
    // Define the variables
    int x = 3;
    int y = 5;
    int result = 0; // Initialising this to zero

    // Compute the addition
    result = add(x, y);

    // Display result
    printf(
        "%d + %d = %d", x, y, result); // Prints 3 + 5 = 8

    return 0;
}
```
