---
Title: 'PrintWriter'
Description: 'Used to write text in an output stream.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Files'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`PrintWriter`** is a class in Java used to write text in readable form. It is part of the `java.io` package and provides convenient methods for writing different types of data (like strings, numbers, or objects) to a file or another output stream in a human-readable, formatted way.

## Syntax

```pseudo
PrintWriter writer = new PrintWriter(new File(file_name));
writer.println(text);
writer.close();
```

`file_name`: File used to write text. If it does not exist then a new file will be created.
`text`: Text that will be stored in the file.

## Example

The below example shows how to use `PrintWriter` method:

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

> **Note:** Using try-catch when working with file operations like FileWriter is essential to handle potential errors gracefully, ensure resources are properly managed, and provide a better user experience
