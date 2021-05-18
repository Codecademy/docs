---
Title: "Exceptions in C++"
Subjects:
  - "Computer Science"
  - "Game Development"
Tags:
  - "Catch"
  - "Errors"
  - "Try"
Catalog Content:
  - "https://www.codecademy.com/learn/learn-c-plus-plus"
  - "https://www.codecademy.com/learn/paths/computer-science"
  - "https://github.com/Codecademy-Curriculum/codepedia-content/blob/main/content/language-agnostic/encyclopedia/what-is-an-error.md"
---

## Catching an Exception

The function `getString` as defined below will throw an error if you try to access an index outside the allowable bounds.

```codebyte/cpp
std::string getString(std::string values[], int index) {
    return values[index];
}

int main()
{
    std::string words[] = { "one", "two", "three" };
    
    // this is fine, and will send one to the buffer
    std::cout << getString(words, 0);

    // this is not fine, and will most likely throw a std::length_error
    std::cout << getString(words, 3);

    return 0;
}
```

Errors, when uncaught, will cause your program to immediately stop. This behavior can be prevented by wrapping the code which might emit an error in a `try` block, and providing at least one `catch` block to execute if the code throws the error. Look at the improvement below:

```codebyte/cpp
std::string getString(std::string values[], int index) {
    return values[index];
}

int main()
{
    std::string words[] = { "one", "two", "three" };
    
    try {
      // "one" will be sent to the buffer
      std::cout << getString(words, 0);

      // this line will throw an error and move immediately move program execution to the catch block
      std::cout << getString(words, 3);
    } 
    catch (...) {
      // "Some sort of error has occured!" will be sent to the buffer
      std::cout << "Some sort of error has occured!";
    }

    return 0;
}
```

The parenthesized ellipsis above indicate that the could should try to catch any and all errors. It is possible be more specific by replacing the ellipsis with the error type that would be thrown for common inputs:

* `catch (std::length_error)` would catch the specific error that will be thrown
* `catch (std::length error errorName` would not only catch the same error, but give us access to the error object inside the catch block with the variable `errorName`

It is possible to catch multiple types of exception by specifying multiple catch blocks:

```cpp
int main() {
  try {
    // code goes here
  }
  catch (int intErrorVariable) {
    // the thrown error was of type int
  }
  catch (std::exception exceptionVariable) {
    // the thrown error was of type exception
    std::cout << exceptionVariable.what();
  }
  catch (...) {
    // the ellipsis
  }
}
```

This example also names the exceptions so that you might access the exception during the catch block. If the exception is of type `std::exception` (or one of the classes which inherit from it), you can call `.what()` on the caught exception to read the error message.

## Throwing an Exception

While one side of the exceptional coin is catching exceptions, the other side is throwing them. Since user input is often unpredictable, it is important to handle bad data with grace.

The example below creates a custom `mySqrt` function to wrap around the `sqrt` function. This is done because `sqrt` will not throw an error when it is passed a negative number, rather will return `nan` instead. For this code sample, it is preferable for an error to be thrown so that it can be caught and dealt with within our main code block.

While it is possible to use throw with many data types, it is common to throw a runtime error. The syntax can be seen in the example below:

```codebyte/cpp
#include <math.h>

float mySqrt(float value) {
  if (value < 0) {
    throw std::runtime_error("Negative Numbers Not Allowed");
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

```
Square root of 4.41 is 2.1
ERROR: Negative Numbers Not Allowed
````