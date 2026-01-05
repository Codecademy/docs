---
Title: 'bucket()'
Description:  'Returns the index of the bucket in which a specified element would be stored in an unordered set.'
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

The **`bucket()`** method returns the index of the bucket in which a specific element is stored within an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set).

This method is useful for inspecting the container’s internal hash table structure or understanding how elements are distributed across buckets.

## Syntax

```pseudo
unordered_set.bucket(x);
```

**Parameters:** 

 - `x`: The element whose bucket index is queried.

**Return value:**

The `bucket()` method returns the index of the bucket containing the specified element. If the element is not present, the returned value corresponds to the bucket where the element would be placed based on its hash value.

## Example: Using `bucket()` to locate a specific element

In this example, `bucket()` is used to find the bucket index of a specific element in an `unordered_set`:

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
  std::unordered_set<std::string> benders = {"earth", "air", "water", "fire"};

  // Find bucket index for a specific element
  std::cout << "airbenders are in bucket: " << benders.bucket("air") << std::endl;

return 0;
}
```

The output for this code is: 

```shell
airbenders are in bucket: 0
``` 

> **Note:** The output may vary depending on the specific C++ implementation and hash function.

## Codebyte Example: Inspecting bucket placement

In this example, each element in the set is printed along with the bucket it belongs to:

```codebyte/cpp
#include <iostream>
#include <string>
#include <unordered_set>

using namespace std;

int main() {
  unordered_set<string> houses = {"gryffindor", "hufflepuff", "slytherin", "ravenclaw"};
      
  for (const string& x : houses) {
    cout << x << " house is in bucket: " << houses.bucket(x) << endl;
  }
  return 0;
}
```
