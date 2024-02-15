---
Title: '.reverse()'
Description: 'Returns a modified StringBuilder object with its character sequence rearranged in the opposite order.'
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

The **`.reverse()`** method returns a modified `StringBuilder` object with its character sequence rearranged in the opposite order. This is the most straightforward way to reverse a string in Java.

## Syntax

```pseudo
myStringBuilder.reverse();
```

The `.reverse()` method takes no arguments.

## Example

The following example creates a `StringBuilder` with a specified [`String`](https://www.codecademy.com/resources/docs/java/strings) then uses the `.reverse()` method on it:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    str.reverse();
    System.out.println(str.toString());
  }
}
```

This produces the following output:

```shell
Hello World!
!dlroW olleH
```
