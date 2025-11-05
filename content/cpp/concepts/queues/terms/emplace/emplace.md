---
Title: 'emplace()'
Description: 'Constructs a new element at the end of the queue in-place using forwarded arguments.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Containers'
  - 'Methods'
  - 'Queues'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`emplace()`** method of the `std::queue<T,Container>` container adaptor constructs a new element directly in the underlying container at the back of the queue, forwarding the provided arguments to the constructor of `T`. Because the object is constructed in place, this can improve performance for types with expensive copy or move operations.

## Syntax

```pseudo
queue.emplace(args...)
```

**Parameters:**

- `args…` (variadic template parameters): Arguments forwarded to construct the new element of type `T`.

**Return value:**

None (void). The new element is added to the end of the queue, and the queue size increases by one.

## Example 1: Enqueueing log entries into a queue

In this example, log messages are constructed in place and enqueued for later processing:

```cpp
#include <iostream>
#include <queue>
#include <string>

struct LogEntry {
  std::string level;
  std::string message;
  LogEntry(std::string lvl, std::string msg)
    : level(std::move(lvl)), message(std::move(msg)) {}
};

int main(){
  std::queue<LogEntry> logs;
  logs.emplace("INFO", "Application started");
  logs.emplace("WARN", "Low disk space");
  logs.emplace("ERROR", "Out of memory");

  while(!logs.empty()){
    const auto& entry = logs.front();
    std::cout << "[" << entry.level << "] " << entry.message << "\n";
    logs.pop();
  }
}
```

The output of this code is:

```shell
[INFO] Application started
[WARN] Low disk space
[ERROR] Out of memory
```

## Example 2: Constructing tasks in a task queue

In this example, tasks with multiple constructor parameters are constructed directly inside the queue:

```cpp
#include <iostream>
#include <queue>
#include <functional>

struct Task {
  int id;
  std::string description;
  Task(int i, std::string desc)
    : id(i), description(std::move(desc)) {}
  void run() const { std::cout << "Running task #" << id << ": " << description << "\n"; }
};

int main(){
  std::queue<Task> taskQueue;
  taskQueue.emplace(1, "Load configuration");
  taskQueue.emplace(2, "Initialize modules");
  taskQueue.emplace(3, "Start services");

  while(!taskQueue.empty()){
    taskQueue.front().run();
    taskQueue.pop();
  }
}
```

The output of this code is:

```shell
Running task #1: Load configuration
Running task #2: Initialize modules
Running task #3: Start services
```

## Codebyte Example: Buffering sensor data with emplace

In this example, sensor readings are constructed and enqueued as soon as they arrive, minimizing overhead:

```codebyte/cpp
#include <iostream>
#include <queue>
#include <tuple>

struct SensorData {
  int sensorId;
  double value;
  long timestamp;
  SensorData(int id, double val, long ts)
    : sensorId(id), value(val), timestamp(ts) {}
  void print() const {
    std::cout << "Sensor#" << sensorId
              << " value=" << value
              << " time=" << timestamp << "\n";
  }
};

int main(){
  std::queue<SensorData> buffer;
  buffer.emplace(101, 23.5, 1617181920L);
  buffer.emplace(102, 19.8, 1617181930L);

  while(!buffer.empty()){
    buffer.front().print();
    buffer.pop();
  }

  return 0;
}
```
