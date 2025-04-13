---
Title: '.codePointAt()'
Description: 'Returns the Unicode value at the given index in the string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Returns the Unicode value at the given index in the string.

## Syntax

```java
string.codePointAt(int index)
```

- `index` (required): Integer value that represents the index of the Unicode value you want to retrieve.

## Example 1

Print the Unicode value of the first character in the string `"Hi"`:

```java
String greeting = "Hi";

System.out.println(greeting.codePointAt(0));
// Output: 72
```

## Example 2

Here's a whole Java program that prints the Unicode value of the first character in the string `"Hello World"`:

```java
class FirstCharacterUnicodeValue {
  public static void main(String[] args) {
    String greeting = "Hello World";

    System.out.println(greeting.codePointAt(0));
    // Output: 72
  }
}
```
