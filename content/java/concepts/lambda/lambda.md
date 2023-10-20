---
Title: 'Lambda Expression'
Description: 'Lambda expressions in Java provide a concise way to express single-method interfaces (functional interfaces) without the need to declare a formal method. Conceptually, they allow you to create and use methods on the fly, making your code more flexible and expressive.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Lambda Expression'
  - 'fucntional interface'
  - 'declarative programming'
  - 'Arrays'
  - 'Classes'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

`Lambda expressions` in Java provide a versatile way to create and use methods without the constraints of traditional method declarations. Unlike conventional methods, `lambda expressions` do not require explicit naming, making them particularly adaptable.

A significant addition to the Java programming language, `Lambda expressions`, introduced in Java SE 8, offer a concise and powerful means to represent single-method interfaces. This feature proves especially valuable when working with collection libraries, simplifying tasks like iteration, filtering, and data extraction.

`Lambda expressions` serve as a means to implement functional interfaces, efficiently reducing the amount of code required. Unlike traditional methods, there's no need to redeclare the method when using lambda expressions; you can directly write the implementation code.

Java `lambda expressions` are treated as functions, leading to the elimination of the .class file generation by the compiler.

Lambda expressions allow you to:

- Define methods on the fly, without formal declarations.
- Concisely express the operation you want to perform.
- Utilize functional interfaces to seamlessly integrate them into your code.

Lambda expressions are like the chameleons of Java programming, adapting to your specific needs. Each lambda expression can be customized to perform a particular task or operation.

## What is Functional Interface

Lambda expressions offer a means to implement a functional interface. A functional interface is one that contains just a single abstract method. In Java, the "@FunctionalInterface" annotation is available for declaring an interface as a functional one.

A functional interface is a special type of interface in Java that has just one main job: to represent a single action or behavior. It's like a blueprint for a specific task. In simple terms, you can think of it as a contract that says, "If you want to use me, you must provide the details for this one job."

It's useful when you want to create more flexible and efficient code, especially when working with features like lambda expressions. It's a way to make your code more concise and expressive by focusing on what needs to be done without worrying about all the extra details.

You will learn more about functional interface and examples further on offcial oracle documentation [Lambda Oracale](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html) here.

## Why use Lambda Expression

 - In Declarative approach provide implmentation of Functional interface.
 - Less coding compared to Imperative style of programming.

## Syntax


To create a lambda expression, you specify input parameters (if any), the arrow symbol (`->`), and the body of the expression. Here's an example:

```pseudo
(x, y) -> x + y
```
The simplest lambda expression contains a single parameter or argument list and an expression:

```java

parameter -> expression  

(parameter1 , parameter2 ) -> expression

```
Here , above expression are limited because they have to immediately return a value, and they cannot contain variables, assignments or statements such as if or for. In order to do more complex operations, a code block can be used with curly braces. If the lambda expression needs to return a value, then the code block should have a return statement.


```java
(argument-list) -> {body}   
```
Here in argument-list we can provide more than one parameter.

## Example

we have created an ArrayList named `numbers` to store integers. We have added four integer values to this list.

The `forEach` method is then used to iterate through each item in the `numbers` ArrayList. Inside the `forEach` method, a lambda expression is employed to specify what to do with each item. In this case, the lambda expression `(n) -> { System.out.println(n); }` is used, which takes an element from the list (n) and prints it to the console using `System.out.println(n)`.

So, when you run this code, it will print each of the integer values (1, 2, 45, and 101) one by one to the console.

```java

// Import from the java.util package
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();  // Currently empty
    numbers.add(1);  // adding data
    numbers.add(2);
    numbers.add(45);
    numbers.add(101);
    numbers.forEach( (n) -> { System.out.println(n); } ); // Prints through lambda expression
  }
}

```


The output would be:

```shell
1
2
45
101
```

Lambda expressions can be assigned to variables when you have an interface with just one method. The lambda expression should have the same type of input parameters and return value as that one method. For example, in Java, you'll find many built-in interfaces that meet this criterion. 

One such interface is the Consumer interface from the java.util package, often used when working with lists. It provides a way to define what should be done with each item in a list, making your code more concise and readable. This feature is a powerful tool for simplifying Java programming.

```java

// Import from the java.util package and  function.Consumer
import java.util.ArrayList;
import java.util.function.Consumer;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<String>(); // Currently empty
    names.add("Alice");   // adding name in the list
    names.add("Bob");
    names.add("Charlie");
    names.add("David");

    Consumer<String> printName = (name) -> { System.out.println(name); };  

    names.forEach(printName);
  }
}
```
The output would be:

```shell
Alice
Bob
Charlie
David
```

Here in above code , `import java.util.function.Consumer;` This line imports the Consumer interface, which is used for performing actions on items in a collection. 

`ArrayList<String> names = new ArrayList<String>();` Here, we create a list named "names" to store strings. It's empty initially.

`Consumer<String> printName = (name) -> { System.out.println(name); }; ` Here, We define a "printName" action. It's like a recipe for printing a name. The `Consumer<String>` says it works with strings. `(name)` specifies that it takes a name as input, and `{ System.out.println(name); }`is the code to print that name.

`names.forEach(printName);` Here, we use the "printName" action to print each name in our "names" list one by one. It's like following the recipe for each name in the list.

Here is the  simple example of how to add two numbers using lambda expression in java

```java
//Main.java
public class Main {
    // Define a functional interface called Addable with one abstract method 'add'
    interface Addable {
        int add(int a, int b);
    }

    public static void main(String[] args) {

        // Lambda expression for adding two integers without specifying data types
        Addable ad1 = (a, b) -> (a + b);
        System.out.println(ad1.add(10, 20));  // Print the result of adding 10 and 20

        // Lambda expression for adding two integers with data types specified
        Addable ad2 = (int a, int b) -> (a + b);
        System.out.println(ad2.add(100, 200));  // Print the result of adding 100 and 200
    }
}

```
The output would be:

```shell
30
300
```

In this program, we've created a simple Java program that showcases the use of lambda expressions to perform addition. First, we define a functional interface called `Addable` with a single method for adding two numbers. 

Then, we create two lambda expressions: `ad1` adds two integers without specifying data types, and `ad2` adds two integers with data types explicitly mentioned. We demonstrate the lambda expressions by applying them to add numbers and printing the results.

 This program illustrates how lambda expressions can be used to make the code more concise when implementing simple mathematical operations like addition in Java.

## Available Functional interfaces

Java provides a variety of functional interfaces for different use cases. Some of the common functional interfaces which includes:

**Function**: Represents a function that takes one argument and produces a result.

**Consume**r: Represents a function that takes an argument but does not return any result. It's often used for performing actions or operations.

**Predicate**: Represents a function that takes an argument and returns a boolean result, typically used for testing conditions.

**Supplier**: Represents a function that takes no arguments but produces a result. It's commonly used for lazy initialization or providing values.

**UnaryOperator**: A specialization of Function where both the input and output types are the same. It represents an operation on a single operand.

**BinaryOperator**: Similar to UnaryOperator, but it operates on two operands of the same type and produces a result of the same type.

**Comparator**: Represents a function for comparing two values, often used in sorting and ordering.

These functional interfaces are part of the java.util.function package and offer a convenient way to work with functional programming concepts in Java, allowing you to write more expressive and modular code.

## Lambda Expression using BiFunction functional interface 

### What is Bifunction interface

The `BiFunction` functional interface in Java is designed to represent a function that takes two arguments and produces a result. It is a part of the Java standard library in the `java.util.function` package. Specifically, "Bi" in `BiFunction` indicates that it's meant for functions with two input values, which can be of the same or different data types, and it returns a single result.

The primary method of `BiFunction` is `apply`, which accepts two arguments and computes a result based on these inputs. This functional interface is widely used in scenarios where you need to apply a function that requires two parameters, such as performing mathematical calculations, combining data, or making transformations on pairs of values. It offers a convenient way to represent and work with such operations in a more functional and concise manner, making your code more expressive and modular.

Here is the simple example of Java program to use `BiFunction` Functional interface


```java
//Main.java

import java.util.function.BiFunction;  // Importing library

public class Main {

     public static void main(String[] args) {
        // Define BiFunction instances for different operations
        
        // BiFunction for addition
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        
        // BiFunction for subtraction
        BiFunction<Integer, Integer, Integer> subtract = (a, b) -> a - b;
        
        // BiFunction for multiplication
        BiFunction<Integer, Integer, Integer> multiply = (a, b) -> a * b;
        
        // BiFunction for division with a check for division by zero
        BiFunction<Integer, Integer, Integer> divide = (a, b) -> (b != 0) ? a / b : 0;

        // Define two integer numbers
        int num1 = 10;
        int num2 = 5;

        // Perform and print results of different operations
        
        // Addition
        System.out.println("Addition: " + add.apply(num1, num2));
        
        // Subtraction
        System.out.println("Subtraction: " + subtract.apply(num1, num2));
        
        // Multiplication
        System.out.println("Multiplication: " + multiply.apply(num1, num2));
        
        // Division
        System.out.println("Division: " + divide.apply(num1, num2));
    }
}

```
The output would be:

```shell
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
```

In this Java program, we've created a simple calculator that can perform basic arithmetic operations using lambda expressions. 

First, we import the `BiFunction` functional interface from the Java standard library, which allows us to define functions that take two arguments and produce a result.

Inside the `main` method, we create four lambda expressions using `BiFunction`, each representing a different arithmetic operation: addition, subtraction, multiplication, and division. For instance, `(a, b) -> a + b` represents addition, where `a` and `b` are the two numbers to be added.

We initialize two integer variables, `num1` and `num2`, with values 10 and 5, respectively.

We then apply these lambda expressions to the numbers, which means we're using them to perform the respective operations on `num1` and `num2`. For example, `add.apply(num1, num2)` calculates the addition of `num1` and `num2`.

Finally, we print the results of each operation to the console, such as "Addition: 15", "Subtraction: 5" , "Multiplication: 50", and "Division: 2". This program demonstrates how lambda expressions can simplify and make code more expressive for performing basic mathematical operations.



