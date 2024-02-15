---
Title: '.swap()'
Description: 'Swaps the position of two elements in a List.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.swap()`** method swaps the positions of two elements in a `List`.

## Syntax

```pseudo
import java.util.*;

Collections.swap(myList, index1, index2);
```

This will swap the element in `myList` at zero-based `int` index `index1` with the element at zero-based `int` index `index2`.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then uses `Collections.swap()` to reorder some elements:

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
   Collections.swap(food,2,4);
   System.out.println(food);
 }
}
```

This will output the following:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
[Cabbage, Pizza, Salad, Potatoes, Sausage]
```
