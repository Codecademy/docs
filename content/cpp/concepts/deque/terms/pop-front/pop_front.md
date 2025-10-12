---
Title: 'pop_front()'
Description: 'Removes the first element from a deque container in C++.'
Subjects:
  - 'C++'
Tags:
  - 'STL'
  - 'Containers'
  - 'Deque'
  - 'Methods'
CatalogContent:
  - 'learn-c-plus-plus'
---

## Syntax

```cpp
deque_name.pop_front();
```

- **`deque_name`**: The deque object from which the front element is to be removed.
- **Return type**: `void` — the function does not return the removed value.

## Example

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<int> numbers = {10, 20, 30, 40};

    // Remove the first element
    numbers.pop_front(); // Removes 10

    cout << "Deque after pop_front(): ";
    for (int num : numbers) {
        cout << num << " ";
    }

    return 0;
}
```

**Output:**
```
Deque after pop_front(): 20 30 40
```

## Codebyte Example

```cpp
#include <iostream>
#include <deque>
using namespace std;

int main() {
    deque<string> names = {"Alice", "Bob", "Charlie"};

    // Removes the first element
    names.pop_front(); // Removes "Alice"

    cout << "Front element after pop_front(): " << names.front() << endl;
    return 0;
}
```

**Output:**
```
Front element after pop_front(): Bob
```
