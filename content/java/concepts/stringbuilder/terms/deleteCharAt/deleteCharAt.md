---
Title: '.deleteCharAt()'
Description: 'Removes the character at the specified index from the contents of a StringBuilder and returns the modified object.'
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

The **`.deleteCharAt()`** method removes the character at the specified index from the contents of a `StringBuilder` and returns the modified object.

## Syntax

```pseudo
myStringbuilder.deleteCharAt(index);
```

The `int` argument `index` specifies the zero-based index of the character to delete. The sequence is shortened by one character. If `index` is negative or greater than the length of the sequence, a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown.

## Example

The following example creates a `StringBuilder` with a specified `String` then uses the `.deleteCharAt()` method to change its contents:

```java
import java.util.*;

public class Example {
  public static void main(String[] args)
  {
    StringBuilder str = new StringBuilder("Hello World!");
    System.out.println(str.toString());
    str.deleteCharAt(11);
    System.out.println(str.toString());
  }
}
```

This produces the following output:

```shell
Hello World!
Hello World
```
