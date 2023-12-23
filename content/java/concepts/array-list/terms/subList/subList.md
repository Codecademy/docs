---
Title: '.subList()'
Description: 'Returns a view of a portion of the list based on the specified start and end indices.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Method'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, `.subList()` method is a powerful feature of the List interface that allows one to obtain a portion of the list based on specified indices. This method provides a convenient way to create a sublist containing elements from the original List.

## Syntax

```pseudo
List<E> subList (int fromIndex, int toIndex)
```

`fromIndex`: The starting index of the sublist.

`toIndex`: The ending index of the sublist.

## Example

Below is an example demonstrating the usage of the `.subList()` method: 

```java
import java.util.ArrayList;
import java.util.List;

public class SubListExample {
  public static void main(String[] args) {
    // Create an ArrayList
    ArrayList<String> exampleList = new ArrayList<>();

    // Add elements to the ArrayList
    exampleList.add("Item A");
    exampleList.add("Item B");
    exampleList.add("Item C");
    exampleList.add("Item D");
    exampleList.add("Item E");

    // Use .subList() to obtain a portion of the list
    List<String> subList = exampleList.subList(1, 4);

    // Display the original and sublist
    System.out.println("Original List: " + exampleList);
    System.out.println("SubList (inclusive index 1, eclusive index 4): " + subList);
  }
}
```
```shell
Original List: [Item A, Item B, Item C, Item D, Item E]

SubList(inclusive index 1, exclusive index 4): [Item B, Item C, Item D]
```


In this example the original [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) is created with five elements. The `.subList(1, 4)` call creates a sublist containing elements form index 1 (inclusive) to index 4 (exclusive). The result is then printed to the console.