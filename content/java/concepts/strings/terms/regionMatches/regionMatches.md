---
Title: '.regionMatches()'
Description: 'Tests if two string regions are equal.'
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

The **`.regionMatches()`** method tests if two string regions are equal. It compares a substring in the given `String` to another substring in the argument passed.

## Syntax

```pseudo
string.regionMatches(ignoreCase, toffset, other, ooffset, len);
```

Where:

- `ignoreCase` is a boolean value that specifies whether the method should be case-sensitive or not.
- `toffset` is an integer representing the index of the substring in the first string to be compared.
- `other` is the string argument to be compared.
- `ooffset` is an integer representing the index of the substring in the second string to be compared.
- `len` is an integer representing the number of characters to be compared in both strings.

> **Note:** For the method to be case-sensitive, `ignoreCase` can also be omitted.

## Example

The example below compares a substring in variables `S1` and `S2`:

```java
// Example.java
public class Example{

  public static void main(String[] args){

    String S1 = new String("This is an example");
    String S2 = new String("is");
    System.out.print("Result of comparing S1 with S2: ");
    System.out.println(S1.regionMatches(true, 5, S2, 0, 2));

  }

}
```

This outputs the following:

```shell
Result of comparing S1 with S2: true
```
