---
Title: 'retainAll()'
Description: 'Retains only the elements that are contained in another collection' 
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - Computer Science
  - Code Foundations
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Collections'
  - 'Java'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
  - 'paths/introduction-to-android-with-java'
---

**retainAll()** method of [**ArrayList**]([url](https://www.codecademy.com/resources/docs/java/array-list)) is used to remove all the ArrayList's elements that are not contained in the specified collection or retains all matching elements in the current ArrayList instance that match all elements from the Collection list passed as a parameter to the method.
## Syntax
```
B.retainAll(Collection c);
```
B is an object of the **ArrayList** class. It represents an instance of an ArrayList. 
Here, B object keeps only the elements that are also present in the specified collection c, 
effectively removing any elements from B that are not present in c.

**Return Value**: The method returns a boolean value true if the list is changed at all as a result of the call else false. 

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
On applying, retainAll() to List 1, List 1 contains only "banana" because it is common in both List 1 and List 2, while List 2 remains unchanged.


