---
Title: 'deque()'
Description: 'A deque data structure in Python.'
Subjects:
  - 'Computer Science'
  - 'Data Science'
Tags:
  - 'Stacks'
  - 'Queues'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

The deque, short for "double-ended queue," is a data structure in Python that allows for the addition and removal of elements from both ends with high efficiency. It is part of the collections module and is an alternative to the list when frequent insertions and deletions are required at both ends. Deques are particularly useful when you need a queue that allows for fast appends and pops from both sides, or when you need a stack that also supports the same operations.

# Syntax

## Initialize a deque with optional iterable and maxlen
d = deque(iterable=[], maxlen=None)

## Add elements to the right end
d.append(item)

## Add elements to the left end
d.appendleft(item)

## Remove and return the rightmost item
item = d.pop()

## Remove and return the leftmost item
item = d.popleft()

## Rotate the deque n steps to the right
d.rotate(n)

In this syntax, deque() creates a new deque object, which can be initialized with an optional iterable and a maximum length. The append() and appendleft() methods add items to the right and left ends, respectively. 
The pop() and popleft() methods remove items from the corresponding ends. The rotate() method moves elements from one end to the other, effectively rotating the deque.

## Using deque

class BrowserHistory:
    def __init__(self):
        self.history = deque()
        self.forward_stack = deque()

    def visit(self, url):
        print(f"Visiting: {url}")
        self.history.append(url)
        # Clear the forward stack because new page is visited
        self.forward_stack.clear()

    def back(self):
        if len(self.history) > 1:
            # Move the current page to the forward stack
            self.forward_stack.appendleft(self.history.pop())
            print(f"Back to: {self.history[-1]}")
        else:
            print("No more history to go back to.")

    def forward(self):
        if self.forward_stack:
            # Move the next page from forward stack to history
            self.history.append(self.forward_stack.popleft())
            print(f"Forward to: {self.history[-1]}")
        else:
            print("No more forward history.")

## Example usage:
browser = BrowserHistory()
browser.visit("home.html")
browser.visit("about.html")
browser.visit("products.html")
browser.back()    # Outputs: Back to: about.html
browser.back()    # Outputs: Back to: home.html
browser.forward() # Outputs: Forward to: about.html

```Popping
from the left
left_item = d.popleft()  # returns 0, deque becomes [1, 2, 3]
```

In this example, we have a BrowserHistory class that uses two deques: one for the main history and another as a stack for the forward history. When a new page is visited, it is appended to the history deque, and the forward history is cleared.

The back() method pops from the history and pushes onto the forward stack, while the forward() method does the opposite.


## Equivalent Methods for Stacks and Queues

* Stacks: To implement a stack using a deque, you would use the append() method to push items onto the stack and the pop() method to remove them.
* Queues: To implement a queue, you would use the append() method to enqueue items at the back and the popleft() method to dequeue items from the front.

