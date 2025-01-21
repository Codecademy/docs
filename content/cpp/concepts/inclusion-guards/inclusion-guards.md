---
Title: 'inclusion-guards' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Used in C++ to prevent multiple inclusions of the same header file.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Error Handling'
  - 'Compilation'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-plus-plus'
---

**Inclusion guards**, also known as header guards, are a common technique used in C++ to prevent multiple inclusions of the same header file, which can cause errors and increase compilation time. These are preprocessor directives that ensure the file is included only once.

## Syntax

```cpp
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Your header file content here

#endif // MY_HEADER_H
```

## Example

Let's say you have a header file named example.h:

```cpp
// example.h
#ifndef EXAMPLE_H
#define EXAMPLE_H

myFunction();

#endif // EXAMPLE_H
```

And your source file is main.cpp:

```cpp
// main.cpp
#include "example.h"
#include "example.h" // This will be ignored due to the inclusion guard

int main() {
    myFunction();
    return 0;
}
```
By using inclusion guards, you ensure that example.h is only included once, even if you include it multiple times in different files or within the same file.
