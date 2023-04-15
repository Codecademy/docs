---
Title: 'Functions'
Description: 'Functions are the most essential part of kotlin'
Subjects: 
  - 'Mobile Development'
Tags: 
  - 'Android'
  - 'Functions'
  - 'Kotlin'
CatalogContent: 
  - 'learn-kotlin'
  - 'paths/computer-science'
---


**Functions** are an essential part of any Kotlin program. Functions are a reusable part of code that can be called in any part of the program. The Kotlin program has to start with the `main()` function, or there will be an error. `fun` is used to define a function in Kotlin, but there are also predefined functions like `println `and `print`.

## Function `main()`

Function `main()` is the entry point to a Kotlin program and is required. The `main()` function is meant to include the code of the program and is not called anywhere. The code should be between the `main()` function curly brackets `{}`.

```
fun main() {
  println("Hello World")
}
```

## Creating Functions in Kotlin

User defined functions start with the `fun` keyword, followed by the function name, the parameters (if there are any), and the function body which is enclosed in curly braces.

```pseudo
fun functionName(arguments): return type {
  body
  return statment
}
```

- `fun` is used to define a function.
- The `functionName` is used to call the function in the program.
- `Arguments` have to be in the parentheses. Arguments are pieces of information fed to the function.
- `Return type` declares the type of a returning value. It is optional.
- The `body` contains the code to be executed.
- `Return statement` returns the value of the function.

### Arguments

Arguments are data passed to the function. They must have a name and data type. Between the argument name and data type must be a colon `:`. The arguments are separated by comma `,` .

```pseudo
fun functionName(argumentName: dataType, argumentName2 : datatype){
  body
}

fun sample(num1: Int,num2: Int){
  body
}
```

When calling the function, `arguments` can be put in their assigned spot or specified by name. By specifying the name the `arguments` do not need to be in the same order as in the function header.

```pseudo
fun main(){
  println(sample(3,5))
}
fun main(){
  println(sample(num2=5, num1=3))
}
```

Arguments can have a default value. It is assigned with the equals sign `=`.

```
fun default(name: String = "Kotlin"){
  print("Hello $name")
}
```

Default arguments can be changed when calling a function.

```
fun main(){
  default("Java")
}
///output
///Hello Java
```

### Return Type

The return type expresses the returning value type. Including the return type is optional. The return type is entered after the parentheses and a colon `:`. By default the return value is `Unit`. `Unit` means there is no returning value.

```pseudo
fun functionName(argument): return type {
  body
}

fun sample(name: String): String {
  body
}
```

### Function Body

The function body contains the code for the function. It must be between curly brackets `{}`. The function body is indented, except for a single line function. The opening curly bracket `{` is at the end of the function header and the closing curly bracket `}` is below the last line of the function body.

```pseudo
fun functionName(argument) {
  bodyline1
  bodyline2
}
```

### Return Statement

If there is a return statement in the function, then there must be also a return type. The return statement is defined by keyword `return`. Lines after the return statement will not be executed.

```pseudo
fun adding(num1: Int,num2: Int): Int{
  var sum = num1 + num2
  //Return statement, returns the variable sum
  return sum
}

fun adding(num1: Int,num2: Int): Int{
  var sum = num1 + num2
  //Return statement, returns the variable sum
  return sum
  //println will not execute
  println("Nice job")
}
```

## Single Line Function

The single line function can be written only if the function has a single expression.

```
fun area(side1: Int, side2: Int): Int{
  return side1 * side2
}
```

Curly brackets `{}` and `return` can be removed and by adding an equals sign `=`, we get the single line function.

```
fun area(side1: Int, side2: Int): Int = side1 * side2
```

The compiler can infer the return type so we can also remove the return type declaration.

```
fun area(side1: Int, side2: Int) = side1 * side2
```

## Function Literals

A function becomes a function literal when we assign it as a value. There are two types of function literals: "lambda expressions" and "anonymous functions".

### Lambda Expressions

A lambda expression is a short function between curly braces `{}`. The `return` is replaced by `->`. Adding `return type` is optional because the compiler can infer it from the type interface.

```
variable name = {Lambda Expression}

fun main() {
  //Lambad Expression
  val adding = {num1: Int, num2: Int -> num1 + num2 }
  //executing
  println(adding(1,2))
}

//output:
//3
```

### Anonymous Function

An anonymous function is assigned as a variable, `fun` comes after equals sign `=`. It has no name, which is why it is called anonymous. 

- Option One: After the variable name is the argument types in parentheses `()` then `->` and the return type. This is followed by the equals sign `=` then the `fun` keyword, arguments in parenthesis, the return type, and the single return statement in curly braces `{}` .

- Option Two: After the variable name is an equals sign `=`, then the `fun` keyword, followed by the arguments with argument types in parentheses `()`, followed by `:` and the return type, followed by a single return statement in curly brackets `{}`.

```
fun main() {
  //Option One
  var addingOne: (Int, Int) -> Int = fun(num1, num2): Int { return num1 + num2 }
  //Option Two
  var addingTwo = fun(num1: Int, num2: Int): Int { return num1 + num2 }
  print(addingOne(1, 2))
  print(addingTwo(1, 2))
} 

//output
//3
//3
```
