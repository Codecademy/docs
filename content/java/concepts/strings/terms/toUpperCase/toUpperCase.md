---
Title: '.toUpperCase()'
Description: 'Returns a given string in all uppercase letters'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.toUpperCase()`** method converts all lowercase letters of a string to uppercase and returns a new string.

## Syntax

```pseudo
string.toUpperCase();
```

Where `string` is the string in which all lowercase letters are converted to uppercase.
The `.toUpperCase()` method returns a new string consisting of the upper case form of the letters in the original string. To use the new upper case string, the returned string must be assigned to a variable.

## Example

The following example applies the `.toUpperCase()` method to the given text:

```java
// MyClass.java
public class MyClass {
  public static void main(String[] args) {

    String text = "Hello World";
    String textUp = text.toUpperCase();
    System.out.println(text);
    System.out.println(textUp);
  }
}


```

This will print the following output:

```shell
Hello World
HELLO WORLD
```
