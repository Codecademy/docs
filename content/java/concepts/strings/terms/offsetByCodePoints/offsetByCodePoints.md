---
Title: '.offsetByCodePoints()'
Description: 'Returns the new index of a character in a string after applying the specified code point offset.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`offsetByCodePoints()`** function is used to calculate the index of a character in a string by specifying a starting index and a code point offset. It returns the new index after applying the offset limit.

It is useful when working with strings that contain characters with multiple code points, such as emojis or characters from non-Latin scripts. This function helps accurately navigate and manipulate the index based on code points, allowing you to access specific characters or portions of the string.

## Syntax

```pseudo
Strings.offsetByCodePoints(startIndex, offsetIndex)
```

- `startIndex` (int): The starting index in the string from which the offset is applied.
- `offsetIndex` (int): The offset, in terms of code points, by which the index is adjusted. Positive values move the index forward, and negative values move it backward.

## Example 1

In this example, the code point offset is set to `7`, which means the new index will be `7`. This results in the new index pointing to the character `'W'` in the string.

```java
class OffsetByCodePoints {
  public static void main(String[] args) {
  String str = "Hello, World!";
  int startIndex = 0;
  int offsetIndex = 7;

  int newIndex = str.offsetByCodePoints(startIndex, offsetIndex);
  System.out.println("New Index: " + newIndex);
  }
}
```

The code above results in the following output:

```
New Index: 7
```

## Example 2

In this example, the string str contains the text `"こんにちは、世界！"`. We specify the starting index as `0` and the code point offset as `5`. The `**offsetByCodePoints()**` method returns the new index after applying the offset, which is `5` in this case. It means that the character at index `5` is the desired character.

```java
class OffsetByCodePoints {
  public static void main(String[] args) {
    String str = "こんにちは、世界！";
    int startIndex = 0;
    int offsetIndex = 5;

    int newIndex = str.offsetByCodePoints(startIndex, offsetIndex);
    System.out.println("New Index: " + newIndex);
  }
}
```

The code above results in the following output:

```
New Index: 5
```
