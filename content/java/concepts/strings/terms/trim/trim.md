---
Title: '.trim()'
Description: 'Removes leading and trailing whitespace from a string.'
Subjects:
  - 'Computer Science'
Tags:
  - 'String'
  - 'Methods'
  - 'Whitespace'
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

The `.trim)` method is showcased in the following example:

```java
import java.io.*;

class Example {
  public static void main(String[] args) {
    String greetings = "   Hello, Code Ninja!  ";
    System.out.println(greetings.trim());
  }
}
```

In this example, the .trim() method removes leading and trailing whitespaces from the string greetings.

The output would be:

```shell
Hello, Code Ninja!
```
