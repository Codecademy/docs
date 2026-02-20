---
Title: 'size()'
Description: 'Returns the number of elements currently stored in the unordered set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`size()`** member [function](https://www.codecademy.com/resources/docs/cpp/functions) of `unordered_set` is used to return the number of elements currently stored in the container as a `size_type`. If the `unordered_set` is empty, it returns `0`.

## Syntax

```pseudo
set_name.size();
```

**Parameters:**

This function takes no parameters.

**Return value:**

Returns a `size_type` value representing the number of elements in the `unordered_set`.

## Example 1: Basic Usage of `size()`

In this example, the program inserts one element into an `unordered_set` and prints its size:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> mySet;
  mySet.insert(10);

  cout << "Size: " << mySet.size();
  return 0;
}
```

The output of this code is:

```shell
Size: 1
```

## Example 2: Counting Unique Elements

In this example, the program initializes an `unordered_set` with integers (including duplicates), prints its size, and displays its elements:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> mySet {1, 2, 3, 3, 1, 3, 2, 4, 5, 7};

  cout << "There are " << mySet.size() << " elements.\n";
  cout << "The elements are: ";
  for (int ele : mySet) {
    cout << ele << " ";
  }
  return 0;
}
```

The output of this code is:

```shell
There are 6 elements.
The elements are: 7 5 4 3 2 1
```

> **Note:** The order of elements may vary.

Since an `unordered_set` cannot contain duplicates, the code returns `6` as its size and only the unique elements in the container.

## Codebyte Example

In this example, the program compares `size()` with `sizeof()` to show that element count and memory footprint are unrelated:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> mySet;

  for (int i = 0; i < 10; i++) {
    mySet.insert(i);
  }

  cout << "Number of elements: " << mySet.size() << "\n";
  cout << "The set's byte usage: " << sizeof(mySet);
  return 0;
}
```

`size()` returns the number of stored elements, while `sizeof()` returns the memory footprint of the container object, which does not grow with element count.
