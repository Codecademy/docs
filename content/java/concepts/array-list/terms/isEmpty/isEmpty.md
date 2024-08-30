---
Title: '.isEmpty()'
Description: 'Checks if an ArrayList is empty.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Elements'
  - 'Search'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.isEmpty()`** function checks if a given `ArrayList` is empty. It returns `true` if the `ArrayList` is empty and `false` if it is not empty.

## Syntax

```pseudo
myArrayList.isEmpty();
```

- `myArrayList`: The name of the `ArrayList` on which the `.isEmpty()` function is called.

## Example

The following example demonstrates how to call the `.isEmpty()` function on an `ArrayList` named `fruits`:

```java
import java.util.ArrayList;

public class Fruits {
  public static void main(String[] args) {
    // Creating a new ArrayList
    ArrayList<String> fruits = new ArrayList<String>();

    // Using the .isEmpty() function
    System.out.println("Is fruits empty: " + fruits.isEmpty());

    fruits.add("kiwi");
    fruits.add("pineapple");
    fruits.add("mango");

    System.out.println("Is fruits empty: " + fruits.isEmpty());
  }
}
```

The above example will give the following output:

```shell
Is fruits empty: true
Is fruits empty: false
```

Above, the `.isEmpty()` function returns `true` in the first case because `fruits` was initially empty. Then, in the second case, it returns `false` as it is called after the three fruits are added to `fruits`.
