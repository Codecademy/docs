---
Title: 'Volatile Variables'
Description: 'Ensures variables avoid compiler optimization, allowing correct access when their values may change due to external factors.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Memory'
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Volatile variables** in C++ are not optimized or cached by the compiler. Marking a variable as volatile is appropriate when its value may be altered by external factors beyond the program's control. This instructs the compiler to read the most recent value from memory instead of a potentially outdated cached version. However, it's important to note that declaring a variable as volatile does not ensure atomicity or synchronize memory between threads; it solely prevents compiler optimization, which is particularly crucial in multithreaded environments.

## Syntax

To declare a variable as volatile, the `volatile` keyword needs to be placed before the variable type:

```pseudo
volatile data_type variable_name;
```

## Example

A volatile variable signals a worker thread to stop running and performing tasks in the following example. The `volatile` keyword prevents the compiler from optimizing away, continuously checking the variable while in the loop. The worker thread will continue until the `isRunning` variable is false.

```cpp
#include <iostream>
#include <thread>
#include <chrono>
class VolatileExample {
private:
    // 'volatile' tells the compiler not to optimize this variable, ensuring that each iteration of the following loop fetches the latest value.
    volatile bool isRunning = true;
public:
    void runTask() {
        while (isRunning) {
            std::cout << "Task is running..." << std::endl;
            std::this_thread::sleep_for(std::chrono::seconds(1));
        }
        std::cout << "Task has stopped." << std::endl;
    }
    void stopTask() {
        isRunning = false; // Changing 'isRunning' to false to stop the task.
    }
};
int main() {
    VolatileExample example;
    std::thread workerThread(&VolatileExample::runTask, &example);
    // The task runs for a while before stopping it.
    std::this_thread::sleep_for(std::chrono::seconds(5));
    example.stopTask(); // Stop the task
    workerThread.join(); // Waits for the thread to finish.
    return 0;
}
```
