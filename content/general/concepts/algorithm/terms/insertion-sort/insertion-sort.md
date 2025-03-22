---
Title: 'Insertion Sort'
Description: 'Sorts an array one element at a time.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Sorting Algorithms'
  - 'Arrays'
  - 'Elements'
CatalogContent:
  - 'learn-c-plus-plus'
  - 'paths/computer-science'
---

**Insertion Sort** is a simple sorting algorithm that divides an array into two parts, sorted and unsorted. Then, it iterates through the unsorted array and places each element in the correct place in the sorted array.

## Explanation

- Assume that the first element in the array is already sorted.
- Iterate through the array starting from the element at the second position and compare it with the first element which is already sorted. If the first element is greater than the second, then swap them.
- Compare the third element with the two before it and if it's smaller, then swap again.
- Continue this process till the whole array is sorted.

Here is a visual representation for the first iteration:

![Insertion Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/insert-sort.png)

## Implementation

```cpp
#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
  int n = arr.size();
  for (int i = 1; i < n; ++i) {
    int key = arr[i];
    int j = i - 1;

    // Move elements of arr[0..i-1] that are greater than 'key'
    // to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
      arr[j + 1] = key;
    }
}

void printArray(const std::vector<int>& arr) {
  for (int i = 0; i < arr.size(); ++i) {
    std::cout << arr[i] << " ";
  }
  std::cout << std::endl;
}

int main() {
  std::vector<int> arr = {5, 2, 9, 1, 5, 6};
  std::cout << "Original array: ";
  printArray(arr);

  insertionSort(arr);

  std::cout << "Sorted array: ";
  printArray(arr);

  return 0;
}
```

The output for the above code is:

```shell
Original array: 5 2 9 1 5 6
Sorted array: 1 2 5 5 6 9
```

### Time Complexity

- Best Case: `O(n)`
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`
