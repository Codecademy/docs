---
Title: Poll
Description: A Poll Queue in Java uses a Queue to store and process votes in the order they come in.
Subjects: 
  - Computer Science

Tags: 
  - Java
 
CatalogContent:
  - 'learn-git'
  - 'learn-the-command-line'
  - 'paths/computer-science'
---

A Poll Queue in Java is a system where votes or voters are managed using a Queue data structure, which follows the FIFO (First-In-First-Out) principle. It ensures that votes are processed in the order they are received, which is useful in scenarios like live voting, event polling, or batch vote processing.

## Syntax

Queue<String> queue = new LinkedList<>();
queue.add("Item");
String first = queue.poll();


import java.util.Queue;
import java.util.LinkedList;

## Codebyte Example (if applicable)

import java.util.Queue;
import java.util.LinkedList;

public class PollQueueExample {
    public static void main(String[] args) {
        // Create a queue to store votes (represented as Strings or custom Vote objects)
        Queue<String> voteQueue = new LinkedList<>();

        // Add votes to the queue
        voteQueue.add("Option 1");
        voteQueue.add("Option 2");
        voteQueue.add("Option 1");

        // Process votes
        while (!voteQueue.isEmpty()) {
            String vote = voteQueue.poll(); // Removes and returns the head of the queue
            System.out.println("Processing vote: " + vote);
        }
    }
}


See [content-standards.md](https://github.com/Codecademy/docs/blob/main/documentation/content-standards.md) for more details!

```codebyte/js
# Example runnable code block.
console.log('Hello, World!');
```
