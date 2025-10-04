---
Title: '.size()'
Description: 'Returns the number of elements in a vector.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Elements'
  - 'Vectors'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, the **`.size()`** method returns the number of elements in the vector. This method is also available for other STL containers like `std::string`, `std::map`, and `std::list`. Knowing how to use `.size()` effectively helps in writing safe and efficient loops and conditionals.

## Syntax

```pseudo
vector.size();
```

The `vector` must be defined using `std::vector` before the `.size()` method can be used.

**Parameters:**

The `.size()` method does not accept any parameters.

**Return value:**

Returns the number of elements in a vector.

## Example 1: Basic Usage

In this example, `.size()` is called on the `numbers` vector:

```cpp
#include <iostream>
#include <vector>

int main() {
  // Declaring a vector with 4 integers
  std::vector<int> numbers = {1, 2, 3, 4};

  // Print out vector size
  std::cout << numbers.size();
}
```

Here is the output:

```shell
4
```

## Example 2: Using `.size()` in a Loop

This example uses the `.size()` method in a `for` loop:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<string> fruits = {"Apple", "Banana", "Cherry"};

  for (size_t i = 0; i < fruits.size(); ++i) {
    cout << fruits[i] << endl;
  }

  return 0;
}
```

Here is the output:

```shell
Apple
Banana
Cherry
```

## Codebyte Example: Checking if a Vector is Empty

In this codebyte example, `.size()` is used to determine if a vector is empty:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> data;

  if (data.size() == 0) {
    cout << "The vector is empty." << endl;
  }

  return 0;
}
```

## Frequently Asked Questions

### 1. Can `.size()` be used with any STL container?

Yes, `.size()` is a member function of most STL containers like `vector`, `string`, `list`, `map`, etc. It behaves similarly across them.

### 2. What is the difference between `.size()` and `.capacity()`?

`.size()` returns the actual number of items in a vector, whereas `.capacity()` returns the number of elements a vector can hold before needing to allocate more memory.

### 3. Is `.size()` a costly operation?

No, `.size()` runs in constant time, _O(1)_, because vectors store their size internally and update it automatically during insertions or deletions.
