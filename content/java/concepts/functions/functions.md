---
Title: 'Functions'
Description: 'Functions are chunks of code that can be used multiple times in a program. In Java, functions are usually referred as methods.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Functions'
  - 'Parameters'
  - 'Arguments'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

Functions are chunks of code that can be used multiple times in a program. In Java, functions are usually referred as <b>methods</b>.

## Syntax

To define a function in Java

```java
type functionName(parameter-list) {
    //code
}
```

Here, `type` represents the return type of the function and
`parameter-list` represents the number of parameters passing in that function.

A basic example of a method with one parameter and no return type is given below

### Example

```java
// function with one parameter with no return
class NewClass {
    
    public void printMyNumber(int num) {
        System.out.println("My lucky number is: " + num);
    }
    public static void main(String[] args) {
        
        // NewClass object created
        NewClass obj = NewClass();

        // calling printMyNumber method by passing 2 as parameter
        obj.printMyNumber(2);

        // calling the printMyNumber function again
        obj.printMyNumber(20);
    }
    // Output:-
    // My lucky number is: 2
    // My lucky number is: 20
}
```

## Types of Methods

Java functions are of two types:-

1. Predefined Method
2. User-defined Method

## Predefined Method

Methods which are already defined in Java is known as predifined methods.
Examples for pre-defined methods are
`sqrt()`, `length()`, `equals()`, `abs()` etc.

To use a predefined method in your program, you need to specify the <b>java class</b> associated with the method.

### Example

```java
 class MyClass {
     public static void main(String args[]) {
        int num = 9;
        System.out.println("Square root of number " + num + " is:" + Math.sqrt(num));
        // output:" Square root of number 9 is 3
     }
 }
```

## User-defined Method

Methods are created by the programmer to perform specific functions.

### Example

```java
// program to show if the number is odd or even
class MyClass {
    void checkOddEven(int num) {
        if(num%2 == 0) {
            System.out.println(num + " is an even number");
        }
        else {
            System.out.println(num + " is an odd number");
        }
    }
    public static void main(String args[]) {
        MyClass obj = new MyClass();
        obj.checkOddEven(24);
        obj.checkOddEven(123);
    }
    // Output:-
    // 24 is an even number
    // 123 is an odd number
}
```

## Passing value to the method

To pass value in a method, declare a method that accepts the same values as that to be passed.

### Example

```java
//code to demonstrate passing value to a method
class MyClass {
    void concatString(String str1, String str2) {
        System.out.println(str1 + " " + str2);
    }
    public static void main(String args[]) {
        MyClass obj = new MyClass();
        obj.concatString("Hello", "World!");
        obj.concatString("1", "2");
    }
    // Output:-
    // Hello World!
    // 1 2
}
```

## Return value from the method

Use the `return` keyword in your java function to return the value from the function.

### Example

```java
class MyClass{
    String myFunc(){
        return("Hello");
    }
    public static void main(String args[]) {
        MyClass obj = new MyClass();
        System.out.println(myFunc() +" World!");
        // output: Hello World!
    }
}
```

## Static Methods

If you want to create functions where you do not want to create an instance of the class, static methods come into play.
To create a static method, use the `static` keyword before the function declaration. Also, your class must be a `public` class.

### Example

```java
// code to demonstrate static method
public MyClass{
    static int addNumber(int num1, int num2) {
        return(num1 + num2);
    }
    static int subNumber(int num1, int num2) {
        return(num1 - num2);
    }
    public static void main(String args[]) {
        int a = 6, b = 3;

        //passing a b in static method addNumber
        System.outprintln(MyClass.addNumber(a, b)); // output: 9
        
        //passing a b in static method addNumber
        System.outprintln(MyClass.subNumber(a, b)); // output: 3
    }
}
```
