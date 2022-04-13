---
Title: 'PriorityQueue'
Description: 'A PriorityQueue stores elements in a collection sorted by natural ordering or by a custom Comparitor.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Queues'
  - 'Collections'
  - 'Data Types'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

A `PriorityQueue` is an implementation of the `Queue` interface and stores elements in a collection prioritized by natural ordering, or by a custom `Comparitor`. The elements are prioritized with the least value element at the head of the queue, and the `Queue` methods `.peek()` and `.poll()` operate on that element.

## Syntax

`PriorityQueue` is a member of the `java.util` package which must be imported first.

```java
import java.util.PriorityQueue;

PriorityQueue<DataType> q = new PriorityQueue<DataType>();
```

Where `q` is a `PriorityQueue` created with the `new` keyword and `DataType` is the data type that will be stored in it.

```java
import java.util.PriorityQueue;

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparitor());
```

Where `CustomComparitor` is a  custom `Comparitor` for `DataType` or a parent class of `DataType`.

## Adding Items

New items can be added to the `PriorityQueue` with the `.add()` method.

### Syntax

```java
priorityqueue.add(item)
```

Where `item` is the item to be added, which should match the datatype `priorityqueue` was defined with.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   System.out.println(food);
 }
}
```

This will output:

```shell
[Pizza, Sausage, Potatoes, Cabbage, Salad]
```

## `.peek()` and `.poll()` Methods

The `Queue` methods `.peek()` and `.poll()` operate on the item at the head of the `PriorityQueue`. `.peek()` will return the item at the head of the queue without removing it, while `.poll()` will return the head of the queue and remove it.

### Syntax

```java
Datatype i = priorityqueue.peek();
Datatype j = priorityqueue.poll();
```

Where `DataType` is the data type that `priorityqueue` was defined with. Both return a null value when operating on an empty `PriorityQueue`.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   System.out.println(food.peek());
   while (food.size() >0) {
     System.out.println(food.poll());
   }
   System.out.println(food.peek());
 }
}
```

This will output:

```shell
Cabbage
Cabbage
Pizza
Potatoes
Salad
Sausage
null
```

## Removing Specific Items

Specific Items can be removed from the `PriorityQueue` with the `.remove()` method.

### Syntax

```java
priorityqueue.remove(item)
```

Where `item` is the item to be removed from `priorityqueue`. If `item` is not part of `priorityqueue` the method has no effect.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   food.remove("Pizza");
   while (food.size() >0) {
     System.out.println(food.poll());
   }
 }
}
```

This will output:

```shell
Cabbage
Potatoes
Salad
Sausage
```

## Checking For Existence of an Item

The `PriorityQueue` can be checked if it contains a particular item with the `.contains()` method.

### Syntax

```java
boolean result = priorityqueue.contains(item);
```

Where `result` will be `true` if `priorityqueue` contains `item` as one of its members.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   if (food.contains("Nuts")) {
     System.out.println("Allergen warning!");
   } else {
     System.out.println("Safe to eat.");
   }
 }
}
```

This will output:

```shell
Safe to eat.
```

## Returning the Size of a `PriorityQueue`

The number of items in a `PriorityQueue` can be returned with the `.size()` method.

### Syntax

```java
int ItemCount = priorityqueue.size()
```

Where `ItemCount` is the number of items in `priorityqueue`.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   while (food.size() >0) {
     System.out.println(food.poll());
     System.out.println(food.size());
   }
 }
}
```

This will output:

```shell
Cabbage
4
Pizza
3
Potatoes
2
Salad
1
Sausage
0
```

## Traversing a `PriorityQueue`

A `PriorityQueue` can be traversed with a for-each loop. Note that when doing so, the items will be returned in the order they were added to the queue, not in priority order.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>();
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   for (String i : food) {
     System.out.println(i);
   }
 }
}
```

This will output:

```shell
Cabbage
Pizza
Sausage
Potatoes
Salad
```
