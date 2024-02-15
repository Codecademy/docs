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

The **`.isEmpty()`** function can be called on an `ArrayList` and requires no parameters.

```pseudo
myArrayList.isEmpty();
```

## Example

The following example demonstrates how to call the `.isEmpty()` function on an `ArrayList` named `fruits`:

```java
import java.util.ArrayList;

public class Fruits {
    public static void main(String[] args) {

        // create a new ArrayList
        ArrayList<String> fruits = new ArrayList<String>();

        // check if the current fruits ArrayList is empty
        System.out.println("Is fruits empty: " + fruits.isEmpty());

        fruits.add("kiwi");
        fruits.add("pineapple");
        fruits.add("mango");

        // check again if fruits ArrayList is empty
        System.out.println("Is fruits empty: " + fruits.isEmpty());
    }

}
```

The above example will give the following output:

```shell
Is fruits empty: true
Is fruits empty: false
```

In the above example, the `.isEmpty()` function returns `true` since `fruits` was initially empty. After the three fruits are added, calling the `.isEmpty()` function again will return `false`.
