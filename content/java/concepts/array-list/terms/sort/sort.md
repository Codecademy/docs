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
Arrays.sort(array);
```

## Examples

### Example 1

In this case, strings implement the `Comparable` interface, so they can be sorted directly using `Arrays.sort()`:

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

> **Note:** If you need a custom sorting order, you can use the Comparator interface. Here's an example sorting strings by their length:

## Example 2


```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String[] names = {"Alice", "Bob", "Charlie", "David"};

        // Sorting the array of strings in ascending order
        Arrays.sort(names);

        // Printing the sorted array
        System.out.println("Sorted Array by Length: " + Arrays.toString(names));
    }
}
```

The output should look like this:

```shell
Sorted Array by Length: [Bob, Alice, David, Charlie]
```
