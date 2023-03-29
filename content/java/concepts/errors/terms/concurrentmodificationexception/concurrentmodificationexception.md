---
Title: 'ConcurrentModificationException'
Description: 'Occurs when item Removed or Add from Iterable content during Iteration.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science
Tags:
  - 'Errors'
  - 'Error Handling
  - 'Exceptions'
  - 'Exceptions Handling'
  - 'Iterator'
  - 'Debugging'
  - 'ConcurrentModificationException'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

The `ConcurrentModificationException` exception is thrown when one thread is iterating through a collection using an Iterator object, and another thread modifies the collection by adding, removing, or modifying its elements. When the `Iterator` object tries to access the next element in the `collection`, it detects that the collection has been modified, and throws the `ConcurrentModificationException`.

### EXAMPLE

```java
import java.util.ArrayList;

public class modificationError {
 public static void main(String args[])
 {
  // Creating an object of ArrayList Object
  ArrayList<String> arr = new ArrayList<String>();
  arr.add("One");
  arr.add("Two");
  arr.add("Three");
  arr.add("Four");

  try {
   // enhanced for loop, It used the Iterator class under the hood. 
   for (String elem : arr) {
        if (elem.equals("One")) {
            arr.remove(elem); // this will throw the exception.
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
