---
Title: 'Mutable Variables'
Description: 'Mutable variables are variables that can be modified even within constant functions.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Functions'
  - 'Values'
  - 'Variable Types'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **mutable variables** are variables that can be modified even within constant functions, useful for managing internal state flexibly.

## Syntax

To declare a variable as mutable, the `mutable` keyword needs to be placed before the variable type:

```pseudo
mutable type name;
```

- `type`: The type of the variable (e.g., `int`, `char`).
- `name`: The name of the variable.

## Example

In the example below, `accessCount` is marked `mutable`, allowing it to be modified within the constant `displayData()` function:

```cpp
#include <iostream>
#include <string>

class Data {
public:
  Data(std::string value) : data(value), accessCount(0) {}

  void displayData() const {
    ++accessCount; // Modification allowed due to 'mutable'
    std::cout << "Data: " << data << ", Access count: " << accessCount << std::endl;
  }

private:
  std::string data;
  mutable int accessCount; // Can be modified in constant methods
};

int main() {
  Data d("Sample");
  d.displayData();
  d.displayData();
  return 0;
}
```

The above code produces the following output:

```shell
Data: Sample, Access count: 1
Data: Sample, Access count: 2
```

Here, even though `displayData()` is a constant member function, `accessCount` can be incremented due to its `mutable` declaration.

## Codebyte Example

The following codebyte example demonstrates the usage of mutable variables:

```codebyte/cpp
#include <iostream>

class Counter {
public:
  Counter() : count(0) {}

  void increment() const {
    ++count;  // 'count' is mutable, so this modification is allowed in this constant method
  }

  int getCount() const {
    return count;
  }

private:
  mutable int count;
};

int main() {
  Counter counter;
  counter.increment();
  counter.increment();
  std::cout << "Count: " << counter.getCount() << std::endl;
  return 0;
}
```
