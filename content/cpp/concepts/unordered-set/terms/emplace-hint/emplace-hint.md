---
Title: 'emplace_hint()'
Description: 'Inserts a new element into an `unordered_set` using a position hint, constructing the element in place.'
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

The **`emplace_hint()`** method inserts a new element into an `unordered_set` by constructing it directly in the container, using a provided iterator as a hint. In `unordered_set`, the hint does not affect performance or insertion position, but it is included for interface consistency with ordered containers like `set`.

## Syntax

```pseudo
unordered_set.emplace_hint(position, value)
```

`unordered_set` is the container into which the element is inserted.

**Parameters:**

- `position`: An iterator hint indicating where the insertion might occur (ignored by `unordered_set`).
- `value`: The value to be inserted, constructed in place.

**Return value:**

Returns an iterator pointing to the inserted element, or to the existing element if the value already exists in the set.

## Example 1: Basic insertion using `emplace_hint()`

This example shows inserting an element into an `unordered_set` using a hint iterator:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> numbers = {1, 2, 3};

  auto hint = numbers.begin();
  auto it = numbers.emplace_hint(hint, 4);

  std::cout << "Inserted element: " << *it << std::endl;
  return 0;
}
```

The output of this code is:

```shell
Inserted element: 4
```

## Example 2: Attempting to insert a duplicate element

This example demonstrates that `emplace_hint()` does not insert duplicate values:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  std::unordered_set<int> values = {10, 20, 30};

  auto it = values.emplace_hint(values.begin(), 20);

  std::cout << "Element at iterator: " << *it << std::endl;
  std::cout << "Set size: " << values.size() << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Element at iterator: 20
Set size: 3
```

## Codebyte Example: Using `emplace_hint()` with a custom type

This example uses `emplace_hint()` to construct a custom object directly inside the set:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

struct User {
  std::string name;

  bool operator==(const User& other) const {
    return name == other.name;
  }
};

struct UserHash {
  size_t operator()(const User& u) const {
    return std::hash<std::string>()(u.name);
  }
};

int main() {
  std::unordered_set<User, UserHash> users;

  users.emplace_hint(users.begin(), User{"Alice"});
  users.emplace_hint(users.begin(), User{"Bob"});

  for (const auto& user : users) {
    std::cout << user.name << std::endl;
  }

  return 0;
}
```

> **Note:** Unlike `set::emplace_hint()`, the hint provided to `unordered_set::emplace_hint()` does not influence insertion efficiency or placement, since elements are stored based on hash values rather than order.
