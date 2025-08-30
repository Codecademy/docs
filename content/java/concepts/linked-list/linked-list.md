---
Title: 'LinkedList'
Description: 'A LinkedList is a doubly-linked list implementation of the List and Deque interfaces.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Data Structures'
  - 'Interface'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---



# LinkedList

A `LinkedList` is a **doubly-linked list** implementation of the `List` and `Deque` interfaces.  
- Elements are stored in nodes linked to previous and next nodes.  
- Allows `null` elements.  
- Useful for queues, stacks, and lists with frequent insertions/removals at the ends.

---

## Syntax

**Creation:**
```java
LinkedList<Type> list = new LinkedList<>();
```

**Common methods:**

Common methods of `LinkedList` (inherited from List/Deque or defined in the class) include those for adding, removing, and accessing elements. Here are some of the most frequently used methods with their signatures and brief descriptions:

- `boolean add(E e)` : Appends the specified element to the end of the list (equivalent to `addLast(E)`); returns true if the list changed as a result. For example, `list.add("X")` adds "X" to the tail of the list.
- `void add(int index, E element)` : Inserts the given element at the specified position in the list (shifting subsequent elements to the right). For example, `list.add(0, "Y")` inserts "Y" at the front (index 0).
- `void addFirst(E e)` : Inserts the specified element at the beginning of the list (makes it the new head). After `list.addFirst("Z")`, "Z" becomes the first element.
- `void addLast(E e)` : Adds element at the end.  
- `E get(int index)` : Returns the element at the specified position in the list. For instance, `list.get(2)` retrieves the element at index 2.
- `E getFirst()` / `E getLast()` : First or last element.  
- `E remove(int index)` : Removes the element at the specified position in the list and returns it. The list size shrinks and elements to the right of the removed element shift left.
- `E removeFirst()`: Removes and returns the first element of the list (equivalent to removing the head)
- `E removeLast()` : Removes and returns the last element of the list (removes the tail of the list) 
- `boolean contains(Object o)` : Checks if element exists.  
- `int size()` : Number of elements.  

---

## Example

Let’s demonstrate how to use a `LinkedList in Java`. In the example below, we create a `LinkedList` of strings and perform various operations: Adding elements (at the end and at the beginning), accessing elements by index, and removing elements from the list. We also print the list to see the changes:

```java
import java.util.LinkedList;

public class LinkedListDemo {
    public static void main(String[] args) {
        LinkedList<String> list = new LinkedList<>();

        // Adding elements to the LinkedList
        list.add("Alice");               // Append "Alice" to the end
        list.add("Bob");                 // Append "Bob" to the end
        list.addFirst("Zara");           // Insert "Zara" at the beginning
        list.addLast("Charlie");         // Insert "Charlie" at the end (same as add)

        System.out.println("List after additions: " + list);
        // Output: List after additions: [Zara, Alice, Bob, Charlie]

        // Accessing elements
        String firstElement = list.getFirst();      // Retrieve first element ("Zara")
        String thirdElement = list.get(2);          // Retrieve element at index 2 ("Bob")
        System.out.println("First element: " + firstElement);
        System.out.println("Element at index 2: " + thirdElement);

        // Removing elements
        list.removeFirst();    // Removes "Zara" (first element)
        list.removeLast();     // Removes "Charlie" (last element)
        list.remove("Alice");  // Removes the first occurrence of "Alice"

        System.out.println("List after removals: " + list);
        // Output: List after removals: [Bob]
    }
}

```
---

## LinkedList vs ArrayList

| Feature            | LinkedList                      | ArrayList                |
|--------------------|---------------------------------|--------------------------|
| Access by index    | O(n) (must traverse nodes)      | O(1) (direct access)     |
| Insert/remove ends | O(1)                            | O(n) at front, O(1) at end (amortized) |
| Memory usage       | Higher (extra pointers per node)| Lower (contiguous array) |
| Best use case      | Queues, stacks, frequent insert/remove at ends | General-purpose, fast random access |

**Rule of thumb:**  
- Use **ArrayList** for most cases (better performance & memory).  
- Use **LinkedList** when you need frequent insertions/removals at the **beginning or end**.  