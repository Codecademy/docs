---
Title: '.length()'
Description: 'Returns the number of characters currently in the StringBuilder.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.length()`** method returns the number of characters currently in the `StringBuilder`, whereas [`.capacity()`](https://www.codecademy.com/resources/docs/java/stringbuilder/capacity) returns the number of spaces available for characters in the `StringBuilder`.

## Syntax

```pseudo
myStringBuilder.length()
```

The `.length()` method takes no arguments.

## Example

The following example creates a `StringBuilder` with a specified [`String`](https://www.codecademy.com/resources/docs/java/strings) then displays the `.length()` of the `StringBuilder` before and after using the [`.delete()`](https://www.codecademy.com/resources/docs/java/stringbuilder/delete) method to change its contents:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    System.out.println(str.length());
    str.delete(0,6);
    System.out.println(str.toString());
    System.out.println(str.length());
  }
}
```

This produces the following output:

```shell
Hello World!
12
World!
6
```
