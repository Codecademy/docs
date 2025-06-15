---
Title: '.assign()'
Description: 'String assignment in C++ involves giving a string value to a string variable. Here are the common methods for string assignment:'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.assign()`** String assignment in C++ involves giving a string value to a string variable. Here are the common methods for string assignment.


## Syntax

```pseudo
destinationstring.assign(sourcestring)
```

The following arguments are applied to the `.find()` method:

- `sequence`: the char or string to be searched for.
- `position` (optional): the index to start the search at (defaults to 0).
- `count` (optional): the number of characters that must match (defaults to the length of `sequence`).

## Examples

The following example assign a source string to the destination string:

```cpp
   #include <iostream>
   #include <string>

   int main() {
        std::string str3;
        str3.assign("World"); // Assigning a string literal
        std::cout << str3 << std::endl;

        std::string str4;
        str4.assign(str3); // Assigning another string variable
        std::cout << str4 << std::endl;

        std::string str5;
        str5.assign("Example", 4); // Assigning a substring (first 4 characters)
        std::cout << str5 << std::endl;

        std::string str6;
        str6.assign(5, '!'); // Assigning 5 repetitions of character '!'
        std::cout << str6 << std::endl;
        return 0;
   }
   
```
The output for the snippet above would look like this:

```shell
World
World
Exam
!!!!!
```




## Codebyte Example

However, if the previous example is changed to search for the first two characters of `bad` instead, then a result is found:

```codebyte/cpp
 #include <iostream>
   #include <string>

   int main() {
        std::string str3;
        str3.assign("World"); // Assigning a string literal
        std::cout << str3 << std::endl;

        std::string str4;
        str4.assign(str3); // Assigning another string variable
        std::cout << str4 << std::endl;

        std::string str5;
        str5.assign("Example", 4); // Assigning a substring (first 4 characters)
        std::cout << str5 << std::endl;

        std::string str6;
        str6.assign(5, '!'); // Assigning 5 repetitions of character '!'
        std::cout << str6 << std::endl;
        return 0;
   }
```
