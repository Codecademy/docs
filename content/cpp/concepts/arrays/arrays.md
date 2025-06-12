---
Title: 'Arrays'
Description: 'Stores multiple values of the same data type in contiguous memory locations.'
Subjects:
  - 'Computer Science'
  - 'Web Development'
Tags:
  - 'Arrays'
  - 'Data Structures'
  - 'Memory'
  - 'Variables'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

An **array** is a data structure that stores multiple values of the same data type in contiguous memory locations. Arrays allow storing and accessing a collection of elements efficiently using a single variable name with indexed positions. Instead of declaring separate variables for each value, an array provides a way to manage multiple related values as a single entity.

Arrays are particularly useful when dealing with collections of similar data, such as storing student grades, temperature readings, or inventory items. The size of an array must be known at compile time and cannot be changed during program execution.

## Create an Array

### Syntax

```pseudo
dataType arrayName[arraySize];
```

The syntax consists of the data type, followed by the array name, and the size enclosed in square brackets. The size must be a positive integer constant.

### Example

```cpp
#include <iostream>
using namespace std;

int main() {
  // Create an array of integers
  int numbers[5];

  // Create an array of doubles
  double prices[10];

  // Create an array of characters
  char letters[26];

  return 0;
}
```

This example creates three arrays: `numbers` can store 5 integers, `prices` can store 10 double values, and `letters` can store 26 characters.

## Initialize Array with Values

### Syntax

```pseudo
dataType arrayName[arraySize] = {value1, value2, value3, ...};
```

Values are enclosed in curly braces and separated by commas. The number of values cannot exceed the array size but can be less.

### Example

```cpp
#include <iostream>
using namespace std;

int main() {
  // Initialize array with specific values
  int scores[5] = {85, 92, 78, 96, 88};

  // Initialize with fewer values (remaining filled with 0)
  int grades[6] = {90, 85, 77};

  // Let compiler determine size
  int ages[] = {25, 30, 35, 28, 33};

  return 0;
}
```

In this example, `scores` is fully initialized, `grades` has the first three elements set with the rest defaulting to 0, and `ages` automatically sizes to 5 elements.

## Access Array Elements

Array elements are accessed using the **subscript operator** `[]` with an index number. Array indexing starts at 0, meaning the first element is at index 0, the second at index 1, and so on.

### Example

```cpp
#include <iostream>
using namespace std;

int main() {
  int numbers[5] = {10, 20, 30, 40, 50};

  // Access and print array elements
  cout << "First element: " << numbers[0] << endl;
  cout << "Third element: " << numbers[2] << endl;
  cout << "Last element: " << numbers[4] << endl;

  return 0;
}
```

This example outputs:

```shell
First element: 10
Third element: 30
Last element: 50
```

## Update Array Elements

Array elements can be modified by assigning new values to specific indices using the assignment operator.

### Example

```cpp
#include <iostream>
using namespace std;

int main() {
  int numbers[5] = {10, 20, 30, 40, 50};

  cout << "Original array: ";
  for (int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;

  // Update specific elements
  numbers[0] = 15;
  numbers[2] = 35;
  numbers[4] = 55;

  cout << "Updated array: ";
  for (int i = 0; i < 5; i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;

  return 0;
}
```

This example outputs:

```shell
Original array: 10 20 30 40 50
Updated array: 15 20 35 40 55
```

## Example 1: Student Grade Calculator

```cpp
#include <iostream>
using namespace std;

int main() {
  // Create and initialize array of student grades
  double grades[6] = {88.5, 92.0, 76.5, 85.0, 91.5, 89.0};
  double sum = 0.0;

  cout << "Student Grades: ";

  // Display grades and calculate sum
  for (int i = 0; i < 6; i++) {
    cout << grades[i] << " ";
    sum += grades[i];
  }

  double average = sum / 6;

  cout << endl;
  cout << "Total: " << sum << endl;
  cout << "Average: " << average << endl;

  return 0;
}
```

This example outputs:

```shell
Student Grades: 88.5 92 76.5 85 91.5 89
Total: 522.5
Average: 87.0833
```

## Example 2: Interactive Array Management

```cpp
#include <iostream>
using namespace std;

int main() {
  const int SIZE = 5;
  int numbers[SIZE];

  // Input values from user
  cout << "Enter " << SIZE << " integers:" << endl;
  for (int i = 0; i < SIZE; i++) {
    cout << "Element " << (i + 1) << ": ";
    cin >> numbers[i];
  }

  // Display original array
  cout << "\nOriginal array: ";
  for (int i = 0; i < SIZE; i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;

  // Update every second element
  cout << "\nUpdating every second element..." << endl;
  for (int i = 1; i < SIZE; i += 2) {
    numbers[i] = numbers[i] * 2;
  }

  // Display updated array
  cout << "Updated array: ";
  for (int i = 0; i < SIZE; i++) {
    cout << numbers[i] << " ";
  }
  cout << endl;

  // Find maximum value
  int max = numbers[0];
  int maxIndex = 0;
  for (int i = 1; i < SIZE; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      maxIndex = i;
    }
  }

  cout << "\nMaximum value: " << max << " at index " << maxIndex << endl;

  return 0;
}
```

## Frequently Asked Questions

### 1. Can array size be changed after declaration?

No, the size of an array is fixed at compile time and cannot be modified during program execution. If dynamic sizing is needed, consider using `std::vector` instead.

### 2. What happens if I access an array element beyond its bounds?

Accessing elements outside the valid index range (0 to size-1) leads to **undefined behavior**, which can cause program crashes or unpredictable results. Always ensure indices are within valid bounds.

### 3. How to find the length of an array?

Use the `sizeof` operator: `int length = sizeof(array) / sizeof(array[0]);`. This only works for statically declared arrays, not for arrays passed as function parameters.

### 4. Can arrays store different data types?

No, all elements in an array must be of the same data type. To store different types, consider using structures, classes, or `std::variant` (C++17).

### 5. How are array elements stored in memory?

Array elements are stored in contiguous memory locations, with each element directly adjacent to the next. This provides efficient memory access and enables pointer arithmetic.
