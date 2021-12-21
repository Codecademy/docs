---
Title: 'Strings'
Description: 'Strings are arrays of characters followed by a null character \0. To declare a string in C, the type of the string, char, is first specified, followed by the name of the string, the size, and the characters themselves. pseudo char name[size] = {a, b, c, d, \0};  The following declaration and initialization create a string of "Howdy": c'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
  - 'Arrays'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

Strings are arrays of characters followed by a `null` character `'\0'`.

## Declaring and Initializing a String

To declare a string in C, the type of the string, `char`, is first specified, followed by the name of the string, the size, and the characters themselves.

```pseudo
char name[size] = {'a', 'b', 'c', 'd', '\0'};
```

The following declaration and initialization create a string of `"Howdy"`:

```c
char message[6] = {'H', 'o', 'w', 'd', 'y', '\0'};
```

Even though `"Howdy"` has only 5 characters, `message` has 6 characters due to the `null` character at the end of the `message` array.

The above statement can be rewritten as:

```c
char message[] = "Howdy";
```

This is the more common string declaration out in the wild.

## Memory

Here's the memory presentation:

```pseudo
Character |   'H'    'o'    'w'    'd'    'y'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```

## Displaying a String

To display a string in C, the `printf()` function from the **stdio.h** header file can be used along with the `%s` character to format strings, followed by the string name.

## Example

```c
#include <stdio.h>

int main() {
  char message[] = "Hi y'all!";
  printf("Bot: %s\n", message);

  return 0;
}

```

The output would be:

```shell
Bot: Hi y'all!
```

## String Functions

The **string.h** header defines a handful of string functions for manipulating arrays of characters.
