---
Title: 'hash_function()'
Description: 'Returns the hash function used internally by an unordered_map to map keys to buckets.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Hash Maps'
  - 'STL'
CatalogContent:
  - 'learn-cpp'
  - 'paths/computer-science'
---

The **`unordered_map::hash_function()`** method returns a function object the container uses to hash keys. This function determines which bucket an element will be placed in. By default, it uses `std::hash<Key>`, but it can be customized when the map is declared.

## Syntax

```pseudo
unordered_mapName.hash_function();
```

**Parameters:**

The `hash_function()` method takes no parameters.

**Return value:**

Returns the hash function used by the unordered\_map. The return type is the function object used for hashing keys.

## Example 1: Default hash function

Get the hash value of a string key using the default hash function:

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<string, int> myMap;
  auto hashFunc = myMap.hash_function();

  string key = "gfg";
  cout << "Hash value of key '" << key << "' is: " << hashFunc(key) << endl;
  return 0;
}
```

The output of this code is:

```shell
Hash value of key 'gfg' is: 2677022477486138405
```

This example shows how the internal hash function can be used to compute a hash value for a given key.

## Example 2: Comparing hash values of keys

Check how different string keys are hashed:

```cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<string, int> data;
  auto hashFn = data.hash_function();

  cout << "Hash for 'apple': " << hashFn("apple") << endl;
  cout << "Hash for 'banana': " << hashFn("banana") << endl;
  return 0;
}
```

The output of the code is:

```shell
Hash for 'apple': 7562681486644061055  
Hash for 'banana': 680920345727384150
```

The hash function generates different values for different strings, helping distribute them across buckets.

## Codebyte Example: Hashing integer keys

Visualize how integer keys are hashed in a real-world lookup:

```codebyte/cpp
#include <iostream>
#include <unordered_map>

using namespace std;

int main() {
  unordered_map<int, string> lookup;
  lookup[101] = "Alice";
  lookup[202] = "Bob";

  auto h = lookup.hash_function();
  cout << "Hash of 101: " << h(101) << "\n";
  cout << "Hash of 202: " << h(202) << "\n";
  return 0;
}
```

The hash function often returns the value itself for integer keys, as integers map cleanly to buckets.

## Frequently asked questions

### 1. Can a custom hash function be used in unordered\_map?

Yes. A user-defined hash function can be passed as a template parameter when defining the map.

### 2. Is hash\_function() always std::hash?

By default, yes. But if a custom hash is provided during map declaration, hash\_function() returns that.

### 3. When is hash\_function() useful?

When debugging or when needing to understand how keys are being distributed across buckets internally.
