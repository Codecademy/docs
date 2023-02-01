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

The **`.toUpperCase()`** method converts all the lowercase letters of a string to uppercase and returns that new string.

## Syntax

```pseudo
string.toUpperCase();
```
Where `string` is the string in which all lowercase letters are converted to uppercase.
The `.toUpperCase()` method returns a new string, so it must be assigned to a variable in order to reuse that new value.

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