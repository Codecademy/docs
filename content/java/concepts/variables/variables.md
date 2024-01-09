---
Title: 'Variables'
Description: 'Variables are used whenever there’s a need to store a piece of data and ensures code re-usability.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Variables'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Variables** are used whenever there’s a need to store a piece of data. A variable contains data that can be used in the program elsewhere. Using variables also ensures code re-usability since it can be used to replace the same value in multiple places.

## Declaring a Variable

To declare a variable in Java, any of these three keywords can be used along with a variable name:

- The data type.
- The variable name.
- The value.

```java
int age = 28;
char grade = 'A';
boolean late = true;
byte b = 20;
long num1 = 1234567;
short no = 10;
float k = (float)12.5;
double pi = 3.14;
```

The equal sign `=` is used to assign a value to a variable. After the initial assignment is made, the value of a variable can be updated to new values as needed.

## Types of Variables
 
 To declare a variable in Java, any of these three types can be used, each serving a different purpose:

### 1. Local Variables

Local variables are declared within a method or a block of code and are only accessible within that scope.

```java
void exampleMethod() {
    int localVar = 5;
    // localVar can only be used within this method
}
```
### 2. Instance Variables

Instance variables are declared within a class but outside any method. Each instance of the class has its own copy of the variable.

```java
public class MyClass {
    int instanceVar = 10;
    // Each instance of MyClass has its own instanceVar
}
```
### 3. Static Variables

Static variables belong to the class rather than instances of the class. They are shared among all instances of the class.

```java
public class SharedClass {
    static int staticVar = 100;
    // All instances of SharedClass share the same staticVar
}
```