---
Title: 'Loops'
Description: 'In kotlin, a loop is a control structure that allows you to repeat a block of code a specified number of times or until a certain condition is met. Loops are useful for automating repetitive tasks and for processing large amounts of data efficiently.'
Subjects:
  - 'Computer Science'
Tags:
  - 'loops'
  - 'while'
  - 'for'
  - 'do-while'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

## While loop

The `while` loops used to execute a block of code repeatedly as long as a certain condition is true. The syntax for a `while` loop in Kotlin is:

```kotlin
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

```kotlin
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

A `do-while` loop in Kotlin is similar to a while loop, but the block of code is always executed at least once before the condition is checked. The syntax for a `do-while` loop is:

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
