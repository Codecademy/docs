---
Title: 'Separate Overload'
Description: 'When operand order changes, separate overloads are required for operators to handle each case correctly.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Operator Overloading'
  - 'Functions'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, each operator overload is treated as a separate function based on its parameter types and order. If the order of operands changes, the compiler expects a different function. Even when performing the same operation, C++ does not automatically reverse or convert the arguments.

This is common when working with binary operators (like `+`) between a class and a built-in type. For example, to support both `SomeClass + someValue` and `someValue + SomeClass`, two separate overloads must be written.

## Syntax

Here’s a syntax of showing how to write two separate overloads for a binary operator when the order of operands can vary:

```pseudo
// Overload for: object + value
ClassName operator+(const ClassName& obj, SomeType value);

// Overload for: value + object
ClassName operator+(SomeType value, const ClassName& obj);
```

- The first overload allows expressions like `object + value`.
- The second overload supports the reverse order: `value + object`.
- These are treated as **distinct functions** in C++, so both must be defined separately if both usage orders are needed.
- `SomeType` can be any type like `int`, `float`, or even another class.

## Example: Using the `+` operator in both operand orders

The following example demonstrates how to overload a binary operator in both operand orders for a class named `Score`. This supports operations like `Score + int` and `int + Score`:

```cpp
#include <iostream>
using namespace std;

class Score {
  private:
    int points;

  public:
    Score(int p) : points(p) {}

    void display() const {
      cout << "Points: " << points << endl;
    }

    // Friend function for Score + int
    friend Score operator+(const Score& s, int extra);

    // Friend function for int + Score
    friend Score operator+(int extra, const Score& s);
};

// Definition for Score + int
Score operator+(const Score& s, int extra) {
  return Score(s.points + extra);
}

// Definition for int + Score
Score operator+(int extra, const Score& s) {
  return Score(extra + s.points);
}

int main() {
  Score s1(50);

  Score result1 = s1 + 20;
  Score result2 = 30 + s1;

  result1.display();
  result2.display();

  return 0;
}
```

The above example will result in the following output:

```shell
Points: 70
Points: 80
```

In this example:

- The `Score` class stores a private `points` value.
- Two separate overloads of the `+` operator are defined to handle different operand orders.
- Each overload is declared as a `friend` to allow direct access to private data.
- This approach ensures that both `Score + value` and `value + Score` expressions compile correctly, as C++ does not automatically reverse the operands.

## Codebyte Example

The following codebyte example overloads the plus (`+`) operator using friend functions to support both `Distance + value` and `value + Distance`. It demonstrates how separate overloads are defined to handle different operand orders. Compile the code to see the output of both operations.

```codebyte/cpp
#include <iostream>
using namespace std;

class Distance {
private:
  int meters;

public:
  Distance(int m) : meters(m) {}

  void show() const {
    cout << meters << " meters" << endl;
  }

  // Friend function: Distance + int
  friend Distance operator+(const Distance& d, int extra);

  // Friend function: int + Distance
  friend Distance operator+(int extra, const Distance& d);
};

// Define Distance + int
Distance operator+(const Distance& d, int extra) {
  return Distance(d.meters + extra);
}

// Define int + Distance
Distance operator+(int extra, const Distance& d) {
  return Distance(extra + d.meters);
}

int main() {
  Distance d1(100);
  Distance d2 = d1 + 50;   // Distance + int
  Distance d3 = 25 + d1;   // int + Distance

  d2.show();
  d3.show();

  return 0;
}
```
