---
Title: 'emplace()'
Description: 'Constructs and inserts a new element directly into the set using in-place construction'
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

The **`emplace()`** method is a member function of the C++ `std::set` container that constructs and inserts a new element directly into the set. Unlike traditional insertion methods, `emplace()` constructs the element in-place using the provided arguments, avoiding unnecessary copy or move operations and improving performance by eliminating temporary object creation.

## Syntax of C++ `emplace()`

```pseudo
std::pair<iterator, bool> emplace(Args&&... args);
```

**Parameters:**

- `args`: Arguments forwarded to the constructor of the element to be constructed and inserted

**Return value:**

Returns a `std::pair` consisting of:

- `iterator`: Points to the inserted element, or to the existing element if no insertion occurred
- `bool`: `true` if insertion took place, `false` if the element already existed

## Example 1: Basic `emplace()` Usage

This example demonstrates the fundamental usage of `emplace()` with integer elements:

```cpp
#include <iostream>
#include <set>

int main() {
  std::set<int> numbers;

  // Insert elements using emplace()
  auto result1 = numbers.emplace(10);
  auto result2 = numbers.emplace(20);
  auto result3 = numbers.emplace(10); // Duplicate element

  // Check insertion results
  std::cout << "Inserted 10: " << result1.second << std::endl;
  std::cout << "Inserted 20: " << result2.second << std::endl;
  std::cout << "Inserted 10 again: " << result3.second << std::endl;

  // Display set contents
  std::cout << "Set contains: ";
  for (const auto& num : numbers) {
    std::cout << num << " ";
  }
  std::cout << std::endl;

  return 0;
}
```

The output of this code is:

```shell
Inserted 10: 1
Inserted 20: 1
Inserted 10 again: 0
Set contains: 10 20
```

This example shows how `emplace()` constructs elements directly in the set. The first insertion of 10 succeeds, but the second attempt fails because sets only contain unique elements.

## Example 2: Student Grade Management with `emplace()`

This example demonstrates using `emplace()` in a real-world scenario for managing student grades:

```cpp
#include <iostream>
#include <set>
#include <string>

struct Student {
  std::string name;
  int grade;

  Student(const std::string& n, int g) : name(n), grade(g) {}

  // Comparison operator for set ordering
  bool operator<(const Student& other) const {
    return grade > other.grade; // Higher grades first
  }
};

int main() {
  std::set<Student> topStudents;

  // Add students using emplace() - constructs Student objects in-place
  auto result1 = topStudents.emplace("Alice", 95);
  auto result2 = topStudents.emplace("Bob", 88);
  auto result3 = topStudents.emplace("Carol", 92);
  auto result4 = topStudents.emplace("Alice", 90); // Same name, different grade

  std::cout << "Students added successfully:" << std::endl;
  std::cout << "Alice (95): " << result1.second << std::endl;
  std::cout << "Bob (88): " << result2.second << std::endl;
  std::cout << "Carol (92): " << result3.second << std::endl;
  std::cout << "Alice (90): " << result4.second << std::endl;

  // Display top students (sorted by grade descending)
  std::cout << "\nTop Students Ranking:" << std::endl;
  int rank = 1;
  for (const auto& student : topStudents) {
    std::cout << rank++ << ". " << student.name
              << " (Grade: " << student.grade << ")" << std::endl;
  }

  return 0;
}
```

The output of this code is:

```shell
Students added successfully:
Alice (95): 1
Bob (88): 1
Carol (92): 1
Alice (90): 1

Top Students Ranking:
1. Alice (Grade: 95)
2. Carol (Grade: 92)
3. Bob (Grade: 88)
4. Alice (Grade: 90)
```

This example shows how `emplace()` can efficiently construct complex objects directly in the set, avoiding the overhead of creating temporary `Student` objects.

## Codebyte Example: Product Inventory System with `emplace()`

This example demonstrates using `emplace()` for managing a product inventory system with unique product codes:

```cpp
#include <iostream>
#include <set>
#include <string>
#include <iomanip>

struct Product {
  std::string code;
  std::string name;
  double price;

  Product(const std::string& c, const std::string& n, double p)
    : code(c), name(n), price(p) {}

  // Products are ordered by code for efficient lookup
  bool operator<(const Product& other) const {
    return code < other.code;
  }
};

int main() {
  std::set<Product> inventory;

  // Add products using emplace() - avoids creating temporary Product objects
  std::cout << "Adding products to inventory:" << std::endl;

  auto laptop = inventory.emplace("LAP001", "Gaming Laptop", 1299.99);
  auto mouse = inventory.emplace("MOU001", "Wireless Mouse", 79.99);
  auto keyboard = inventory.emplace("KEY001", "Mechanical Keyboard", 149.99);
  auto duplicate = inventory.emplace("LAP001", "Office Laptop", 899.99);

  std::cout << "Gaming Laptop added: " << laptop.second << std::endl;
  std::cout << "Wireless Mouse added: " << mouse.second << std::endl;
  std::cout << "Mechanical Keyboard added: " << keyboard.second << std::endl;
  std::cout << "Duplicate laptop code: " << duplicate.second << std::endl;

  // Display inventory sorted by product code
  std::cout << "\nCurrent Inventory:" << std::endl;
  std::cout << std::left << std::setw(8) << "Code"
            << std::setw(20) << "Name"
            << std::right << std::setw(10) << "Price" << std::endl;
  std::cout << std::string(38, '-') << std::endl;

  for (const auto& product : inventory) {
    std::cout << std::left << std::setw(8) << product.code
              << std::setw(20) << product.name
              << std::right << std::setw(10) << std::fixed
              << std::setprecision(2) << "$" << product.price << std::endl;
  }

  return 0;
}
```

This example illustrates how `emplace()` ensures product code uniqueness in an inventory system, preventing duplicate entries while maintaining efficient sorted order.

## Frequently Asked Questions

### 1. What's the difference between `emplace()` and `insert()`?

`emplace()` constructs the element in-place using the provided arguments, while `insert()` requires an already constructed object. `emplace()` can be more efficient as it avoids creating temporary objects.

### 2. What happens if I try to emplace a duplicate element?

The `emplace()` operation fails and returns a pair with the iterator pointing to the existing element and `false` indicating no insertion occurred.

### 3. Can `emplace()` invalidate iterators?

No, `emplace()` does not invalidate any existing iterators or references in the set.
