---
Title: '.clone()'
Description: 'Returns a cloned version of the given ArrayList.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Java'
  - 'Methods'
  - 'Arrays'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, the **`.clone()`** [method](https://www.codecademy.com/resources/docs/java/methods) returns a cloned version of the given `ArrayList`. The cloned version is a shallow copy containing references to all the elements in the original `ArrayList`, not the elements themselves.

## Syntax

```pseudo
arrayList.clone();
```

- `arrayList`: The `ArrayList` to be cloned.

## Example

The following example demonstrates the use of the `.clone()` method:

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    // Creating an ArrayList
    ArrayList<Integer> nums = new ArrayList<>();

    // Adding elements to the ArrayList
    nums.add(12);
    nums.add(34);
    nums.add(56);

    // Printing the ArrayList
    System.out.println("Original ArrayList: " + nums);

    // Cloning the ArrayList
    ArrayList<Integer> clonedNums = (ArrayList<Integer>)nums.clone();

    // Printing the cloned ArrayList
    System.out.println("Cloned ArrayList: " + clonedNums);
  }
}
```

Since the method returns an `Object`, `ArrayList<Integer>` is used to convert it into an integer `ArrayList`.

The above example produces the following output:

```shell
Original ArrayList: [12, 34, 56]
Cloned ArrayList: [12, 34, 56]
```
