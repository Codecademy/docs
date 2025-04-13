---
Title: '.append()'
Description: 'Appends the string representation of its argument.'
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

The **`.append()`** method appends the string value of its argument to the `StringBuilder`. It returns a reference to the `StringBuilder` object.

## Syntax

```pseudo
myStringBuilder.append(argument);
```

If `argument` is a [`String`](https://www.codecademy.com/resources/docs/java/strings), a `CharSequence`\*, or a `char[]` [array](https://www.codecademy.com/resources/docs/java/arrays)\*\*, the characters within are appended to the end of the `StringBuilder` object (its capacity is increased by the number of characters appended). For other types, it behaves as if `argument` was first converted to a string by using `String.valueOf(argument)`.

\* For `CharSequence` arguments, `.append()` can have two additional optional `int` arguments:

```pseudo
myStringBuilder.append(argument, start, end)
```

In this case, `.append()` will append the subsequence defined by the start and end points specified by `start` and `end`.

\*\* For `char[]` arguments, `.append()` can have two additional optional `int` arguments:

```pseudo
myStringBuilder.append(index, str, start, len)
```

In this case, `.append()` will append the subsequence defined by the start point and length specified by `start` and `len`.

## Example

The following example creates a `StringBuilder` with a specified `String` and then uses the `.append()` method to change it:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello");
    System.out.println(str.toString());
    str.append(" World!");
    System.out.println(str.toString());
  }
}
```

This produces the following output:

```shell
Hello
Hello World!
```
