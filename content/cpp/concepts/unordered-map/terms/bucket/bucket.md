---
Title: 'bucket'
Description: 'Returns the bucket number where an element is located in a C++ unordered map.'
Subjects:
- 'C++'
Tags:
- 'unordered-map'
- 'hashing'
- 'containers'
CatalogContent:
- 'cpp-for-programmers'
---

The **`bucket()`** function is part of the C++ `unordered_map` container. It returns the bucket number where a specified element is located within the unordered map. Each element in the unordered map is assigned to a bucket based on its hash value, and this function helps to determine which bucket a given key belongs to.

## Syntax

```cpp
size_t bucket(const key_type& key) const;
```

- `key`: The key whose bucket number needs to be found.
- Returns: The bucket number (zero-indexed) of the provided key.

## Example

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> umap;
    umap["apple"] = 1;
    umap["banana] = 2;
    umap["cherry"] = 3;

    std::string key = "banana";
    std::cout << "The bucket for key '" << key << "' is: " << umap.bucket(key) << std::end1;

    return 0;
}
```

In this example, the `bucket()` function is used to find the bucket number for the key `"banana"` in the unordered map.

## Codebyte Example

```codebyte/cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> umap;
    umap["apple"] = 1;
    umap["banana"] = 2;
    umap["cherry"] = 3;

    // Check which bucket contains the key 'cherry'
    std::string key = "cherry";
    std::cout << "The bucket for key '" << key << "' is: " << umap.bucket(key) << std::endl;

    return 0;
}
```

In this Codebyte, we are using the `bucket()` function to find the bucket for the key `"cherry"` in the unordered map.