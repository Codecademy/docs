---
Title: 'PrintWriter'
Description: 'Enables users to write text in an output stream.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Data'
  - 'Files'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`PrintWriter`** is a [class](https://www.codecademy.com/resources/docs/java/classes) in Java that is used for writing text in readable form. It is a part of the `java.io` package and provides convenient [methods](https://www.codecademy.com/resources/docs/java/methods) for writing different [types of data](https://www.codecademy.com/resources/docs/java/data-types) (like [strings](https://www.codecademy.com/resources/docs/java/strings), numbers, or objects) to a [file](https://www.codecademy.com/resources/docs/java/files) or another [output](https://www.codecademy.com/resources/docs/java/output) stream in a human-readable, formatted way.

## Syntax

```pseudo
PrintWriter writer = new PrintWriter(new File(file_name));
writer.println(text);
writer.close();
```

- `writer`: The `PrintWriter` to be used for writing text.
- `file_name`: The file to which the text is to be written. If it does not exist, then a new file is created.
- `text`: The text to be written to the file.

## Example

The below example shows how to use the `PrintWriter` class:

```java
import java.io.File;
import java.io.PrintWriter;
import java.io.FileNotFoundException;

public class Example {
  public static void main(String[] args) {
    try {
      PrintWriter writer = new PrintWriter(new File("output.txt"));
      writer.println("Hello, world!");
      writer.close();
    } catch (FileNotFoundException e) {
      e.printStackTrace();
    }
  }
}
```

> Note: The usage of the `try-catch` method while performing file operations using the `PrintWriter` or any other class is essential to handle potential [errors](https://www.codecademy.com/resources/docs/java/errors) gracefully, ensure resources are properly managed, and provide a better user experience.
