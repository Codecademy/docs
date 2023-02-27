---
Title: 'Overloading'
Description: 'Overloading allows for more than one definition of a function or operator in the same scope.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Operators'
  - 'Binary'
  - 'Logical'
  - 'Functions'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Overloading** allows for more than one definition of a [function](https://www.codecademy.com/resources/docs/cpp/functions) or [operator](https://www.codecademy.com/resources/docs/cpp/operators) in the same scope. Respectively, it is called function overloading and operator overloading.

## Function Overloading

Function overloading begins with declaring a function with the same name as a previously declared function but with different parameters.

> **Note:** Each declaration must have different parameters. Only changing the function's return type will not work.

### Syntax

Since a function can be overloaded multiple times, the syntax can look different case-to-case. The following is an outline of what an overloaded function could look like:

```pseudo
functionName(parameters1);
functionName(parameters2);
```

More declarations can be added as needed and a declaration has the following parts:

- `functionName`: The name of the function that is the same for each definition.
- `parameters1` and `parameters2`: Parameters for each definition, these must be different for each definition.

### Example

The following example overloads the `multiply()` function:

```cpp
#include <iostream>
using namespace std;

void multiply(int x, int y) {
  cout << "The product of " << x << " and " << y << " is: " << (x*y) << endl;
}

void multiply(double x, double y) {
  cout << "The product of " << x << " and " << y << " is: " << (x*y) << endl;
}

int main() {
  multiply(20,10);
  multiply(80.2, 90.99);
}
```

This will output:

```shell
The product of 20 and 10 is: 200
The product of 80.2 and 90.99 is: 7297.4
```

## Operator Overloading

Operator overloading redefines built-in operators for user-defined classes. When an overloaded operator is called, the compiler determines which definition to use based on the arguments provided. The following operators can be overloaded:

| Category                | Operators                                                            | Names                                                                                                                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arithmetic              | `+`, `-`, `*`, `/`, `%`, `++`, `—-`                                  | add/positive, subtract/negative, multiply, divide, modulo, increment, decrement                                                                                                                                                       |
| Assignment              | `=`, `+=`,`*=`, `/=`,`-=`, `%=`, `&=`, `^=`, `&#124;=`, `<<=`, `>>=` | assign, add & assign, multiply & assign, divide & assign, subtract & assign, modulo & assign, bitwise AND & assign, bitwise exclusive OR & assign, bitwise inclusive OR & assign, shift bits left & assign, shift bits right & assign |
| Bitwise                 | `&`, `&#124;`, `^`, `~`, `<<`, `>>`                                  | bitwise AND, bitwise inclusive OR, bitwise exclusive OR, bit inversion, shift bits left, shift bits right                                                                                                                             |
| Logical                 | `&&`, `&#124;&#124;`, `!`                                            | logical AND, logical OR, logical NOT                                                                                                                                                                                                  |
| Relational              | `==`, `!=`, `>`, `<`, `>=`, `<=`                                     | equal to, not equal to, greater than, less than, greater than or equal to, less than or equal to                                                                                                                                      |
| Member Access           | `->`, `->*`                                                          | member of pointer, pointer to member of pointer                                                                                                                                                                                       |
| Allocation/Deallocation | `new`, `new[]`, `delete`, `delete[]`                                 | new, new & allocate, delete, delete & allocate                                                                                                                                                                                        |
| Other                   | `,`, `()`, `[]`                                                      | comma, function call, subscript/array index                                                                                                                                                                                           |

The operators below cannot be overloaded:

| Category                 | Operators | Names                                         |
| ------------------------ | --------- | --------------------------------------------- |
| Conditional (or Ternary) | `?`       | conditional                                   |
| Scope                    | `::`      | scope access                                  |
| Member Access            | `.`, `.*` | member of object, pointer to member of object |

### Syntax

```pseudo
class className {
  public:
    returnType operator symbol (arguments) {
      // code goes here
    }
};
```

The `operator` keyword is used along with the following:

- `className`: Name of the class.
- `returnType`: Return type of the function.
- `symbol`: Operator in which to overload.
- `arguments`: Arguments to pass in.

### Codebyte Example

The following codebyte example overloads the plus (`+`) operator within the `Pyramid` class and returns the volume of two pyramids added together:

```codebyte/cpp
#include <iostream>
using namespace std;

class Pyramid {
  public:
  // Defining getters and setters
    double getVolume(void) {
      return (base*height)/3;
    }

    void setBase(double b) {
      base = b;
    }

    void setHeight(double h) {
      height = h;
    }

    // Overload + operator
    Pyramid operator + (const Pyramid& p) {
      Pyramid pyramid;
      pyramid.base = this->base + p.base;
      pyramid.height = this->height + p.height;
      return pyramid;
    }

  private:
    double base;
    double height;
};

int main() {
  // Declare pyramids and volume variables
  Pyramid pyramid1;
  Pyramid pyramid2;
  Pyramid pyramid3;
  double vol = 0.0;

  // Setting pyramid1
  pyramid1.setBase(22.0);
  pyramid1.setHeight(16.0);
  vol = pyramid1.getVolume();
  cout << "Volume of pyramid1 is: " << vol << endl;

  // Setting pyramid2
  pyramid2.setBase(18.0);
  pyramid2.setHeight(14.0);
  vol = pyramid2.getVolume();
  cout << "Volume of pyramid2 is: " << vol << endl;

  // Adding pyramid1 & pyramid2 with overloaded operator
  pyramid3 = pyramid1 + pyramid2;

  // Print out volume of pyramid3
  vol = pyramid3.getVolume();
  cout << "The volume of pyramid3 is: " << vol;
}
```
