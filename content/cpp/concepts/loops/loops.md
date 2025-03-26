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

In C++ programming, sometimes there is a need to perform a specific task repeatedly. **Loops** provide a way to execute a block of code multiple times, making programs more efficient and concise.

If a message needs to be displayed 10 times in a program without using loops, the same line of code would have to be written 10 times:

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

This approach works for a small number of repetitions, but what if there is a need to display the message 100 or even 1,000 times? Writing the same line of code hundreds of times would be:

- Time-consuming
- Error-prone
- Difficult to maintain
- Inefficient in terms of code length

This manual approach simply doesn't scale well for larger numbers of repetitions.

## What is a Loop?

A **loop** is a control structure that allows a block of code to be executed repeatedly based on a specific condition.  Instead of duplicating code multiple times, a single instruction directs the computer to perform the repetition as needed.

Loops automate repetitive tasks, making the code more efficient, readable, and maintainable. They are one of the fundamental building blocks in programming that help solve problems involving repetition.

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

## Benefits of Loops

Loops offer several advantages in programming:

1. **Code Reduction**: Loops significantly reduce the amount of code needed for repetitive tasks.
2. **Maintainability**: Changes can be made in a single location rather than updating multiple instances of the code.
3. **Scalability**: Loops can handle varying numbers of iterations, from a few to millions, without changing the core logic.
4. **Readability**: Well-structured loops make the intention of repetitive code clearer.
5. **Flexibility**: Loops can adapt to different conditions and requirements at runtime.

## Types of Loops in C++

C++ provides several types of loops, each with its own use cases:

- **for loop**: Used when the number of iterations is known beforehand.
- **while loop**: Executes as long as the specified condition remains true.
- **do-while loop**: Similar to while loop, but guarantees at least one execution of the code block.
- **range-based for loop**: Introduced in C++11, it simplifies iteration over elements in arrays, vectors, and other containers.
