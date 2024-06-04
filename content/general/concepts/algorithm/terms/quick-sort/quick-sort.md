---
Title: 'Quick Sort'
Description: 'Sorts an array using a divide-and-conquer approach.'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Algorithms'
  - 'Sorting Algorithms'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Quick Sort** is an in-place sorting [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that sorts an [array](https://www.codecademy.com/resources/docs/java/arrays) using a divide-and-conquer approach. It starts with selecting a pivot element from the array, then partitions the array into two sub-arrays based on whether each of its elements is smaller or larger than the pivot, and finally recursively sorts those sub-arrays.

## Explanation

Here is a step-by-step explanation of the Quick Sort algorithm:

Step 1. Initial Checks

- If the array is empty or has only one element `low >= high`, then it's already sorted. So, the function returns the array itself.
  - This is the reason behind not using `data.length == 1` as the stopping case for partitioning.

Step 2. Partitioning

- Takes the last element's index `high` as the pivot.
- Initializes two pointers, i.e., `left` at the beginning `low` and `right` at the end `high - 1` (since `high` is the pivot element).
- Iterates until `left` and `right` meet or cross.
  - Moves the pointer `left` to the right when the elements at `left` are less than or equal to the pivot.
  - Moves `right` to the left when the elements at `right` are greater than or equal to the pivot.
    - If both the above conditions are violated and `left` and `right` haven't crossed, then swaps the numbers at indices `left` and `right`.
- If the pointers cross, swaps the pivot with the element at `left` to place the pivot element in its sorted position.

Here is a visual representation for the first iteration:

![Quick Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/quicksort.png)

Step 3: Recursive Calls

- Recursively sorts the left subarray (`data[low..left-1]`).
- Recursively sorts the right subarray (`data[left+1..high]`).

Step 4: Helper Function

- `swap(data, a, b)`: Swaps elements at indices `a` and `b` in the array `data`.

## Implementation

The following example written in [Java](https://www.codecademy.com/resources/docs/java) shows an implementation of Quick Sort:

```java
public static void quickSort(int[] data, int low, int high) {
  if(low >= high) {
      return;
  }

  int left = low;
  int right = high;
  int pivot = high;

  while(left != right) {
      while(data[left] <= data[pivot] && left < right) {
          left++;
      }

      while(data[right] >= data[pivot] && right > left) {
          right--;
      }

      swap(data,left, right);
  }

  swap(data, left, pivot);
  quickSort(data,low,left-1);
  quickSort(data,left+1, high);
}

public static void swap(int[] data, int a, int b) {
  int temp = data[a];
  data[a] = data[b];
  data[b] = temp;
}
```

## Time Complexity

- Divide and Conquer: Quick Sort divides the array into smaller subarrays and recursively sorts them.
- Pivot Selection: The choice of pivot affects performance. The last element is often used, but other strategies exist that could improve runtime.
- Average-Case Time Complexity: _O(n log n)_; This occurs when the pivot element roughly divides the array into two equal halves. Randomized selection of the pivot helps achieve this on average, as it's less likely to consistently pick the smallest or largest element.
- Worst-Case Time Complexity: _O(n^2)_; This worst case scenario occurs when the pivot element is either the smallest or largest element in the array, resulting in partitioning until only one element in one of the sub-arrays.
  - While Merge Sort has a worst-case time complexity of _O(n log n)_, Quick Sort has the advantage of being an in-place sorting algorithm. This means it sorts the data within the same array, avoiding the need for extra space during the sorting process.
