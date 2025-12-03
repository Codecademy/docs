---
Title: 'insert()'
Description: 'Inserts element(s) into an unordered_set if they do not already exist.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Methods'
  - 'Sets'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`insert()`** member function of `std::unordered_set` adds new elements only when no equivalent element is already present. The container stores unique values and uses a hash table for fast lookups, insertions, and deletions.

## Syntax

```pseudo
unordered_set_name.insert(value);
```

Or, alternatively:

```pseudo
unordered_set_name.insert(first, last);
```

**Parameters:**

- `value`: The element to insert.
- `first`, `last`: Input iterators that define a range of elements to insert.

**Return value:**

- For a single value, the function returns a pair containing an iterator to the element and a boolean that indicates whether the insertion happened.
- For a range, the function returns `void`.

## Example 1: Basic `insert()` Usage

In this example, `insert()` adds book titles and prevents duplicates:

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

The output of this code is:

```shell
Added: The Hobbit
Added: 1984
Duplicate found: The Hobbit

Books in catalog:
- 1984
- The Hobbit
```

This example models a library catalog where each title must be unique. `unordered_set::insert()` prevents duplicate titles from being added, demonstrating how the container automatically enforces uniqueness while allowing constant-time average insertion.

## Example 2: Managing Unique Usernames

In this example, `insert()` prevents duplicate usernames from being added:

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

The output of this code is:

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

## Codebyte Example: Word Filter with `insert()`

In this example, the program collects only unique words:

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
