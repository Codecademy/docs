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
arrayListInstance.removeIf(Predicate<? super E> filter);
```

This method takes a predicate of type `Predicate<? super E>` as an input. This data type represents a predicate (boolean-valued function) of one argument. 

`Predicate<T>` is a functional interface representing an operation that accepts a single input argument and does not return any value. As a functional interface, it can be used as the assignment target for a lambda expression or method reference. For this reason, a lambda expression or method reference is often seen to represent the action to be performed inside the `.removeIf()` method.

## Example:

The following example code removes all the **even** elements an `ArrayList` called `nums` by calling `.removeIf()` on `nums` and using the lambda expression `n -> (n % 2 == 0)` as `filter`, where the input parameter `n` represents each element in the ArrayList `nums`.

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
