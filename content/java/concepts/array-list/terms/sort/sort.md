---
Title: '.sort()'
Description: 'Used to sort arrays of primitive types and objects.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.sort()`** method is used to sort arrays of primitive types and objects. The sorting is done in ascending order by default, but it can be customized for objects by implementing the `Comparable` interface or using a `Comparator`.

## Syntax

Here's a basic syntax of how to use the `.sort()` method:

```pseudo
Arrays.sort(array, comparator);
```

The optional `comparator` argument is an object that implements the `Comparator` interface, defining the comparison logic for elements in the array.

## Examples

### Example 1

In this example, the `Arrays.sort(numbers)` method is used to sort the array of integers in ascending order. The result is then printed using `Arrays.toString()`:

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    int[] numbers = {5, 2, 8, 1, 3};

    // Sorting the array in ascending order
    Arrays.sort(numbers);
    System.out.println("Sorted Array: " + Arrays.toString(numbers));
  }
}
```

The above example will give the following output:

```shell
Sorted Array: [1, 2, 3, 5, 8]
```

> **Note:** For an array of objects, a custom comparator can be used or the objects in the array should implement the `Comparable` interface. Here's an example with strings.

### Example 2

In this example, strings implements the `Comparable` interface, so they can be sorted directly using `Arrays.sort()`:

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    String[] names = {"Alice", "Bob", "Charlie", "David"};

    // Sorting the array of strings in ascending order
    Arrays.sort(names);

    // Printing the sorted array
    System.out.println("Sorted Array: " + Arrays.toString(names));
  }
}
```

The above example will give the following output:

```shell
Sorted Array: [Alice, Bob, Charlie, David]
```

> **Note:** For a custom sorting order, the `Comparator` interface can be used. Here's an example of sorting strings by their length.

### Example 3

In this example, `Comparator.comparing(String::length)` is used to sort the array of strings based on their length:

```java
import java.util.Arrays;
import java.util.Comparator;

public class Main {
  public static void main(String[] args) {
    String[] names = {"Alice", "Bob", "Charlie", "David"};

    // Sorting the array of strings by length
    Arrays.sort(names, Comparator.comparing(String::length));
    System.out.println("Sorted Array by Length: " + Arrays.toString(names));
  }
}
```

The above example will give the following output:

```shell
Sorted Array by Length: [Bob, Alice, David, Charlie]
```
