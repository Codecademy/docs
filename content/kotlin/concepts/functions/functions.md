---
Title: 'Functions'
Description: 'A function is a reusable block of code that can be called from elsewhere in the program.'
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

**Functions** are an essential part of any Kotlin program. Functions are a reusable part of code that can be called in any part of the program. A Kotlin program has to start with the `main()` function, or there will be an error. The `fun` keyword is used to define a function in Kotlin, but there are also predefined functions like `println` and `print`.

## The Main Function

Function `main()` is the entry point to a Kotlin program and is required. The `main()` function is meant to include the code of the program and is not called anywhere. The code should be between the `main()` function curly brackets `{}`.

```kotlin
fun main() {
  println("Hello World")
}
```

## Creating Functions in Kotlin

User defined functions start with the `fun` keyword, followed by the function name, the parameters (if there are any), and the function body which is enclosed in curly braces.

```pseudo
fun functionName(arguments): return type {
  body
  return statement
}
```

- `fun` is used to define a function.
- `functionName` is used to call the function in the program.
- `arguments` have to be in the parentheses. Arguments are pieces of information fed to the function.
- `return type` declares the type of a returning value. It is optional.
- `body` contains the code to be executed.
- `return statement` returns the value of the function.

### Arguments

Arguments are data passed to the function. They must have a name and data type. Between the argument name and data type must be a colon `:`. The arguments are separated by comma `,` .

```pseudo
fun functionName(argumentName: dataType, argumentName2 : datatype){
  body
}
```

```kotlin
fun sample(num1: Int,num2: Int){
  println(num1 + num2)
}
```

When calling the function, `arguments` can be put in their assigned spot or specified by name. If the arguments are specified by name they do not need to be in the same order as in the function header.

```kotlin
fun main(){
  println(sample(3,5))
  println(sample(num2=5, num1=3))
}
```

Arguments can have a default value. It is assigned with the equals sign `=`.

```kotlin
fun default(name: String = "Kotlin"){
  print("Hello $name")
}
```

Default arguments can be changed when calling a function.

```kotlin
fun main(){
  default("Java")
}
// Output
// Hello Java
```

### Return Type

The return type expresses the returning value type. Including the return type is optional. The return type is entered after the parentheses and a colon `:`. By default the return value is `Unit`. `Unit` means there is no returning value.

```pseudo
fun functionName(argument): return type {
  body
}
```

```kotlin
fun sample(name: String): String {
  return "Hello " + name
}
fun main(){
  print(sample("Tom"))
}

// Output
// Hello Tom
```

### Function Body

The function body contains the code for the function. It must be between curly brackets `{}`. The function body is indented, except for a single line function. The opening curly bracket `{` is at the end of the function header and the closing curly bracket `}` is below the last line of the function body.

```pseudo
fun functionName(argument) {
  bodyline2
}
```

### Return Statement

If there is a return statement in the function, then there must be also a return type. The return statement is defined by the keyword `return`. Lines after the return statement will not be executed.

```kotlin
fun adding(num1: Int,num2: Int): Int{
  var sum = num1 + num2
  // Return statement, returns the variable sum
  return sum
  // println will not execute
  println("Nice job")
}
```

## Single Line Function

The single line function can be written only if the function has a single expression.

```kotlin
fun area(side1: Int, side2: Int): Int{
  return side1 * side2
}
```

Curly brackets `{}` and `return` can be removed and by adding an equals sign `=`, we get the single line function.

```kotlin
fun area(side1: Int, side2: Int): Int = side1 * side2
```

The compiler can infer the return type so we can also remove the return type declaration.

```kotlin
fun area(side1: Int, side2: Int) = side1 * side2
```

## Function Literals

A function becomes a function literal when it is assigned as a value. There are two types of function literals: "lambda expressions" and "anonymous functions".

### Lambda Expressions

A lambda expression is a short function between curly braces `{}`. The `return` is replaced by `->`. Adding `return type` is optional because the compiler can infer it from the type interface.

```pseudo
variable name = {Lambda Expression}
```

```kotlin
fun main() {
  // Lambda Expression
  val adding = {num1: Int, num2: Int -> num1 + num2 }
  // Executing
  println(adding(1,2))
}

// Output
// 3
```

### Anonymous Function

An anonymous function is assigned as a variable, `fun` comes after equals sign `=`. It has no name, which is why it is called anonymous.

- Option One: After the variable name is the argument types in parentheses `()` then `->` and the return type. This is followed by the equals sign `=` and the `fun` keyword, arguments in parenthesis, the return type, and the single return statement in curly braces `{}` .
- Option Two: After the variable name is an equals sign `=`, then the `fun` keyword, followed by the arguments with argument types in parentheses `()`, followed by `:` and the return type, followed by a single return statement in curly brackets `{}`.

```kotlin
fun main() {
  // Option One
  var addingOne: (Int, Int) -> Int = fun(num1, num2): Int { return num1 + num2 }
  // Option Two
  var addingTwo = fun(num1: Int, num2: Int): Int { return num1 + num2 }
  println(addingOne(1, 2))
  println(addingTwo(1, 2))
}

// Output
// 3
// 3
```

## Video Walkthrough

Watch this video to learn about functions and their use in Kotlin programming.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Jl7ARLCZv5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
