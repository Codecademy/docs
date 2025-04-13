---
Title: '.codePointBefore()'
Description: 'Returns the Unicode value before the given index in the string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns the Unicode value before the given index in the string.

## Syntax

```java
string.codePointBefore(index)
```

- `index` (required): An `int` value that represents the Unicode value you want to retrieve for the element before the given index.

## Example 1

Print the Unicode value of the first character, `"H"` at the first index:

```java
class FirstCharacterUnicodeValue {
  public static void main(String[] args) {
    String greeting = "Hello World";

    System.out.println(greeting.codePointBefore(1));
    // Output: 72
  }
}
```
