---
Title: '.trim()'
Description: 'Removes leading and trailing whitespace from a string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'String'
  - 'Methods'
  - 'Characters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.trim()`** method removes any leading and trailing whitespace from a string.

## Syntax

```pseudo
string.trim()
```

No parameters are required for the `.trim()` method.

## Example

In the example below, the `.trim()` method removes leading and trailing whitespaces from the string `greetings`.

```java
// Example.java
import java.io.*;

class Example {
  public static void main(String[] args) {
    String greetings = "   Hello, Stranger!  ";
    System.out.println(greetings.trim());
  }
}
```

This will produce the following output:

```shell
Hello, Stranger!
```
