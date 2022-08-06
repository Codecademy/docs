---
Title: '.substring()'
Description: 'Returns a String object representing a substring of the character sequence currently in the StringBuilder.'
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

The **`.substring()`** method returns a [String](https://www.codecademy.com/resources/docs/java/strings) object representing a substring of the character sequence currently in the `StringBuilder`.

## Syntax

```pseudo
myStringBuilder.substring(start, end);
```

The `.substring()` method will return the substring starting at the zero-indexed `int` `start` index to the character specified at index `end` - 1. If the `int` `end` is omitted, the substring will extend from `start` to the end of the sequence. If `start` or `end` is negative, greater than the length of the `StringBuilder`, or `start` is greater than `end`, a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors) is thrown.

## Example

The following example creates a `StringBuilder` with a specified `String`, and displays a substring from it.

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    String s1 = str.substring(6,11);
    System.out.println(s1);
  }
}
```

The above example produces the following output:

```shell
Hello World!
World
```
