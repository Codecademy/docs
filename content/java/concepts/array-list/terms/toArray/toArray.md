---
Title: '.toArray()'
Description: 'Converts an ArrayList into an array.'
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

The following syntax is used when an `ArrayList` is converted into an array that returns another array:

```pseudo
Object[] toArray()
```

The following syntax is used when an `ArrayList` of type `T` is converted into an array that returns another array of type `T`:

```pseudo
<T> T[] toArray(T[] array)
```

Here, `array` is the resulting array after conversion.

## Example 1

In the example below, the `.toArray()` method is used to convert an `ArrayList` named `fruitsList` containing [strings](https://www.codecademy.com/resources/docs/java/strings) to an array of strings. Once converted, the resulting array named `fruitsArray` is printed to the console:

```java
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruitsList = new ArrayList<>();
        fruitsList.add("Apple");
        fruitsList.add("Banana");
        fruitsList.add("Orange");

        // Converting the ArrayList to an array of strings
        String[] fruitsArray = fruitsList.toArray(new String[0]);
        System.out.println("Fruits Array: " + Arrays.toString(fruitsArray));
    }
}
```

The output should look like this:

```shell
Fruits Array: [Apple, Banana, Orange]
```

## Example 2

In this example, the `.toArray()` method is used to convert an `ArrayList` named `colorsList` containing strings to an array of objects. Once converted, the resulting array named `colorsArray` is printed to the console:

```java
import java.util.ArrayList;
import java.util.Iterator;
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

The output should result in the following output:

```shell
Colors Array: [Red, Green, Blue]
```
