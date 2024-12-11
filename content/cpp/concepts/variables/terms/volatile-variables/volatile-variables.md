---
Title: 'Volatile Variables'
Description: 'Volatile variables in C++ are excluded from optimization and caching by the compiler. Marking a variable as volatile is useful when the variables value may be subject to external changes outside of the program itself'
Subjects:
  (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md)
  - 'Computer Science'
  - 'Code Foundations'
Tags: (https://github.com/Codecademy/docs/blob/main/documentation/tags.md)
  - 'Variables'
  - 'Variable Types'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Volatile variables** in C++ will not be optimized and cached by the compiler.
Marking a variable as volatile is useful when its value may be subject to external changes outside of the program itself, by making the compiler read the latest value from memory instead of a previously cached version that may be out of date.
However, volatile does not guarantee atomicity or memory synchronization between threads, only the prevention of compiler optimization, particularly important in multithreaded environments.

## Syntax

To declare a variable as volatile, the `volatile` keyword needs to be placed before the variable type:

```cpp

volatile dataType variableName;

```

## Example

In the following example, a volatile variable is used to signal a worker thread to stop running/doing tasks.
`volatile` prevents the compiler from optimizing away continuously checking the variable while in the loop.
The worker thread will keep running until the isRunning variable is set to false.

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

    // Lets the task run for a while before stopping it.
    std::this_thread::sleep_for(std::chrono::seconds(5));
    example.stopTask(); // Stop the task

    workerThread.join(); // Waits for the thread to finish.
    return 0;
}
```

## Codebyte Example

Here `volatile` prevents the compiler from optimizing away reads or writes to the active variable, this ensures continuous checks of the most up-to-date value.

```cpp
#include <iostream>
#include <thread>
#include <chrono>

class VolatileCodeByteExample {
private:
    volatile bool active = true;

public:
    void execute() {
        // The loop continues as long as 'active' is true.
        while (active) {
            // Simulating processing.
        }
        std::cout << "Loop terminated due to 'active' being false." << std::endl;
    }
};

int main() {
    VolatileCodeByteExample example;
    std::thread demoThread(&VolatileCodeByteExample::execute, &example);

    // Changes 'active' to false after a short delay to stop the loop.
    std::this_thread::sleep_for(std::chrono::seconds(2));
    example.active = false; // Update the value of 'active'

    demoThread.join(); // Waits for the thread to finish.
    return 0;
}
```
