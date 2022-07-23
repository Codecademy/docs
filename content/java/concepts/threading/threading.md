---
Title: 'Threading'
Description: 'Threading is the ability for different parts of a program to run simultaniously.'
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

**Threading** is the ability for different parts of a program to run simultaniously. The currently running part of the program can start another process that will run in the background as the code that spawned the background process continues to execute. This allows complex processes to run without holding up execution of the rest of the program.

Different parts of the program that are operating at the same time are called "threads" and the code that started executing first, starting these other processes, is typically known as the "main thread". 

One important thing to be aware of when working with threads is the possibility of concurrency problems, which happen when threads share access to a particular variable. If multiple threads access one variable, no thread can predict what its value will be since each thread operates independently and may be in a different stage in its process at any given time. Best practice is to avoid accessing such variables unless its confirmed that the threads that can modify them have completed their execution.

There are two ways of implementing threading in Java:

## Using the Thread Class

The first way is by extending the `Thread` class and overriding its `.run()` method.

### Syntax

```java
public class MyThread extends Thread {
  public void run() {
    // Code to run in seprate thread
  }
}
```

The code in the `.run()` method is what will run in a seprate thread when the thread is started. The thread is started by creating an instance of this class and calling its `.start()` method:

```java
MyThread thread = new MyThread();
thread.start();
```

## Implementing the Runnable Interface

The second way of using threads in java is to implement the `Runnable` interface.

### Syntax

```java
public class MyRunnable implements Runnable {
  public void run() {
    System.out.println("This code is running in a thread");
  }
}
```

Again, the code in the `.run()` method is what will run in a seprate thread when the thread is started. The thread is started by creating an instance of this class to the `Thread` class's constructor, then calling the `.start()` method on that instance of the `Thread` class.

```java
MyRunnable runnable = new MyRunnable();
Thread thread = new Thread(runnable);
thread.start()
```


