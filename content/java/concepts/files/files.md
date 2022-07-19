---
Title: 'Files'
Description: 'Java provides a number of different classes and methods for utilizing files and the computers file system.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Files'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Java provides a number of different classes and methods for utilizing files and a computer's file system. They include the classes `File`, `FileReader`, and `FileWriter.`

## Accessing a File

Basic accessing of files and directories can be done through the use of the `File` class. 

### Syntax

To use the `File` class, it's necessary to create an object of that class and specify a path/filename.

```pseudo
import java.io.File; 

File myFile = new File(filePath); 
```

Once declared, the `myFile` object can be used to manipulate and gather information about the file or directory specified by `filePath`.

### Methods

The `File` object includes the following methods to manipulate the specified file or directory:

- `canRead()`: Returns `true` if the file is readable.
- `canWrite()`: Returns `true` if the file is writable.
- `createNewFile()`: Creates an empty file. Returns `true` if successful.
- `delete()`: Deletes a file. Can delete directory if it is empty.
- `exists()`: Returns `true` if the file/directory exists.
- `getName()`: Returns the name of the file/directory.
- `getAbsolutePath()`: Returns the full pathname of the file/directory.
- `isDirectory()`: Returns `true` if instance points to a directory.
- `isFile()`: Returns `true` if instance points to a file.
- `length()`: Returns the size of the file in bytes.
- `list()`:	Returns a `String[]` array of the files in the directory.
- `mkdir()`: Creates a directory.

### Example

The following example creates a `File` object, checks if its corresponding file exists, and if not, creates it. Note that the file access is placed within a `try ... catch` block in case the file system throws any [errors](https://www.codecademy.com/resources/docs/java/errors).

```java
import java.io.File;
import java.io.IOException;

public class FileExample {
  public static void main(String[] args) {
    try {
      File myFile = new File("test.txt");
      if (myFile.exists()) {
        System.out.println("File exists: " + myFile.getName());
      } else {
        if (myFile.createNewFile()) {
          System.out.println("File created: " + myFile.getName());
        } else {
          System.out.println("File was not created.");        
        }
      }
    } catch (IOException e) {
      System.out.println("An error was thrown.");
      e.printStackTrace();
    }
  }
}
```

## Writing to a File

It is possile to write to a file using the `FileWriter` class.

### Syntax

To use the `FileWriter` class, it's necessary to create an object of that class and specify a path/filename.

```pseudo
import java.io.FileWriter; 

FileWriter myWriter = new FileWriter(filePath, append); 
```

Once declared, the `myWriter` object can be used to write to the file specified by `filePath`. `append` is an optional boolean specifing if writing will append to the file.

### Methods

The following methods are provided by the `FileWriter`:

- `close()`: Closes the FileWriter. Should be done after all writes are complete.
- `write()`: Writes a string or char sequence to the file.

### Example

The following example writes a string out to a file. Again the file access code is in a `try ... catch` block.

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterExample {
  public static void main(String[] args) {
    try {
      FileWriter myWriter = new FileWriter("test.txt");
      myWriter.write("Hello World!");
      myWriter.close();
    } catch (IOException e) {
      System.out.println("An error was thrown.");
      e.printStackTrace();
    }
  }
}
```

## Reading From a File

It is possible to read data from a file using the `FileReader` class.

### Syntax

To use the `FileReader` class, it's necessary to create an object of that class and specify a path/filename.

```pseudo
import java.io.FileReader; 

FileReader myReader = new FileReader(filePath); 
```

Once declared, the `myReader` object can be used to read characters from the file specified by `filePath`.

### Methods

The `FileReader` class offeres the following methods to read from a file:

- `close()`: Closes the FileReader. Should be done after all reads are complete.
- `read()`: Reads a character from the file, or reads caharacters into a buffer.

### Example

The following example reads all the characters from a file. Again the file access code is in a `try ... catch` block.

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderExample {
  public static void main(String[] args) {
    try {
      FileReader myReader = new FileReader("test.txt");
      int i;
      while ((i = myReader.read()) != -1)
        System.out.print((char)i);
      myReader.close();
    } catch (IOException e) {
      System.out.println("An error was thrown.");
      e.printStackTrace();
    }
  }
}
```
