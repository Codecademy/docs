---
Title: 'Arrays'
Description: 'An array is stores multiple items of the same data-type, such as an integer or string, under a single variable name.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Data Structures'
CatalogContent:
  - 'learn-kotlin'
  - 'paths/computer-science'
---

An **array** in Kotlin is a collection of items of same data type stored at contiguous memory locations.This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.

## Creating an array

In Kotlin the `arrayOf` function is usually used to create a array:

```kotlin
fun main(){

val ArrayName = arrayOf<DataType>(array)

}
```

Since `Array` is a class in Kotlin, we can also use the `Array` constructor to create an array.
The constructor takes two parameters:

- The size of the array.
- A function which accepts the index of a given element and returns the initial value of that element.

In the above example, we pass the size of the array as 3 and a lambda expression which initializes the element values from 0 to 9.

```kotlin
fun main(){
     val num = Array(5, {i-> i*1})
}
```

## Printing a Array in Kotlin

We will use [ForLoop](https://www.javatpoint.com/kotlin-for-loop) to print the array.

Method 1:

```kotlin
fun main(){
    val arrayname = arrayOf<Int>(0, 6, 21, 622, 52)
    for (i in 0..arrayname.size-1)
    {
        print(" "+arrayname[i])
    }
    println()
}
```

The output will look like

```green
 0 6 21 622 52

```

Printing the array that we created using the Method 1 mentioned above.

Method 2:

```kotlin
fun main(){
    val arrayname = Array(5, { i -> i * 1 })
    for (i in 0..arrayname.size-1)
    {
        print(" " + arrayname[i])
    }
    println()
}

```

The output will look like

```green
0 1 2 3 4
```

Printing the array that we created using the Method 2 mentioned above.

## Methods for arrays in Kotlin

There are different [methods](https://blog.kotlin-academy.com/kotlin-programmer-dictionary-function-vs-method-vs-procedure-c0216642ee87) for accessing and modifying the array in Kotlin i.e. get() and set() methods-

As you know, an array in Kotlin is basically a class. Therefore, we can access the data of a class object via its member functions. The get() and set() functions are said to be member functions.

The get() method takes a single parameter—the index of the element and returns the value of the item at that index.

## Syntax of get()

We will see now how to use `get()` function to print the specific element present on the index that we want.

```kotlin
fun main(){
    // we will create a array first and then will will apply the function
    val sampleArray = arrayOf(2,4,21,25,66)

    // now lets say we want to print the index value 2 of this array

    val value = sampleArray.get(2)

    print(value)
}
```

The output will look like this:

```
21
```

So from here we learned how to use get() function for the array in Kotlin

## Synxtax of set()

We will now learn to use how to use `set()` function in Kotlin :

```kotlin
fun main(){
    val arrayname = Array(5, { i -> i * 1 })
    for (i in 0..arrayname.size-1)
    {
        print(" " + arrayname[i])
    }
    val value = arrayname.get(2)
    val value2 = arrayname.set(2,21)

    println()
    for (i in 0..arrayname.size-1)
    {
        print(" " + arrayname[i])
    }
}
```

The output for the above code will be :

```green
0 1 2 3 4
0 1 21 3 4
```

Here you can see when we run the loop for the second time it is showing 21 instead of 2 which shows that we have changed the index value 2 to 21 from 2.
