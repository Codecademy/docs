---
Title: 'Files'
Description: 'Computers use file systems to store and retrieve data. The fstream library, short for file stream, enables working with files in C++. The fstream library has three classes that are used to create, write, and read files: ofstream, ifstream, and fstream.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Files'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

Computers use [file systems](https://www.codecademy.com/resources/docs/general/file-system-structure) to store and retrieve data. Each **file** is an individual container of related information.

The `fstream` library, short for "file stream", enables working with files in C++. To use the `fstream` library in the C++ program, include both the standard `<iostream>` and the `<fstream>` header files in the C++ program:

```cpp
#include <iostream>
#include <fstream>
```

There are three classes included in the `fstream` library, which are used to create, write or read files:

- `ofstream` ("output file stream"): Create files and write to files.
- `ifstream` ("input file stream"): Read from files.
- `fstream`: A combination of `ofstream` and `ifstream` (create, read, and write to files).

## Create and Write to a File

To create a file, use either the `ofstream` or `fstream` class, and specify the name of the file.

To write to the file, use the insertion operator (`<<`). For example:

```cpp
#include <iostream>
#include <fstream>

int main() {
  // Create and open a text file
  std::ofstream MyFile("journal.txt");

  // Write to the file
  MyFile << "Today is the greatest\n";
  MyFile << "Day I've ever known";

  // Close the file
  MyFile.close();
}
```

In the same folder, there should be a new text file called `journal.txt`. There should be two lines of text inside:

```pseudo
Today is the greatest
Day I've ever known
```

## Read a File

To read from a file, use either the `ifstream` or `fstream` class, and the name of the file.

> **Note:** A `while` loop is used together with the `getline()` function (which belongs to the `ifstream` class) to read the file line by line, and to print the content of the file:

```cpp
#include <iostream>
#include <fstream>

int main() {
  // Create a text string, which is used to output the text file
  std::string myText;

  // Read from the text file
  std::ifstream MyReadFile("journal.txt");

  // Output the file line by line
  while (getline (MyReadFile, myText)) {
    std::cout << myText << "\n";
  }

  // Close the file
  MyReadFile.close();
}
```

The output would be:

```shell
Today is the greatest
Day I've ever known
```
