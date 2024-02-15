---
Title: '.delete()'
Description: 'Removes a substring from the contents of a StringBuilder and returns the modified object.'
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

The **`.delete()`** method removes a substring from the contents of a `StringBuilder` and returns the modified object.

## Syntax

```pseudo
myStringbuilder.delete(start, end);
```

The `int` arguments `start` and `end` specify the zero-based start and end character indices of the substring to delete. The last character deleted is at `end` - 1. If `end` is past the end of the sequence stored in the `StringBuilder`, characters are deleted through the end of the sequence. If `start` is equal to `end`, no changes are made. If `start` is greater than `end`, past the end of the sequence in the `StringBuilder`, or is negative, a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown.

## Example

The following example creates a `StringBuilder` with a specified `String` and then uses the `.delete()` method to change its contents:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    str.delete(0,6);
    System.out.println(str.toString());
  }
}
```

This produces the following output:

```shell
Hello World!
World!
```
