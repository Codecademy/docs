---
Title: 'Unordered Set'
Description: 'Associative container that stores unique elements in no particular order with fast lookup operations.'
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

**Unordered set** in C++ is an associative container that stores unique elements in no particular order. It is part of the C++ Standard Template Library (STL) and provides a way to store elements based on their values rather than their position in the container.

An unordered set is implemented using a hash table, which allows for fast retrieval, insertion, and deletion of elements with an average constant time complexity of O(1). This makes it particularly useful for applications requiring frequent lookups and where the order of elements is unimportant. Common use cases include checking for element existence in a collection, removing duplicates from a dataset, and implementing sets in algorithms like finding unique characters in a string or tracking visited nodes in graph traversal.

## Syntax

### Syntax to create an unordered set

```pseudo
std::unordered_set<data_type> set_name;
```

**Parameters:**

- `data_type`: The data type of elements to be stored in the unordered set. This can be any valid C++ type that is hashable.

**Return value:**

Returns an empty unordered set that can store elements of the specified type.

### Syntax to initialize an unordered set

```pseudo
std::unordered_set<data_type> set_name = {value1, value2, value3, ...};
```

**Parameters:**

- `value1, value2, value3, ...`: Elements of type T to be stored in the unordered set. Duplicate values will be ignored.

**Return value:**

Returns an unordered set initialized with the specified elements, with duplicates removed.

## Example 1: Creating a Basic Unordered Set

This example demonstrates how to create an unordered set, insert elements, and check for their existence:

```cpp
#include <iostream>
#include <unordered_set>

int main() {
  // Creating an unordered set of integers
  std::unordered_set<int> numbers;

  // Inserting elements into the unordered set
  numbers.insert(10);
  numbers.insert(20);
  numbers.insert(30);
  numbers.insert(10);  // Duplicate, will be ignored

  // Checking the size of the unordered set
  std::cout << "Size of the unordered set: " << numbers.size() << std::endl;

  // Checking if an element exists in the unordered set
  if (numbers.find(20) != numbers.end()) {
    std::cout << "20 is in the set" << std::endl;
  }

  if (numbers.find(40) == numbers.end()) {
    std::cout << "40 is not in the set" << std::endl;
  }

  // Printing all elements of the unordered set
  std::cout << "Elements: ";
  for (const auto& num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  return 0;
}
```

The possible output for this code would be:

```shell
Size of the unordered set: 3
20 is in the set
40 is not in the set
Elements: 30 20 10
```

> **Note:** The elements may appear in a different order when you run the code, as unordered sets do not maintain any specific order.

## Example 2: Removing Duplicates from a List

This example shows how to use an unordered set to remove duplicates from a list of items:

```cpp
#include <iostream>
#include <unordered_set>
#include <vector>
#include <string>

int main() {
  // A list of names with duplicates
  std::vector<std::string> names = {
    "Alice", "Bob", "Charlie", "Alice", "David", "Bob", "Eva"
  };

  // Using unordered set to remove duplicates
  std::unordered_set<std::string> unique_names(names.begin(), names.end());

  // Print original list
  std::cout << "Original list of names:" << std::endl;
  for (const auto& name : names) {
    std::cout << name << " ";
  }
  std::cout << std::endl;

  // Print unique names
  std::cout << "List after removing duplicates:" << std::endl;
  for (const auto& name : unique_names) {
    std::cout << name << " ";
  }
  std::cout << std::endl;

    // Count how many duplicates were removed
  std::cout << "Number of duplicates removed: "
            << names.size() - unique_names.size() << std::endl;

  return 0;
}
```

This example results in the following possible output:

```shell
Original list of names:
Alice Bob Charlie Alice David Bob Eva
List after removing duplicates:
Eva David Charlie Bob Alice
Number of duplicates removed: 2
```

> **Note:** The order of elements in the output may vary due to the unordered nature of the container.

## Codebyte Example: Word Frequency Counter

This example demonstrates how to use an unordered set and map together to count the frequency of words in a text:

```codebyte/cpp
#include <iostream>
#include <unordered_set>
#include <unordered_map>
#include <string>
#include <sstream>
#include <algorithm>
#include <vector>

int main() {
  // Sample text with repeated words
  std::string text = "the quick brown fox jumps over the lazy dog the fox was quick";

  // Convert the string to lowercase for case-insensitive comparison
  std::transform(text.begin(), text.end(), text.begin(), ::tolower);

  // Split the text into words
  std::istringstream iss(text);
  std::vector<std::string> words;
  std::string word;

  while (iss >> word) {
    words.push_back(word);
  }

  // Count word frequencies
  std::unordered_map<std::string, int> word_count;
  for (const auto& w : words) {
    word_count[w]++;
  }

  // Find unique words using an unordered set
  std::unordered_set<std::string> unique_words(words.begin(), words.end());

  // Print word frequencies for unique words
  std::cout << "Word frequencies:" << std::endl;
  for (const auto& w : unique_words) {
    std::cout << w << ": " << word_count[w] << std::endl;
  }

  // Print total count
  std::cout << "\nTotal words: " << words.size() << std::endl;
  std::cout << "Unique words: " << unique_words.size() << std::endl;

  return 0;
}
```

> **Note:** The order of the words in the output may vary due to the unordered nature of the container.

## Frequently Asked Questions

<details>
<summary>1. What is the difference between an unordered set and a set in C++?</summary>
<p>The `std::unordered_set` uses a hash table for implementation, providing an average O(1) time complexity for search, insert, and delete operations. The `std::set` uses a balanced binary search tree (typically a red-black tree), providing O(log n) time complexity for these operations. Additionally, `std::set` keeps elements in sorted order, while `std::unordered_set` does not maintain any ordering.</p>
</details>

<details>
<summary>2. Can I store custom objects in an unordered set?</summary>
<p>Yes, but you need to define a custom hash function and equality comparator so the unordered set can correctly manage your custom objects. This can be done by either specializing the `std::hash` template for your class or by providing a custom hash function object when creating the unordered set.</p>
</details>

<details>
<summary>3. What is the time complexity of operations in an unordered set?</summary>
<p>On average, insertion, deletion, and search operations have O(1) time complexity. In rare worst-case scenarios (e.g., when many elements hash to the same bucket), these operations can degrade to O(n) time complexity.</p>
</details>

<details>
<summary>4. Why would I use an unordered set instead of a vector?</summary>
<p>Use an unordered set when you need fast lookups and need to ensure unique elements. Vectors are better when you need to maintain insertion order or allow duplicates.</p>
</details>

<details>
<summary>5. How does C++ handle hash collisions in unordered set?</summary>
<p>When multiple elements hash to the same bucket, C++ implementations typically use a linked list or another suitable data structure to store all elements in that bucket. During lookup, it traverses this structure to find the exact match.</p>
</details>
