---
Title: '.toUpperCase()'
Description: 'Returns the string in uppercase letter'
Subjects:
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.toUpperCase()`** method converts all the lowercase letters of a string into uppercase and returns that upper-cased string.

## Syntax

```pseudo
string.toUpperCase();
```
Where `string` is the string in which all lowercase letters are converted to uppercase.
String toUpperCase() returns a new string, so you will have to assign that to another string.

## Example

The following example showcases the `.toUpperCase()` method:

```java

public class MyClass {
  public static void main(String[] args) {
    
    String text = "Hello World";
    String textUp = text.toUpperCase();
    System.out.println(textUp);
  }
}


```

This will print the following output:

```shell
HELLO WORLD
```