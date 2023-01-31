---
Title: '.substring()'
Description: 'Returns a part of the string specified through a starting index and an optional ending index.'
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

The **`.substring()`** method returns a part of the string specified through a starting index and an optional ending index. If the ending index is not provided, then the substring will run from the starting index to the end of the original string.

## Syntax

```pseudo
string.substring(startIndex);
string.substring(startIndex, endIndex);
```

- `.substring()` returns characters from start index up to, but not including, the character at the end index.

- If the end index is omitted `.substring()` returns characters from the start index to the end of the string.

- If the start and end indexes are equal, `.substring()` returns an empty string.

- If `startIndex` is greater than the `endIndex`, greater than the length of the sequence, or if either index is negative then a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown.

## Example

The following example uses `.substring()` to display a subset of characters from a given string.

```java
// Example.java
public class Example {
  public static void main(String[] args) {
    String blurb = "Java is cool!";
    // Printing last 5 characters of blurb
    System.out.println(blurb.substring(blurb.length() - 5));
    // Printing first 4 characters of blurb
    System.out.println(blurb.substring(0, 5));
  }
}
```

This produces the following output:

```shell
cool!
Java
```
