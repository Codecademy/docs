---
Title: 'Strings'
Description: 'Strings are character sequences that are either expressed in double quotes or as arrays that end with a null character \0.'
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

**Strings** are character sequences that are either expressed in double quotes or as [arrays](https://www.codecademy.com/resources/docs/c/arrays) that end with a `null` character `'\0'`.

## Syntax

```pseudo
char string-name[];
char string_name[] = "abcd";
char string_name[size] = {'a', 'b', 'c', 'd', '\0'};
```

Strings in C are first declared with the `char` data type, followed by the `string_name`, and then immediately followed by square brackets `[]`. The snippet above showcases the two ways that string values are initialized:

- Zero or more characters, digits, and escape sequences surrounded in double quotes.
- An array of comma-separated characters, surrounded in curly brackets `{ }`, and ending with a `null` character `'\0'`\*.

\* This is required when an optional `size` is passed to square brackets to specify the number of characters in the string.

## Example

The following declaration and initialization create a string of `"Howdy"`:

```c
char message[6] = {'H', 'o', 'w', 'd', 'y', '\0'};
```

Even though `"Howdy"` has only 5 characters, `message` has 6 characters due to the `null` character at the end of the `message` array.

The above statement can be rewritten as:

```c
char message[] = "Howdy";
```

### Memory

Here's the memory presentation:

```pseudo
Character |   'H'    'o'    'w'    'd'    'y'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```

## Displaying a String

To display a string in C, the [`printf()`](https://www.codecademy.com/resources/docs/c/basic-output) function from the **stdio.h** header file can be used along with the `%s` character to format strings, followed by the string name.

### Display Example

The following is an example of displaying a string in C:

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
