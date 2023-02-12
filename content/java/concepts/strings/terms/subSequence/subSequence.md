---
Title: '.subSequence()'
Description: 'Returns a character sequence from a string'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`.subSquence()`** is a built-in method that returns a new character sequence that is a subsequence of the user-specified string.

## Syntax

```pseudo
str.subSequence(int startIndex, int endIndex)
```
The `subSequence()` method will return a subsequence of the `str` string that starts with the character at the position `startIndex` and ends with the character at the position `endIndex -1`

The `.subSquence()` method takes two parameters:
  - `startIndex` - the starting index (inclusive);
  - `endIndex` - the ending index (exclusive).

  Both parameters must be `integers`.
.
## Example

The following example will return a subsequence of the `str` string.

```java
class Main {
    public static void main(String[] args) {
        String str = "Java Programming";

        System.out.printlm(str.subsequence(0, 4));
    }
}
```

This will print:

```
Java
```