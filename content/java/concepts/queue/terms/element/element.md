---
Title: 'element()'
Description: 'The element() method of the Queue interface returns the head of the queue without removing it.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Collections'
  - 'Queues'
  - 'Data Structures'
  - 'Methods'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---


The `element()` method is a queue operation that retrieves the head element of the queue without removing it from the queue.

This method throws a `NoSuchElementException` if the queue is empty, making it different from the peek() method which returns null for empty queues.

The element() method provides a way to inspect the next element that would be returned by a removal operation without actually modifying the queue structure.

## Syntax

```pseudo
    Queue<String> animals = new LinkedList<String>();
    animals.offer("Dog");
    System.out.println(animals.element());
```

- Return Value: Returns the head element of the queue
- Exception: Throws NoSuchElementException if the queue is empty

## Example
This example demonstrates the element() method with a LinkedList implementation of Queue:

```java
import java.util.LinkedList;
import java.util.Queue;
import java.util.NoSuchElementException;


public class Main {
    public static void main(String[] args) {
        Queue<String> animals = new LinkedList<String>();
        
        // Add elements to the queue
        animals.offer("Dog");
        animals.offer("Cat");
        animals.offer("Bird");
        
        // Use element() to peek at the head without removing it
        System.out.println("Head element: " + animals.element());
        System.out.println("Queue after element(): " + animals);
        
        // Remove elements and check head
        animals.poll();
        System.out.println("Head after poll: " + animals.element());
        
        // Clear the queue
        animals.clear();
        
        // Attempting to use element() on empty queue throws exception
        try {
            animals.element();
        } catch (NoSuchElementException e) {
            System.out.println("Exception: Queue is empty!");
        }
    }
}
```
This will output the following:

```shell
Head element: Dog
Queue after element(): [Dog, Cat, Bird]
Head after poll: Cat
Exception: Queue is empty!
```
