---
Title: "Files"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags: 
  - "Files"
CatalogContent:
  - "learn-c-plus-plus"
  - "paths/computer-science"
---

Computers use file systems to store and retrieve data. Each file is an individual container of related information.

The `fstream` library allows us to work with files in C++. To use the `fstream` library in the C++ program, include both the standard `<iostream>` and the `<fstream>` header files in the C++ program:

```cpp
#include <iostream>
#include <fstream>
```

There are three classes included in the `fstream` library, which are used to create, write or read files:

- `ofstream`: Create files and write to files.
- `ifstream`: Read from files.
- `fstream`: A combination of `ofstream` and `ifstream` (create, read, and write to files).

## Create and Write To a File

To create a file, use either the `ofstream` or `fstream` class, and specify the name of the file.

To write to the file, use the insertion operator (`<<`).

```cpp
#include <iostream>
#include <fstream>

using namespace std;

int main() {
  // Create and open a text file
  ofstream MyFile("journal.txt");

  // Write to the file
  MyFile << "Today is the greatest";

  // Close the file
  MyFile.close();
}
```

## Read a File

To read from a file, use either the `ifstream` or `fstream` class, and the name of the file.

Note that we also use a `while` loop together with the `getline()` function (which belongs to the `ifstream` class) to read the file line by line, and to print the content of the file:

```cpp
// Create a text string, which is used to output the text file
string myText;

// Read from the text file
ifstream MyReadFile("filename.txt");

// Use a while loop together with the getline() function to read the file line by line
while (getline (MyReadFile, myText)) {
  cout << myText; // Output: Its a Codecademy's File
}

// Close the file
MyReadFile.close();
```
