---
Title: 'deque.insert()'
Description: 'Insertion of an element at a specified position in a deque.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Deques'
  - 'Collections'
  - 'Data Structures'
  - 'Methods'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The **`insert()`** method of Python’s [`collections.deque`](https://www.codecademy.com/resources/docs/python/collections-module) allows insertion of an element at a specified index within the deque.  
Unlike methods such as `append()` or `appendleft()`, which only add elements to the ends, `insert()` enables insertion at _any_ valid position in the deque.

> 💡 While deques are optimized for fast appends and pops from both ends, using `insert()` in the middle may affect performance since it requires shifting elements internally.

---

## Syntax

```pseudo
deque.insert(index, element)

```

**Parameters:**

- `index` : The position where the new element will be inserted.

- `element` : The item to insert into the deque.

**Return Value:**

None — this method modifies the deque in place.

## Example 1: Inserting an Element at a Specific Position

This example demonstrates inserting elements at specific positions within a deque.

```py
from collections import deque

# Create a deque
fruits = deque(["apple", "banana", "cherry"])
print("Original deque:", fruits)

# Insert 'orange' at index 1
fruits.insert(1, "orange")
print("After inserting 'orange' at index 1:", fruits)
```

Output:

```shell
Original deque: deque(['apple', 'banana', 'cherry'])
After inserting 'orange' at index 1: deque(['apple', 'orange', 'banana', 'cherry'])

```

## Example 2: Using Negative Indices and Edge Insertions

This example demonstrates inserting elements at the beginning and end using positive and negative indices.

```py
from collections import deque

 colors = deque(["red", "green", "blue"])

# Insert at the beginning
colors.insert(0, "purple")

# Insert at the end using len(colors)
colors.insert(len(colors), "yellow")

# Insert before the last item using negative index
colors.insert(-1, "cyan")

print(colors)
```

Output:

```shell
deque(['purple', 'red', 'green', 'blue', 'cyan', 'yellow'])
```

- Here, the insert() method demonstrates its flexibility — it can insert items anywhere in the deque.

## Codebyte Example: How to Use deque.insert() for Dynamic Insertions

```py
from collections import deque

# Create a deque of numbers
numbers = deque([10, 20, 30, 40])
print("Original deque:", numbers)

# Insert elements at various positions
numbers.insert(2, 25)       # Insert at index 2
numbers.insert(0, 5)        # Insert at beginning
numbers.insert(len(numbers), 50)  # Insert at end

print("Updated deque:", numbers)

# Access elements to verify insertion
print("First element:", numbers[0])
print("Middle element:", numbers[2])
print("Last element:", numbers[-1])
```

Expected Output:

```shell
Original deque: deque([10, 20, 30, 40])
Updated deque: deque([5, 10, 20, 25, 30, 40, 50])
First element: 5
Middle element: 20
Last element: 50
```

## Frequently Asked Questions

<details> 
<summary>
1. Is `deque.insert()` faster than `list.insert()`?
</summary> 
<p>
No. Both operations have similar `O(n)` complexity when inserting in the middle, but deques are still more efficient for append and pop operations at either end `(O(1))`.
</p> 
</details>

<details>
<summary>
2. Can I insert using negative indices in deque?
</summary> 
<p>
Yes, you can use negative indices to count positions from the end, just like lists. For example, <code>`d.insert(-1, value)`</code> inserts before the last element.
</p> 
</details>

<details> 
<summary>
3. Does `deque.insert()` return anything?
</summary> 
<p>
No. The method modifies the deque in place and returns <code>None</code>.
</p> 
</details>

<details> 
<summary>
4. When should I use `deque.insert()` ?
</summary> 
<p>Use <code>`insert()`</code> when you need to add elements in the middle of a deque or at a specific position dynamically. However, for queue-like structures or high-performance operations, prefer <code>`append()`</code> and <code>`appendleft()`</code>.
</p> 
</details>
 
<details> 
<summary>
5. How does `deque.insert()` differ from `appendleft()` and `append()` ?
</summary> 
<p>
<code>`append()`</code> adds to the right end, <code>`appendleft()`</code> adds to the left end, and <code>`insert()`</code> allows insertion at an arbitrary index.
</p> 
</details>
