---
Title: '.lastIndexOf()'
Description: 'Returns the index of the last (rightmost) occurrence of a substring in the StringBuilder.'
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

The **`.lastIndexOf()`** method returns the index of the last (rightmost) occurrence of a substring in the `StringBuilder`. It returns `-1` if the substring is not found.

## Syntax

```pseudo
myStringBuilder.lastIndexOf(substring);
```

The argument `substring` is the [`String`](https://www.codecademy.com/resources/docs/java/strings) being matched.

```pseudo
myStringBuilder.lastIndexOf(substring, index);
```

If the optional `int` `index` is provided, `.lastIndexOf()` will return the last occurrence of `substring` occurring prior to that index in the `StringBuilder`.

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

The above example results in the following output:

```shell
Hello World!
7
```
