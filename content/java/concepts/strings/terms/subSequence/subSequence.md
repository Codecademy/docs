---
Title: '.subSequence()'
Description: 'Returns a character sequence from a string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`.subSquence()`** is a `String` method that returns a new character sequence that is a substring of a given string.

## Syntax

```pseudo
str.subSequence(int startIndex, int endIndex)
```

The `.subSequence()` method will return a substring of the `str` string from `startIndex` to `endIndex` - 1.

The `.subSquence()` method takes two parameters:

- `startIndex` - the starting index (inclusive).
- `endIndex` - the ending index (exclusive).

Both parameters must be integers.

## Example

The following example will return a substring of the `str` string.

```java
  class Main {
    public static void main(String[] args) {
      String str = "Java Programming";

      System.out.println(str.subSequence(0, 4));
    }
}
```

This will print:

```shell
Java
```
