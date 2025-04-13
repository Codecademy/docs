---
Title: '.removeAll()'
Description: 'Removes multiple elements from an ArrayList that are also contained in the specified collection.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Data Types'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.removeAll()`** method is used for removing multiple elements from instances of the `ArrayList` class.

## Syntax

```pseudo
  ArrayList1.removeAll(ArrayList2);
```

- `ArrayList1`: It is the `ArrayList` from which elements will be removed.
- `ArrayList2`: It is the `ArrayList` containing the elements to be removed from `ArrayList1`.

## Example

In the example below, two `ArrayList` instances, `fallMonths` and `monthsToRemove`, are created to hold `String` type elements. Elements are added to the `fallMonths` using the [`.add()`]
(https://www.codecademy.com/resources/docs/java/array-list/add) method. Then, `monthsToRemove` is utilized to remove the months - August and September from `fallMonths` using `.removeAll()`. Finally, all elements are removed from `fallMonths` by invoking `.removeAll()` with a reference to itself.

```java
import java.util.ArrayList;

public class RemoveFallMonths{
  public static void main(String[] args) {

    ArrayList<String> fallMonths = new ArrayList<String>();

    fallMonths.add("August");
    fallMonths.add("September");
    fallMonths.add("October");
    fallMonths.add("November");
    fallMonths.add("December");

    ArrayList<String> monthsToRemove = new ArrayList<String>();

    monthsToRemove.add("August");
    monthsToRemove.add("December");

    // Remove August and December from fallMonths using monthsToRemove
    fallMonths.removeAll(monthsToRemove);

    System.out.println("After removing specified months: " + fallMonths);

    // Remove all elements from fallMonths
    fallMonths.removeAll(fallMonths);

System.out.println("After removing all elements: " + fallMonths);
  }
}
```

The output of the above code should look like this:

```shell
After removing specified months: [September, October, November]
After removing all elements: []
```
