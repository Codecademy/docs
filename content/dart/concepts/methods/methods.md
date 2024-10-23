---
Title: 'Methods'
Description: 'A reusable set of code instructions defined in a class and invoked by name.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Dart'
  - 'Arithmetic'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **method** is a set of instructions encased in a single block of code within a class. It is defined under a declaration header, built to access and modify data in a class object and can serve as reusable code for efficiency in running and writing complex programs in Dart.

## Syntax

Syntax of a method:

```pseudo
<return_type> methodName(<parameters>) {
  // Code is inserted in a method block that is encased within these { } brackets
}
```

Syntax of a method defined in a class:

```pseudo
class ClassName {
  // A method is declared and defined inside a class
  <return_type> methodName(<parameters>) {
    // Code is inserted here within { } brackets
  }
}
```

## Example

A method named `.helloWorld()` that prints the statement `Hello World` is defined in a `Hello` class:

```dart
class Hello {
  void helloWorld() {
    print("Hello World!");
  }
}

void main(){
  // Create an instance of the Hello class
  var hello = Hello();

  // Call the helloWorld method
  hello.helloWorld();
}
```

```shell
Hello World!
```

## Return Value

A method can return a value when it reaches the end of its execution. A `return` statement is required to be placed as the last instruction in the body of a method in order to return a value. The value that gets returned depends on the return type that is specified in the method's declaration header:

```pseudo
<return_type> methodName() {
  // Code statements are placed before the return statement
  ...
  ...
  return <value>
}
```

### Example 1

In the following example, the method `.subtraction()` finds the difference of two numbers and returns the calculated result as an `int` value:

```dart
class Math {
  static int subtraction(int number1, int number2) {
    int difference = number1 - number2;
    // The value of 'difference' is returned from the method
    return difference;
  }
}

void main() {
  // The value returned from the method is stored in a variable
  int difference = Math.subtraction(10, 7);
  print(difference);
}
```

Here is the output:

```shell
3
```

By default, a method without a specified return type can return a value of any data type.

### Example 2

In the following example, a method called `.returnAnyType()` has no specified return type in its declaration and thus can return a value or object of any type:

```dart
class AnyDataType {
  returnAnyType(int number) {
    if (number == 1) {
      return 2 + 2;
    } else if (number == 2) {
      return 2.5 - 1;
    } else if (number == 3) {
      return "String";
    } else {
      return false;
    }
  }
}

void main() {
  AnyDataType data = new AnyDataType();

  // returns an int value
  int integer = data.returnAnyType(1);
  print(integer);

  // returns a double value
  double decimal = data.returnAnyType(2);
  print(decimal);

  // returns a String object
  String string = data.returnAnyType(3);
  print(string);

  // returns a bool value
  bool boolean = data.returnAnyType(4);
  print(boolean);
}
```

The output is following:

```shell
4
1.5
String
false
```

> Note: A method can also be explicitly stated to not return a value at all by using the `void` return type.

## Parameters

A _parameter_ enables a method to pass in a value defined outside its local scope as an argument. A method can have any number of parameters and they are all placed within the `()` parentheses that are next to its declaration name:

```pseudo
<return_type> methodName(<data_type> parameter1, <data_type> parameter2, ...) {
  ...
}
```

A method call with arguments that get passed into the method itself:

```pseudo
ClassName classObject = new ClassName();
classObject.methodName(argument1, argument2, ...);
```

### Example

In the following example, the method `.helloThere()` uses a parameter (`String name`) to pass in a `String` object (`Ben`) as an argument from outside its scope and prints a statement using that argument:

```dart
class Hello {
  // Method has a parameter: String name
  void helloThere(String name) {
    print("Hello there. My name is $name.");
  }
}

void main() {
  String person = "Ben";
  Hello hi = new Hello();
  hi.helloThere(person);
}
```

The above code produces the following output:

```shell
Hello there. My name is Ben.
```

There are two types of parameters that can be used in defining a method: _Required_ parameters and _optional_ parameters.

### Required Parameters

When a method with a required parameter is invoked, its method call will require an argument that matches the parameter's type. For example, in the `.volume()` method it uses three required parameters (`length`, `width`, and `height`) that are all `int` types. When the `.volume()` method is invoked, it's method call needs 3 `int` arguments within its `( )` parentheses for the method to run properly:

```dart
class Measure {
  // Method has 3 required parameters: int length, int width, int height
  static int volume(int length, int width, int height) {
    int volume = length * width * height;
    return volume;
  }
}

void main() {
  // These 3 variables will be used as method call arguments
  int arg1 = 5;
  int arg2 = 10;
  int arg3 = 3;

  // Correct
  Measure.volume(arg1, arg2, arg3);

  // Error: There are only 2 arguments in a method call that requires 3 arguments.
  Measure.volume(arg1, arg2);

  // Error: The third argument's data type doesn't match that of the method's third parameter.
  Measure.volume(arg1, arg2, "abc");
}
```

> Note: If the method call does not have the exact number of required arguments it needs or if any of the arguments does not match its corresponding parameter's data type, then the method call will generate an execution error.

### Optional Parameters

Method parameters can be set as optional parameters, meaning that an argument is not required to be passed correspondingly to this type of parameter in a method call.

### Positioned Optional Parameters

An optional parameter can be set as a _positioned optional_ parameter. The parameter is wrapped in a pair of `[ ]` brackets with the parameter's data type name embedded with a `?` at its end:

```pseudo
<return type> methodName([type? param]) {
  // Code in inserted here with { } brackets
}
```

In the below example, the `.greetings()` method takes two parameters, a required parameter (`String firstName`) and a positional parameter (`String? lastName`), and prints a greeting message with a person's first name and last name:

```dart
class Hello {
  // This method contains a positioned optional parameter: [String? lastName]
  static void greetings(String firstName, [String? lastName]) {
    print("Greetings. My name is $firstName $lastName");
  }
}

void main() {
  Hello.greetings("George");
  Hello.greetings("George", "Washington");
}
```

The output is following:

```shell
Greetings. My name is George null
Greetings. My name is George Washington
```

> Note: If a value is not passed in as an argument for a positioned optional parameter during a method call, then that parameter's value will default to `null` instead. Therefore, it is best to set a positioned parameter equal to a default value within its `[ ]` brackets, and without appending the `?` symbol to that parameter's data type.

### Named Optional Parameters

Optional parameters can also be set to **named optional** parameters, by wrapping the parameter in `{ }` brackets and appending the `?` symbol to the parameter's data type name:

```pseudo
<return type> methodName({type? param}) {
  // Code is inserted here within { } brackets
}
```

To pass a value to a named parameter, the value must be referenced by the same name as the parameter it is being passed to in the method call.

#### Example

In the below example, the `.measure()` method uses two named optional parameters, {`int?` _width_} and {`int?` _height_}, along with a required parameter (`int` _length_), and calculates a measurement:

```dart
class Math {
  // The first parameter is a positioned parameter: 'int length'
  // The second and third parameters are named optional parameters that both have a default value of 1: {int width = 1}, {int height = 1}
  static void measure(int length, {int width = 1, int height = 1}) {
    int measurement = length * width * height;
    print(measurement);
  }
}

void main() {
  // Correct
  Math.measure(5);
  // Correct
  Math.measure(5, width: 3);
  // Correct
  Math.measure(5, height: 6, width: 3);
  // Error: Position of 'width: 3' overlaps with positioned parameter 'int length'
  Math.measure(width: 3, 5, height: 6);
  // Error: Position of 'height: 6' overlaps with positioned parameter 'int length'
  Math.measure(height: 6, width: 3, 5);
}
```

> Note: A named argument in a method call doesn't have to be in the same position as its named parameter is in a method declaration, only as long as they are not mixed up with positioned parameters. Also, a named parameter's value will default to `null` if no default value is set for it in the method definition.

## Method Types

The different types of methods in Dart are discussed below.

### Instance Method

An **instance** method is a function that runs only when it is invoked with a class instance object.

In the below example, the `.helloWorld()` instance method runs only when it is invoked with an instantiated `Hello` object:

```dart
class Hello {
  // Instance method is declared and written within the Hello class
  void helloWorld() {
    print("Hello World!");
  }
}

void main() {
  // A Hello object must be instantiated first and then it can invoke a Hello instance method
  Hello hi = new Hello();
  hi.helloWorld();
}
```

Here is the output:

```shell
Hello World!
```

### Static Method

It is possible to invoke a class method without instantiating an object firsthand, which is known as a **static** method. This type of method is invoked with its class name instead of a class object.

In the below example, a static method called `.addition()` is called by invoking it with the `Math` class it was defined in:

```dart
class Math {
  // Static method is declared and written within the Math class
  static void addition(int number1, int number2) {
    int sum = number1 + number2;
    print(sum);
  }
}

void main() {
  // The Math class name is used to invoke the static method defined in the Math class
  Math.addition(5, 7);
}
```

> Note: This type of method requires a `static` keyword at the beginning of its declaration header for the program to indicate that it is a static method otherwise, it will cause a compilation error.

The above code produces the following output:

```shell
12
```

### Short-Hand Method

A method, whether it is an instance or a static type, can be written in a **short-hand** expression. It uses a shorthand arrow `=>` instead of `{ }` brackets to define the functionality all on a single instruction line.

In the below example, a short-hand instance method called `.divide()` and a short-hand static method called `.multiply()` are both defined and invoked:

```dart
class Math {
  // A short-hand method can be either an instance or static type and is defined on a single line of code
  double divide(int number1, int number2) => (number1 / number2);
  static int multiply(int number1, int number2) => (number1 * number2);
}

void main() {
  Math mathematicsObject = new Math();
  // Invoking a short-hand instance method
  double quotient = mathematicsObject.divide(20, 5);
  print(quotient);
  // Invoking a short-hand static method
  int product = Math.multiply(12, 3);
  print(product);
}
```

> Note: In the case of a short-hand method, a `return` keyword is not used in it's expression and will thus return the specified result by default.

The output is following:

```shell
4.0
36
```
