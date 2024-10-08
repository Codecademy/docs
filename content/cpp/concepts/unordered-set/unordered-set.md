---
Title: 'Unordered Sets' 

# Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed

Description: 

'Unordered sets are associative containers that store unique elements in no specific order, offering fast retrieval through a hash-based implementation.' 

# Required; ideally under 150 characters and starts with a noun (used in search engine results and content previews)

Subjects: 

    - 'Computer Science'
    - 'Game Development'
    - 'Developer Tools'
    
# Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!

Tags:

    - 'Data Types'
    - 'Hash Maps'
    - 'Sets'
  

# Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!

CatalogContent: 

    - 'learn-c-plus-plus'
    - 'paths/computer-science'

# Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
---

**Unordered sets** are associative containers that store unique elements in no particular order offering fast look-ups, insertions & deletions through a hash table. Unlike 'std::set', which maintain elements in a sorted order and uses a binary tree, unordered sets are good for performance, offering consistent time complexity for key operations. If you need elements in a sorted order, please have a look at [Sets](https://www.codecademy.com/resources/docs/cpp/sets), though it has a higher overhead for operations as a result of its tree-based structure.

## Syntax

```cpp

#include <unordered_set>

std::unordered_set<DataType> SetName;

```

A set is created using the `unordered_set` keyword and declaring a [Data Type](https://www.codecademy.com/resources/docs/cpp/data-types) (int, bool, float, etc.) and the name of your set. The `DataType` for the comparison function must match the data type of the `set`


## Example

In this example, an unordered set is initiated and elements are inserted using the [.insert()](https://www.codecademy.com/resources/docs/cpp/sets/insert) method. The elements are then printed:

```cpp

#include <iostream>
#include <unordered_set>

int main() {
  // Initiate an unordered set of elements, (in this example - integers)
  std::unordered_set<int> numSet;

  // Insert elements
  numSet.insert(10);
  numSet.insert(20);
  numSet.insert(30);
  numSet.insert(40);

  // Print out set elements
  std::unordered_set<int> :: iterator iter;
  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
  std::cout<< *iter << " ";

}

```
The output would be:

```shell

20 40 30 10 

```

As you can see, the order of elements is not guaranteed.

## Ordered vs Unordered Sets

| Feature | Ordered Set (`std::set`)  | Unordered Set (`std::unordered_set`) |
| --- | --- | --- |
| Order | Elements in sorted order | No particular order |
| Structure | Tree-based | Hash table |
| Time | O(log n) | O(1) |
| Memory | More efficient memory usage | Higher memory usage as a result of hashing |
| Performance | Consistent performance across all cases | Can degrade to O(n) if hashing is poor |
| Usage | Use when element ordering is useful or required | Use when efficiency is required and ordering is not important |

Note: neither set includes duplicates

## Codebyte Example

This example builds on the previous example, adding a duplicate element to show it won't be included, and then checking if an element exists:

```cpp

#include <iostream>
#include <unordered_set>

int main() {
  // Initiate an unordered set of elements, (in this example - integers)
  std::unordered_set<int> numSet = {10, 20, 30, 40};

  // Add duplicate element
  numSet.insert(20);
  

  // Print out set elements
  std::unordered_set<int> :: iterator iter;
  for (iter = numSet.begin(); iter != numSet.end(); iter++) {
  std::cout<< *iter << " ";

  }
  // New line
  std::cout << "\n";

  // Check if an element exists
  if (numSet.find(20) != numSet.end()) {
  std::cout << "20 is in the set.";
  } else {
    std::cout << "20 is not in the set.";

  }
}

```