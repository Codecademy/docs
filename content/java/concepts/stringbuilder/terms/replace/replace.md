---
Title: '.replace()'
Description: 'Replaces a substring in a StringBuilder with the specified String.'
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

The **`.replace()`** method replaces a substring in a `StringBuilder` with the specified [`String`](https://www.codecademy.com/resources/docs/java/strings). It returns the `StringBuilder`.

## Syntax

```pseudo
myStringBuilder.replace(start, end, str);
```

Where `start` and `end` are the zero-based indices of the characters being replaced. The last character replaced is at `end` - 1, or the end of the sequence if `end` exceeds the length of the sequence. The characters are removed and the `String` `str` is inserted at `start`, the sequence lengthening if needed. If `start` is negative, greater the `end` or greater than the length of the sequence then a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors) is thrown.

## Example

The following example creates a `StringBuilder` with a specified `String` then uses the `.replace()` method to change its contents:

```java
import java.util.*;

public class Example {
  public static void main(String[] argv)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    str.replace(6,11,"Goodbye");
    System.out.println(str.toString());
  }
}
```

The above example produces the following output:

```shell
Hello World!
Hello Goodbye!
```
