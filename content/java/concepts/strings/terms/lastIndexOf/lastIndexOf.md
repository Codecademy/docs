---
Title: '.lastIndexOf()'
Description: 'Searches a string for a specified value and returns the position of the match.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.lastIndexOf()`** method searches a string for a specified value and returns the position of the match. It searches the string, from the end to the beginning, and returns the index of the specified value. In other words, it returns the index of the last occurrence of the specified value. Otherwise if the value is not found, it returns -1.

## Syntax

```pseudo
string.lastIndexOf(searchValue, fromIndex)
```

- `searchValue`: The character or sequence of characters being searched for.
- `fromIndex` (optional): The starting index to search from in the `string`.

## Example

This example below searches the string `sentence` for the value `'the'` and returns the index of the last occurrence:

```java
class Main {
  public static void main(String[] args) {
    String sentence = "The quick brown fox jumps over the lazy dog";

    int lastPos = sentence.lastIndexOf("the");

    System.out.println(lastPos);
  }
}
```

This will output the following:

```shell
31
```
