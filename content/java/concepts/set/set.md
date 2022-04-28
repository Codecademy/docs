---
Title: 'Set'
Description: 'A Set is an interface for collections that contain zero duplicate elements.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `Set` is an interface provided in the `java.util` package that implements collections with zero duplicate elements. Some implementations will have restrictions on the elements the `Set` can contain, such as excluding `null` elements. Adding an ineligible element will typically throw an unchecked `NullPointerException` or a `ClassCastException`.

Examples of classes implementing the `Set` interface are `HashSet` and `TreeSet`.

## Syntax

```pseudo
SetClass<DataType> mySet = new SetClass<DataType> ();
```

The `SetClass` is a class that implements the `Set` interface, and is initialized with a generic type inside angle brackets `< ... >`.

## Methods

The `Set` interface utilizes the following methods:

- `.add()` : `.add(item)` adds `item` to the `Set` if it is not already present.
- `.clear()` : Removes all the elements from the `Set`
- `.contains()` : `.contains(item)` returns `true` if `item` is a member of the `Set`.
- `.remove()` : `.remove(item)` will remove `item` from the `Set`.
- `.size()` : Returns the number of items in the `Set`.

## Example

This is an example of a `Set` interface being implemented by a `HashSet`:

```java
import java.util.HashSet;
import java.util.Set;

public class Main {
 public static void main(String[] args) {
   Set<String> food = new HashSet<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   food.remove("Sausage");
   System.out.println(food.contains("Sausage"));
   System.out.println(food);
   System.out.println(food.size());
 }
}
```

This will output the following:

```shell
false
[Pizza, Potatoes, Cabbage, Salad]
4
```
