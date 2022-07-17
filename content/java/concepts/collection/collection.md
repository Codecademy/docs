---
Title: 'Collection'
Description: 'A Collection is an interface allowing items to be grouped within a single container object.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Interface'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A **`Collection`** is an interface allowing items to be grouped within a single container object. It is found in the `java.util` package and is implemented by `List`, [`Set`](https://www.codecademy.com/resources/docs/java/set), and [`Queue`](https://www.codecademy.com/resources/docs/java/queue).

There are many varied `Collection` types in Java, and the special [`Collections`](https://www.codecademy.com/resources/docs/java/collections) class is provided to manipulate them.

## Syntax

```pseudo
import java.util;

Collection<DataType> c = new CollectionClass<DataType>();
```

Where `DataType` is the data type to be stored in the collection and `CollectionClass` is some class implementing the `Collection` interface.

## Methods

The `Collection` interface utilizes the following methods:

|      Method      |          Syntax          | Description                                                                    |
| :--------------: | :----------------------: | ------------------------------------------------------------------------------ |
|     `.add()`     |       `.add(item)`       | Adds `item` to the collection if it wasn't a member already.                   |
|   `.addAll()`    |  `.addAll(collection)`   | Adds the elements in `collection` to the collection.                           |
|    `.clear()`    |        `.clear()`        | Removes all the items in the collection.                                       |
|  `.contains()`   |    `.contains(item)`     | Returns `true` if `item` is a member of the collection.                        |
| `.containsAll()` | `.contains(collection)`  | Returns true if all the items in `collection` are contained in the collection. |
|   `.isEmpty()`   |       `.isEmpty()`       | Returns `true` if the collection contains no elements.                         |
|   `.remove()`    |     `.remove(item)`      | Removes `item` from the collection.                                            |
|  `.removeAll()`  | `.removeAll(collection)` | Removes all items in `collection` from the collection.                         |
|    `.size()`     |        `.size()`         | Returns the number of elements in the collection.                              |
|   `.toArray()`   |       `.toArray()`       | Returns an array containing all the elements in the collection.                |
|                  |    `.toArray(array)`     | Returns an array whose data type is the same as `array`.                       |

## Example

This is an example of the `Collection` interface being implemented by an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list):

```java
import java.util.*;

public class Main {
 public static void main(String[] args) {
   Collection<String> food = new ArrayList<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   System.out.println(food.contains("Cabbage"));
   food.remove("Cabbage");
   System.out.println(food);
 }
}
```

This will output the following:

```shell
true
[Pizza, Sausage, Potatoes, Salad]
```
