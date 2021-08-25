---
Title: "Strings" 
Subjects:
  - "Code Foundations"
  - "Computer Science"
Tags: 
  - "Strings"
  - "Data Types"
  - "Characters"
  - "Arrays"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

Strings are arrays of characters followed by a `null` character `'\0'`.

## Declaring and Assigning a String

To declare a string in C, the type of the string (`char`) is first included, followed by the name, size, and the characters.

```pseudo
char name[size] = {char1, char2, ..., charN, '\0'};
```

The following declaration and initialization create a string consisting of the word `"Howdy"`. 

To hold the `null` character at the end of the array, the size of the character array containing the string is one more than the number of characters in the word "Howdy!"

```c
char message[6] = {'H', 'o', 'w', 'd', 'y', '\0'};
```

If you follow the rule of array initialization, then you can write the above statement as follows:

```c
char message[] = "Howdy";
```

## Memory

So here's the memory presentation:

```shell
Character |   'H'    'o'    'w'    'd'    'y'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```

## Displaying a String

To display a string in C, the `printf()` function from the **stdio.h** header file can be used along with the `%s` character to format strings, followed by the string name.

## Example

```c
#include <stdio.h>

int main () {
   char message[6] = {'H', 'o', 'w', 'd', 'y', '\0'};
   printf("Post-it Note: %s\n", message);

   return 0;
}
```

The output would be:

```shell
Post-it Note: Howdy
```
