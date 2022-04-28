---
Title: 'HashSet'
Description: 'A HashSet stores a set of items that are unique, unordered, and of a given data type.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Data Structures'
  - 'Data Types'
  - 'Collections'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `HashSet` is used to store an unordered set of unique items of a given [data type](https://www.codecademy.com/resources/docs/java/data-types).

## Syntax

```java
import java.util.HashSet;

HashSet<DataType> h = new HashSet<DataType>();
```

Where `h` is a `HashSet` created with the `new` keyword and `DataType` is the data type that will be stored in it. `HashSet` is a member of the `java.util` package which must be imported first.

## Adding Items

New items can be added to the `HashSet` with the `.add()` method.

### Syntax

```java
hashset.add(item)
```

Where `item` is the item to be added, which should match the data type `hashset` was defined with.

### Example

```java
import java.util.HashSet;

public class Main {
 public static HashSet<String> SetupHashSet() {
   HashSet<String> result = new HashSet<String>();
   result.add("Cabbage");
   result.add("Pizza");
   result.add("Sausage");
   result.add("Potatoes");
   result.add("Salad");
   return result;
 }
 public static void main(String[] args) {
   HashSet<String> food = SetupHashSet();
   food.add("Sausage");
   System.out.println(food);
 }
}
```

This will output:

```shell
[Pizza, Sausage, Potatoes, Cabbage, Salad]
```

**Note:** Members of the `HashSet` must be unique, so adding the same item twice will have no effect, like in the example above where "Sausage" is added a second time. Also, the `HashSet` items have no particular order, regardless of when they were inserted.

## Removing Items

Items can be removed from the `HashSet` with the `.remove()` method.

### Syntax

```java
hashset.remove(item)
```

Where `item` is the item to be removed from `hashset`. If `item` is not part of `hashset` the method has no effect.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   HashSet<String> food = SetupHashSet();
   food.remove("Sausage");
   System.out.println(food);
 }
```

This will output:

```shell
[Pizza, Potatoes, Cabbage, Salad]
```

## Checking For Existence of an Item

The `HashSet` can be checked if it contains a particular item with the `.contains()` method.

### Syntax

```java
boolean result = hashset.contains(item);
```

Where `result` will be `true` if `hashset` contains `item` as one of its members.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   HashSet<String> food = SetupHashSet();
   if (food.contains("Nuts")) {
     System.out.println("Allergen warning!");
   } else {
     System.out.println("Safe to eat.");
   }
 }
```

This will output:

```shell
Safe to eat.
```

## Returning the Size of a `HashSet`

The number of items in a `HashSet` can be returned with the `.size()` method.

### Syntax

```java
int ItemCount = hashset.size()
```

Where `ItemCount` is the number of items in `hashset`.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   HashSet<String> food = SetupHashSet();
   System.out.println(food.size());
   food.remove("Sausage");
   System.out.println(food.size());
 }
```

This will output:

```shell
5
4
```

## Traversing a `HashSet`

A `HashSet` can be traversed with a `for-each` [loop](https://www.codecademy.com/resources/docs/java/loops). Note that when doing so, the items will not be returned in any particular order.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   HashSet<String> food = SetupHashSet();
   for (String i : food) {
     System.out.println(i);
   }
 }
```

This will output:

```shell
Pizza
Sausage
Potatoes
Cabbage
Salad
```
