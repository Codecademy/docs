# poll()

The `poll()` method is a member of the `Queue` interface in Java. It retrieves and removes the head (first element) of the queue. If the queue is empty, it returns `null` instead of throwing an exception. This makes it a safer alternative to the `remove()` method, which throws a `NoSuchElementException` if the queue is empty.

## Syntax

```java
E poll()