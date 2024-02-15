---
Title: '.insert()'
Description: 'Places a sequence of characters into a StringBuilder and returns a reference to the object.'
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

The **`.insert()`** method places a sequence of characters into the `StringBuilder` and returns a reference to the object.

## Syntax

```pseudo
myStringBuilder.insert(index, str);
```

The `index` argument is the zero-based index where the characters are to be inserted. If `str` is a [`String`](https://www.codecademy.com/resources/docs/java/strings), a `CharSequence`\*, or a `char[]` [array](https://www.codecademy.com/resources/docs/java/arrays)\*\*, the characters contained are inserted at `index` and its capacity is increased by the number of characters inserted. For other types, it behaves as if `str` was first converted to a string by using `String.valueOf(str)`. If `index` is negative or greater than the length of the sequence, then a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown.

\* For `CharSequence` arguments, `.insert()` can have two additional optional `int` arguments:

```pseudo
myStringBuilder.insert(index, str, start, end)
```

In this case, `.insert()` will insert the subsequence defined by the start and end points specified by `start` and `end`.

\*\* For `char[]` arguments, `.insert()` can have two additional optional `int` arguments:

```pseudo
myStringBuilder.insert(index, str, start, len)
```

In this case, `.insert()` will insert the subsequence defined by the start point and length specified by `start` and `len`.

## Example

The following example creates a `StringBuilder` with a specified `String` and then uses the `.insert()` method to change it:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    str.insert(6, "to the ");
    System.out.println(str.toString());
  }
}
```

This produces the following output:

```shell
Hello World!
Hello to the World!
```
