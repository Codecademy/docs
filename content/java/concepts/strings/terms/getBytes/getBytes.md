---
Title: '.getBytes()'
Description: 'Encodes the string into an array of bytes that represent the characters in the string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Strings'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.getBytes()`** method encodes a string into an array of bytes that represents the characters in the string.

## Syntax

```pseudo
byte[] byteArray = str.getBytes();
```

- `byteArray` is a byte array that stores the byte representation of the string.
- `str` is the string being converted to bytes.

## Example

The example below demonstrates the use of the `.getBytes()` method:

```java
// Example.java
import java.util.*;

public class Example {
  public static void main(String[] args) {
    String myStr = "codeacademy.com";
    byte[] myByteArray = str.getBytes();
    System.out.println(Arrays.toString(byteArray));
  }
}
```

This outputs the following:

```shell
[99, 111, 100, 101, 97, 99, 97, 100, 101, 109, 121, 46, 99, 111, 109]
```
