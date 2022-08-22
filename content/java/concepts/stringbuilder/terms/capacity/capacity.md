---
Title: '.capacity()'
Description: 'Returns the current space available for characters in the StringBuilder.'
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

The **`.capacity()`** method returns the current space available for characters in the `StringBuilder`, whereas [`.length()`](https://www.codecademy.com/resources/docs/java/stringbuilder/length) returns the number of characters actually in use.

## Syntax

```pseudo
myStringBuilder.capacity()
```

The `.capacity()` method takes no arguments.

## Example

The following example creates a `StringBuilder` with a specified [`String`](https://www.codecademy.com/resources/docs/java/strings), then displays the capacity of the `StringBuilder` before and after using the [`.delete()`](https://www.codecademy.com/resources/docs/java/stringbuilder/delete) method to change its contents:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    System.out.println(str.capacity());
    str.delete(0,6);
    System.out.println(str.toString());
    System.out.println(str.capacity());
  }
}
```

This produces the following output:

```shell
Hello World!
28
World!
28
```
