---
Title: '.sort()'
Description: 'Sorts a List based on natural ordering or based on a Comparator.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.sort()`** method sorts a `List` based on natural ordering or based on a [Comparator](https://www.codecademy.com/resources/docs/java/comparator). To sort based on natural ordering, the elements of the `List` must implement the [Comparable](https://www.codecademy.com/resources/docs/java/comparable) interface.

## Syntax

```pseudo
import java.util.*;

// This sorts by natural ordering
Collections.sort(myList);

// This sorts by a Comparator
Collections.sort(myList, myComparator);
```

Both methods sort `myList`. The first sorts `myList` using the natural ordering of the elements. The second uses `myComparator` to order the elements.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then uses `Collections.sort()` to reorder its elements:

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

   System.out.println(food);
   Collections.sort(food);
   System.out.println(food);
 }
}
```

This results in the following output:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
[Cabbage, Pizza, Potatoes, Salad, Sausage]
```
