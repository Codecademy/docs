---
Title: 'Loops'
Description: 'A loop is a control structure that allows you to repeat a block of code a specified number of times or until a certain condition is met.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Loops'
  - 'While'
  - 'For'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

In Kotlin, a loop is a control flow statement that allows you to repeat a block of code a certain number of times or until a certain condition is met. Kotlin provides several types of loops, including:

- `while` loop: This loop repeatedly executes a block of code as long as a certain condition is true.
- `for` loop: This loop iterates over a range of values or elements in a collection.
- `do-while` loop: This loop is similar to a while loop, but it guarantees that the block of code will be executed at least once before the condition is checked.

## While loop

The `while` loop is used to execute a block of code repeatedly as long as a certain condition is true. The syntax for a `while` loop in Kotlin is:

```pseudo
    fun main(){
        while(condition){
            //code to be execute while the condition is true
        }
    }
```

Here's an example of a `while` loop in Kotlin that prints the numbers from 1 to 10:

```kotlin
    fun main(){
    var i = 1
    while (i <= 10) {
    print(" " + i)
    i++
    }
}
```

The output for the above code will be:

```
1 2 3 4 5 6 7 8 9 10
```

## For loop

The `for` loop is used to iterate over a range of values or an iterable collection. The syntax for a `for` loop in Kotlin is:

```pseudo
fun main(){
    for (item in collection) {
   // code to be executed for each item
    }
}
```

Here's an example of a `for` loop in Kotlin that prints the numbers from 1 to 10:

```kotlin
fun main(){
    for(i in 1..10){
        print(i)
    }
}
```

The output for the above code will be:

```
1 2 3 4 5 6 7 8 9 10
```

## Do-While loop

A `do-while` loop in Kotlin is similar to a `while` loop, but the block of code is always executed at least once before the condition is checked. The syntax for a `do-while` loop is:

```pseudo
fun main(){
    do {
    // code to be executed at least once
    } while (condition)
}
```

Here's an example of a `do-while` loop in Kotlin here the code declares a variable i with the initial value of 10. It then enters a loop, which will continue to run as long as i is greater than 0. Inside the loop, the code prints the value of i, and then decrements i by 1. This means that on each iteration of the loop, the value of i will be printed, and then reduced by 1. The loop will continue to run until i is no longer greater than 0, at which point the loop will exit and the program will end:

```kotlin
fun main(){
    var i = 10
    do {
    print(" " + i)
    i--
    } while (i > 0)
}
```

The output for the above code will be:

```
10 9 8 7 6 5 4 3 2 1
```
