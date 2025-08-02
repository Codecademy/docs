---
Title: 'Logical Operators'
Description: 'Logical operators perform logical operations such as AND, OR, and NOT to combine or modify boolean expressions in C++.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Logic'
  - 'Operators'
  - 'Boolean'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Logical operators** in C++ are used to perform logical operations on boolean expressions or values that can be evaluated as true or false. These [operators](https://www.codecademy.com/resources/docs/cpp/operators) are essential for creating complex conditional statements, controlling program flow, and implementing decision-making logic in applications. There are 3 logical operators in C++:
- Logical AND (`&&`)
- Logical OR (`||`)
- Logical NOT (`!`)

## Logical AND (`&&`)

The logical AND operator `&&` returns true only when both operands are true. It uses short-circuit evaluation, meaning if the first operand is false, the second operand is not evaluated. 

### Syntax of `&&`

```pseudo
expression1 && expression2
```

Here:

- `expression1` and `expression2` are boolean expressions or values that evaluate to true or false

### Example of Logical AND (`&&`) Operator

```cpp
#include <iostream>
using namespace std;

int main() {
  int age = 25;
  bool hasLicense = true;
    
  // Check if person can drive
  if (age >= 18 && hasLicense) {
    cout << "Person can drive legally." << endl;
  } else {
    cout << "Person cannot drive legally." << endl;
  }
    
  return 0;
}
```

The output of this code is:

```shell
Person can drive legally.
```

## Logical OR (`||`)

The logical OR operator `||` returns true if at least one of the operands is true. It also uses short-circuit evaluation, meaning if the first operand is true, the second operand is not evaluated.

### Syntax of `||`

```pseudo
expression1 || expression2
```

### Example of Logical OR (`||`) Operator

```cpp
#include <iostream>
using namespace std;

int main() {
  int day = 6; // Saturday
  bool isHoliday = false;
    
  // Check if it's a weekend or holiday
  if (day == 6 || day == 7 || isHoliday) {
    cout << "No work today!" << endl;
  } else {
    cout << "Work day." << endl;
  }
    
  return 0;
}
```

The output of this code is:

```shell
No work today!
```

## Logical NOT (`!`)

The logical NOT operator `!` reverses the boolean value of its operand. If the operand is true, it returns false, and vice versa.

### Syntax of `!`

```pseudo
!expression1
```

### Example of Logical NOT (`!`) Operator

```cpp
#include <iostream>
using namespace std;

int main() {
  bool isRaining = false;
    
  if (!isRaining) {
    cout << "Perfect weather for a walk!" << endl;
  } else {
    cout << "Better stay inside." << endl;
  }
    
  return 0;
}
```

The output of this code is:

```shell
Perfect weather for a walk!
```

## Codebyte Example

The following Codebyte demonstrates how logical operators are used in a real-world scenario such as verifying login credentials:

```codebyte/cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
  string username = "admin";
  string password = "secure123";
  bool isActive = true;
  int loginAttempts = 2;
  int maxAttempts = 3;
    
  // Input credentials
  string inputUser = "admin";
  string inputPass = "secure123";
    
  // Check authentication using logical operators
  bool validCredentials = (inputUser == username) && (inputPass == password);
  bool accountAccessible = isActive && (loginAttempts < maxAttempts);
  bool canLogin = validCredentials && accountAccessible;
    
  cout << "Authentication Results:" << endl;
  cout << "Valid credentials: " << (validCredentials ? "Yes" : "No") << endl;
  cout << "Account accessible: " << (accountAccessible ? "Yes" : "No") << endl;
  cout << "Login successful: " << (canLogin ? "Yes" : "No") << endl;
    
  // Demonstrate NOT operator
  if (!canLogin) {
    cout << "Access denied!" << endl;
  } else {
    cout << "Welcome to the system!" << endl;
  }
    
  // Demonstrate OR operator for error handling
  if (!validCredentials || !accountAccessible) {
    cout << "Login failed due to: ";
    if (!validCredentials) cout << "Invalid credentials ";
    if (!accountAccessible) cout << "Account issues ";
      cout << endl;
  }
    
  return 0;
}
```

The following table summarizes the three logical operators in C++:

| Symbol | Name        | Description                                           | Implementation Example |
| ------ | ----------- | ----------------------------------------------------- | ---------------------- |
| `&&`   | Logical AND | Returns true if both operands are true                | `a && b`               |
| `\|\|` | Logical OR  | Returns true if at least one operand is true          | `a \|\| b`             |
| `!`    | Logical NOT | Returns the opposite boolean value of the operand     | `!a`                   |
