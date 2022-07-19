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
- `createNewFile()`: Creates an empty file.
- `delete()`: Deletes a file. Can delete directory if it is empty.
- `exists()`: Returns `true` if the file/directory exists.
- `getName()`: Returns the name of the file/directory.
- `getAbsolutePath()`: Returns the full pathname of the file/directory.
- `isDirectory()`: Returns `true` if instance points to a directory.
- `isFile()`: Returns `true` if instance points to a file.
- `length()`: Returns the size of the file in bytes.
- `list()`:	Returns a `String[]` array of the files in the directory.
- `mkdir()`: Creates a directory.




