---
Title: '.shuffle()'
Description: 'Randomizes the order of elements in a List.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`Collections.shuffle()`** method randomizes the order of elements in a `List`.

## Syntax

```pseudo
import java.util.*;

Collections.shuffle(myList);
```

`myList` will have the order of its elements randomized.

## Example

The following example creates an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) then uses `Collections.shuffle()` to reorder the elements:

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
   Collections.shuffle(food);
   System.out.println(food);
   Collections.shuffle(food);
   System.out.println(food);
 }
}
```

This will output something similar to the following:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
[Sausage, Salad, Cabbage, Pizza, Potatoes]
[Potatoes, Pizza, Salad, Sausage, Cabbage]
```
