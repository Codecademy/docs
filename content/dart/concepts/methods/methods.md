---
Title: 'Methods'
Description: 'A reuseable set of code instructions that is defined in a class and invoked by name.'
Subjects:
  - 'Computer Science'
Tags: 
  - 'Functions'
  - 'Arithmetic'
  - 'Methods'
  - 'Methods'
CatelogContent:
  - 'learn-dart'
  - 'paths/computer-science'
---

A **method** is a set of instructions encased in a single block of code within a class. It is defined under 
a declaration header, built to access and modify data in an class object, and can serve as reusable code for efficiency in running and writing complex programs in Dart.

## Syntax

Syntax of a method:

```pseudo
<return_type> methodName(<parameters>) {

    // Code is inserted in a method block  
    // that is encased within these { } brackets

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

**Instance Method**

An **instance** method is a function that runs only when it is invoked with a class instance object:

```pseudo
class ClassName {

    <return_type> instanceMethod(<parameters>) {
        // Code is inserted here within { } brackets
    }

}

void main() {
    ClassName classObject = new ClassName();

    // Invoking an instance method
    classObject.instanceMethod(<arguments>);
}
```

**Static Method**

It is possible to invoke a class method without instantiating an object firsthand, which is known
as a **static** method. This type of method is invoked with its class name instead of a class object:

```pseudo
class ClassName {

    static <return_type> staticMethod(<parameters>) {
         // Code is inserted here within { } brackets
    }

}

void main() {
    // Invoking a static method
    ClassName.staticMethod(<arguments>);
}
```

**Short-Hand Method**

A method, whether it is an instance or a static type, can be written in a **short-hand** expression.
It uses a shorthand arrow `=>` instead of `{ }` brackets to define the functionality all on a single instruction line:

```pseudo
class ClassName {

    <return_type> shortHandMethod(<parameters>) => // code is inserted here all on a single line after the arrow

}
```


## Example

A method named `.helloWorld()` that prints the statement `"Hello World"` is defined in a `Hello` class:

```dart
class Hello {
    
    void helloWorld() {
        print("Hello World!");  
    }

}
```

**Instance Method**

The `.helloWorld()` instance method runs only when it is invoked with an instantiated `Hello` object:

```dart
void Main() {

    Hello hi = new Hello();    // A Hello object must be instantiated first
    hi.helloWorld();           // and then it can invoke a Hello instance method 

}

class Hello {

    // Instance method is declared and written within the Hello class
    void helloWorld() {
        print("Hello World!");
    }

}
```

Output:

```shell
Hello World!
```

A `Hello` object has access to the `.helloWorld()` method in the `Hello` class and can invoke it anytime 
after the object's instantiation.

**Static Method**

A static method called `.addition()` is called by invoking it with the `Math` class it was defined in:

```dart
void main() {
    Math.addition(5, 7);    // The Math class name is used to invoke the Math static method
}

class Math {

    // Static method is declared and written within the Math class
    static void addition(int number1, int number2) {
        int sum = number1 + number2;
        print(sum);
    }

}
```

Output:

```shell
12
```

This type of method requires a `static` keyword at the beginning of its declaration header for the
program to indicate that it is a static method, otherwise it will cause a compliation error.

**Short-Hand Method**

A short-hand instance method called `.divide()` and a short-hand static method called `.multiply()` are both defined and invoked:

```dart
void main() {
    Math mathematicsObject = new Math();
    mathematicsObject.divide(20, 5);        // Invoking a short-hand instance method

    Math.multiply(12, 3);                   // Invoking a short-hand static method
}

class Math {

    // A short-hand method can be either a instance or static type
    // and is defined all on a single line of code

    void divide(int number1, int number2) => print(number1 / number2);

    static void multiply(int number1, int number2) => print(number1 * number2);

}
```

Output:

```shell
4
36
```

 
## Return Value

A method can return or not return a value when it reaches the end of its execution. A `return` statement 
is required in the body of a method in order to return a value. The value that gets returned depends on 
the return type that is specified in the method's declaration header.

### Syntax

```pseudo
<return_type> methodName() {
    // Code statements are placed before the return statement
    ...
    ...
    return <value>       
}
```

### Example

The method `.subtraction()` finds the difference of two numbers and returns the calculated result as an `int` value:

```dart
class Math {

    static int subtraction(int number1, int number2) {
        int difference = number1 - number2;
        return difference;                       // The value of 'difference' is returned from the method
    }

}

void main() {
    difference = Math.subtraction(10, 7);       // The value returned from the method is stored in a variable
    print(difference);
}
```

Output:

```shell
3
```

By default, a method without a specified return type can return a value of any data type. In the 
following example, a method called `.returnAnyType()` has no specified return type in its declaration 
and thus can return a value or object of any type:

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

void Main() {

    AnyDataType data = new AnyDataType();

    int integer = data.returnAnyType(1);               // returns an int value
    print(integer);

    double decimal = data.returnAnyType(2);            // returns a double value
    print(decimal);

    String string = data.returnAnyType(3);             // returns a String object
    print(string);

    bool boolean = data.returnAnyType(4);              // returns a bool value
    print(boolean);

}
```

Output:

```shell
4
1.5
String
false
```

A method can also be explicitly stated to not return a value at all by using the `void` return type:

```dart
// The 'void' keyword indicates this method is not able to return a value
void methodName() {

    print("This void method is not allowed to return a value");

}
```

In the case of a short-hand method, a `return` keyword is not used in it's expression and will thus return the specified result by default:

```dart
class Triangle {

    // No 'return' keyword is used in a short-hand method's expression
    static double area(int base_length, int height) => base_length * height * 0.5;

}

void Main() {
    double areaOfTriangle = Triangle.area(10, 5);
    print(areaOfTriangle);
} 
```

Output:

```shell
25
```


## Parameters

A **parameter** enables a method to pass in a value that is defined outside its local scope as an argument.
A method can have any number of parameters and they are all placed within the `( )` parentheses that are
next to its declaration name.

### Syntax

A method with parameters:

```pseudo
<return_type> methodName(<data_type> parameter1, <data_type> parameter2, ...) {
    
}
```
A method call with arguments that get passed into the method itself:

```pseudo
ClassName classObject = new ClassName();
classObject.methodName(argument1, argument2, ...);
```

### Example

The method `.helloThere()` uses a parameter (`String` *name*) to pass in a `String` object ("Ben") as an argument 
from outside its scope and prints a statement using that argument:

```dart
void main() {
    String person = "Ben";

    Hello hi = new Hello();
    hi.helloThere(person);
}


class Hello {

    // Method has a parameter: String name
    void helloThere(String name) {
        print("Hello there. My name is $name.");
    }

}
```

Output:

```shell
Hello there. My name is Ben.
```

There are two types of parameters that can be used in defining a method: **Required** parameters and 
**optional** parameters. 

### Required Parameters

When a method with a required parameter is invoked, its method call will require an argument that matches
the parameter's type. For example, in the `.volume()` method it uses three required parameters (*length*, 
*width*, and *height*) that are all `int` types:

```dart
class Measure {

    // Method has 3 required parameters: int length, int width, int height
    static int volume(int length, int width, int height) {
        int volume = length * width * height;
        return volume;
    }

}
```
When the `.volume()` method is invoked, it's method call needs 3 `int` arguments within its `( )` parentheses for the 
method to run properly: 

```dart
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
The variables *arg1*, *arg2*, and *arg3* are `int` values that are all passed to the *length*, *width*, and *height*
parameters respectively. If the method call does not have the exact number of required arguments it needs or if 
any of the arguments does not match its corresponding parameter's data type, then the method call will 
generate an execution error.

### Optional Parameters

Method parameters can be set as optional parameters, meaning that an argument is not 
required to be passed correspondingly to this type of parameter in a method call. 

### Positioned Optional Parameters

An optional parameter can be set as a **positioned optional** parameter. The parameter is
wrapped in a pair of `[ ]` brackets with the parameter's data type name embedded with a `?` at its end:

```pseudo
<return type> methodName([type? param]) {

    // Code in inserted here with { } brackets

}
```
For example, the `.greetings()` method takes two parameters, a required parameter (`String` *firstName*) 
and a positional parameter [`String?` *lastName*], and prints a greeting message with a person's 
first name and last name:

```dart
void main() {
    Hello.greetings("George");
    Hello.greetings("George", "Washington");
}

class Hello {

    // This method contains a positioned optional parameter: [String? lastName]
    static void greetings(String firstName, [String? lastName]) {
        print("Greetings. My name is $firstName $lastName");
    }

}
```
Output:

```shell
Greetings. My name is George null
Greetings. My name is George Washington
```
If a value or object is not passed in as an argument for a positioned optional parameter during 
a method call, then that parameter's value will default to `null` instead. To avoid the situation 
of an unwanted `null` value, it is best to set a default value for a positioned parameter within 
its `[ ]` brackets, and without appending the `?` symbol with that parameter's data type:

```dart
void main() {
    Hello.greetings("George");
}

class Hello {
 
    // The positioned String parameter 'lastName' is set to a default empty string ("")
    static void greetings(String firstName, [String lastName = ""]) {
        print("Hello. My name is $firstName $lastName");
    }

}
```
Output:

```shell
Hello. My name is George
```

### Named Optional Parameters

Optional parameters can also be set to **named optional** parameters, by wrapping the parameter
in `{ }` brackets and appending the `?` symbol to the parameter's data type name:

```pseudo
<return type> methodName({type? param}) {

  // Code is inserted here within { } brackets

}
```
In order to pass a value to a named parameter, the value must be referenced by the same name as the 
parameter it is being passed to in the method call. For example, the `.measure()` method uses two named 
parameters, {`int?` *width*} and {`int?` *height*}, along with a required parameter (`int` *length*), and 
calculates a measurement:

```dart
void main() {
    Math.measure(5);                        // No arguments that reference any named parameters
    Math.measure(5, width: 3);              // Argument 'width: 3' references the 'width' paramter by name
    Math.measure(5, height: 6, width: 3);   // Arguments 'height: 6' and 'width: 3' reference 'height' and 'width' parameters by name
}

class Math {

    // This method contains two named parameters: {int? width}, {int? height}
    static void measure(int length, {int? width, int? height}) {
        int measurement = length;
        if (width != null) {
            measurement *= width;
        }
        if (height != null) {
            measurement *= height;
        }
        print(measurement);
    }

} 
```
Output:

```shell
5
15
90
```

A named argument in a method call doesn't have to be in the same position like its named parameter is in 
a method declaration, only as long as they are not mixed up with positioned parameters:

```dart
// The first parameter is a positioned parameter: 'int length'
// The second and third parameters are named optional parameters: {int? width, int? height} 
static void measure(int length, {int? width, int? height}) {

}

// Correct
Math.measure(5, width: 3, height: 6);

// Correct
Math.measure(5, height: 6, width: 3);

// Incorrect: Position of 'width: 3' overlaps with positioned parameter 'int length' 
Math.measure(width: 3, 5, height: 6);

// Incorrect: Position of 'height: 6' overlaps with positioned parameter 'int length'
Math.measure(height: 6, width: 3, 5);
```

Just like with positioned optional parameters, a named parameter will default to `null` if a default value 
is not set in the method. Therefore, it is a good technique to set a default value for a named 
parameter, and omitt the usage of a `?` symbol with the parameter's data type when doing so:

```dart
static void measure(int length, {int width = 1, int height = 1}) {

    measurement = length * width * height;
    print(measurement);

}
```
