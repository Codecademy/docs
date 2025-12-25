---
Title: 'max_bucket_count()'
Description: 'Returns the maximum number of buckets that the unordered_set can have.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`max_bucket_count()`** method returns the maximum number of buckets that an [`unordered_set`](https://www.codecademy.com/resources/docs/cpp/unordered-set) container can have. This value represents a theoretical upper limit imposed by the system or library implementation, not the current number of buckets in use. The actual number of buckets used by the container is typically much smaller and can be queried using `bucket_count()`.

## Syntax

```pseudo
unordered_set_name.max_bucket_count();
```

**Parameters:**

This method takes no parameters.

**Return value:**

Returns a `size_type` value representing the maximum possible number of buckets the container could theoretically hold. This is an implementation-defined limit that is typically a very large number.

## Example

This example demonstrates obtaining the maximum bucket count and comparing it with the current bucket count:

```cpp
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> numbers = {10, 20, 30, 40, 50};

  cout << "Maximum bucket count: " << numbers.max_bucket_count() << "\n";
  cout << "Current bucket count: " << numbers.bucket_count() << "\n";
  cout << "Number of elements: " << numbers.size() << "\n";

  return 0;
}
```

A sample output of this code is:

```shell
Maximum bucket count: 576460752303423487
Current bucket count: 7
Number of elements: 5
```

> **Note:** The exact maximum bucket count value may vary depending on the system architecture and compiler implementation.

## Codebyte Example

In this example, the code demonstrates how the maximum bucket count remains constant while the current bucket count can change as elements are added:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>
using namespace std;

int main() {
  unordered_set<string> fruits = {"apple", "banana", "cherry"};

  cout << "Initial state:\n";
  cout << "Max bucket count: " << fruits.max_bucket_count() << "\n";
  cout << "Current bucket count: " << fruits.bucket_count() << "\n";
  cout << "Current size: " << fruits.size() << "\n";

  // Add more elements
  fruits.insert("date");
  fruits.insert("elderberry");
  fruits.insert("fig");

  cout << "\nAfter adding more elements:\n";
  cout << "Max bucket count: " << fruits.max_bucket_count() << "\n";
  cout << "Current bucket count: " << fruits.bucket_count() << "\n";
  cout << "Current size: " << fruits.size() << "\n";

  return 0;
}
```
