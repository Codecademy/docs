---
Title: '.toArray()'
Description: 'Converts a collection or iterable object into an array.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Elements'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.toArray()`** method of the `ArrayList` [class](https://www.codecademy.com/resources/docs/java/classes) is a common method in [Java](https://www.codecademy.com/resources/docs/java) that converts an `ArrayList` into an [array](https://www.codecademy.com/resources/docs/java/arrays) and returns the newly created array. The returned array contains all the elements in the `ArrayList` in the correct order. The runtime type of the array is determined by the runtime type of the specified array.

## Syntax

1. For collections (e.g., List)

```pseudo
T[] toArray(T[] array);
```

2. For iterable objects (e.g., Set)

```pseudo
Object[] toArray();
```

- `T`: The type of elements in the collection.
- `array`: The resulting array after conversion.



## Example

## Example 1

In the example below, the `.toArray()` method is used to convert an `ArrayList` named `fruitsList` containing [strings](https://www.codecademy.com/resources/docs/java/strings) to an array of strings. Once converted, the resulting array named `fruitsArray` is printed to the console:

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        List<String> fruitsList = new ArrayList<>();
        fruitsList.add("Apple");
        fruitsList.add("Banana");
        fruitsList.add("Orange");

        // Converting List to an array of Strings
        String[] fruitsArray = fruitsList.toArray(new String[0]);

        System.out.println("Fruits Array: " + Arrays.toString(fruitsArray));
    }
}
```

The output should look like this:

```shell
Fruits Array: [Apple, Banana, Orange]
```

### Example 2

In this example, a Set named `numbersSet` contains integers. `toArray(T[] array)` method converts the set to an array of integers. The resulting array, `numbersArray`, is then printed.

```java
import java.util.HashSet;
import java.util.Set;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        Set<Integer> numbersSet = new HashSet<>();
        numbersSet.add(1);
        numbersSet.add(2);
        numbersSet.add(3);

        // Converting Set to an array of Integers
        Integer[] numbersArray = numbersSet.toArray(new Integer[0]);

        System.out.println("Numbers Array: " + Arrays.toString(numbersArray));
    }
}
```

The output should look like this:

```shell
Numbers Array: [1, 2, 3]
```

## Example 2

In this example, the `.toArray()` method is used to convert an `ArrayList` named `colorsList` containing strings to an array of objects. Once converted, the resulting array named `colorsArray` is printed to the console:

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> colorsList = new ArrayList<>();
        colorsList.add("Red");
        colorsList.add("Green");
        colorsList.add("Blue");

        // Converting the ArrayList to an array of objects
        Object[] colorsArray = colorsList.toArray();

        System.out.println("Colors Array: " + Arrays.toString(colorsArray));
    }
}
```

The output should look like this:

```shell
Colors Array: [Red, Green, Blue]
```