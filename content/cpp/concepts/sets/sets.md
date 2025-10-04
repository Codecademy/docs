---
Title: 'Sets'
Description: 'Stores unique elements in sorted order with efficient insertion, deletion, and search operations.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Algorithms'
  - 'Containers'
  - 'Data Structures'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

A **set** is an associative container in the C++ Standard Template Library that stores unique elements in a sorted order. Sets automatically maintain their elements in ascending order by default, though this can be customized using a comparison function. Sets provide efficient insertion, deletion, and search operations with logarithmic time complexity.

Sets are commonly used in scenarios where you need to maintain a collection of unique elements with fast lookup capabilities, such as removing duplicates from data, implementing mathematical set operations, maintaining sorted collections, and checking membership efficiently. They are particularly useful in algorithms that require frequent searching and when the order of elements matters.

## Creating a Set

The basic syntax for creating a set is:

```pseudo
set<dataType> setName;
```

**Parameters:**

- `dataType`: The type of elements to be stored in the set (e.g., int, string, char)
- `setName`: The name assigned to the set variable

Sets can also be created with custom comparison functions:

```pseudo
set<dataType, comparatorFunction> setName;
```

Additional parameters:

- `comparatorFunction`: Optional parameter that defines custom sorting order for elements

## Example: Basic Set Creation

This example demonstrates different ways to create and initialize a set:

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
  // Creating an empty set
  set<int> emptySet;

  // Creating a set with initializer list
  set<int> numbers = {10, 5, 20, 15, 5, 10};

  // Display the set elements
  cout << "Set contains: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
```

The output of this code is:

```shell
Set contains: 5 10 15 20
```

The set automatically removes duplicate values (5 and 10 appeared twice) and maintains elements in sorted order.

## Inserting Elements

Elements can be added to a set using the [`insert()`](https://www.codecademy.com/resources/docs/cpp/sets/insert) method. The `insert()` function automatically places elements in their correct sorted position:

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
  set<int> numbers;

  // Insert individual elements
  numbers.insert(25);
  numbers.insert(10);
  numbers.insert(30);
  numbers.insert(10); // Duplicate - will not be added

  cout << "Set after insertions: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
```

Output of this code is:

```shell
Set after insertions: 10 25 30
```

The duplicate value 10 was automatically ignored, and elements are displayed in sorted order regardless of insertion order.

## Accessing Elements

Unlike arrays or vectors, sets do not support direct index-based access. Elements are accessed using iterators or by checking for existence using the [`find()`](https://www.codecademy.com/resources/docs/cpp/sets/find) method:

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
  set<int> numbers = {15, 25, 35, 45, 55};

  // Access first element using iterator
  auto firstElement = numbers.begin();
  cout << "First element: " << *firstElement << endl;

  // Check if element exists using find()
  auto searchResult = numbers.find(35);
  if (searchResult != numbers.end()) {
    cout << "Element 35 found: " << *searchResult << endl;
  } else {
    cout << "Element 35 not found" << endl;
  }

  return 0;
}
```

The output of the code is:

```shell
First element: 15
Element 35 found: 35
```

The `find()` method returns an iterator pointing to the element if found, or `end()` iterator if the element doesn't exist.

## Updating Elements

Sets do not allow modification of existing elements because changing an element's value could disrupt the sorted order. To update an element, you must remove the old value and insert the new one:

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
  set<int> numbers = {10, 20, 30, 40};

  cout << "Original set: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  // To "update" 30 to 35, remove 30 and insert 35
  numbers.erase(30);
  numbers.insert(35);

  cout << "Updated set: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
```

The output of the code is:

```shell
Original set: 10 20 30 40
Updated set: 10 20 35 40
```

The element 30 was removed and 35 was inserted, maintaining the sorted order of the set.

## Deleting Elements

Elements can be removed from a set using the [`erase()`](https://www.codecademy.com/resources/docs/cpp/sets/erase) method, which can remove elements by value or by iterator position:

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
  set<int> numbers = {100, 200, 300, 400, 500};

  cout << "Original set: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  // Remove element by value
  numbers.erase(300);

  // Remove element by iterator (first element)
  numbers.erase(numbers.begin());

  cout << "Set after deletions: ";
  for (int num : numbers) {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
```

The output of the code is:

```shell
Original set: 100 200 300 400 500
Set after deletions: 200 400 500
```

The value 300 was removed directly, and the first element (100) was removed using an iterator.

## Codebyte Example: Student Grade Tracker

This comprehensive example demonstrates a practical application using sets to track unique student grades and perform various operations:

```cpp
#include <iostream>
#include <set>
#include <string>
using namespace std;

int main() {
  set<int> uniqueGrades;

  // Adding grades from different students
  int grades[] = {85, 92, 78, 85, 96, 78, 88, 92, 75, 96};
  int numGrades = sizeof(grades) / sizeof(grades[0]);

  cout << "Adding grades: ";
  for (int i = 0; i < numGrades; i++) {
    cout << grades[i] << " ";
    uniqueGrades.insert(grades[i]);
  }
  cout << endl;

  // Display unique grades in sorted order
  cout << "Unique grades (sorted): ";
  for (int grade : uniqueGrades) {
    cout << grade << " ";
  }
  cout << endl;

  // Find highest and lowest grades
  cout << "Lowest grade: " << *uniqueGrades.begin() << endl;
  cout << "Highest grade: " << *uniqueGrades.rbegin() << endl;

  // Check if a specific grade exists
  int searchGrade = 90;
  if (uniqueGrades.find(searchGrade) != uniqueGrades.end()) {
    cout << "Grade " << searchGrade << " exists" << endl;
  } else {
    cout << "Grade " << searchGrade << " does not exist" << endl;
  }

  // Remove failing grades (below 80)
  auto it = uniqueGrades.begin();
  while (it != uniqueGrades.end()) {
    if (*it < 80) {
      it = uniqueGrades.erase(it);
    } else {
      ++it;
    }
  }

  cout << "Passing grades only: ";
  for (int grade : uniqueGrades) {
    cout << grade << " ";
  }
  cout << endl;

  cout << "Total unique passing grades: " << uniqueGrades.size() << endl;

  return 0;
}
```

This example shows how sets automatically handle duplicates, maintain sorted order, and provide efficient operations for real-world data processing scenarios.

## Frequently Asked Questions

### 1. Can sets contain duplicate elements?

No, sets automatically prevent duplicate elements. If you try to insert a duplicate value, the insertion is ignored and the set remains unchanged.

### 2. How are elements ordered in a set?

By default, elements are stored in ascending order using the less-than operator. You can provide a custom comparison function to change the sorting behavior.

### 3. What is the time complexity of set operations?

Most set operations (insert, delete, find) have `O(log n)` time complexity due to the underlying balanced binary search tree implementation.

### 4. Can I store custom objects in a set?

Yes, but you must either define the less-than operator for your custom class or provide a custom comparison function when declaring the set.

### 5. How do I iterate through a set in reverse order?

Use reverse iterators with `rbegin()` and `rend()`, or iterate from `rbegin()` to `rend()` using a reverse iterator loop.
