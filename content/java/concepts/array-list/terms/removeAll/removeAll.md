---
Title: '.removeAll()'
Description: 'Removes multiple elements from an ArrayList.'
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

The `.removeAll()` method is used for removing multiple elements from instances of the `ArrayList` class.

## Syntax

A collection of elements, specified by `Collection c`, can be removed from an `ArrayList` instance using the `.removeAll()` method:

```pseudo
arrayListInstance.removeAll(Collection c);
```

## Example

In the example below, two `ArrayList` instance `fallMonths` and `monthsToRemove` are created and can hold `String`-type elements. Next, elements are added with [the `.add()` method](https://www.codecademy.com/resources/docs/java/array-list/add). Then, `monthsToRemove` is utilized to remove the months August and September from `fallMonths` using `.removeAll()`. Finally, all elements are removed from `fallMonths` by invoking `.removeAll()` with a reference to itself.

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

    System.out.println(fallMonths);
    
    // Remove all elements from fallMonths
    fallMonths.removeAll(fallMonths);

    System.out.println(fallMonths);
  }
}
```

The `RemoveFallMonths` output should look like this:

```shell
[September, October, November]
[]
```