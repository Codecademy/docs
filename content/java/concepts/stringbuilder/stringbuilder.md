---
Title: 'StringBuilder'
Description: 'The StringBuilder class in Java represents a String-like character sequence that is mutable.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Data Types'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`StringBuilder`** class in Java represents a [`String`](https://www.codecademy.com/resources/docs/java/strings)-like character sequence that is mutable, whereas objects of the `String` class are immutable. This provides an alternative to the `String` class when it's a requirement to change a character sequence once it is defined.

It is similar to another class, `StringBuffer`, but it is faster in most circumstances. The difference between `StringBuilder` and `StringBuffer` is that `StringBuilder` is not thread-safe. `StringBuilder` offers no guarantee of synchronization and should not be used across multiple [threads](https://www.codecademy.com/resources/docs/java/threading).

## Syntax

```pseudo
StringBuilder s1 = new StringBuilder();

StringBuilder s2 = new StringBuilder(capacity);

StringBuilder s3 = new StringBuilder(sequence);
```

A `StringBuilder` can be created in the following ways:

- Calling the [constructor](https://www.codecademy.com/resources/docs/java/constructors) with no arguments creates a `StringBuilder` with no contents and a capacity of 16 characters.
- Calling the constructor with the `int` argument, `capacity`, creates a `StringBuilder` with no contents and a capacity of `capacity` characters.
- Calling the constructor with a `sequence` argument that is either a `String` or a `CharSequence` creates a `StringBuilder` with contents and capacity equal to the specified `String` or `CharSequence`.

## Example

The following example creates a `StringBuilder` with a specified `String` and then changes it by appending another `String`:

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

Below is a list of methods used by the `StringBuilder` class:
