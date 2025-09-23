---
Title: 'Methods'
Description: 'Methods in Java are reusable pieces of code that perform a specific task.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arguments'
  - 'Java'
  - 'Methods'
  - 'Parameters'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Methods** in Java are reusable blocks of code that perform a specific task. They help in breaking down large programs into smaller, reusable sections, making code easier to read, maintain, and debug. A method executes only when it is called.

There are two primary types of methods in Java:

- **User-Defined Methods**: Created by the programmer to perform custom tasks.
- **Standard Library Methods**: Predefined methods provided by Java’s API (Application Programming Interface).

## Declaring a Java Method

The general syntax for declaring a method in Java is:

```pseudo
modifier returnType methodName(parameters) {
  // Method body
  // Statements
  return value; // If returnType is not void
}
```

The syntax includes:

- **Return Type**: The type of the value that is returned from the method.
- **Name**: The name of the method.
- **Parameters** (Optional): Methods can have no, one, or multiple parameters which consist of a [data type](https://www.codecademy.com/resources/docs/java/data-types) and a name.
- **Modifier** (Optional): Modifiers define in which way and from which context a method is callable.
- **Exceptions** (Optional): Exceptions can be thrown by a method to make the caller react to unexpected situations (i.e. a non-existing [file](https://www.codecademy.com/resources/docs/java/files)).
- **Body** (Optional): The body of a method contains all statements the method should execute when being called.

After declaring the method, it can be called using this syntax:

```pseudo
methodName();
```

### Return Type

Methods can return any type of data, such as `int`, `double`, `String`, etc. Additionally, they can return instances of any [class](https://www.codecademy.com/resources/docs/java/classes). If a method shouldn't return a value, it has to be defined with the return type `void`.

### Name

The name of a method should describe as much as possible what the method is doing. Ideally, the programmer calling the method knows what the method does without needing to look at the body. By following the rule that a method should only do one thing, it's also easier to give it a concise name.

A valid name must follow the rules:

- It has to start with a letter or an underscore (`_`) and can contain digits.
- It could also start with a `$` but the specification of the language says that this shouldn't be done.
- It can't have a name of keyword (i.e. `return` or `while`) however keywords can be within the name.

Examples for valid method names:

- `getObject`
- `setNumber`
- `countUntil300`
- `_isValidCharacter`
- `GET_MAX_VALUE`

Examples for invalid method names:

- `123number` (Method names mustn't start with a number)
- `get-object` (Hyphens are not allowed inside a method name)
- `sum_number1&number2` (Ampersands are not allowed inside a method name)
- `assert` (Method names mustn't have the name of a keyword)

By convention, method names start with a verb, and each word after the first word starts with a capitalized letter.

### Parameters

A parameter is described by a data type and a name. With that name, the parameter can be used to access the value inside the method body. A method without any parameters must have empty parenthesis `()` after the method name. Multiple parameters have to be separated by a comma `,`.

Parameters are the definitions inside the parenthesis of a method while _arguments_ are the values provided when the method is called. The values of the arguments are made available via the parameter names inside the method body.

By convention, a method should have a maximum of three parameters. If it's necessary to have more than three it makes sense to create an object which is passed and contains the data.

### Modifier

Modifiers can change how a method is allowed to be called (`public`, `protected`, `private`, `package private`), if the method is working on object state or should be executable without creating an object out of a class (`static`), or if the method is allowed to be replaced by inherited classes (`final`):

```java
public int sum(int number1, int number2) {
  return number1 + number2;
}
```

- Modifier: `public`
- Return type: `int`
- Name: `sum`
- Parameters: `int number1, int number2`
- Body: `return number1 + number2;`

### Exceptions

Methods can throw exceptions. An example of this is trying to access a file that doesn't exist. When calling a method, which throws an exception, the calling method has to take care of that exception or has to throw an exception as well.

Here is an example of how Java throws an exception in a method that could execute a division by 0 and therefore the method has to throw an exception:

```java
public float divide(float dividend, float divisor) throws ArithmeticException {
  return dividend / divisor;
}
```

- Modifiers: `public`
- Return type: `float`
- Name: `divide`
- Parameters: `float dividend, float divisor`
- Thrown exception: `throws ArithmeticException`
- Body: `return dividend / divisor`

### Body

Everything between `{` and `}` is called the body of the method. The body contains the actual code, statements, or logic that is executed when the method is called.

If the method has a return type there needs to be at least one line in the body which returns a value of that type (i.e. `return a+b;`).

Methods also have access to values of the instance of a class when using the word `this`. With `this` other methods of that same class can be called or instance fields of the class can be accessed which hold values that are accessible through all methods of the class.

## Example 1: User-Defined Methods in Java

Here is an example of a user-defined method in Java:

```java
public class UserDefinedExample {
  // User-defined method
  public static int addNumbers(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    int result = addNumbers(10, 20); // Method call
    System.out.println("The sum is: " + result);
  }
}
```

The output will be:

```shell
The sum is: 30
```

## Example 2: Standard Library Methods in Java

This example demonstrates the usage of a standard library method in Java:

```java
public class LibraryMethodExample {
  public static void main(String[] args) {
    String text = "hello world";

    // Standard library method
    String upper = text.toUpperCase();  // Converts to uppercase

    System.out.println("Uppercase: " + upper);
  }
}
```

The output will be:

```shell
Uppercase: HELLO WORLD
```

## Frequently Asked Questions

### 1. What are methods in Java?

Methods in Java are reusable blocks of code that perform a specific task. They improve reusability and modularity in programs.

### 2. What's the `main()` method in Java?

The `main()` method in Java acts as the entry point of every program. Its syntax is:

```java
public static void main(String[] args)
```

Without the `main()` method, a Java application cannot run (except in special cases like Java applets or newer frameworks).

### 3. How many types of methods are there in Java?

Broadly, Java has two main types of methods:

- User-defined methods (Created by the programmer)
- Standard library methods (Predefined by Java)
