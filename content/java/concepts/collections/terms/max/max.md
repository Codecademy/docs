---
Title: '.max()'
Description: 'Returns the maximum member of a List based on natural ordering or based on a Comparator.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Functions'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.max()`** method returns the maximum member of a `List` based on natural ordering or based on a [Comparator](https://www.codecademy.com/resources/docs/java/comparator). To use natural ordering, the elements of the `List` must implement the [Comparable](https://www.codecademy.com/resources/docs/java/comparable) interface.

## Syntax

```pseudo
import java.util.*;

// This provides the maximum element via natural ordering
myMax = Collections.max(myList);

// This provides the maximum element via a Comparator
myMax = Collections.max(myList, myComparator);
```

Both methods return the maximum element of `myList`. The first determines the maximum element using the natural ordering of the elements. The second uses `myComparator` to determine the maximum.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then uses `Collections.max()` to return some elements:

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

   System.out.println(Collections.max(food));
   food.remove("Sausage");
   System.out.println(Collections.max(food));
 }
}
```

This will output the following:

```shell
Sausage
Salad
```
