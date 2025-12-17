---
Title: 'Bucket()'
Description:  ‘Uses a hash function internally to organize elements into various “buckets” to facilitate fast lookups. Allows a programmer to inspect the internal distribution of elements.’
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

**bucket** in C++ returns the index of the bucket in which a specific element is stored within an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set).

It can be used to understand the internal hash table structure, check the distribution of elements, or implement custom traversal logic.

## Syntax
### Syntax to locate specific element
```psuedo
unordered_set.bucket(x);
```

**Parameters:** 
 - `x`: The element value you are locating.

**Return Value:**

The `bucket()` function returns the index of the bucket containing the specified element. If the element is not present, it returns the index for the bucket where the element would be placed based on its hash value.

## Example: Using .bucket() to locate a specific element

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
    std::unordered_set<std::string> benders = {"earth","air","water","fire"};

//Find bucket index for a specific element
    std::cout << "airbenders are in bucket: " << benders.bucket("air") << std::endl;

return 0;
}
```
The output for this code is: 
```cpp
airbenders are in bucket: 0
``` 

> **Note:** The output may vary depending on the specific C++ implementation and hash function.


## Codebyte Example: Iterating Through a Set


```codebyte/cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main() {
    std::unordered_set<std::string> houses = {"gryffindor", "hufflepuff", "slytherin", "ravenclaw"};
      
      for (const std::string& x: houses) {
    std::cout << x << " house is in bucket: " << houses.bucket(x) << std::endl;
  }
return 0;
}
```
