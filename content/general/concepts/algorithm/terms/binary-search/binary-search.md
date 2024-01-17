---
Title: 'Binary Search Algorithm'
Description: 'An efficient searching algorithm'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Algorithms'
  - 'Data Structures'
  - 'Search Algorithms'
CatalogContent:
  - 'learn-python-3'
  - 'paths/computer-science'
---

**Binary Search** is an algorithm for searching an element within a sorted collection of items, primarily implemented with [arrays](https://www.codecademy.com/resources/docs/general/data-structures/array) or lists. The binary search algorithm follows a divide-and-conquer approach by repeatedly dividing the collection into two halves and comparing the target value with the middle element of the current search space. If there is a match, it provides the index of the middle element; otherwise, it proceeds to either side of the array, depending on the current comparison result.

> **Note**: The collection must be sorted and have constant time indexing such as arrays to implement the binary search algorithm. Binary search is incompatible with data structures that do not support constant-time indexing.

## The Algorithm

The steps for the binary search algorithm are as follows:

1. Set the `start` pointer to the beginning of the collection (index 0).
2. Set the `end` pointer to the end of the collection (length(collection) - 1).
3. While the `start` is less than or equal to the `end` pointer, repeat these steps:
   1. Calculate the middle element index: `mid = start + (end - start) / 2`.
   2. Compare the value at middle index (`mid`) with the target value.
      1. If `arr[mid]` is equal to the target value, return `mid` (search successful).
      2. If `arr[mid]` is less than the target value, set the `start` to `mid + 1`.
      3. If `arr[mid]` is greater than the target value, set the `end` to `mid - 1`.
4. If the `start` pointer becomes greater than the `end` pointer, the target value is not in the collection. Return `-1` to indicate that the target is not present.

## Complexities for Binary Search Algorithm

### Time Complexity

- Average Case: `O(log n)`
- Worst Case: `O(log n)`
- Best Case: `O(1)`

The binary search algorithm has logarithmic time complexity because it divides the array repeatedly until the target element is discovered or the search space is empty. 

In the worst-case scenario, the target element does not exist in the collection. In such cases, the algorithm keeps dividing the collection until it has exhausted the search space.

### Space Complexity

Binary search has a space complexity of `O(1)` as it is a space-efficient algorithm.

## Example

In the example below, a sorted array has elements such as `[1, 3, 4, 6, 8, 9, 11]`. The aim is to implement the binary search algorithm for searching the number `9`.

![Sorted Array](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-1.png)

In the first iteration, `start` is at 0, `end` is at 6, and `mid` becomes 3 after calculating. The algorithm compares `mid` to the target value. Since the target value (9) is greater than the middle element (6), the algorithm proceeds the search to the right half by updating the `start` index to `mid + 1`, which is 4. Now, the algorithm will focus on finding the target value in the array's right portion(index 4 to 6).

![First Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-2.png)

In the second iteration, `mid` becomes 5, which is the index of the target value (9). Since the target value is equal to the `mid`, the algorithm identifies the element's position.

However, the search is not instantly completed; instead, the algorithm changes the search range. In this case, the `start` index is set to `mid + 1` which starts a narrowed search on the right part of the array.

![Second Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-3.png)

In the last iteration, the binary search algorithm has narrowed down the search to a single element. The middle index `mid`, `start`, and `end`, are now pointing directly to the target value (9).

The algorithm recognizes the match, and the search concludes that the target value is found at index 5 and the binary search is successful.

![Last Iteration of Binary Search](https://raw.githubusercontent.com/Codecademy/docs/main/media/binary-search-4.png)
