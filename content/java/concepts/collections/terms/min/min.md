---
Title: '.min()'
Description: 'Returns the minimum member of a List based on natural ordering or based on a Comparator.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.min()`** method returns the minimum member of a `List` based on natural ordering or based on a [Comparator](https://www.codecademy.com/resources/docs/java/comparator). To use natural ordering, the elements of the `List` must implement the [Comparable](https://www.codecademy.com/resources/docs/java/comparable) interface.

## Syntax

```pseudo
import java.util.*;

// This provides the minimum element via natural ordering.
myMax = Collections.min(myList);

// This provides the minimum element via a Comparator
myMax = Collections.min(myList, myComparator);
```

Both methods return the minimum element of `myList`. The first determines the minimum element using the natural ordering of the elements. The second uses `myComparator` to determine the minimum.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then uses `Collections.min()` to return some elements:

```java
import java.util.*;

public class Main {
 public static void main(String[] args) {
   ArrayList<String> food = new ArrayList<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");

   System.out.println(Collections.min(food));
   food.remove("Cabbage");
   System.out.println(Collections.min(food));
 }
}
```

This will output the following:

```shell
Cabbage
Pizza
```
