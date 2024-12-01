---
Title: 'Exceptions'
Description: 'Exception is a runtime error that occurs during the execution of a program. If not handled, it stops the program execution.'
Subjects:
  - 'Computer Science'
  - 'Game Development'
Tags:
  - 'Catch'
  - 'Errors'
  - 'Exceptions'
  - 'Try'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, an **exception** is a runtime error that occurs during the execution of a program. If not handled, it stops the program execution. The computer will create an `exception`, and if the code does not have a way to handle it, then the program will stop executing due to the error.

## Catching an Exception

The function `getString()` as defined below will throw an exception if an index outside the allowable bounds is attempted to be accessed.

```codebyte/cpp
#include <iostream>

std::string getString(std::string values[], int index) {
  return values[index];
}

int main() {
  std::string words[] = {"One", "Two", "Three"};

  // This is fine, and will print the string "One"
  std::cout << getString(words, 0);

  // This is not fine, and will throw an exception
  std::cout << getString(words, 6);

  return 0;
}
```

Errors, when uncaught, will cause a program to immediately stop. This behavior can be prevented by wrapping the code which might emit an error in a `try` block, and providing at least one `catch` block to execute if the code throws the error. Look at the improvement below:

```codebyte/cpp
#include <iostream>

std::string getString(std::string values[], int index) {
  return values[index];
}

int main() {
  std::string words[] = {"One", "Two", "Three"};

  try {
    // "One" will be printed
    std::cout << getString(words, 0);

    // This line will throw an exception and immediately move program execution to the catch block
    std::cout << getString(words, 6);
  }
  catch (...) {
    // "Some sort of error has occurred!" will be sent to the buffer
    std::cout << "Some sort of error has occurred!";
  }

  return 0;
}
```

The parenthesized ellipsis above indicate that the `catch` should try to catch any and all errors. It is possible be more specific by replacing the ellipsis with the error type that would be thrown for common inputs:

- `catch (std::length_error)` would catch the specific error that will be thrown
- `catch (std::length_error errorName)` would not only catch the same error, but give us access to the error object inside the `catch` block with the variable `errorName`

It is possible to catch multiple types of exception by specifying multiple catch blocks:

```cpp
int main() {
  try {
    // Code goes here
  }
  catch (int intErrorVariable) {
    // The thrown error was of type int
  }
  catch (std::exception exceptionVariable) {
    // The thrown error was of type exception
    std::cout << exceptionVariable.what();
  }
  catch (...) {
    // The ellipsis
  }
}
```

This example also names the exceptions so that the exception may be accessed during the catch block. If the exception is of type `std::exception` (or one of the classes which inherit from it), `.what()` can be called on the caught exception to read the error message.

## Throwing an Exception

While one side of the exceptional coin is catching exceptions, the other side is throwing them. Since user input is often unpredictable, it is important to handle bad data with grace.

The `sqrt()` function provided by the `math.h` library calculates square roots, however it will return `nan` for the square root of negative numbers. The example below creates a custom `mySqrt()` function so that an exception is thrown when a negative number is passed in as a parameter. This allows us to `catch` it in our `main` block rather than testing if the returned valued is equal to `nan`.

While it is possible to use `throw` with many data types, it is common to throw a runtime error. The syntax can be seen in the example below:

```codebyte/cpp
#include <iostream>
#include <math.h>

float mySqrt(float value) {
  if (value < 0) {
    throw std::runtime_error("Negative numbers not allowed");
  }

  return sqrt(value);
}

int main() {
  float posNumber = 4.41;
  float negNumber = -1.0;

  try {
    std::cout << "Square root of " << posNumber << " is " << mySqrt(posNumber) << "\n";
    std::cout << "Square root of " << negNumber << " is " << mySqrt(negNumber) << "\n";
  }
  catch (std::runtime_error error) {
    std::cout << "ERROR: " << error.what() << "\n";
  }

  return 0;
}
```

This program will run, and output the following:

```shell
Square root of 4.41 is 2.1
ERROR: Negative numbers not allowed
```
