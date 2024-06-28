---
Title: '.clone()'
Description: 'Returns a cloned version of the given ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Methods'
  - 'Java'
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

The following example illustrates how to use the `.clone()` method.

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

Since the `.clone()` method returns an `Object`, it needs to be cast to `ArrayList<Integer>` to convert it into an `ArrayList` of integers.

The above example produces the following output:

```shell
Original ArrayList: [12, 34, 56]
Cloned ArrayList: [12, 34, 56]
```
