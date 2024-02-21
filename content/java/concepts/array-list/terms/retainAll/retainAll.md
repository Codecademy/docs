---
Title: 'retainAll()'
Description: 'Retains only the elements that are contained in another collection' 
Subjects: 
  - Computer Science
  - Code Foundations
Tags: 
  - 'Collections'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/introduction-to-android-with-java'
---

The **`.retainAll()`** method of [`ArrayList`]([url](https://www.codecademy.com/resources/docs/java/array-list)) retains only the elements in the `ArrayList` that are common to another specified collection. It removes all elements from the `ArrayList` that are not present in the specified collection.

## Syntax

```
B.retainAll(Collection c);
```

- `B`: The ArrayList whose elements will be retained.
- `c`: The collection whose elements will be retained in the ArrayList B.

**Return Value**: Returns `true` if there is a change in the current ArrayList; otherwise, it returns `false`.

**Exceptions**:
1. **ClassCastException**: If the class of an element of this ArrayList is incompatible with the Passed collection. This is optional.
2. **NullPointerException**: If the list contains a null element and the passed collection does not permit null elements, or if the specified collection is null. This is also optional.


## Example

The below example demonstrates the use of `.retainAll()`.

```java
// File: RetainAllExample.java
import java.util.ArrayList;
public class RetainAllExample{
    public static void main(String[] args) {
        ArrayList<String> list1 = new ArrayList<>();
        list1.add("apple");
        list1.add("banana");
        list1.add("orange");

        ArrayList<String> list2 = new ArrayList<>();
        list2.add("banana");
        list2.add("grape");
        list2.add("mango");

        list1.retainAll(list2);

        System.out.println("List 1 after retainAll : " + list1);
        System.out.println("List 2 after retainAll : "+list2);
    }
}
```

The above example gives the following output:

```shell
List 1 after retainAll : [banana]
List 2 after retainAll : [banana, grape, mango]
```

On applying, `.retainAll()` to `list1`, `list2` contains only "banana" because it is common in both `list1` and `list2`, while the second list remains unchanged.


