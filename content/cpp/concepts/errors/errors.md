---
Title: 'Errors'
Description: 'In C++, errors help with locating and correcting problems within the source code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Objects'
  - 'Constructors'
  - 'OOP'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

In C++, **error** messages and their different types help detect and debug issues in the code. Errors can be detected before, during, or after the code has been compiled and executed. Since there are many different errors that could occur, they are classified into groups.

## Syntax Errors

Syntax errors occur when there is a syntactical error somewhere in the code, like in the example shown below:

```cpp
int num = 28
// Error: missing ';'
```

## Link-Time Errors

A link-time, or linker, error, occurs when the executable for the program cannot be created. This happens when the linker can't combine all the object files into an executable program.

An example of this is shown below, where the function `peopleReadingThis()` is declared but not defined, and calling it generates an error. This is a common occurrence of the link-time error:

```cpp
int person = 1;

string peopleReadingThis(int);

peopleReadingThis(person);
// Error: expecting a definition
```

Although the `person` variable is a valid argument for `peopleReadingThis()`, the function's body was never defined and so calling it causes the error.

## Run-Time Errors

An error that occurs after successful execution of the program is called a run-time error. This can happen when excessive memory is used.

```cpp
int people = 293049858920384839904;
// Error: overflow
```

Or, when trying to divide by 0:

```cpp
int divideByZero = 22/0;
// Error: division by zero
```

## Logic Error

When a program doesn't yield expected results, it is often due to a logic error. These kind of errors can only be found by the programmer or code reviewer.

The following example should print `Someone is reading this` when `person` is set to one or greater. Otherwise, it should print `Not a single person is reading this`:

```cpp
int person = 1;

if (person > 1) {
  std::cout << "Someone is reading this";
}
else {
  std::cout << "Not a single person is reading this";
}
```

Output:

```shell
Not a single person is reading this
```

The example above does not generate any errors. But, it doesn't give the correct answer. In order for this to yield the correct result, the `>` symbol needs to be a `>=' symbol.
