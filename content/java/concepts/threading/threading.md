---
Title: 'Threading'
Description: 'Threading is the ability for different parts of a program to run simultaneously.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Classes'
  - 'Inheritance'
  - 'Interface'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Threading** is the ability for different parts of a program to run simultaneously. The currently running part of the program can start another thread that will run code in the background as the original code that spawned the thread continues to execute. This allows complex procedures to run without holding up the execution of the rest of the program.

Different parts of the program that are operating at the same time are called "threads" and the code that started executing first, starting these other processes, is typically known as the "main thread." The two ways that threads can be implemented in Java are either with [classes](https://www.codecademy.com/resources/docs/java/classes) or with [interfaces](https://www.codecademy.com/resources/docs/java/interfaces).

## Race Conditions

Since Java supports running multiple threads at the same time, the risk of causing a concurrency problem, or a race condition, is always there. This happens when a particular [variable](https://www.codecademy.com/resources/docs/java/variables) is being accessed and updated by many threads (which are running independently and may not be finished executing). Such variables should be avoided unless it's confirmed that the threads that can modify them have completed their execution.

## Using the Thread Class

Threads can be defined in a class that extends the `Thread` class and overrides its `.run()` method:

### Syntax

```pseudo
public class MyThread extends Thread {
  public void run() {
    // Code to run in separate thread
  }
}
```

The code in the `.run()` method is what will run in a separate thread when the thread is started. The thread is started by creating an instance of this class and calling its `.start()` method:

```java
MyThread thread = new MyThread();
thread.start();
```

## Implementing the Runnable Interface

Another way to create threads is by implementing the `Runnable` interface:

### Syntax

```pseudo
public class MyRunnable implements Runnable {
  public void run() {
    // Code to run in separate thread
  }
}
```

Again, the code in the `.run()` method is what will run in a separate thread when the thread is started. The thread is started by creating an instance of this class and passing it to the `Thread` class' constructor, then calling the `.start()` method on that instance of the `Thread` class.

```java
MyRunnable runnable = new MyRunnable();
Thread thread = new Thread(runnable);
thread.start()
```

In both cases, the `.isAlive()` method of the `Thread` class will return a boolean that is `true` as long as the thread is running.

## Example

This example prints out some messages from both the main thread and a separate thread:

```java
public class Example extends Thread {

  public static void main(String[] args) {
    Example thread = new Example();
    System.out.println("This is the main thread.");
    thread.start();
    System.out.println("This is the main thread.");
  }

  public void run() {
    System.out.println("This is a separate thread.");
    System.out.println("This is a separate thread.");
  }
}
```

This results in output like the following:

```shell
This is the main thread.
This is the main thread.
This is a separate thread.
This is a separate thread.
```
