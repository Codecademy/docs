---
Title: 'ConcurrentModificationException'
Description: 'Occurs when an item is removed or added from iterable content during iteration.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Errors'
  - 'Error Handling'
  - 'Exceptions'
  - 'Debugging'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `ConcurrentModificationException` exception is thrown when one thread is iterating through a collection using an `Iterator` object, and another thread modifies the collection by adding, removing, or modifying its elements. When the `Iterator` object tries to access the next element in the `collection`, it detects that the collection has been modified, and throws the `ConcurrentModificationException`.

## Example

The following example throws the `ConcurrentModificationException` because the `arr` ArrayList is modified during iteration:

```java
import java.util.ArrayList;

public class ModificationError {
 public static void main(String args[])
 {
  // Creating an object of ArrayList Object
  ArrayList<String> arr = new ArrayList<String>();
  arr.add("One");
  arr.add("Two");
  arr.add("Three");
  arr.add("Four");

  try {
   // Enhanced for loop, It uses the Iterator class under the hood.
   for (String elem : arr) {
        if (elem.equals("One")) {
            arr.remove(elem); // This will throw the exception.
        }
        System.out.println(elem); // Will not reach this line.
    }
  }
  catch (Exception e) {
   System.out.println(e);
  }
 }
}
```
