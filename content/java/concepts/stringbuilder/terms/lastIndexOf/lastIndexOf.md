---
Title: '.lastIndexOf()'
Description: 'Returns the index of the last (rightmost) occurrence of a substring in the StringBuilder or -1 if no substring is found.'
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

The **`.lastIndexOf()`** method returns the index of the last (rightmost) occurrence of a substring in the `StringBuilder`. If a substring is not found, `-1` is returned.

## Syntax

```pseudo
myStringBuilder.lastIndexOf(substring, index);
```

The argument `substring` is the [`String`](https://www.codecademy.com/resources/docs/java/strings) being matched.

The `index` is an `int` argument that is optional. If provided, `.lastIndexOf()` returns the last occurrence of `substring` prior to that index in the `StringBuilder`.

## Example

The following example creates a `StringBuilder` with a specified string and then uses `.lastIndexOf()` to find the final occurrence of a particular character:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    System.out.println(str.lastIndexOf("o"));
  }
}
```

This produces the following output:

```shell
Hello World!
7
```
