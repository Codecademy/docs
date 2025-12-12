---
Title: 'Bucket()'
Description: 'Uses a hash function internally to organize elements into various "buckets" to facilitate fast lookups. Allows a programmer to inspect the internal distribution of elements.'
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
# bucket()

In C++, the `bucket()` function returns the bucket number where a specific element is stored in the `unordered_set` container.

The *bucket* is a slot in the `unordered_set`'s internal hash table where elements are stored.



## Syntax

```psuedo
size_ type bucket( const key& key) const;
```

## Example

```cpp
#include <iostream>
#include <string>
#include <unordered_set>

int main ()
{
  std::unordered_set<std::string> myset = {"earth","wind","water","fire"};

  for (const std::string& x: myset) {
    std::cout << x << " is in bucket #" << myset.bucket(x) << std::endl;
  }

  return 0;
}
```
The output for this code is: 
```cpp
water is in bucket #0
fire is in bucket #2
wind is in bucket #2
earth is in bucket #4
``` 

## Codebyte Example (if applicable)



See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/cpp
# Example runnable code block.
console.log('Hello, World!');
```
