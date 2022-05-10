---
Title: 'PriorityQueue'
Description: 'A PriorityQueue stores elements in a collection sorted by natural ordering or by a custom Comparator.'
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

A `PriorityQueue` is an implementation of the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface. It stores elements in a collection prioritized by natural ordering or by a custom `Comparator`. The elements are prioritized with the least value element at the head of the queue, and the `Queue` methods `.peek()` and `.poll()` operate on that element.

## Syntax

`PriorityQueue` is a member of the `java.util` package which must be imported first.

```pseudo
import java.util.PriorityQueue;

PriorityQueue<DataType> q = new PriorityQueue<DataType>();
```

- `q` is a `PriorityQueue` created with the `new` keyword.
- `DataType` is the data type that will be stored in it.

`CustomComparator` is a custom `Comparator` for `DataType` or a parent class of `DataType`. The following syntax sets a `CustomComparator` to a `PriorityQueue`:

```pseudo
import java.util.PriorityQueue;
import java.util.Comparator;

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

## Adding Items

New items can be added to the `PriorityQueue` with the `.add()` method.

### Syntax

```java
priorityqueue.add(item)
```

Where `item` is the item to be added, which should match the data type of the `priorityqueue`.

### Example

```java
import java.util.PriorityQueue;

public class Main {
 public static PriorityQueue<String> SetupPriorityQueue() {
   PriorityQueue<String> result = new PriorityQueue<String>();
   result.add("Cabbage");
   result.add("Pizza");
   result.add("Sausage");
   result.add("Potatoes");
   result.add("Salad");
   return result;
 }
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
   System.out.println(food);
 }
}
```

This will output:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
```

## Removing Specific Items

Specific items can be removed from the `PriorityQueue` with the `.remove()` method.

### Syntax

```pseudo
priorityqueue.remove(item)
```

Where `item` is the item to be removed from `priorityqueue`. If `item` is not part of `priorityqueue` the method has no effect.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
   food.remove("Pizza");
   while (food.size() > 0) {
     System.out.println(food.poll());
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

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
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

## Returning the Size of a `PriorityQueue`

The number of items in a `PriorityQueue` can be returned with the `.size()` method.

### Syntax

```java
int ItemCount = priorityqueue.size()
```

Where `ItemCount` is the number of items in `priorityqueue`.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
   while (food.size() > 0) {
     System.out.println(food.poll());
     System.out.println(food.size());
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

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
   for (String i : food) {
     System.out.println(i);
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

## `.peek()` and `.poll()` Methods

The `Queue` methods `.peek()` and `.poll()` operate on the item at the head of the `PriorityQueue`. `.peek()` will return the item at the head of the queue without removing it, while `.poll()` will return the head of the queue and remove it.

### Syntax

```java
Datatype i = priorityqueue.peek();
Datatype j = priorityqueue.poll();
```

Where `DataType` is the data type that `priorityqueue` was defined with. Both return a null value when operating on an empty `PriorityQueue`.

### Example

Changing the `.main()` method of the above example:

```java
 public static void main(String[] args) {
   PriorityQueue<String> food = SetupPriorityQueue();
   System.out.println(food.peek());
   while (food.size() > 0) {
     System.out.println(food.poll());
   }
   System.out.println(food.peek());
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

## Using a Custom Comparator

To prioritize items by some other scheme than the natural sort order, a custom `Comparator` must be used. A `Comparator` is a special class that is used by the `PriorityQueue` to determine when one item of a given data type should come before another item of the same data type. The function should implement the `Comparator<DataType>` interface, where `DataType` is the data type being compared, and override the `compare` method, which takes two arguments of `DataType` and returns a positive value if the first argument comes before the second, and a negative value if the first argument comes after the second.

### Syntax

```java
import java.util.PriorityQueue;

import java.util.Comparator;

static class CustomComparator implements Comparator<DataType> {
  @Override
  public int compare(DataType item1, DataType item2)
  {
    // return positive if item1 < item2, and negative if item1 > item2
  }

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

### Example

The following example reverses the priorities of the `String` values in the `PriorityQueue`:

```java
import java.util.PriorityQueue;
import java.util.Comparator;


public class Main {
  static class CustomComparator implements Comparator<String> {
    @Override
    public int compare(String item1, String item2)
    {
      return item1.compareTo(item2) < 0 ? 1 : -1;
    }
  }

 public static void main(String[] args) {
   PriorityQueue<String> food = new PriorityQueue<String>(new CustomComparator());
   food.add("Cabbage");
   food.add("Pizza");
   food.add("Sausage");
   food.add("Potatoes");
   food.add("Salad");
   while (food.size() > 0) {
     System.out.println(food.poll());
   }
 }
}

```

This will output:

```shell
Sausage
Salad
Potatoes
Pizza
Cabbage
```
