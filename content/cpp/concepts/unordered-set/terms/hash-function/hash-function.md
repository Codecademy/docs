---
Title: hash?function()'
Description: 'Returns the hash function object used by the unordered set.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Elements'
  - 'Hash Maps'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`hash_function()`** returns the hash function object used by the [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) container.


## Syntax

```pseudo
unordered_set.hash_function();
```

**Parameters:**

This method takes no parameters.

**Return value:**

The `hash_function()` returns the hash function.

## Example: Using `hash_function()` to return the hash function

In this example, `hash_function()` is used to return the hash function of an element in an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> s = {10, 20, 30};

    // get the hash function
    auto hf = s.hash_function();

    std::cout << "Hash of 10: " << hf(10) << std::endl;
    std::cout << "Hash of 20: " << hf(20) << std::endl;
}
```

The output for this code is:

```shell
Hash of 10: 10
Hash of 20: 20
```

> **Note:** The output may vary depending on the specific C++ implementation and hash function.

## Codebyte Example: Inserting a new element into an unordered set

In this example, the code demonstrates how to retrieve and use the hash function from an unordered_set to compute hash values for its elements.

```codebyte/cpp
#include <iostream>
#include <unordered_set>

int main() {
    std::unordered_set<int> values = {10, 20, 30};

    // Retrieve the hash function used by the unordered_set
    auto hashFunc = values.hash_function();

    // Display hash values of elements
    for (int v : values) {
        std::cout << "Value: " << v
                  << ", Hash: " << hashFunc(v) << std::endl;
    }

    return 0;
}
```
