---
Title: '.iterator()'
Description: 'Returns an iterator over the elements in an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Iterators'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.iterator()`** [method](https://www.codecademy.com/resources/docs/java/methods) is used to iterate over the elements of a [collection](https://www.codecademy.com/resources/docs/java/collection) (such as an `ArrayList`) one by one.

## Syntax

```pseudo
arrayListInstance.iterator();
```

`arrayListInstance`: The `ArrayList` to be iterated.

The method returns an [`Iterator`](https://www.codecademy.com/resources/docs/java/iterator) object, which must be of the same [data type](https://www.codecademy.com/resources/docs/java/data-types) as `arrayListInstance`.

## Example

The following example creates an `ArrayList`, inserts some elements using the [`.add()`](https://www.codecademy.com/resources/docs/java/array-list/add) method and then iterates over it using a loop.

```java
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {
        // Create an ArrayList of String
        ArrayList<String> list = new ArrayList<>();
        // Add items to the ArrayList
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        // Get an iterator for the list
        Iterator<String> iterator = list.iterator();

        // Use the iterator to traverse the list
        while (iterator.hasNext()) {
            String element = iterator.next();
            System.out.println(element);
        }
    }
}
```

The previous example will print the following in the console:

```shell
Apple
Banana
Cherry
```

