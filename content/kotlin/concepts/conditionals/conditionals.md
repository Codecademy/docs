---
Title: 'Conditionals'
Description: 'Conditionals take an expression, which is code that evaluates to determine a value, and does something if it is true or false.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Conditionals'
  - 'Control Flow'
  - 'Switch'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Conditionals** are commands in Kotlin that handle decisions. With conditionals, code is dynamic, which means that it can behave differently given a different condition. In conditional statements different code blocks can be written which can execute when the condition is met.

## If Statement

The `if` statement is used to invoke conditional code. In other words, the code will only run `if` a predicate is fulfilled.

```pseudo
if(condition){
    // Code block
}
```

For example, suppose a bot, Qbot, can go watch a movie if it finishes its homework. To accomplish this, code can be written that looks like:

```kotlin
fun main(){
   val FinishedHomeWork = true
   if (FinishedHomeWork){
   print("Can go out to watch the movie")
}
```

The output for the above code will be:

```shell
Can go out to watch the movie
```

## Else Statement

The additional `else` block is used to provide an alternative for the cases when a predicate is not fulfilled.

```pseudo
if(condition){
    // Code block
}else{
    // Code block
}
```

In this example the value of `FinishedHomework` is given as `false` resulting in execution of the `else` statement:

```kotlin
fun main(){
    val FinishedHomeWork = false
    if (FinishedHomeWork){
        print("Can go to watch the movie")
    }else{
        print("Cannot go out to watch movie")
    }
}
```

The output for the above code will be:

```shell
Cannot go out to watch movie
```

## If else-if Statement

By placing one `if-else` block after another, a structure is formed known as `if else-if`. It is a structure that checks conditions one after another until it finds the first one that is fulfilled, and the code within that block is executed. If all the conditions return `false`, the `else` block is called.

```pseudo
if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition1 is false and condition2 is true
} else {
    // Code to execute if both condition1 and condition2 are false
}
```

In the examples below, if `probability` is smaller or equal to 40, then "Unlikely" will be printed. If `probability` is over 40 but smaller or equal to 80, then "Likely" will be printed. And if `probability` is over 80 but smaller or equal to 100, then "Yes" will be printed. This is done by using the `if else-if` control structure:

```kotlin
fun main() {
    println("Is it going to rain?")
    val probability = 70
    if (probability <= 40) {
        println("Unlikely")
    } else if (probability <= 80) {
        println("Likely")
    } else if (probability < 100) {
        println("Yes")
    } else {
        println("What?")
    }
}
```

The output for the above code will be:

```shell
Is it going to rain?
Likely
```

## When Statement

The `when` statement is an alternative to `if else-if`. On every branch of the `when` statement, a predicate and a body is specified. The body will be executed only for the first predicate that returns `true`. So it works just like `if else-if`, but it's preferred because its syntax is better suited for multiple conditions. And thanks to the fact that it's a single statement, Kotlin can run this code faster than checking multiple `if else-if` statements.

```pseudo
when (expression) {
    value1 -> {
        // Code to execute if expression == value1
    }
    value2 -> {
        // Code to execute if expression == value2
    }
    ...
    else -> {
        // Code to execute if expression does not match any of the above values
    }
}
```

In the code below, the conditional statements of the previous example are implemented with a `when` statement in lieu of multiple `if-else` blocks:

```kotlin
fun main() {
println("Is it going to rain?")
val probability = 70
    when {
        probability <= 40 -> {
        println("Unlikely")
        }
        probability <= 80 -> {
        println("Likely")
        }
        probability < 100 -> {
        println("Yes")
        }
        else ->
        println("What?")
        }
    }
}
```

The output for the above code will be:

```shell
Is it going to rain?
Likely
```
