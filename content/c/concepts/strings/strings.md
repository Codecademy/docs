---
Title: 'Strings'
Description: 'Strings in C programming are used to store and manipulate sequences of characters.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Characters'
  - 'Data Types'
  - 'Strings'
CatalogContent:
  - 'learn-c'
  - 'paths/computer-science'
---

**Strings** in C are one-dimensional arrays of characters terminated by a null character `'\0'`. They are used to store and manipulate sequences of characters such as words or sentences in C programming.

## Syntax

To declare a string without initialization:

```pseudo
char string_name[];
```

To declare and initialize a string using a string literal:

```pseudo
char string_name[] = "text";
```

To declare and initialize a string character by character (must include `\0` at the end):

```pseudo
char string_name[size] = {'c', 'h', 'a', 'r', 's', '\0'};
```

Strings in C are declared using the `char` data type, followed by the string name and square brackets `[]`. String values can be initialized in two ways:

- Zero or more characters, digits, and escape sequences surrounded in double quotes.
- An array of comma-separated characters, surrounded in curly brackets `{}`, and ending with a null character `'\0'`.

> **Note:** The null character `'\0'` is important as it marks the end of the string.

## Example: String Declaration

The following declaration and initialization create a string of "Howdy":

```c
char message[6] = {'H', 'o', 'w', 'd', 'y', '\0'};
```

Even though "Howdy" has only 5 characters, `message` has 6 characters due to the null character at the end of the array.

The above statement can be rewritten as:

```c
char message[] = "Howdy";
```

## Memory Representation

Here's how a string is stored in memory:

| Character | 'H'   | 'o'   | 'w'   | 'd'   | 'y'   | '\0'  |
| --------- | ----- | ----- | ----- | ----- | ----- | ----- |
| Index     | 0     | 1     | 2     | 3     | 4     | 5     |
| Address   | 23451 | 23452 | 23453 | 23454 | 23455 | 23456 |

## Displaying a String

To display a string in C, the `printf()` function from the `stdio.h` header file can be used along with the `%s` format specifier:

```c
#include <stdio.h>
int main() {
  char message[] = "Hi y'all!";
  printf("Bot: %s\n", message);
  return 0;
}
```

This code produces the following output:

```
Bot: Hi y'all!
```

## String Functions

The `string.h` header defines several string functions for manipulating arrays of characters:

- [`strchr()`](https://www.codecademy.com/resources/docs/c/strings/strchr) - Finds the first occurrence of a given character.
- [`strcmp()`](https://www.codecademy.com/resources/docs/c/strings/strcmp) - Compares two strings and returns an integer value.
- [`strcpy()`](https://www.codecademy.com/resources/docs/c/strings/strcpy) - Copies one string into another string.
- [`strlen()`](https://www.codecademy.com/resources/docs/c/strings/strlen) - Returns the length of the string, excluding the terminating null character.
- [`strtok()`](https://www.codecademy.com/resources/docs/c/strings/strtok) - Breaks a string into a series of tokens using a list of delimiters.

## Frequently Asked Questions

### 1. How many types of strings are there in C?

In C, there is only one type of string: a null-terminated array of characters. However, strings can be implemented in two ways:

- As character arrays (e.g., `char str[10] = "Hello";`)
- As character pointers (e.g., `char *str = "Hello";`)

### 2. What is the main difference between Java strings and C strings?

The main differences between [Java strings](https://www.codecademy.com/resources/docs/java/strings) and C strings are:

- Java strings are objects of the String class, while C strings are character arrays
- Java strings are immutable, while C strings can be modified
- Java strings have built-in methods like [`length()`](https://www.codecademy.com/resources/docs/java/strings/length), [`concat()`](https://www.codecademy.com/resources/docs/java/strings/concat), while C strings require external functions from libraries like `string.h`
- Java handles memory management automatically, while C requires manual memory allocation and deallocation for dynamic strings
- Java strings don't need a terminating character, but C strings must end with the null character `'\0'`

### 3. What is a string literal in C?

A string literal in C is a sequence of characters enclosed in double quotes (e.g., `"Hello"`) that represents a string constant. When a string literal appears in code, it is stored in read-only memory with an automatically appended null character `'\0'` at the end. String literals cannot be modified, and attempting to modify them results in undefined behavior.
