---
Title: '.removeIf()'
Description: 'Removes all the elements of an ArrayList that satisfy a given predicate.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Java'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The **`.removeIf()`** [method](https://www.codecademy.com/resources/docs/java/methods) removes all the elements of an [`ArrayList`](https://www.codecademy.com/resources/docs/java/array-list) that satisfy a given predicate. Any [error](https://www.codecademy.com/resources/docs/java/errors) or runtime exception thrown during the [iteration](https://www.codecademy.com/resources/docs/java/iterator) or by the predicate is relayed to the caller. If any element is removed, this method returns `true`. Otherwise, it returns `false`.

## Syntax

```pseudo
arrayListInstance.removeIf(Predicate<T> filter);
```

- `arrayListInstance`: The name of the `ArrayList` to be checked.
- `Predicate<T>`: A functional [interface](https://www.codecademy.com/resources/docs/java/interfaces) representing a condition that takes a single argument of type `T`.
- `filter`: The condition that needs to be checked.

## Example

In the following example, the `.removeIf()` method removes all the even elements from an `ArrayList` called `nums`:

```java
// Import the ArrayList class from the java.util package
import java.util.ArrayList;

public class Main { 
  public static void main(String[] args) { 
    ArrayList<Integer> nums = new ArrayList<Integer>();
    nums.add(10);
    nums.add(15);
    nums.add(20);
    nums.add(30);
    nums.removeIf(n -> (n % 2 == 0));
    System.out.println(nums);
  } 
}

```

This will print the elements that are not even:

```shell
[15]
```
