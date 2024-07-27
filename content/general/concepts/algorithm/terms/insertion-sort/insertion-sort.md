---
Title: 'Insertion Sort Algorithm'
Description: 'Sorts an array one element at a time'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Algorithms'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Insertion Sort** is a simple sorting algorithm which divides an array into two parts one is sorted and another is unsorted then interates throught the unsorted array and places each element in the correct place in the sorted array.

## Explanation

- Assume that the first element (index 0) in the array is already sorted.
- Iterate throught the array starting from the element at the second position and compare it with the first element which is already sorted if the first element greater then the second then swap them.
- Next, compare the third element with the two before it and if its smaller then again swap.
- Continue this process till the whole array is sorted.

```cpp
#include <iostream>
#include <vector>

void insertionSort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
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

Here is a visual representation for the first iteration:

![Insert Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/insert-sort.png)
