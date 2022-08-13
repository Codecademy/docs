---
Title: '.indexOf()'
Description: 'Returns the index of the first occurrence of a substring in the StringBuilder.'
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
myStringBuilder.indexOf(substring);
```

The argument `substring` is the [`String`](https://www.codecademy.com/resources/docs/java/strings) being matched.

```pseudo
myStringBuilder.indexOf(substring, index);
```

If the optional `int` `index` is provided, `.indexOf()` will return the first occurrence of `substring` occurring after that index in the `StringBuilder`.

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

The above example results in the following output:

```shell
Hello World!
6
```
