---
Title: '.getChars()'
Description: ' A java strings method that copies characters from the given string into the destination character array.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **.getChars()** string method copies a set of characters from an array. The method then copies the characters into character array.

## **Synthax**

```pseudo
str.getChars(12, 25, destArray, 0);
```

'str' is the string that is being converted to a new array 

## **Example

In the following example, 'getChars()' converts a 'string' into a new array. 

```cs
using System;
```

string originalString = "Welcome to Texas"

console.WriteLine.=(originalString.getChars(11, 15, newArray 0)); //prints Texas

## **Codebyte Example

In the following example, 'getChar()' converts an array into a new shorter array. It then prints the new array in the consule. 

```codebyte/csharp

class main {
  static void main(Strings args [])
  {
    string str = "Welcome to Texas";
    char [] = new chars[5];
    try {
      str.getChars(0, 5, newArray, 0)
      System.out.println(newArray);
    }
    { catch (Exception ex) {
      System.out.pringln(ex)
    }
    }
  }

}
```
