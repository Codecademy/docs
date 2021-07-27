---
Title: ".codePointAt()"
Subjects:
  - "Computer Science"
Tags:
  - "Strings"
  - "Methods"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-java"
  - "https://www.codecademy.com/learn/paths/computer-science"
---

## Definition

Returns the Unicode value at the given index in the string.

## Syntax

```java
string.codePointAt(index)
```

- `index` (required): `int` value that represents the index of the Unicode value you want to retrieve.

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
