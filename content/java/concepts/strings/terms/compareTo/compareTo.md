---
Title: '.compareTo()'
Description: 'Compares two strings based on the Unicode value of each character in the strings.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Characters'
  - 'Methods'
  - 'Strings'
  - 'Values'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.compareTo()`** method is a built-in Java method used to compare two strings lexicographically. This means it compares them based on the Unicode value of each character in the strings.

This method is defined in the `java.lang.String` class and implements the `Comparable<String>` interface.

## Syntax

```pseudo
string1.compareTo(string2);
```

In the syntax:

- `string1`: The string on which `.compareTo()` is called.
- `string2`: The string to compare with `string1`.

**Return values:**

- Returns `0` if both strings are equal.
- Returns a positive number if `string1` is lexicographically greater than `string2`.
- Returns a negative number if `string1` is lexicographically less than `string2`.

A way to think about this lexicographical evaluation is noting the Unicode values for these character sets:

| Character Set |  Range   | Example                                |
| :-----------: | :------: | -------------------------------------- |
|   `1` - `9`   | 49 - 57  | `"7".compareTo("3");` -> 55 - 51 = 4   |
|   `A` - `Z`   | 65 - 90  | `"A".compareTo("B");` -> 65 - 66 = -1  |
|   `a` - `z`   | 97 - 122 | `"z".compareTo("w");` -> 122 - 119 = 3 |

> **Note:** The [`.equals()`](https://www.codecademy.com/resources/docs/java/strings/equals) method can be used to compare strings without taking Unicode values into account.

## Example 1: Comparing Equal Strings

This example uses `.compareTo()` to compare `"Codecademy"` to `"Codecademy"`:

```java
class CompareStringsLexicographically {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "Codecademy";

    System.out.println(word1.compareTo(word2));
  }
}
```

Here is the output:

```shell
0
```

## Example 2: First String is Lexicographically Less

This example uses `.compareTo()` to compare `"Codecademy"` to `"codecademy"`:

```java
class CompareStringsLexicographically {
  public static void main(String[] args) {
    String word1 = "Codecademy";
    String word2 = "codecademy";

    System.out.println(word1.compareTo(word2));
  }
}
```

Here is the output:

```shell
-32
```

## Example 3: First String is Lexicographically Greater

This example uses `.compareTo()` to compare `"codecademy"` to `"Codecademy"`:

```java
class CompareLexicographically {
  public static void main(String[] args) {
    String word1 = "codecademy";
    String word2 = "Codecademy";

    System.out.println(word1.compareTo(word2));
  }
}
```

Here is the output:

```shell
32
```

## Frequently Asked Questions

### 1. Is `.compareTo()` case-sensitive?

Yes, it is. Uppercase letters have lower Unicode values than lowercase letters. For example, `"Apple".compareTo("apple")` returns a negative number.

### 2. How does `.compareToIgnoreCase()` differ?

The `.compareToIgnoreCase()` method compares two strings lexicographically but ignores case differences. For example:

```java
"Java".compareToIgnoreCase("java") // Output: 0
```

### 3. Can `.compareTo()` be used for sorting strings?

Yes. You can use `.compareTo()` in sorting algorithms or with data structures like `TreeSet` or `Collections.sort()` to sort strings alphabetically.
