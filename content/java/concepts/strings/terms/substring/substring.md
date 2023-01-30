---
Title: '.substring()'
Description: 'Returns a part of the string specified through starting and an optional ending index. If ending index is not specified, then the substring expands to the end of original string.'
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

The **`.substring()`** method returns a part of the string specified through starting and an optional ending index. If the ending index is not provided, then the substring expands to the end of of original string.

## Syntax

```pseudo
// Returns substring from startIndex to the end of string
string.substring(int startIndex);

// Returns substring from startIndex to (endIndex - 1)
string.substring(int startIndex, int endIndex);
```

## Details

- `.substring()` returns characters from start index up to, but not including, the character at the end index.

- If the end index is omitted `.substring()` returns characters from the start index up through the end of the string.

- If the start and end indexes are equal, `.substring()` returns an empty string.

- If `startIndex` is negative, greater than the `end`, or greater than the length of the sequence then a [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown.

## Example

Using `.substring()` to display characters from a given string.

```java
public class Example {
  public static void main(String[] args) {
    String str = "Java is cool!";
    // printing last 5 characters of str
    System.out.println(str.substring(str.length() - 5));
    // printing first 4 characters of str
    System.out.println(str.substring(0, 5));
  }
}
```

This produces the following output:

```shell
cool!
Java
```
