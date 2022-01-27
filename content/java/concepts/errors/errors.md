---
Title: 'Errors'
Description: 'In Java situations where things go wrong in the program are predominantly handled by the Error and Exception classes.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Exceptions'
  - 'Debugging'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, situations where things might go wrong in the program are predominantly handled by the following subclasses of the `java.lang.Throwable` class:

- The `Error` class represents illegal operations that cause serious abnormalities in the program and are not recommended to `catch`.
- The `Exception` class refers to abnormal, unexpected events that disrupt the flow of the program but can be reasonably handled by a `catch`-statement.

## In Practice

A `try...catch` block is a means for a programmer to encapsulate a block of code and "catch" a potentially-thrown `Exception` (but never an `Error`) before it halts execution of the program.

```java
class DivideByZero {
  public static void main(String[] args) {
    int a = 27, b = 0;
    try {
      System.out.println("I'm executed first!");
      int c = a / b; // This will throw an exception
      System.out.println("I'm never executed!");
    } catch (ArithmeticException e) {
      System.out.println("Exception Caught!");
      e.printStackTrace();
    }
      System.out.println("Done!");
  }
}
```

In the example above, the code used in the `try` block will run until the `Exception` is thrown by the assignment to the `c` variable because division by zero, 0, is not possible. In the `catch` block, an `ArithmeticException` is thrown and yields a printed message along with details about where the `Exception` can be traced.

## Example Errors

- The `ClassFormatError` occurs when a class file cannot be read or interpreted.
- The `IncompatibleClassChangeError` occurs when a base class is altered after a child class has already been initialized.
- The `NoClassDefFoundError` occurs when the file with the class containing the `main()` method cannot be found.
- The `NoSuchFieldError` occurs when an attempt to access a field in an object is made but the field no longer exists.
- The `NoSuchMethodFoundError` occurs when a method is called in the program but cannot be found.

## Example Exceptions

- The `AccessControlException` occurs when access to a system resource (file, network, etc.) has been denied.
- The `ArrayIndexOutOfBoundsException` occurs when an attempt to access an array is made with an index outside the established values.
- The `ArrayStoreException` occurs when the rules for casting elements into arrays are violated.
- The `ClassCastException` occurs when an object is cast to the wrong class.
- The `EOFException` occurs when the end of a file or stream during input is unexpectedly reached.
- The `FileNotFoundException`occurs when a file with the specified path cannot be found.
- The `NullPointerException` occurs when an attempt is made to access an object reference that does not have an instance assigned to it.
- The `NumberFormatException` occurs when an attempt is made to convert a string to a numeric type and the string does not contain a number.
- The `StringIndexOutOfBoundsException` occurs when an attempt is made to access an out-of-range part of a string.
