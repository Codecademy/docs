---
Title: '.indexOf()'
Description: 'Returns the index of the first occurrence of a substring in the StringBuilder or -1 if none are found.'
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

The **`.indexOf()`** method returns the index of the first occurrence of a substring in a `StringBuilder`. If the substring is not found, `-1` is returned.

## Syntax

```pseudo
myStringBuilder.indexOf(substring, index);
```

The argument `substring` is of type [`String`](https://www.codecademy.com/resources/docs/java/strings).

The `index` is an `int` argument that is optional. If provided, `.indexOf()` returns the first occurrence of `substring` after that index in the `StringBuilder`.

## Example

The following example creates a `StringBuilder` with a specified string then uses `.indexOf()` to find the index of a particular substring:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    System.out.println(str.indexOf("World"));
  }
}
```

This produces the following output:

```shell
Hello World!
6
```
