---
Title: 'Binary Search'
Description: 'Binary search is an effective searching algorithm for finding an element within a sorted collection of items.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arrays'
  - 'Data Structures'
  - 'Search Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Binary search** is an effective searching algorithm for finding an element within a sorted collection of items, primarily implemented with [arrays](https://www.codecademy.com/resources/docs/general/data-structures/array) or lists. The binary search algorithm follows a divide-and-conquer approach by repeatedly dividing the collection into two halves and comparing the target value with the middle element of the current search space. If there is a match, it provides the index of the middle element; otherwise, it proceeds to either side of the array, depending on the current comparison result.

> **Note:** To implement the binary search algorithm, the collection must be sorted and have constant-time indexing, such as arrays. Binary search is incompatible with [data structures](https://www.codecademy.com/resources/docs/general/data-structures) that do not support constant-time indexing.

## How Binary Search Works

Here are the steps for the binary search algorithm:

1. Set the `start` pointer to the beginning of the collection (index `0`).
2. Set the `end` pointer to the end of the collection (`length(collection) - 1`).
3. While the `start` is less than or equal to the `end` pointer, repeat these steps:
   1. Calculate the middle element index: `mid = start + (end - start) / 2`.
   2. Compare the value at the middle index (`mid`) with the target value.
      1. If `arr[mid]` equals the target value, return `mid` (search successful).
      2. If `arr[mid]` is less than the target value, set the `start` to `mid + 1`.
      3. If `arr[mid]` exceeds the target value, set the `end` to `mid - 1`.
4. The target value is not in the collection if the `start` pointer becomes greater than the `end` pointer. Return `-1` to indicate that the target is not present.

## Example of Binary Search

This example implements the binary search algorithm for searching the number `9` in the sorted array `[1, 3, 4, 6, 8, 9, 11]`.

![Sorted Array](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-1.png)

In the first iteration, `start` is at `0`, `end` is at `6`, and `mid` becomes `3` after calculating. The algorithm compares `mid` to the target value. Since the target value (`9`) is greater than the middle element (`6`), the algorithm proceeds with the search to the right half by updating the `start` index to `mid + 1`, which is `4`. Now, the algorithm will focus on finding the target value in the array's right portion (index `4` to `6`).

![First Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-2.png)

In the second iteration, `mid` becomes `5`, the index of the target value (`9`). Since the target value is equal to the `mid`, the algorithm identifies the element's position.

However, the search is not instantly completed; the algorithm changes the search range. In this case, the `start` index is set to `mid + 1`, which starts a narrowed search on the right part of the array.

![Second Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-3.png)

In the last iteration, the binary search algorithm narrowed the search to a single element. The middle indexes `mid`, `start`, and `end` now point directly to the target value (`9`).

The algorithm recognizes the match, and the search concludes that the target value is found at index `5` and the binary search is successful.

![Last Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-4.png)

## Implementation of Binary Search

This example shows the implementation of binary search in [Python](https://www.codecademy.com/resources/docs/python):

```py
def binary_search(arr, target):
  left, right = 0, len(arr) - 1

  while left <= right:
    mid = (left + right) // 2

    if arr[mid] == target:
      return mid  # Target found
    elif arr[mid] < target:
      left = mid + 1
    else:
      right = mid - 1

  return -1  # Target not found

# Example usage
numbers = [1, 4, 6, 7, 9, 11, 13, 15]
target_value = 7

result = binary_search(numbers, target_value)

if result != -1:
    print(f"Element {target_value} found at index {result}.")
else:
    print(f"Element {target_value} not found in the array.")
```

This example searches for the number `7` in the array `numbers`. Since `7` exists in the array, the output for the example will be:

```shell
Element 7 found at index 3.
```

## Time Complexity of Binary Search

Here's a detailed look at the time complexity of binary search across different scenarios:

**Best-Case Time Complexity:**

The best case occurs when the target element is at the middle of the array during the first comparison. In this case, the algorithm finds the target immediately, completing the search in just one step. This results in a time complexity of _O(1)_, or constant time.

**Average-Case Time Complexity:**

On average, binary search reduces the search space by half with each iteration. After each comparison, it discards one half of the array and continues searching the remaining half. As a result, the number of steps required grows logarithmically with the number of elements, giving it an average time complexity of _O(log n)_.

**Worst-Case Time Complexity:**

The worst-case scenario occurs when the algorithm must continue halving the array until only one element is left to check—this occurs when the target is either not present in the array or is located at the end of the search process. Even in this scenario, the time complexity remains \_O(log n)\_since each iteration still halves the search interval.

## Space Complexity of Binary Search

The space complexity of binary search depends on whether it is implemented iteratively or recursively, but in both cases, it is highly efficient, making it ideal for memory-constrained applications.

**Iterative Implementation:**

When implemented using a loop, binary search requires only a constant amount of extra space. It uses a few variables - typically for the low, high, and mid indices - to keep track of the current portion of the array being searched. No additional memory is needed proportional to the size of the input. This results in a space complexity of _O(1)_.

**Recursive Implementation:**

Each function call adds a new frame to the call stack in a recursive implementation. Because the array is divided in half at each step, the maximum depth of recursion is _log n_, where `n` refers to the length of the array. Thus, the space complexity becomes _O(log n)_ due to the stack frames created by recursion.

## Binary Search vs. Other Searching Algorithms

This table compares the time and space complexity of binary search with other searching algorithms:

| **Algorithm**          | **Best-Case Time Complexity** | **Average-Case Time Complexity** | **Worst-Case Time Complexity** | **Space Complexity** |
| ---------------------- | ----------------------------- | -------------------------------- | ------------------------------ | -------------------- |
| **Binary Search**      | O(1)                          | O(log n)                         | O(log n)                       | O(1) / O(log n)      |
| **Linear Search**      | O(1)                          | O(n)                             | O(n)                           | O(1)                 |
| **Jump Search**        | O(1)                          | O(√n)                            | O(√n)                          | O(1)                 |
| **Exponential Search** | O(1)                          | O(log n)                         | O(log n)                       | O(1)                 |

## Frequently Asked Questions

### 1. Can binary search be used on unsorted arrays?

No, binary search only works on sorted arrays. If the array is not sorted, the algorithm cannot reliably determine which half of the array to search next, making the process ineffective.

### 2. What is the difference between binary search and linear search?

The main difference lies in efficiency:

- Binary search divides the search range in half each time and has a time complexity of _O(log n)_, helping it operate much faster for large, sorted lists.
- Linear search verifies each element individually and has a time complexity of _O(n)_.

### 3. Is binary search suitable for linked lists?

Not typically. Although you can perform binary search on a linked list, it is inefficient because linked lists do not support constant-time indexing. Accessing the middle element takes linear time, defeating the algorithm’s efficiency purpose.
