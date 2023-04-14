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

**Functions are essential part of any Kotlin program.** The Kotlin program has to start with `main()` function or there will be an error. **fun** is used to define a function in Kotlin but thear are also predefinec functions like println and print. Functions are called in the **main()** function.

## Function **main()**

Function **main()** is the entry point to Kotlin programing and also required in every Kotlin program. The **main()** function is meant to include your code that you write and is not called anywhere.

```
fun main() {
  println("Hello World")
}
```
## Creating functions in Kotlin ###

User defined functions start with the **fun** keyword, followed by the function name, parameters(if there is any) and the function body which is enclose in curly braces

```
fun function_name(arguments): return type {
  body
  return statment
}
```
+ The *function_name* is used to call the function in the program.
+ *Arguments* have to be in the parentheses, arguments are pieces
+ Return type is by default *Unit*, *Unit* means the function will not return a value, it is optional to include
+ In the *body* containes the instructions.
+ *Return statment* is needed only if the *return type* is not *unit*.