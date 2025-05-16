---
Title: '.length'
Description: 'Determines the length or size of an array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Properties'
  - 'Values'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.length`** property is used to determine the length or size of an [array](https://www.codecademy.com/resources/docs/java/arrays). It is a built-in property for arrays and returns an integer value that represents the number of elements in the array. Understanding how to use `.length` is crucial for iterating through arrays, avoiding out-of-bounds [errors](https://www.codecademy.com/resources/docs/java/errors), and dynamically managing data.

## Syntax

```pseudo
arrayName.length;
```

**Parameters:**

- `arrayName`: The name of the array to call `.length` on.

**Return Value:**

The `.length` property returns an integer value that represents the number of elements in the array.

## Example 1: Basic Usage of `.length`

This example uses the `.length` property to determine the array length:

```java
public class Array {
  public static void main(String[] args) {
    // Create an array
    String[] colors = {"Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"};

    // Find the size of the array
    int length = colors.length;

    // Print the result
    System.out.println("The length of the array is: " + length);
  }
}
```

Since the `colors` array contains 7 elements, the output for the example will be:

```shell
The length of the array is: 7
```

## Example 2: Using `.length` for Looping Through an Array

This example uses the `.length` property for [looping](https://www.codecademy.com/resources/docs/java/loops) through an array and printing the elements in it:

```java
public class Loop {
  public static void main(String[] args) {
    // Create an array
    String[] fruits = {"Apple", "Banana", "Cherry"};

    // Loop through the array and print the elements in it
    for (int i = 0; i < fruits.length; i++) {
      System.out.println(fruits[i]);
    }
  }
}
```

The output for the example will be:

```shell
Apple
Banana
Cherry
```

## Example 3: Using `.length` with Multi-Dimensional Arrays

This example uses the `.length` property to determine the number of rows and number of columns in the first row of a multi-dimensional array:

```java
public class MultiDimensionalArray {
  public static void main(String[] args) {
    // Create a multi-dimensional array
    int[][] numbers = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9}
    };

    // Print the number of rows in the array
    System.out.println("The number of rows in the array: " + numbers.length);

    // Print the number of columns in the first row of the array
    System.out.println("The number of columns in the first row of the array: " + numbers[0].length);
  }
}
```

The output for the example will be:

```shell
The number of rows in the array: 3
The number of columns in the first row of the array: 3
```

## Frequently Asked Questions

### 1. What is the difference between `.length` and `.length()`?

`.length` is an array property, whereas [`.length()`](https://www.codecademy.com/resources/docs/java/strings/length) is a [string](https://www.codecademy.com/resources/docs/java/strings) method.

### 2. Can the length of an array be changed?

No. Once an array is created, its length is constant and cannot be changed. To work with dynamic sizes, consider using [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list).

### 3. What happens if I access an index beyond the array's length?

You'll get an [`ArrayIndexOutOfBoundsException`](https://www.codecademy.com/resources/docs/java/errors/arrayindexoutofboundsexception) error, which is a runtime error.
