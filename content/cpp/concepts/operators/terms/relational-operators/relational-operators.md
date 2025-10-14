---
Title: 'Relational Operators'
Description: 'Relational operators in C++ compare two values and return a boolean result (true or false) based on the relationship between them.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Booleans'
  - 'Comparison'
  - 'Operators'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Relational operators** (also called comparison operators) compare two values or variables and return a Boolean result: `true` if the specified relationship holds, or `false` otherwise. They are fundamental in decision-making and control flow.

There are 6 relational operators in C++:

- `==` (equal to)
- `!=` (not equal to)
- `>` (greater than)
- `<` (less than)
- `>=` (greater than or equal to)
- `<=` (less than or equal to)

Let's explore each of them in detail.

## EQUAL TO (`==`) Operator

The **equal to** ( `==`) operator determines whether two values are equal. It returns `true` if the values are equal and `false` if they are not.

## NOT EQUAL TO (`!=`) Operator

The **not equal to** (`!=`) operator determines whether two values are unequal. It returns `true` if they are not equal and `false` if they are equal.

## Relational GREATER THAN (`>`)

The **greater than** (`>`) operator determines whether the left operand in an expression is greater than the right operand and returns `true ` if so, `false` if not.

## Relational LESS THAN (`<`)

The **less than** (`<`) operator determines whether the left operand in an expression is less than the right operand and returns `true` if so, `false` if not.

## Relational GREATER THAN OR EQUAL TO (`>=`)

The **greater than or equal to** (`>=`) operator returns `true` if the left operand in an expression is greater than or equal to the right operand. Otherwise it returns `false`.

## Relational LESS THAN OR EQUAL TO (`<=`)

The **less than or equal to** (`<=`) operator returns `true` if the left operand in an expression is less than or equal to the right operand. Otherwise it returns `false`.

## Example

In this example, integers and floats are compared using relational operators, showing how each expression evaluates to `true` or `false`:

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 5;
  int b = 10;
  float c = 5.0;

  cout << "a = 5, b = 10, c = 5.0\n";
  cout << "True = 1, False = 0\n\n";

  cout << "(a == c) equals " << (a == c) << "\n";
  cout << "(b != a) equals " << (b != a) << "\n";
  cout << "(b > a) equals " << (b > a) << "\n";
  cout << "(a < b) equals " << (a < b) << "\n";
  cout << "(a >= c) equals " << (a >= c) << "\n";
  cout << "(b <= a) equals " << (b <= a) << "\n";

  return 0;
}
```

The output of this code is:

```shell
a = 5, b = 10, c = 5.0
True = 1, False = 0

(a == c) equals 1
(b != a) equals 1
(b > a) equals 1
(a < b) equals 1
(a >= c) equals 1
(b <= a) equals 0
```

## Codebyte Example

In this example, multiple relational operators are applied to integer variables to demonstrate element-wise comparisons and their Boolean results:

```codebyte/cpp
#include <iostream>
using namespace std;

int main() {

  int w = 2;
  int x = 4;
  int y = 2;
  int z = 9;

  cout << "w = 2, x = 4, y = 2, z = 9\n";
  cout << "True = 1, False = 0\n\n";

  cout << "(w == y) equals " << (w == y) << "\n";
  cout << "(y != w) equals " << (y != w) << "\n";
  cout << "(x > w) equals " << (x > w) << "\n";
  cout << "(z < x) equals " << (z < x) << "\n";
  cout << "(y >= w) equals " << (y >= w) << "\n";
  cout << "(x <= y) equals " << (x <= y) << "\n";

  return 0;
}
```
