---
Title: 'max_size()' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns the maximum number of elements that the container can theoretically hold.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Methods'
  - 'Containers'
  - 'STL'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.max_size()`** method returns the maximum number of elements that a container can theoretically hold. This value depends on system and library implementation limitations, not the actual available memory.

## Syntax

```pseudo
unordered_set_name.max_size()
```

- `unordered_set_name`: The name of the `unordered_set` container.

The method returns a value of type `size_type`, representing the theoretical maximum number of elements.

## Example 1: Basic Usage

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers;
  
  std::cout << "Maximum size: " << numbers.max_size() << std::endl;
  
  return 0;
}
```

This example outputs the maximum possible size of the `unordered_set`:

```shell
Maximum size: 576460752303423487
```

> **Note:** The actual value may vary depending on the system and implementation.


## Example 2: Different Data Types

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> int_set;
  std::unordered_set<double> double_set;
  std::unordered_set<char> char_set;
  
  std::cout << "int max_size: " << int_set.max_size() << std::endl;
  std::cout << "double max_size: " << double_set.max_size() << std::endl;
  std::cout << "char max_size: " << char_set.max_size() << std::endl;
  
  return 0;
}
```

This demonstrates that `max_size()` can vary based on the element type:

```shell
int max_size: 576460752303423487
double max_size: 384307168202282325
char max_size: 1152921504606846975
```

## Codebyte Example


```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> fruits = {"apple", "banana", "cherry"};
  
  std::cout << "Current size: " << fruits.size() << std::endl;
  std::cout << "Maximum size: " << fruits.max_size() << std::endl;
  std::cout << "Available capacity: " << fruits.max_size() - fruits.size() << std::endl;
  
  return 0;
}
```