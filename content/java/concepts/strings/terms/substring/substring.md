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

The **`.substring()`** method returns a part of the string from some starting index to an (optional) ending index. If an ending index is not provided, the substring will be from the starting index to the end of the original string.

## Syntax

```pseudo
string.substring(startIndex);
string.substring(startIndex, endIndex);
```

`.substring()` returns characters from `startIndex` up to, but not including, the character at `endIndex`.

If `endIndex` is omitted, `.substring()` returns characters from `startIndex` to the end of the string.

If `startIndex` and `endIndex` are equal, `.substring()` returns an empty string.

A [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown if any of the following are true:

- `startIndex` is greater than `endIndex`
- `startIndex` is greater than the length of the original string
- `startIndex` or `endIndex` is negative

## Example

The following example uses `.substring()` to display a substring of a given string.

```java
// Example.java
public class Example {
  public static void main(String[] args) {
    String blurb = "Java is cool!";
    // Printing last 5 characters of blurb
    System.out.println(blurb.substring(blurb.length() - 5));
    // Printing first 4 characters of blurb
    System.out.println(blurb.substring(0, 4));
  }
}
```

This produces the following output:

```shell
cool!
Java
```
