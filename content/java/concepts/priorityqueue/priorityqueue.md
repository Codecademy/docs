---
Title: 'PriorityQueue'
Description: 'Stores elements in a collection sorted by natural ordering or a custom Comparator.'
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

A **`PriorityQueue`** implements the [`Queue`](https://www.codecademy.com/resources/docs/java/queue) interface. It stores elements in a [collection](https://www.codecademy.com/resources/docs/java/collection) prioritized by natural ordering or by a custom [`Comparator`](https://www.codecademy.com/resources/docs/java/comparator). The elements are prioritized with the least value element at the head of the queue, and the `Queue` methods `.peek()` and `.poll()` operate on that element.

## Creating a `PriorityQueue`

Using natural ordering:

```java
import java.util.PriorityQueue;

PriorityQueue<DataType> q = new PriorityQueue<DataType>();
```

Using a custom `Comparator`:

```java
import java.util.PriorityQueue;
import java.util.Comparator;

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

In this syntax:

- `q`: A `PriorityQueue` created with the `new` keyword.
- `DataType`: The [data type](https://www.codecademy.com/resources/docs/java/data-types) to be stored in `q`.
- `CustomComparator`: A custom `Comparator` for `DataType` or a parent [class](https://www.codecademy.com/resources/docs/java/classes) of `DataType`.

## Adding Items to `PriorityQueue`

The `.add()` method adds new items to a `PriorityQueue`.

### Syntax

```java
priorityqueue.add(item)
```

**Parameters:**

- `item`: The item to be added to the `priorityqueue`. It should match the data type of `priorityqueue`.

**Return value:**

Returns `true` if `item` is successfully added, and `false` otherwise.

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

**Output:**

```shell
[Cabbage, Pizza, Sausage, Potatoes, Salad]
```

## Removing Items from `PriorityQueue`

The `.remove()` method removes specific items from a `PriorityQueue`.

### Syntax

```java
priorityqueue.remove(item)
```

**Parameters:**

- `item`: The item to be removed from `priorityqueue`. If `item` is not found, the method has no effect.

**Return value:**

Returns `true` if `item` is successfully removed, and `false` otherwise.

### Example

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

**Output:**

```shell
Cabbage
Potatoes
Salad
Sausage
```

## Searching for an Item in `PriorityQueue`

The `.contains()` method checks whether a specific item exists in a `PriorityQueue`.

### Syntax

```java
priorityqueue.contains(item);
```

**Parameters:**

- `item`: The item to search for in `priorityqueue`.

**Return value:**

Returns `true` if `item` is found, and `false` otherwise.

### Example

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

**Output:**

```shell
Safe to eat.
```

## Returning the Size of a `PriorityQueue`

The `.size()` method returns the number of items in a `PriorityQueue`.

### Syntax

```java
priorityqueue.size()
```

### Example

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

**Output:**

```shell
5
```

## Traversing a `PriorityQueue`

A `PriorityQueue` can be traversed with a `for-each` loop. Items will be returned in the order they were inserted, not in priority order.

### Example

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

**Output:**

```shell
Cabbage
Pizza
Sausage
Potatoes
Salad
```

## `.peek()` and `.poll()` Methods

The `.peek()` method retrieves the head of the queue without removing it, while `.poll()` retrieves and removes it.

### Syntax

```java
priorityqueue.peek();
priorityqueue.poll();
```

### Example

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

**Output:**

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

A custom `Comparator` can be used to define an alternative priority scheme.

### Syntax

```java
import java.util.PriorityQueue;
import java.util.Comparator;

static class CustomComparator implements Comparator<DataType> {
  @Override
  public int compare(DataType item1, DataType item2) {
    // Return a positive value if item1 < item2, and a negative value if item1 > item2
  }
}

PriorityQueue<DataType> q = new PriorityQueue<DataType>(new CustomComparator());
```

**Parameters:**

- `DataType`: The data type being compared.

**Return value:**

Returns a positive value if the first argument comes before the second and a negative value if it comes after.

### Example

```java
import java.util.PriorityQueue;
import java.util.Comparator;

public class Main {
  static class CustomComparator implements Comparator<String> {
    @Override
    public int compare(String item1, String item2) {
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

**Output:**

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
