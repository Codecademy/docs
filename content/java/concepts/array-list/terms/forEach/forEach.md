---
Title: '.forEach()'
Description: 'Performs a specified action on each element in an ArrayList.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Arrays'
  - 'Elements'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.forEach()`** [method](https://www.codecademy.com/resources/docs/java/methods) performs a specified action on each element of the ArrayList one by one. This method is part of the Java Collections Framework and was introduced in Java 8 as part of the Iterable interface, which ArrayList implements.

The `.forEach()` method provides a concise way to iterate through all elements in an ArrayList and apply the same operation to each element. It utilizes functional programming concepts by accepting a Consumer function that defines what action to perform on each element. This makes it particularly useful for data processing, transformation, and when performing operations where traditional loop constructs would be more verbose.

## Syntax

```pseudo
arrayListInstance.forEach(Consumer<E> action);
```

**Parameters:**

- `arrayListInstance`: The name of the `ArrayList` to be iterated.
- `Consumer`: A functional [interface](https://www.codecademy.com/resources/docs/java/interfaces) representing an operation to be performed. It can be used as the assignment target for a lambda expression or method reference.
- `action`: The operation that accepts an element of type `E` in the `ArrayList` as its only argument and does not return any value.

**Return value:**

The `.forEach()` method does not return any value.

## Example 1: Using the `.forEach()` to print the elements of an ArrayList

This example demonstrates how to print all elements in an ArrayList using the `.forEach()` method with a lambda expression:

```java
import java.util.ArrayList;

public class BasicForEachExample {
  public static void main(String[] args) {
    // Create an ArrayList of integers
    ArrayList<Integer> numbers = new ArrayList<>();

    // Add elements to the ArrayList
    numbers.add(10);
    numbers.add(20);
    numbers.add(30);
    numbers.add(40);

    System.out.println("Elements in the ArrayList:");

    // Using forEach with lambda to print each element
    numbers.forEach(number -> System.out.println(number));
    }
}
```

This example results in the following output:

```shell
Elements in the ArrayList:
10
20
30
40
```

## Example 2: Element Modification using `.forEach()`

This example shows how to modify each element in an ArrayList using the `.forEach()` method:

```java
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicInteger;

public class ModifyElementsExample {
  public static void main(String[] args) {
    // Create an ArrayList of integers
    ArrayList<Integer> prices = new ArrayList<>();

    // Add elements to the ArrayList
    prices.add(1499);
    prices.add(999);
    prices.add(1299);
    prices.add(799);

    System.out.println("Original prices: " + prices);

    // Since we can't modify the ArrayList inside forEach directly,
    // we'll use AtomicInteger to keep track of the index
    AtomicInteger index = new AtomicInteger(0);

    // Apply 10% discount to each price
    prices.forEach(price -> {
      int discountedPrice = (int)(price * 0.9);  // Apply 10% discount
      prices.set(index.getAndIncrement(), discountedPrice);
    });

    System.out.println("Prices after 10% discount: " + prices);
  }
}
```

This example results in the following output:

```shell
Original prices: [1499, 999, 1299, 799]
Prices after 10% discount: [1349, 899, 1169, 719]
```

## Frequently Asked Questions

<details>
<summary>1. What's the difference between `.forEach()` and the enhanced for loop?</summary>
<p>The `.forEach()` method provides a more functional approach, accepting a lambda expression or method reference, while the enhanced for loop uses a more imperative style. The `.forEach()` method can be more concise for simple operations, but the enhanced for loop offers more control with continue and break statements.</p>
</details>

<details>
<summary>2. Can I modify the ArrayList itself inside the `.forEach()` lambda?</summary>
<p>You should avoid modifying the ArrayList structure (adding or removing elements) within the `.forEach()` lambda as it may result in ConcurrentModificationException. However, you can modify the existing elements using other methods like `set()` with proper indexing, as shown in the second example.</p>
</details>

<details>
<summary>3. Is `.forEach()` thread-safe?</summary>
<p>The `.forEach()` method itself doesn't guarantee thread safety. If multiple threads access the ArrayList concurrently and at least one thread modifies it structurally, you should use external synchronization or consider using thread-safe collections like CopyOnWriteArrayList.</p>
</details>

<details>
<summary>4. Does `.forEach()` maintain the order of elements?</summary>
<p>Yes, for ArrayList, the `.forEach()` method processes elements in the same order they appear in the list, from index 0 to the last index.</p>
</details>

<details>
<summary>5. Can `.forEach()` be used with null elements in the ArrayList?</summary>
<p>Yes, `.forEach()` can process null elements. However, your Consumer implementation should handle null values appropriately to avoid NullPointerException.</p>
</details>
