---
Title: 'Clear'
Description: 'This function implements the clear option to remove all items from a queue'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Algorithms'
  - 'Collections'
  - 'Data Structures'
  - 'Deques'
  - 'clear'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Clear()** is a built-in method for arrays that allows all elements in the array to be removed. 
In the instance of double ended queues this method removes every element from the deque.

'Clear' is useful in cases where there is a quick need to removed the entire contents of queues to save spave without actually deleting the queue itself. With this method there is a linear time complexity of O(n).

## Syntax

```pseudo
deque.clear()
```

**Parameters:**

- `None`: This method does not take any parameters as it simply resets the deque to empty

**Return value**

The return value of clear() should be a check to determine if the deque is empty. This can be done using an 'if' statement with a return value of 'true' when checked if empty. Or simply a print statement to output the length of the deque.

## Example 1: clearing elements from a deque using an if statement

This example demonstates using the clear() method with an if statement

```py
from collections import deque

#create a deque 

cars = deque(["toyota", "suzuki", "honda"])
print(f"Initial deque is as follows: {cars}")

#clearing the deque
cars.clear()

#if statement to check if the deque has been sucessfully cleared
if not cars:
  print("the deque is empty")
return
```


## Codebyte Example: How to use the clear() method in practice for deques
 
 This example demonstrates using the clear() method in practice 



 ```codebyte/phyton
 from collections import deque

#create a deque 

cars = deque(["toyota", "suzuki", "honda"])
print(f"Initial deque is as follows: {cars}")

#clearing the deque
cars.clear()

#output check to see if the deque is empty
print(len(cars))
```

