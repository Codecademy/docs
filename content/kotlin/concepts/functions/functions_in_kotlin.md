---
Title: 'Functions in Kotlin'
Description: 'Kotlin will not run without functions'
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

**Functions are essential part of any Kotlin program.** The Kotlin program has to start with `main()` function or there will be an error. `fun` is used to define a function in Kotlin but thear are also predefinec functions like println and print. Functions are called in the `main()` function.

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
+ *Return type* is by default *Unit*, *Unit* means the function will not return a value, it is optional to include
+ In the *body* containes the instructions.
+ *Return statment* is needed only if the *return type* is not *unit*.

### Arguments

`Argument` is data inserted to function. `Arguments` must have a name and data type of inserted data.Between `argument` and `data type` must be colon `:`
```
fun functionName(argumentName: dataType){
  body
}

fun sample(number: Int){
  body
}
```
`Arguments` can have default value.

```
fun default(name: String = "Kotlin") {
  body
}
```

### Return type

The `return type` expresses the returning valu type. Entering `return type` is optional.

```
fun functionName(argument): return type {
  body
}
fun sample(name: String): String {
  body
}
```

### Function body

`Function body` has the instruction for the function. It must be between curly brackets `{}`. `Function body` is indented, except for single line function. The opening curly bracket `{` is at the end of the first line of function and the closing curly bracket is under the last line of `function body }`.

```
fun functionName(argument) {
  bodyline1
  bodyline2
}
```

