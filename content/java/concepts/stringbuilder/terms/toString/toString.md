---
Title: '.toString()'
Description: 'Returns a String representation of the character sequence currently in a given StringBuilder.'
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

The **`.toString()`** method returns a [`String`](https://www.codecademy.com/resources/docs/java/strings) representation of the character sequence currently in a given `StringBuilder`.

## Syntax

```pseudo
myStringBuilder.toString();
```

The `.toString()` method takes no arguments.

## Example

The following example creates a `StringBuilder` with a specified `String`, manipulates it, then uses `.toString()` to print the results:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    String s1 = str.toString();
    System.out.println(s1);
    str.reverse();
    String s2 = str.toString();
    System.out.println(s2);
  }
}
```

This produces the following output:

```shell
Hello World!
!dlroW olleH
```
