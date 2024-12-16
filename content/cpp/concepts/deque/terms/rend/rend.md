---
Title: '.rend()'
Description: 'Returns a reverse iterator pointing to the element before the first element in the deque container.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Deques'
  - 'Iterators'
  - 'Programming'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

The **`.rend()`** function in C++ is part of the `std::deque` container. It returns a reverse iterator pointing to the position before the first element of the container, allowing reverse iteration from the last element toward the first.

## Syntax

```pseudo
deque_name.rend()
```

- `deque_name`: This represents the specific `std::deque` container that holds the data and is used to call the `.rend()` function.

## Example

The following code demonstrates how to iterate through a deque in reverse order using `.rend()`:

```cpp
#include <iostream>
#include <deque>

int main() {
    // Initialize a deque with integer values
    std::deque<int> numbers = {1, 2, 3, 4, 5};

    // Output the deque in reverse order using reverse iterators
    std::cout << "Deque elements in reverse: ";
    for (auto it = numbers.rbegin(); it != numbers.rend(); ++it) {
        std::cout << *it << " ";
    }

    return 0;
}
```

This example results in the following output:

```shell
Deque elements in reverse: 5 4 3 2 1
```

In this example:

- The `.rbegin()` method starts the iteration at the last element of the deque.
- The `.rend()` method determines where the reverse traversal stops, just before the first element.

## Codebyte Example

Explore how `.rend()` works with a character deque in this example:

```codebyte/cpp
#include <iostream>
#include <deque>

int main() {
    // Create a deque of characters
    std::deque<char> letters = {'X', 'Y', 'Z'};

    // Print the deque's elements in reverse
    std::cout << "Reversed deque: ";
    for (auto it = letters.rbegin(); it != letters.rend(); ++it) {
        std::cout << *it << " ";
    }

    return 0;
}
```

In this example:

- `.rbegin()` initializes the reverse iteration from the last element.
- `.rend()` marks the stopping point of reverse traversal.
