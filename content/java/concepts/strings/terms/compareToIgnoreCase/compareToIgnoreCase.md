---
Title: ".compareToIgnoreCase()"
Description: "Compares two strings lexicographically based on the Unicode value of each character in the string while ignoring lower case and upper case differences."
Subjects:
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
CatalogContent:
  - "learn-java"
  - "paths/computer-science"
---



Compares two strings lexicographically based on the Unicode value of each character in the string while ignoring lower case and upper case differences. 

A value of `0` will be returned if equal to comparison, less than `0` if the string is lexicographically less, and greater than `0` if the string is lexicographically greater.

## Syntax

```java
string.compareToIgnoreCase(String str)
```

- `str` (required): A string value, the other string to compare to.

**Note:** Use `.compareTo()` if you want to compare while not ignoring the upper and lower case differences. Use `.equals()` if you want to compare strings without taking into account Unicode values.

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
