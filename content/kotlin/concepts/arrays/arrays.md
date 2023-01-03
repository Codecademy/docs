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

In the example, we pass the size of the array as 3 and a lambda expression which initializes the element values from 0 to 9:

```kotlin
fun main(){
     val num = Array(5, {i-> i*1})
}
```

## Printing a Array in Kotlin

This example will use a `for` loop to print the array:

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

The output will look like:

```
 0 6 21 622 52
```

This example prints an array created using the `Array` constructor mentioned above:

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

The output will look like:

```
0 1 2 3 4
```

## Methods for arrays in Kotlin

There are different methods for accessing and modifying arrays in Kotlin such as the `.get()` and `.set()` methods.

An array in Kotlin is basically a class. Therefore, the data of the class object can be accessed via its member functions. The `.get()` and `.set()` methods are said to be member functions.

The get() method takes a single parameter, the index of the element, and returns the value of the item at that index.

## Syntax of get()

This example shows how to use the `.get()` method to print the specific element present on the desired index:

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

## Synxtax of set()

This example shows to use how to use `.set()` method:

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

```
0 1 2 3 4
0 1 21 3 4
```

When the loop is run for the second time it prints 21 instead of 2 which shows that the index value 2 has changed to 21 from 2.
