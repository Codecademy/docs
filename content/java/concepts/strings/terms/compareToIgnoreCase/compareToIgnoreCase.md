---
Title: '.compareToIgnoreCase()'
Description: 'Returns 0 if two strings are equal in Unicode value, regardless of character case. Otherwise, the lexicographical difference is returned.'
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

The **`compareToIgnoreCase()`** method compares two strings lexicographically based on the Unicode value of each character in the string while ignoring lower case and upper case differences.

A value of `0` will be returned if equal to comparison, less than `0` if the string is lexicographically less, and greater than `0` if the string is lexicographically greater.

## Syntax

```pseudo
stringA.compareToIgnoreCase(stringB);
```

Both `stringA` and `stringB` are required in order for the `.compareTo()` method to work properly.

A value of `0` will be returned if the strings are equal. Otherwise, the following will happen:

- A number less than `0` is returned if `stringA` is lexicographically less than `stringB`.
- A number greater than `0` is returned if `stringA` is lexicographically more than `stringB`.

Through the `CASE_INSENSITIVE_ORDER` field of the `String` class, upper and lower case characters effectively hold the same Unicode value (e.g., "a" - "A" = 0).

**Note:** To take case into account, the [`.compareTo()`](https://www.codecademy.com/resources/docs/java/strings/compareTo) method should be used. Alternatively, the [`.equals()`](https://www.codecademy.com/resources/docs/java/strings/equals) method can be used to compare strings without taking Unicode values into account.

## Example 1

Compare `"Codecademy"` to `"Codecademy"`:

```java
class CompareStringsIgnoreCase {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "Codecademy";

    System.out.println(word1.compareToIgnoreCase(word2));
    // Output: 0
  }
}
```

## Example 2

Compare `"Codecademy"` to `"codecademy"`:

```java
class CompareStringsIgnoreCase {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "codecademy";

    System.out.println(word1.compareToIgnoreCase(word2));
    // Output: 0
  }
}
```
