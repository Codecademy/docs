---
Title: '.substring()'
Description: 'Returns a part of the string specified through a starting index and an optional ending index.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Characters'
  - 'Methods'
  - 'Strings'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.substring()`** method in Java returns a portion of a string from a specified starting index to an (optional) ending index. If an ending index is not provided, the substring extends from the starting index to the end of the original string.

This method is commonly used for text processing, data parsing, and string manipulation tasks. It offers two variants that allow the extraction of characters either from a specific starting index or between a range of indices.

## Syntax

```pseudo
string.substring(startIndex);
string.substring(startIndex, endIndex);
```

- `.substring()` returns characters from `startIndex` up to, but does not include, the character at `endIndex`.
- If `endIndex` is omitted, `.substring()` returns characters from `startIndex` to the end of the string.
- If `startIndex` and `endIndex` are equal, `.substring()` returns an empty string.

A [`StringIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/stringindexoutofboundsexception) is thrown if any of the following are true:

- `startIndex` is greater than `endIndex`
- `startIndex` is greater than the length of the original string
- `startIndex` or `endIndex` is negative

## Example 1: Extracting Characters From a Specific Index to the End

This example demonstrates how to extract a substring using `substring(beginIndex)` method, starting from a specific index to the end of the string:

```java
class Main {

  public static void main(String[] args) {

    String text = "Hello, Java!";

    String result = text.substring(7);

    System.out.println("Original string: " + text);

    System.out.println("Substring starting from index 7: " + result);

  }
}
```

This example results in the following output:

```shell
Original string: Hello, Java!
Substring starting from index 7: Java!
```

In this example, `substring(7)` extracts all characters from index 7 (inclusive) to the end of the string.

## Example 2: Extracting Characters Between Two Indices

This example demonstrates how to extract a substring using `substring(beginIndex, endIndex)` method between a specific range of indices:

```java
class Main {

  public static void main(String[] args) {

    String text = "Programming with Java";

    String result = text.substring(0, 11);

    System.out.println("Original string: " + text);

    System.out.println("Substring from index 0 to 11: " + result);

  }
}
```

This example results in the following output:

```shell
Original string: Programming with Java
Substring from index 0 to 11: Programming
```

In this example, `substring(0, 11)` extracts characters from index 0 (inclusive) to index 11 (exclusive).

## Frequently Asked Questions

### 1. Does a substring start at 0 in Java?

Yes, string indexing in Java starts at 0, so the first character of a string is at index 0. When using the `substring()` method, the `beginIndex` parameter follows this zero-based indexing.

### 2. Is a substring in Java inclusive?

The `beginIndex` parameter in the `substring()` method is inclusive, meaning the character at that index will be included in the result. However, the `endIndex` parameter is exclusive, meaning the character at that index will not be included in the result.

### 3. Is an empty string a substring?

Yes, an empty string is a valid substring in Java. You can get an empty string by:

- Using the same value for both `beginIndex` and `endIndex` in `substring(beginIndex, endIndex)`
- Using `substring(str.length())`, which returns an empty string since it starts at the end of the string
