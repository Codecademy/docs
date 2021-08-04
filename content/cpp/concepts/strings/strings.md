---
Title: "Strings"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Strings"
  - "Characters"
  - "Data Types"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

Strings are objects that represent sequences of characters. In C++, there are two ways to create strings: `string` class or using C-style character strings.

## String Class

The standard `string` class provides support for strings in C++.

```cpp
std::string welcome = "Hi";
std::string user_name = "@sonny";
std::string message = "Good nite! 😇";
```

## C-Style Character Strings

The C-style character string originated within the C language and continues to be supported within C++. 

This string is actually a one-dimensional array of characters which is terminated by a `null` character '\0'.

```cpp
char greeting[] = "Hello";
```

So here's the memory presentation:
```
Character |   'H'    'e'    'l'    'l'    'o'   '\0'
Index     |    0      1      2      3      4      5
Address   |  23451  23452  23453  23454  23455  23456
```
