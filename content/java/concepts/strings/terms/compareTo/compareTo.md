---
Title: '.compareTo()'
Description: 'Returns 0 if two strings are equal in Unicode value. Otherwise, the lexicographical difference is returned.'
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

The **`.compareTo()`** method compares two strings lexicographically based on the Unicode value of each character in the string.

## Syntax

```pseudo
stringA.compareTo(stringB);
```

Both `stringA` and `stringB` are required in order for the `.compareTo()` method to work properly.

A value of `0` will be returned if the strings are equal. Otherwise, the following will happen:

- A number less than `0` is returned if `stringA` is lexicographically less than `stringB`.
- A number greater than `0` is returned if `stringA` is lexicographically more than `stringB`.

A way to think about this lexicographical evaluation is noting the Unicode values for the following character sets:

| Character Set |  Range   | Example                                |
| :-----------: | :------: | -------------------------------------- |
|   `1` - `9`   | 49 - 57  | `"7".compareTo("3");` -> 55 - 51 = 4   |
|   `A` - `Z`   | 65 - 90  | `"A".compareTo("B");` -> 65 - 66 = -1  |
|   `a` - `z`   | 97 - 122 | `"z".compareTo("w");` -> 122 - 119 = 3 |

**Note:** This method is case-sensitive. The [`.compareToIgnoreCase()`](https://www.codecademy.com/resources/docs/java/strings/compareToIgnoreCase) can be used to ignore upper and lower case differences. Alternatively, the [`.equals()`](https://www.codecademy.com/resources/docs/java/strings/equals) method can used to compare strings without taking Unicode values into account.

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
