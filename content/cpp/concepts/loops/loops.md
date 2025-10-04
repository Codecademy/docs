---
Title: 'Loops'
Description: 'Loops provide a way to execute a block of code multiple times, making programs more efficient and concise.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Control Flow'
  - 'Iterators'
  - 'Loops'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

​In C++ programming, executing a task multiple times without **loops** requires duplicating code, which is inefficient and hard to maintain. For example, displaying a message 10 times would involve writing the same `cout` statement repeatedly:

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;
    cout << "This is a text" << endl;

    return 0;
}
```

This method is time-consuming, error-prone, and difficult to maintain. To address this, C++ provides **loops**, control structures that execute a block of code repeatedly based on a condition. By using loops, code becomes more concise, efficient, and easier to manage. They are one of the fundamental building blocks in programming that help solve problems involving repetition.

## How Loops Work

![A flowchart illustrating the general working of a loop](https://raw.githubusercontent.com/Codecademy/docs/main/media/loop-flow-diagram.png)

The general flow of a loop involves:

1. An initialization (setting up a starting point)
2. A condition check (determining whether to run the loop)
3. Code execution (running the statements inside the loop)
4. An update (modifying values before checking the condition again)

Using the earlier example, we can use a loop to display "This is a text" 10 times with just a few lines of code:

```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 10; i++) {
        cout << "This is a text" << endl;
    }

    return 0;
}
```

## Types of Loops in C++

C++ provides several types of loops, each with its own use cases:

- **for loop**: Used when the number of iterations is known beforehand.
- **while loop**: Executes as long as the specified condition remains true.
- **do-while loop**: Similar to while loop, but guarantees at least one execution of the code block.
- **range-based for loop**: Introduced in C++11, it simplifies iteration over elements in arrays, vectors, and other containers.
