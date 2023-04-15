---
Title: 'Functions in Kotlin'
Description: 'Functions is '
Subjects: 
  - 'Mobile Development'
Tags: 
  - 'Android'
  - 'Functions'
  - 'Kotlin'
CatalogContent: 
  - 'learn-kotlin'
---

# Functions in Kotlin

**Functions are essential part of any Kotlin program.**Functions are reusable part of code that can be called in any part of the code. The Kotlin program has to start with `main()` function or there will be an error. `fun` is used to define a function in Kotlin but thear are also predefinec functions like `println `and `print`. Functions are called in the `main()` function.

## Function `main()`

Function `main()` is the entry point to Kotlin programing and also required in every Kotlin program. The `main()` function is meant to include your code that you write and is not called anywhere. Check that your code is between the `main()` function curly brackets `{}`.

```
fun main() {
  println("Hello World")
}
```
## Creating functions in Kotlin ###

User defined functions start with the `fun` keyword, followed by the function name, parameters(if there is any) and the function body which is enclose in curly braces

```
fun functionName(arguments): return type {
  body
  return statment
}
```
+ *fun* is used to define a function.
+ The *functionName* is used to call the function in the program.
+ *Arguments* have to be in the parentheses, arguments are pieces of information feeded to the function.
+ *Return type* declares the type of returning value. It is optional to include.
+ In the *body* containes the instructions.
+ *Return statment* returns the value of the function.

### Arguments

`Argument` is data inserted to function. `Arguments` must have a name and data type of inserted data.Between `argument` and `data type` must be colon `:`. arguments are seperated by coma `,` .
```
fun functionName(argumentName: dataType, argumentName2 : datatype){
  body
}

fun sample(num1: Int,num2: Int){
  body
}
```
When calling function, `arguments` can be put in their assaign spot or defined by name. By defining by name the `arguments` do not need to be at the same order as in the function header.

```
fun main(){
  println(sample(3,5))
}
fun main(){
  println(sample(num2=5, num1=3))
}
```

`Arguments` can have default value. It is assigned with equals sign `=`.

```
fun default(firstname: String = "Kotlin"){
  body
}
```


### Return type

The `return type` expresses the returning valu type. Entering `return type` is optional. `Return type` is after parantheses and colon `:`. By default the return value is `Unit`, `Unit` means their is no returning valu.

```
fun functionName(argument): return type {
  body
}
fun sample(name: String): String {
  body
}
```

### Function body

`Function body` has the instruction for the function. It must be between curly brackets `{}`. `Function body` is indented, except for single line function. The opening curly bracket `{` is at the end of the function header and the closing curly bracket `}` is under the last line of `function body`.

```
fun functionName(argument) {
  bodyline1
  bodyline2
}
```

### Return statment

If their is a `return statment` in the function then their must be also a `return type`. `Return statment` is defined by keyword `return`. Lines after the `return statment` will not be executed.

```
fun adding(num1: Int,num2: Int): Int{
  var sum = num1 + num2
  //return statment, returns the variable sum
  return sum
}

fun adding(num1: Int,num2: Int): Int{
  var sum = num1 + num2
  //return statment, returns the variable sum
  return sum
  //println will not execute
  println("Nice job")
}
```

## Single line function

Single line function can be writen only if function has **single expression**.

```
fun area(side1: Int, side2: Int): Int{
  return side1 * side2
}
```
Curly brackets `{}` and `return` can be removed and by adding equals sign `=`, we get single line function.

```
fun area(side1: Int, side2: Int): Int = side1 * side2
```

The compiler can concludes the `return type` also, we can remove the `return type`.

```
fun area(side1: Int, side2: Int) = side1 * side2
```

## Function Literals

Function becomes `function literal` when we assigne it as a value. There are 2 types of function literals: `Lambda Expression` and `Anonymous Function`.

### Lambda Expression

`Lambda Expression` is short function between curly braces `{}`. The `return` is replaced by `->`. Adding `return type` is optional because the compiler deduce it from the type interface.

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

`Anonymous function` is assaigned as variable, `fun` comes after equals sign `=` and has no name thats why it is called anonymous. 

**Option One** `Anonymous Function`:
After variable name is `argument type` in parentheses `()` then `-> return type` and `fun` is after equals sign `=`, `return statment` comes after `->` in curly bracets `{}`.

**Option Two** of `Anonymous Function`
After variable name is equals sign `=`, then `fun` after it is argument with argument type in parantheses `()`, it is followed by `: return type` and the `return statment` in curly brackets `{}`.

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
