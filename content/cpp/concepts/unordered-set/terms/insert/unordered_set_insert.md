---
Title: insert()
Description: Inserts element(s) into an unordered_set if they do not already exist.
Subjects:
  - Code Foundations
  - Computer Science
tags:
  - Data Structures
  - Methods
  - Sets
CatalogContent:
  - learn-c-plus-plus
  - paths/computer-science
---

The **`insert()`** member function of C++’s `std::unordered_set` attempts to insert one or more new elements into the container **only if** an equivalent element does not already exist. `unordered_set` stores unique elements and uses a **hash table** for fast lookups, insertions, and deletions.

Internally, each element’s key is transformed by a **hash function** into a bucket index. When multiple elements hash to the same bucket — known as a **hash collision** — they are grouped together within that bucket. Although average insertion and lookup are constant time (`O(1)`), heavy collisions can cause performance to degrade to linear time (`O(n)`).

## Syntax

```cpp
// Single element insertion (copy)
std::pair<iterator, bool> insert(const value_type& value);

// Single element insertion (move)
std::pair<iterator, bool> insert(value_type&& value);

// Hint insertion (ignored for unordered containers)
iterator insert(const_iterator hint, const value_type& value);

// Range insertion
void insert(InputIterator first, InputIterator last);

// Initializer list insertion
void insert(std::initializer_list<value_type> ilist);

// Node handle insertion (C++17)
insert_return_type insert(node_type&& nh);
iterator insert(const_iterator hint, node_type&& nh);
```

**Parameters**

| Parameter     | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| `value`       | The element to be inserted.                                            |
| `hint`        | Iterator hint suggesting where to insert the element (may be ignored). |
| `first, last` | Input iterators defining a range of elements to insert.                |
| `ilist`       | Initializer list of elements to insert.                                |
| `nh`          | Node handle extracted from another unordered container.                |

**Return Value**

- Returns a `std::pair`:

  - `iterator`: Points to the inserted element, or to the existing element if no insertion occurred.
  - `bool`: `true` if insertion took place, `false` if the element already existed.

For range and initializer list overloads, the return type is `void`.

**Note: Move Semantics**

When calling `insert()`` with std::move(obj), the function may take advantage of move semantics to transfer resources from obj instead of copying them. This uses the rvalue reference overload `value_type&& value` which can improve performance when inserting large objects, because it reuses existing resources (like memory buffers) rather than duplicating them. However, if the insertion fails because the element already exists, the state of the moved-from object (obj) is valid but unspecified — it may be empty or altered.

## Example 1: Basic `insert()` Usage - Library Book Catalog

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> catalog;

  auto result1 = catalog.insert("The Hobbit");
  auto result2 = catalog.insert("1984");
  auto result3 = catalog.insert("The Hobbit"); // duplicate

  if (result1.second)
    std::cout << "Added: " << *result1.first << std::endl;
  if (result2.second)
    std::cout << "Added: " << *result2.first << std::endl;

  if (!result3.second)
    std::cout << "Duplicate found: " << *result3.first << std::endl;

  std::cout << "\nBooks in catalog:\n";
  for (const auto& title : catalog)
    std::cout << "- " << title << std::endl;

  return 0;
}
```

**Output:**

```shell
Added: The Hobbit
Added: 1984
Duplicate found: The Hobbit

Books in catalog:
- 1984
- The Hobbit
```

This example models a simple library catalog where each title must be unique. `unordered_set::insert()` prevents duplicate titles from being added, demonstrating how the container automatically enforces uniqueness while allowing constant-time average insertion.

## Example 2: Managing Unique Usernames

```cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> usernames = {"char_bean", "bilbo_baggins", "webly_45"};

  // Attempt to insert new usernames
  auto addUser = [&](const std::string& user) {
    auto result = usernames.insert(user);
    if (result.second)
      std::cout << "Username '" << user << "' added successfully.\n";
    else
      std::cout << "Username '" << user << "' already exists.\n";
  };

  addUser("mighty_meat");
  addUser("i_love_tacos");
  addUser("char_bean"); // duplicate
  addUser("tamellamas");

  std::cout << "\nCurrent registered users:\n";
  for (const auto& name : usernames) {
    std::cout << "- " << name << "\n";
  }

  return 0;
}
```

**Output:**

```shell
Username 'mighty_meat' added successfully.
Username 'i_love_tacos' added successfully.
Username 'char_bean' already exists.
Username 'tamellamas' added successfully.

Current registered users:
- tamellamas
- webly_45
- i_love_tacos
- char_bean
- mighty_meat
- bilbo_baggins
```

This example models a login system where usernames must remain unique. The `insert()` method ensures that duplicates are automatically rejected.

## Codebyte Example: Word Filter with `insert()`

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <string>

int main() {
  std::unordered_set<std::string> words;
  std::string input;

  std::cout << "Enter words (type 'done' to finish):\n";

  while (true) {
    std::cin >> input;
    if (input == "done") break;

    auto result = words.insert(input);
    if (result.second)
      std::cout << "'" << input << "' added.\n";
    else
      std::cout << "'" << input << "' already exists!\n";
  }

  std::cout << "\nUnique words entered (" << words.size() << "):\n";
  for (const auto& word : words)
    std::cout << "- " << word << "\n";

  return 0;
}
```

This example acts as a word collector that keeps only unique entries. Each attempt to insert a duplicate word is automatically rejected by the `unordered_set`.

## FAQ

**Q: How does `insert()` differ from `emplace()`?**
`insert()` inserts an existing object, while `emplace()` constructs it directly in-place using provided arguments—often more efficient.

**Q: What happens if I insert a duplicate element?**
The operation fails, and the returned `bool` in the result pair is `false`.

**Q: Can `insert()` invalidate iterators?**
Only if a rehash occurs when inserting (for example, after exceeding the load factor threshold).

**Q: What’s the time complexity of `insert()`?**
Average: **O(1)**; Worst case: **O(n)** when hash collisions occur.