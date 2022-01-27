---
Title: 'Errors'
Description: 'In Java there are two subclasses of the java.lang.Throwable class, Errors and Exceptions.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Debugging'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, there are two subclasses of the `java.lang.Throwable` class:

- The `Error` class shows illegal operations in the code that cause an abnormal state in the program. An error is a serious abnormality in the program that the programmer should not try and `catch` during runtime.
- The `Exception` class refers to an abnormal or unexpected event that disrupts the flow of the program. Exceptions are those conditions that a reasonable programmer might try to `catch`.

## Try Catch Syntax

A `try...catch` block is a means for a programmer to encapsulate a block of code and "catch" a potential `java.lang.Throwable` class being thrown before it halts execution of the program. Note that programs should not `try...catch` `Errors`, only `Exceptions`.

```java
class DivideByZero {
  public static void main(String[] args) {
    int a = 27, b = 0;
    try {
      // The code wrapped by the try block will run until an Exception is thrown
      System.out.println("I'm executed first!");
      int c = a / b;
      System.out.println("I'm never executed!");
    } catch (ArithmeticException e) {
      // If the above Exception is thrown, code will resume execution here
      // This block is not run if no Exception is thrown
      System.out.println("Exception Caught!");
      e.printStackTrace();
    }
      // Execution resumes immediately after the try...catch block
      System.out.println("Done!");
  }
}
```

## Example Errors

- `NoClassDefFoundError` - Java cannot find the file with the class containing the `main()` method.
- `NoSuchMethodFoundError` - Java cannot find a method being called in the program.
- `ClassFormatError` - Java cannot read a class file or cannot interpret it.
- `IncompatibleClassChangeError` - Code has tried to change a base class after a child class has been initalized.
- `NoSuchFieldError` - Code has tried to access a field in an object and the field no longer exists.

## Example Exceptions

- The `ArrayIndexOutOfBoundsException` occurs when an attempt to access an array is made with an index outside the established values.
- The `StringIndexOutOfBoundsException` occurs when an attempt is made to access an out-of-range part of a string.
- The `NullPointerException` occurs when an attempt is made to access an object reference that does not have an instance assigned to it.
- The `ArrayStoreException` occurs when the rules for casting elements into arrays are violated.
- The `ClassCastException` occurs when an object is cast to the wrong class.
- The `FileNotFoundException`occurs when a file with the specified path cannot be found.
- The `AccessControlException` occurs when access to a system resource (file, network, etc.) has been denied.
- The `EOFException` occurs when the end of a file or stream during input is unexpectedly reached.
- The `NumberFormatException` occurs when an attempt is made to convert a string to a numeric type and the string does not contain a number.
