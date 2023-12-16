---
Title: ‘Rust Threads’
Description: ‘Threads allow parts of a program to run concurrently’
Subjects:
  - 'Computer Science'
Tags:
  - 'Threads'
CatalogContent:
  - ‘learn-rust’
  - 'paths/computer-science'
---

**Threads** in Rust allow running parts of a program concurrently. Using threads can significantly reduce the time required to run tasks that can be executed in parallel. Rust’s standard library provides a thread module that allows developers to work with threads.

## Creating a Thread

Creating a new thread is done through the `thread::spawn()` function. Here is an example:

```rust
use std::thread;
use std::time::Duration;

fn main() {
  thread::spawn(|| {
    for i in 1..10 {
      println!("Spawned thread {}", i);
      thread::sleep(Duration::from_millis(3));
    }
  });

  for i in 1..4 {
    println!("Main thread {}", i);
    thread::sleep(Duration::from_millis(1));
  }
}
```

The above example will give the following output:

```shell
Main thread 1
Spawned thread 1
Spawned thread 2
Main thread 2
Spawned thread 3
Main thread 3
```

> **Note:** The output may differ each time the code block is run and may not necessarily be in the presented sequence.

In the above example, a new thread is spawned, which prints out numbers from 1 to 9, while the main thread will print numbers 1 to 3. The `thread::sleep()` durations control their rate of printing.

Notice that the spawned thread in the above program only reaches 3 because the main thread has finished executing, and the program exits.

If the main thread is complete and the program exits, the rest of the threads will terminate regardless of whether they have finished running.

## Join Handles

When the `spawn` function is called, it returns a `JoinHandle`. We can store the `JoinHandle` in a variable and then call the `join()` method on it. This will ensure that the spawned thread completes its execution. Here is another example building on the previous section:

```rust
use std::thread;
use std::time::Duration;

fn main() {
  let join_handle = thread::spawn(|| {
    for i in 1..10 {
      println!("Spawned thread {}", i);
      thread::sleep(Duration::from_millis(3));
    }
});

  for i in 1..4 {
    println!("Main thread {}", i);
    thread::sleep(Duration::from_millis(1));
  }

  join_handle.join().unwrap();
}
```

The output is as follows:

```shell
Main thread 1
Spawned thread 1
Main thread 2
Main thread 3
Spawned thread 2
Spawned thread 3
Spawned thread 4
Spawned thread 5
Spawned thread 6
Spawned thread 7
Spawned thread 8
Spawned thread 9
```

Notice that the spawned threads reach 9 this time, even though the main thread has completed its execution.

## Using `move` Closures with Threads

Passing in the `move` keyword into the `thread::spawn()` function enables the safe transfer of ownership of a variable from one thread to another. Consider the following example without using the `move` keyword:

```rust
use std::thread;

fn main() {
  let greeting = String::from("hello");
  let handle = thread::spawn(|| {
    println!("{}", greeting);
  });

  handle.join().unwrap();
}
```

The above program will fail to compile and throw the following error message:

```shell
error[E0373]: closure may outlive the current function, but it borrows `greeting`, which is owned by the current function
 --> src/main.rs:5:32
  |
5 |     let handle = thread::spawn(|| {
  |                                ^^ may outlive borrowed value `greeting`
6 |         println!("{}", greeting);
  |                        -------- `greeting` is borrowed here
  |
```

Rust will attempt to borrow `greeting` into the spawned thread, but it cannot guarantee how long the spawned thread will run for. Rust’s borrowing rules do not allow a thread to outlive the data it is borrowing potentially. To solve this issue, pass in the `move` keyword as shown in the example below:

```rust
use std::thread;

fn main() {
  let greeting = String::from("hello");
  let handle = thread::spawn(move || {
    println!("{}", greeting);
  });

  handle.join().unwrap();
}
```

The above example will give the following output:

```shell
hello
```
