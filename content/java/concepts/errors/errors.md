---
Title: 'Errors'
Description: ''
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

In Java there are two subclasses of the java.lang.Throwable class, Errors and Exceptions. Errors are caused by illegal operations in the code that cause an abnormal state in the program. Exceptions refer to an abnormal or unexpected event that disrupts the flow of the program. An error is a serious abnormality in the program that the programmer should not try and `catch` during runtime. Exceptions are those conditions that a reasonable programmer might try to `catch`.

## Try Catch Syntax

A `try...catch` block is a means for a programmer to encapsulate a block of code and "catch" a potential java.lang.Throwable class being thrown before it halts execution of the program. Note that programs should not `try...catch` Errors, only Exceptions.

```java
class DivideByZero {
  public static void main(String[] args)
  {
    int a = 27, b = 0;
    try {
        // The code wrapped by the try block will run until an Exception is thrown
        System.out.println("I'm executed first!");
        int c = a / b;
        System.out.println("I'm never executed!");
        }
     catch (ArithmeticException e) {
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
