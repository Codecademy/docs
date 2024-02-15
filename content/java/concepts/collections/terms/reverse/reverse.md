---
Title: '.reverse()'
Description: 'Reverses the current ordering of a List.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.reverse()`** method reverses the current ordering of a `List`.

## Syntax

```pseudo
import java.util.*;

Collections.reverse(myList);
```

This reverses the ordering of the elements in `myList`.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) and then uses `Collections.reverse()` to reorder the elements:

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
   Collections.reverse(food);
   System.out.println(food);
 }
}
```

This will output the following:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
[Salad, Potatoes, Sausage, Pizza, Cabbage]
```
