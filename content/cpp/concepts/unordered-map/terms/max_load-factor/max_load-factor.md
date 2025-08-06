---
Title: 'max_load_factor()'
Description: 'Gets or sets the maximum average number of elements per bucket before rehashing occurs in an unordered map.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Map'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`unordered_map::max_load_factor`** function in C++ is used to get or set the maximum load factor of an `unordered_map`. The load factor represents the average number of elements per bucket (i.e., total elements divided by total buckets). By default, this value is set to `1.0`.

## Syntax

```cpp
unordered_mapName.max_load_factor();  // Getter
unordered_mapName.max_load_factor(value);  // Setter
```

**Parameters:**

- `value` (optional): A `float` specifying the new maximum load factor. Must be greater than 0.

**Return value:**

Returns the current maximum load factor as a `float`.

## Example 1: Getting the default load factor

This example prints the default max load factor of an unordered map:

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<int, int> myMap;
  cout << "Default max load factor: " << myMap.max_load_factor() << endl;
  return 0;
}
```

The output of this code is:

```shell
Default max load factor: 1
```

This shows that the default load factor is typically `1.0`, meaning the map aims for one element per bucket.

## Example 2: Setting a custom load factor to reduce rehashing

This example increases the max load factor to reduce the frequency of rehashing during insertions:

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<int, int> data;
  data.max_load_factor(2.5);

  cout << "New max load factor: " << data.max_load_factor() << endl;
  return 0;
}
```

The output of this code is:

```shell
New max load factor: 2.5
```

Raising the load factor allows more elements per bucket, delaying rehashing and potentially improving insertion performance.

## Codebyte Example: Lowering load factor to improve search speed

This example sets a lower load factor to prioritize faster lookups in a time-critical application:

```codebye/cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<string, int> wordCount;
  wordCount.max_load_factor(0.5);

  wordCount["optimize"] = 1;
  wordCount["speed"] = 2;

  cout << "Load factor set for quick access: " << wordCount.max_load_factor() << endl;
  return 0;
}
```

## Frequently asked questions

### 1. What is the default `max_load_factor` for an unordered_map?

It's usually `1.0`, meaning one element per bucket on average before rehashing is triggered.

### 2. Does increasing the load factor make the map faster?

It can speed up insertions by reducing rehashes, but may slow down lookups due to more collisions.

### 3. What happens if I set the load factor too low?

The map will rehash more often, using more memory and slowing down insertions, but lookups may become faster.
