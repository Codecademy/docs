---
Title: 'unordered_map'
Description: 'Stores data in key-value pairs using hash table implementation for fast lookups.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Data Structures'
  - 'Hash Maps'
  - 'Map'
  - 'STL'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`unordered_map`** is an associative container in C++ that stores data in key-value pairs, similar to a dictionary or hash table. Unlike the standard [`map`](https://www.codecademy.com/resources/docs/cpp/maps) container, `unordered_map` uses a hash table implementation that provides average constant-time complexity `O(1)` for search, insertion, and deletion operations. However, the elements are not stored in any particular sorted order, making it ideal for scenarios where fast access is more important than maintaining order.

The `unordered_map` is particularly useful in applications requiring frequent lookups, such as caching systems, database indexing, counting frequencies of elements, and implementing symbol tables in compilers. It excels in scenarios where you need to associate unique keys with values and perform rapid searches based on those keys.

## Syntax

```pseudo
std::unordered_map<key_type, value_type> map_name;
```

**Parameters:**

- `key_type`: The data type of the keys stored in the `unordered_map`
- `value_type`: The data type of the values associated with the keys
- `map_name`: The identifier name for the `unordered_map` instance

**Return value:**

The `unordered_map` container itself does not return a value, but its member functions return various types depending on the operation (iterators, boolean values, references, etc.).

## Example 1: Creating and Initializing

This example demonstrates the basic creation and initialization of an `unordered_map`:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
  // Create an empty unordered_map
  std::unordered_map<int, std::string> colors;

  // Initialize using initializer list
  std::unordered_map<int, std::string> fruits = {
    {1, "Apple"},
    {2, "Banana"},
    {3, "Orange"}
  };

  // Display the initialized map
  std::cout << "Fruits map contains:" << std::endl;
  for (const auto& pair : fruits) {
    std::cout << pair.first << ": " << pair.second << std::endl;
  }

  return 0;
}
```

The output of the above code is:

```shell
Fruits map contains:
3: Orange
2: Banana
1: Apple
```

The above code shows how to create an empty `unordered_map` and initialize another with key-value pairs using an initializer list. The output displays the fruit IDs and names, demonstrating basic map creation and iteration.

## Example 2: Counting Character Frequencies

This example demonstrates using `unordered_map` to count the frequency of characters in a [string](https://www.codecademy.com/resources/docs/cpp/strings), a common real-world application:

```cpp
#include <iostream>
#include <unordered_map>
#include <string>
#include <algorithm> // for std::max_element

int main() {
  std::string text = "programming";
  std::unordered_map<char, int> charFreq;

  // Count frequency of each character
  for (char c : text) {
    charFreq[c]++;  // Automatically creates entry if key doesn't exist
  }

  // Display character frequencies
  std::cout << "Character frequencies in '" << text << "':" << std::endl;
  for (const auto& pair : charFreq) {
    std::cout << "'" << pair.first << "': " << pair.second << " times" << std::endl;
  }

  // Find most frequent character
  auto maxElement = std::max_element(charFreq.begin(), charFreq.end(),
    [](const std::pair<char, int>& a, const std::pair<char, int>& b) {
      return a.second < b.second;
    });

  std::cout << "Most frequent character: '" << maxElement->first
            << "' appears " << maxElement->second << " times" << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Character frequencies in 'programming':
'i': 1 times
'm': 2 times
'n': 1 times
'a': 1 times
'g': 2 times
'o': 1 times
'r': 2 times
'p': 1 times
Most frequent character: 'm' appears 2 times
```

> **Note:** The order of elements in an `unordered_map` is unspecified and may vary across executions.

The above code demonstrates a practical use case where `unordered_map` efficiently counts character occurrences. The algorithm has `O(n)` time complexity, making it very efficient for frequency analysis tasks commonly used in text processing and data analysis.

## Codebyte Example: Building an Employee Database

This example shows how to use `unordered_map` to create a simple employee database system for quick employee information retrieval:

```codebyte/cpp
#include <iostream>
#include <unordered_map>
#include <string>

struct Employee {
  std::string name;
  std::string department;
  double salary;

  Employee() : name(""), department(""), salary(0.0) {}  // Default constructor
  Employee(const std::string& n, const std::string& dept, double sal)
    : name(n), department(dept), salary(sal) {}
};


int main() {
  // Create employee database using employee ID as key
  std::unordered_map<int, Employee> employeeDB;

  // Add employees to database
  employeeDB.emplace(1001, Employee("Alice Johnson", "Engineering", 75000.0));
  employeeDB.emplace(1002, Employee("Bob Smith", "Marketing", 65000.0));
  employeeDB.emplace(1003, Employee("Carol Davis", "Engineering", 80000.0));
  employeeDB.emplace(1004, Employee("David Wilson", "Sales", 60000.0));

  // Function to search for employee
  auto searchEmployee = [&](int id) {
    auto it = employeeDB.find(id);
    if (it != employeeDB.end()) {
      const Employee& emp = it->second;
      std::cout << "Employee Found:" << std::endl;
      std::cout << "ID: " << id << std::endl;
      std::cout << "Name: " << emp.name << std::endl;
      std::cout << "Department: " << emp.department << std::endl;
      std::cout << "Salary: $" << emp.salary << std::endl;
    } else {
      std::cout << "Employee with ID " << id << " not found." << std::endl;
    }
    std::cout << std::endl;
  };

  // Search for specific employees
  searchEmployee(1002);  // Found
  searchEmployee(1005);  // Not found

  // Update employee information
  if (employeeDB.find(1001) != employeeDB.end()) {
    employeeDB[1001].salary = 78000.0;  // Give Alice a raise
    std::cout << "Updated Alice's salary to $" << employeeDB[1001].salary << std::endl;
  }

  // Display all employees by department
  std::cout << "\nEngineering Department Employees:" << std::endl;
  for (const auto& pair : employeeDB) {
    if (pair.second.department == "Engineering") {
      std::cout << "ID: " << pair.first << ", Name: " << pair.second.name
                << ", Salary: $" << pair.second.salary << std::endl;
    }
  }

  return 0;
}
```

This example demonstrates a real-world application where `unordered_map` serves as an efficient database for employee records. The constant-time lookup makes it ideal for systems that need to frequently access employee information by ID, such as payroll systems or HR applications.

## Frequently Asked Questions

### 1. What is the difference between `map` and `unordered_map`?

A `map` maintains elements in sorted order using a balanced binary search tree (typically red-black tree), providing `O(log n)` operations, while `unordered_map` uses a hash table with `O(1)` average-case operations but no ordering guarantees.

### 2. When should I use `unordered_map` over `map`?

Use `unordered_map` when you need faster lookup times and don't require the elements to be in sorted order. It's ideal for scenarios like caching, frequency counting, and database indexing where performance is critical.

### 3. Can I use custom objects as keys in `unordered_map`?

Yes, but you need to provide a custom hash function and equality operator for your custom type. The hash function should be provided as a template parameter or through specialization of `std::hash`.
