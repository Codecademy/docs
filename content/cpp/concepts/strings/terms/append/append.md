---
Title: '.append()'
Description: 'Appends characters or strings to the end of an existing string.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Concatenation'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-c++'
  - 'paths/computer-science'
---

**`.append()`** is a method that concatonates new characters to the end of an existing string, without the need to reassign the value. You can use `.append()` to add together two different strings, add a portion of a string (also known as a ['substring'](https://www.codecademy.com/resources/docs/cpp/strings/substr)) to an existing string, or just add characters to the end of an existing string.


## Example 1: Appending 2 strings together

This example takes two seperate strings and concatonates them.

### Parameters
- `str2` A secondary string whos values will be added to the original string.

### Syntax
`stringName1.append(str2);`


```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;
 
int main () {
  string stringOne = "Hello ";
  string stringTwo = "World";
  
  //Appends stringTwo to the end of stringOne
  stringOne.append(stringTwo);
  
  cout << stringOne;
  return 0;
}
```

## Example 2: Appending one piece of a string to another

This example takes a portion of one string and adds it to the end of another.

### Parameters
- `str2` A secondary string whos values will be added to the original string.
- `pos` The position of the first character of the string being copied as a substring.
- `num` The number of characters being added as a part of the substring.

### Syntax
`str1.append(str2, pos, num);`


```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;
 
int main() {
  	string str1("Straw Hat ");
    string str2("Monkey D. Luffy");
    
    // Appends 5 characters from 10th index of str2 to str1
    str1.append(str2, 10, 5);
  
    cout << str1;
    return 0;
}
```

## Example 3: Appending (multiple) characters to a string

This example takes a specific character and adds it a specific amount of times to the end of a string.

### Parameters
- `num` The number of times the character is to be added to the string.
- `c` The character to be added.

### Syntax
`stringName.append(num, c);`


```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;
 
int main() {
    string str("Codecademy is awesome");

    // Appends 3 occurrences of '!' to the end of str
    str.append(3, '!');

    cout << str;
  
    return 0;
}
```

## Example 4: Appending one piece of a string to another with '.begin()' and '.end()'

This example takes a portion of one string and adds it to the end of another, this time using '.begin()' and '.end()' as _first_ and _last_.

### Parameters
- `first` Iterator showing the first character we use for the substring.
- `last` Iterator showing the position **after** the last character we use for the substring.

### Syntax
`stringName.append(first, last);`


```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;
 
int main() {
    string str1("Coding is so ");
    string str2("Adjectives: boring, fun, cool, and amazingly stupendous");

    // Appends all characters from
    // str2.begin()+5, str2.end() to str1
    str1.append(str2.begin() + 20, str2.end() - 13);

    cout << str1;
    return 0;
}
```
