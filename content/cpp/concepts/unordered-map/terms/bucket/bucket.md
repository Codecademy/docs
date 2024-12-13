---
Title: '.bucket()'
Description: 'Returns the bucket number where an element is located in a C++ unordered map.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Map'
  - 'Objects'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.bucket()`** function is part of the C++ [`unordered_map`](https://www.codecademy.com/resources/docs/cpp/unordered-map) container. It returns the bucket number (zero-indexed) where a specified element is located within the unordered map. Each element in the unordered map is assigned to a bucket based on its hash value, and this function helps determine which bucket a given key belongs to.

## Syntax

```pseudo
size_type bucket(const key_type& k) const;
```

- `key`: The key whose bucket number needs to be found in the unordered map.

The function returns a `size_type` value, representing the zero-indexed bucket number where the specified key is stored.

## Example

In this example, the `bucket()` function is used to find the bucket number for the key `"banana"` in the unordered map:

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<std::string, int> umap;
    umap["apple"] = 1;
    umap["banana"] = 2;
    umap["cherry"] = 3;

    std::string key = "banana";
    std::cout << "The bucket for key '" << key << "' is: " << umap.bucket(key) << std::endl;

    return 0;
}
```

The above code generates the following output:

```shell
The bucket for key 'banana' is: 4
```

## Codebyte Example

In this Codebyte, we are using the `bucket()` function to find the bucket for the key `"cherry"` in the unordered map:

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
