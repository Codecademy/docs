---
Title: '.compareTo()'
Description: 'Compares two strings lexicographically based on the Unicode value of each character in the string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Compares two strings lexicographically based on the Unicode value of each character in the string.

A value of `0` will be returned if equal to comparison, less than `0` if the string is lexicographically less, and greater than `0` if the string is lexicographically greater.

## Syntax

```java
string.compareTo(String str)
```

- `str` (required): A string value, the other string to compare to.

**Note:** Use `.compareToIgnoreCase()` if you want to compare lexicographically, while not comparing the upper and lower case differences. Use `.equals()` if you want to compare strings without taking into account Unicode values.

## Example 1

Compare `"Codecademy"` to `"Codecademy"`:

```java
class CompareStringsLexicographically {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "Codecademy";

    System.out.println(word1.compareTo(word2));
    // Output: 0
  }
}
```

## Example 2

Compare `"Codecademy"` to `"codecademy"`:

```java
class CompareStringsLexicographically {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "codecademy";

    System.out.println(word1.compareTo(word2));
    // Output: -32
  }
}
```

## Example 3

Compare `"codecademy"` to `"Codecademy"`:

```java
class CompareLexicographically {
  public static void main(String[] args) {
    String word1 = "codecademy";
    String word2 = "Codecademy";

    System.out.println(word1.compareTo(word2));
    // Output: 32
  }
}
```
