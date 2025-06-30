---
Title: 'Operators'
Description: 'Perform operations on operands to manipulate data, make calculations, and control program flow in C++ programming.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arithmetic'
  - 'Logic'
  - 'Operators'
  - 'Programming'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Operators** are special symbols in C++ that perform specific operations on one or more operands ([variables](https://www.codecademy.com/resources/docs/cpp/variables), constants, or expressions). They are fundamental building blocks that enable programmers to manipulate data, perform calculations, make comparisons, and control program flow. Operators take operands as input and produce a result based on the operation being performed.

C++ operators are extensively used in various programming scenarios including mathematical calculations, conditional statements, loops, memory management, and data manipulation. They provide a concise and efficient way to express complex operations, making code more readable and maintainable. From simple arithmetic in calculators to complex logical operations in algorithms, operators form the backbone of computational logic in C++ programming.

## Arithmetic Operators

**Arithmetic operators** perform mathematical operations on numeric operands. These operators work with integers, floating-point numbers, and other numeric data types to execute basic mathematical calculations.

| Name           | Symbol | Description                                  |
| -------------- | ------ | -------------------------------------------- |
| Addition       | `+`    | Adds two operands together                   |
| Subtraction    | `-`    | Subtracts the second operand from the first  |
| Multiplication | `*`    | Multiplies two operands                      |
| Division       | `/`    | Divides the first operand by the second      |
| Modulo         | `%`    | Returns the remainder after integer division |
| Increment      | `++`   | Increases the value of the operand by 1      |
| Decrement      | `--`   | Decreases the value of the operand by 1      |

### Example

The following code demonstrates the use of basic arithmetic and increment/decrement operators in C++, performing addition, subtraction, multiplication, division, modulo, pre-increment, and post-decrement on two integer variables and printing the results:

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 15, b = 4;

  cout << "Addition: " << (a + b) << endl;
  cout << "Subtraction: " << (a - b) << endl;
  cout << "Multiplication: " << (a * b) << endl;
  cout << "Division: " << (a / b) << endl;
  cout << "Modulo: " << (a % b) << endl;

  cout << "Pre-increment: " << (++a) << endl;
  cout << "Post-decrement: " << (b--) << endl;

  return 0;
}
```

The output of this code will be:

```shell
Addition: 19
Subtraction: 11
Multiplication: 60
Division: 3
Modulo: 3
Pre-increment: 16
Post-decrement: 4
```

## Relational Operators

**Relational operators** compare two operands and return a boolean value (`true` or `false`) based on the relationship between them. These operators are commonly used in conditional statements and loops to make decisions.

| Name                     | Symbol | Description                                              |
| ------------------------ | ------ | -------------------------------------------------------- |
| Equal to                 | `==`   | Checks if two operands are equal                         |
| Not equal to             | `!=`   | Checks if two operands are not equal                     |
| Greater than             | `>`    | Checks if left operand is greater than right             |
| Less than                | `<`    | Checks if left operand is less than right                |
| Greater than or equal to | `>=`   | Checks if left operand is greater than or equal to right |
| Less than or equal to    | `<=`   | Checks if left operand is less than or equal to right    |

### Example

The following code demonstrates the use of relational operators in C++ by comparing two integer variables `x` and `y`, and printing the results of equality, inequality, and relational comparisons:

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 10, y = 20;

  cout << "x == y: " << (x == y) << endl;
  cout << "x != y: " << (x != y) << endl;
  cout << "x > y: " << (x > y) << endl;
  cout << "x < y: " << (x < y) << endl;
  cout << "x >= y: " << (x >= y) << endl;
  cout << "x <= y: " << (x <= y) << endl;

  return 0;
}
```

The output of this code is:

```shell
x == y: 0
x != y: 1
x > y: 0
x < y: 1
x >= y: 0
x <= y: 1
```

## Logical Operators

**Logical operators** perform logical operations on boolean operands or expressions that evaluate to boolean values. They are essential for combining multiple conditions and implementing complex decision-making logic.

| Name        | Symbol | Description                                       |
| ----------- | ------ | ------------------------------------------------- |
| Logical AND | `&&`   | Returns true only if both operands are true       |
| Logical OR  | `\|\|` | Returns true if at least one operand is true      |
| Logical NOT | `!`    | Returns the opposite boolean value of the operand |

### Example

This code demonstrates the use of logical operators in C++ by evaluating logical AND (`&&`), OR (`||`), and NOT (`!`) operations on two boolean variables `p` and `q`, and printing the results:

```cpp
#include <iostream>
using namespace std;

int main() {
  bool p = true, q = false;

  cout << "p && q: " << (p && q) << endl;
  cout << "p || q: " << (p || q) << endl;
  cout << "!p: " << (!p) << endl;
  cout << "!q: " << (!q) << endl;

  return 0;
}
```

The output of this code is as follows:

```shell
p && q: 0
p || q: 1
!p: 0
!q: 1
```

## Assignment Operators

**Assignment operators** assign values to variables. The basic assignment operator stores a value in a variable, while compound assignment operators perform an operation and then assign the result back to the variable.

| Name                | Symbol | Description                                                  |
| ------------------- | ------ | ------------------------------------------------------------ |
| Assignment          | `=`    | Assigns the right operand value to left operand              |
| Add and assign      | `+=`   | Adds right operand to left operand and assigns result        |
| Subtract and assign | `-=`   | Subtracts right operand from left operand and assigns result |
| Multiply and assign | `*=`   | Multiplies left operand by right operand and assigns result  |
| Divide and assign   | `/=`   | Divides left operand by right operand and assigns result     |
| Modulo and assign   | `%=`   | Performs modulo operation and assigns result                 |

### Example

This code demonstrates the use of compound assignment operators in C++ by performing a series of arithmetic operations (`+=`, `-=`, `*=`, `/=`) on an integer variable `num` and printing its updated value after each operation:

```cpp
#include <iostream>
using namespace std;

int main() {
  int num = 10;

  cout << "Initial value: " << num << endl;

  num += 5;
  cout << "After += 5: " << num << endl;

  num -= 3;
  cout << "After -= 3: " << num << endl;

  num *= 2;
  cout << "After *= 2: " << num << endl;

  num /= 4;
  cout << "After /= 4: " << num << endl;

  return 0;
}
```

The output generated by this code will be:

```shell
Initial value: 10
After += 5: 15
After -= 3: 12
After *= 2: 24
After /= 4: 6
```

## Bitwise Operators

**Bitwise operators** perform operations on individual bits of integer operands. They manipulate data at the binary level and are commonly used in system programming, embedded systems, and optimization techniques.

| Name        | Symbol | Description                                               |
| ----------- | ------ | --------------------------------------------------------- |
| Bitwise AND | `&`    | Performs AND operation on each pair of corresponding bits |
| Bitwise OR  | `\|`   | Performs OR operation on each pair of corresponding bits  |
| Bitwise XOR | `^`    | Performs XOR operation on each pair of corresponding bits |
| Bitwise NOT | `~`    | Flips all bits (1 becomes 0, 0 becomes 1)                 |
| Left shift  | `<<`   | Shifts bits to the left by specified positions            |
| Right shift | `>>`   | Shifts bits to the right by specified positions           |

### Example

The following code demonstrates the use of bitwise operators in C++ by performing operations like AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), left shift (`<<`), and right shift (`>>`) on two integers `a` and `b`, and displaying the results of each operation:

```cpp
#include <iostream>
using namespace std;

int main() {
  int a = 12, b = 7;  // 12 = 1100, 7 = 0111 in binary

  cout << "a & b: " << (a & b) << endl;    // 0100 = 4
  cout << "a | b: " << (a | b) << endl;    // 1111 = 15
  cout << "a ^ b: " << (a ^ b) << endl;    // 1011 = 11
  cout << "~a: " << (~a) << endl;          // Bitwise NOT
  cout << "a << 2: " << (a << 2) << endl;  // Left shift by 2
  cout << "a >> 2: " << (a >> 2) << endl;  // Right shift by 2

  return 0;
}
```

The output by this code will be:

```shell
a & b: 4
a | b: 15
a ^ b: 11
~a: -13
a << 2: 48
a >> 2: 3
```

## Codebyte Example: Student Grade Calculator

This example demonstrates how different operator types work together in a practical application that calculates and categorizes student grades:

```codebyte/cpp
#include <iostream>
using namespace std;

int main() {
  // Arithmetic operators for calculations
  int math = 85, science = 92, english = 78;
  int totalMarks = math + science + english;
  double average = totalMarks / 3.0;

  // Assignment operators for score adjustment
  int bonus = 5;
  average += bonus;  // Add bonus points

  // Relational and logical operators for grade determination
  char grade;
  bool passed = (average >= 60);

  if (average >= 90 && passed) {
    grade = 'A';
  } else if (average >= 80) {
    grade = 'B';
  } else if (average >= 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  // Bitwise operator for status flag
  int status = 0;
  status |= (1 << 0);  // Set bit 0 for "calculated"
  if (passed) {
    status |= (1 << 1); // Set bit 1 for "passed"
  }

  cout << "Total Marks: " << totalMarks << endl;
  cout << "Average (with bonus): " << average << endl;
  cout << "Grade: " << grade << endl;
  cout << "Status: " << (passed ? "Passed" : "Failed") << endl;

  return 0;
}
```

This example showcases arithmetic operators calculating the total and average, assignment operators adding bonus points, relational and logical operators determining pass/fail status and grades, and bitwise operators managing status flags in a single comprehensive program.

## Frequently Asked Questions

### 1. What is the difference between `++i` and `i++`?

`++i` (pre-increment) increments the variable first and then returns the new value, while `i++` (post-increment) returns the current value first and then increments the variable.

### 2. Can I use the modulo operator with floating-point numbers?

No, the modulo operator (`%`) only works with integer types in C++. For floating-point remainder operations, use the `fmod()` function from the `<cmath>` library.

### 3. Why does `5 / 2` return `2` instead of `2.5`?

When both operands are integers, C++ performs integer division and truncates the decimal part. To get the decimal result, make at least one operand a floating-point number: `5.0 / 2` or `5 / 2.0`.

### 4. What happens with bitwise operators on negative numbers?

Bitwise operators work on the binary representation of numbers. For negative numbers, C++ uses two's complement representation, which can produce unexpected results for beginners. The bitwise NOT operator (`~`) flips all bits, including the sign bit.

### 5. How do logical operators handle non-boolean values?

In C++, any non-zero value is considered `true` in a boolean context, and zero is considered `false`. Logical operators can work with any data type, converting them to boolean values for evaluation.
