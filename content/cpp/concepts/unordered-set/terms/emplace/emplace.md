---
Title: 'emplace()'
Description: 'Inserts a new element into an unordered_set by constructing it in place.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'Sets'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`emplace()`** method inserts a new element into an `unordered_set` by constructing it directly within the container. Unlike `insert()`, which requires a fully constructed object, `emplace()` forwards constructor arguments and builds the element in place, avoiding unnecessary copies or moves.

If an equivalent element already exists in the set, no insertion occurs.

## Syntax

```pseudo
unordered_set.emplace(args...)
```

**Parameters:**

- `args...`: Arguments forwarded to the constructor of the element type.

**Return value:**

Returns a `std::pair<iterator, bool>`:

- `iterator`: Points to the inserted element or the existing equivalent element.
- `bool`:
  - `true` if insertion took place
  - `false` if the element already existed

## Example 1: Basic Insertion

This example shows how `emplace()` inserts elements into an `unordered_set`:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers;

  auto result = numbers.emplace(10);

  std::cout << "Inserted: " << std::boolalpha << result.second << "\n";
  std::cout << "Value: " << *result.first << "\n";

  return 0;
}
```

The output of this code is:

```shell
Inserted: true
Value: 10
```

## Example 2: Preventing Duplicate Elements

This example demonstrates that `emplace()` does not insert duplicate values:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> values = {1, 2, 3};

  auto first = values.emplace(2);
  auto second = values.emplace(4);

  std::cout << "Insert 2 successful? " << first.second << "\n";
  std::cout << "Insert 4 successful? " << second.second << "\n";

  return 0;
}
```

The output of this code is:

```shell
Insert 2 successful? 0
Insert 4 successful? 1
```

Since 2 already exists in the set, it is not inserted again.

## Codebyte Example: In-Place Construction of Objects

This example highlights the main advantage of `emplace()` by constructing objects directly inside the container:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> words;

  words.emplace(5, 'a');  // Constructs "aaaaa" in place
  words.emplace("hello");

  for (const auto& word : words) {
    std::cout << word << "\n";
  }

  return 0;
}
```

Here, the string `"aaaaa"` is constructed directly inside the `unordered_set` using the `std::string(size, char)` constructor.

## Frequently Asked Questions

### 1. What does `emplace()` do in `unordered_set`?

`emplace()` inserts a new element into an `unordered_set` by constructing it directly inside the container, avoiding unnecessary copies or moves.

### 2. What is the difference between `insert()` and `emplace()` in `unordered_set`?

`insert()` adds an already constructed object to the set, while `emplace()` constructs the object in place using constructor arguments, which can be more efficient.
