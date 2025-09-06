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



A `LinkedList` is a **doubly-linked list** implementation of the `List` and `Deque` interfaces. Elements are stored in nodes linked to previous and next nodes, it allows `null` elements and is useful for queues, stacks, and lists with frequent insertions or removals at the ends.


---

**Creation:**
```pseudo
LinkedList<Type> list = new LinkedList<>();
```

**Parameters:**  
- `Type` → The data type of elements stored in the list (e.g., `String`, `Integer`).

**Return value:**  
- A new empty `LinkedList` object of the specified type.
```

**Common methods:**

Common methods of `LinkedList` (inherited from List/Deque or defined in the class) include those for adding, removing, and accessing elements. Here are some of the most frequently used methods with their signatures and brief descriptions:

| Method | Description | Example |
|--------|-------------|---------|
| `boolean add(E e)` | Appends the specified element to the end of the list (same as `addLast(E)`). Returns `true` if the list changed. | `list.add("X")` |
| `void add(int index, E element)` | Inserts an element at the specified position, shifting subsequent elements. | `list.add(0, "Y")` |
| `void addFirst(E e)` | Inserts the element at the beginning (new head). | `list.addFirst("Z")` |
| `void addLast(E e)` | Adds element at the end of the list. | `list.addLast("A")` |
| `E get(int index)` | Returns the element at the specified position. | `list.get(2)` |
| `E getFirst()` / `E getLast()` | Returns the first or last element. | `list.getFirst()` |
| `E remove(int index)` | Removes and returns the element at the given position. | `list.remove(1)` |
| `E removeFirst()` | Removes and returns the first element (head). | `list.removeFirst()` |
| `E removeLast()` | Removes and returns the last element (tail). | `list.removeLast()` |
| `boolean contains(Object o)` | Checks if the list contains the given element. | `list.contains("X")` |
| `int size()` | Returns the number of elements in the list. | `list.size()` |
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