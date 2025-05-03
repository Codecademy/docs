---
Title: 'PriorityQueue'
Description: 'Stores elements in a collection sorted by natural ordering or by a custom Comparator.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Collections'
  - 'Data Types'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

In Java, a **`PriorityQueue`** is an implementation of the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface. It stores elements in a [collection](https://www.codecademy.com/resources/docs/java/collection) prioritized by natural ordering or by a custom [`Comparator`](https://www.codecademy.com/resources/docs/java/comparator). The elements are prioritized with the least value element at the head of the queue, and the `Queue` methods `.peek()` and `.poll()` operate on that element.

## Creating a `PriorityQueue`

Using natural ordering:

```pseudo
import java.util.PriorityQueue;

PriorityQueue<DataType> q = new PriorityQueue<DataType>();
```

Using a custom `Comparator`:

```pseudo
import java.util.PriorityQueue;
import java.util.Comparator;

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

In these syntaxes:

- `q`: A `PriorityQueue` created with the `new` keyword.
- `DataType`: The [data type](https://www.codecademy.com/resources/docs/java/data-types) to be stored in `q`.
- `CustomComparator`: A custom `Comparator` for `DataType` or a parent [class](https://www.codecademy.com/resources/docs/java/classes) of `DataType`.

## Adding Items to `PriorityQueue`

The `.add()` method is used to add new items to a `PriorityQueue`.

### Syntax

```pseudo
priorityqueue.add(item)
```

**Parameters:**

- `item`: The item to be added to `priorityqueue`. It should match the data type of `priorityqueue`.

**Return value:**

The `.add()` method returns `true` if `item` is successfully added to `priorityqueue` and `false` otherwise.

### Example

This example demonstrates the usage of the `.add()` method to add new items to a `PriorityQueue`:

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

Here is the output:

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
```

## Removing Items from `PriorityQueue`

The `.remove()` method is used to remove specific items from a `PriorityQueue`.

### Syntax

```pseudo
priorityqueue.remove(item)
```

**Parameters:**

- `item`: The item to be removed from `priorityqueue`. If `item` is not part of `priorityqueue`, the `.remove()` method has no effect.

**Return value:**

The `.remove()` method returns `true` if `item` is successfully removed from `priorityqueue` and `false` otherwise.

### Example

This example demonstrates the usage of the `.remove()` method to remove specific items from a `PriorityQueue`:

```java
import java.util.PriorityQueue;

public class Main {
  public static PriorityQueue<String> SetupPriorityQueue() {
    PriorityQueue<String> food = new PriorityQueue<String>();

    food.add("Cabbage");
    food.add("Pizza");
    food.add("Sausage");
    food.add("Potatoes");
    food.add("Salad");

    return food;
  }

  public static void main(String[] args) {
    PriorityQueue<String> food = SetupPriorityQueue();

    food.remove("Pizza");

    while (food.size() > 0) {
      System.out.println(food.poll());
    }
  }
}
```

Here is the output:

```shell
Cabbage
Potatoes
Salad
Sausage
```

## Searching for an Item in `PriorityQueue`

The `.contains()` method is used to search for a particular item in a `PriorityQueue`.

### Syntax

```pseudo
priorityqueue.contains(item);
```

**Parameters:**

- `item`: The item to be searched for in `priorityqueue`.

**Return value:**

The `.remove()` method returns `true` if `item` is found in `priorityqueue` and `false` otherwise.

### Example

This example demonstrates the usage of the `.contains()` method to search for a particular item in a `PriorityQueue`:

```java
import java.util.PriorityQueue;

public class Main {
  public static PriorityQueue<String> SetupPriorityQueue() {
    PriorityQueue<String> food = new PriorityQueue<String>();

    food.add("Cabbage");
    food.add("Pizza");
    food.add("Sausage");
    food.add("Potatoes");
    food.add("Salad");

    return food;
  }

  public static void main(String[] args) {
    PriorityQueue<String> food = SetupPriorityQueue();

    if (food.contains("Nuts")) {
      System.out.println("Allergen warning!");
    } else {
      System.out.println("Safe to eat.");
    }
  }
}
```

Here is the output:

```shell
Safe to eat.
```

## Returning the Size of a `PriorityQueue`

The `.size()` method returns the size or the number of items in a `PriorityQueue`.

### Syntax

```pseudo
priorityqueue.size()
```

### Example

This example demonstrates the usage of the `.size()` method to return the size of a `PriorityQueue`:

```java
import java.util.PriorityQueue;

public class Main {
  public static PriorityQueue<String> SetupPriorityQueue() {
    PriorityQueue<String> food = new PriorityQueue<String>();

    food.add("Cabbage");
    food.add("Pizza");
    food.add("Sausage");
    food.add("Potatoes");
    food.add("Salad");

    return food;
  }

  public static void main(String[] args) {
    PriorityQueue<String> food = SetupPriorityQueue();

    System.out.println(food.size());
  }
}
```

Here is the output:

```shell
5
```

## Traversing a `PriorityQueue`

A `PriorityQueue` can be traversed with a `for-each` loop. Note that when doing so, the items will be returned in the order they were added to the queue, not in priority order.

### Example

This example demonstrates the usage of the `for-each` loop to traverse a `PriorityQueue`:

```java
import java.util.PriorityQueue;

public class Main {
  public static PriorityQueue<String> SetupPriorityQueue() {
    PriorityQueue<String> food = new PriorityQueue<String>();

    food.add("Cabbage");
    food.add("Pizza");
    food.add("Sausage");
    food.add("Potatoes");
    food.add("Salad");

    return food;
  }

  public static void main(String[] args) {
    PriorityQueue<String> food = SetupPriorityQueue();

    for (String i : food) {
      System.out.println(i);
    }
  }
}
```

Here is the output:

```shell
Cabbage
Pizza
Sausage
Potatoes
Salad
```

## `.peek()` and `.poll()` Methods

The `Queue` methods `.peek()` and `.poll()` operate on the item at the head of a `PriorityQueue`. `.peek()` will return the item at the head of the queue without removing it, while `.poll()` will return the head of the queue and remove it.

### Syntax

```pseudo
priorityqueue.peek();
priorityqueue.poll();
```

### Example

This example applies the `.peek()` and `.poll()` methods on a `PriorityQueue`:

```java
import java.util.PriorityQueue;

public class Main {
  public static PriorityQueue<String> SetupPriorityQueue() {
    PriorityQueue<String> food = new PriorityQueue<String>();

    food.add("Cabbage");
    food.add("Pizza");
    food.add("Sausage");
    food.add("Potatoes");
    food.add("Salad");

    return food;
  }

  public static void main(String[] args) {
    PriorityQueue<String> food = SetupPriorityQueue();

    System.out.println(food.peek());

    while (food.size() > 0) {
      System.out.println(food.poll());
    }

    System.out.println(food.peek());
  }
}
```

Here is the output:

```shell
Cabbage
Cabbage
Pizza
Potatoes
Salad
Sausage
null
```

## Using a Custom `Comparator`

To prioritize items by some other scheme than the natural sorting order, a custom `Comparator` must be used. A `Comparator` is a special class that is used by the `PriorityQueue` to determine when one item of a given data type should come before another item of the same data type.

### Syntax

```pseudo
import java.util.PriorityQueue;
import java.util.Comparator;

static class CustomComparator implements Comparator<DataType> {
  @Override
  public int compare(DataType item1, DataType item2)
  {
    // Return a positive value if item1 < item2, and a negative value if item1 > item2
  }
}

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

In the syntax, the `CustomComparator` class is used to implement the `Comparator` [interface](https://www.codecademy.com/resources/docs/java/interfaces), in which the `compare()` method is overridden.

**Parameters:**

- `DataType`: The data type being compared.

**Return value:**

The `compare()` method returns a positive value if the first argument comes before the second, and a negative value if the first argument comes after the second.

### Example

This example reverses the priorities of the `String` values in the `PriorityQueue`:

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

Here is the output:

```shell
Sausage
Salad
Potatoes
Pizza
Cabbage
```

## Frequently Asked Questions

### 1. What is the default ordering of elements in a `PriorityQueue`?

By default, a `PriorityQueue` uses the natural ordering of its elements. This means:

- For numeric types (e.g., `Integer`), lower numbers have higher priority.
- For strings, lexicographical order is used (e.g., "apple" < "banana").

### 2. Can a `PriorityQueue` contain duplicate elements?

Yes, a `PriorityQueue` allows duplicate elements. However, their relative ordering is determined by the priority rules, not insertion order.

### 3. Is `PriorityQueue` thread-safe?

No, `PriorityQueue` is not [thread](https://www.codecademy.com/resources/docs/java/threading)-safe. For concurrent access, use `PriorityBlockingQueue` from the `java.util.concurrent` package.
