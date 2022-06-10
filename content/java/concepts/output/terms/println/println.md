---
Title: '.println()'
Description: 'Prints its argument to the console followed by a new line.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Output'
  - 'Strings'
  - 'Print'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `.println()` method prints its argument to the console follwed by a new line. It is probably the most common method of displaying output to the console.

## Syntax

```pseudo
System.out.println(argument)
```

`argument` will be displayed on the console, followed by a new line.

## Example

The following example prints some content to the console.

```java
import java.io.*;

public class printExample {
  public static void main(String[] args)
    {
      System.out.println("Output");
      System.out.println(123.456);
      System.out.println(true);
    }
  }
```

This results in the output:

```shell
Output
123.456
true
```
