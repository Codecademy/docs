---
Title: '.assign()'
Description: 'Assigns new values to the elements of a vector, replacing its current contents.'
Subjects:
    - 'Computer Science'
    - 'Code Foundations'
Tags:
    - 'Vectors'
    - 'Methods'
    - 'Data Structures'
CatalogContent:
    - 'learn-c-plus-plus'
    - 'paths/computer-science'
---

In C++, the **`.assign()`** method is used with [`vectors`](https://www.codecademy.com/resources/docs/cpp/vectors) to replace existing elements or add new values. This method can either fill the vector with a specified number of copies of a value or replace the vector's contents with elements from a range, modifying its size if necessary.

> **Note:** To use vectors, it is necessary to `#include` the `vector` library.

## Syntax

```pseudo
vector.assign(n, value);
vector.assign(first, last);
```

- `vector`: The instance of the `std::vector` class where the elements will be assigned.
- `n`: The number of elements to be assigned.
- `value`: The value to be assigned to each element.
- `first`: The iterator pointing to the beginning of the range to be copied.
- `last`: The iterator pointing to the end of the range to be copied.

## Example

In the following example, the `.assign()` method is used to replace the elements of a vector with a range of elements from another container:

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> numbers{1, 2, 3};
    vector<int> newNumbers{4, 5, 6, 7};

    // Replacing current elements with 4 copies of the value 8
    numbers.assign(4, 8);
    cout << "After assigning 4 copies of 8: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    // Replacing current elements with elements from newNumbers
    numbers.assign(newNumbers.begin(), newNumbers.end());
    cout << "After assigning elements from newNumbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
```

The output for the above code is:

```shell
After assigning 4 copies of 8: 8 8 8 8  
After assigning elements from newNumbers: 4 5 6 7 
```

> **Note:** The `.assign()` method completely replaces the existing contents of the vector, resizing it if necessary. This method is particularly useful for resetting a vector or filling it with specific values or elements from another collection.