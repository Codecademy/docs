---
Title: 'Quick Sort'
Description: 'Quick Sort is an effective, in-place sorting algorithm that sorts an array using a divide-and-conquer approach.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arrays'
  - 'Java'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Quick Sort** is an effective, in-place sorting [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that sorts an [array](https://www.codecademy.com/resources/docs/java/arrays) using a divide-and-conquer approach. It starts with selecting a pivot element from the array, then partitions the array into two sub-arrays based on whether each of its elements is smaller or larger than the pivot, and finally recursively sorts those sub-arrays.

Quick Sort is widely used in systems where performance and memory efficiency are critical, such as databases, search engines, embedded systems, and high-frequency trading platforms. It also forms the basis for many language-level sorting functions due to its fast average-case performance.

## How Quick Sort Works

Here's a step-by-step explanation of the Quick Sort algorithm:

Step 1: Initial Checks

- If the array is empty or has only one element `low >= high`, then it's already sorted. So, the function returns the array itself.
  - This is the reason behind not using `data.length == 1` as the stopping case for partitioning.

Step 2: Partitioning

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

## Implementation of Quick Sort

This example shows an implementation of Quick Sort in [Java](https://www.codecademy.com/resources/docs/java):

```java
public class QuickSortExample {
  public static void quickSort(int[] data, int low, int high) {
    if (low >= high) {
      return;
    }

    int left = low;
    int right = high;
    int pivot = high;

    while (left != right) {
      while (data[left] <= data[pivot] && left < right) {
          left++;
      }

      while (data[right] >= data[pivot] && right > left) {
          right--;
      }

      swap(data, left, right);
    }

    swap(data, left, pivot);
    quickSort(data, low, left - 1);
    quickSort(data, left + 1, high);
  }

  public static void swap(int[] data, int a, int b) {
    int temp = data[a];
    data[a] = data[b];
    data[b] = temp;
  }

  // Example usage
  public static void main(String[] args) {
    int[] arr = { 34, 7, 23, 32, 5, 62 };

    System.out.println("Before sorting:");
    printArray(arr);

    quickSort(arr, 0, arr.length - 1);

    System.out.println("After sorting:");
    printArray(arr);
  }

  public static void printArray(int[] arr) {
    for (int value : arr) {
      System.out.print(value + " ");
    }

    System.out.println();
  }
}
```

In this example, the array `arr` is sorted using the Quick Sort algorithm.

Here is the output for the example:

```shell
Before sorting:
34 7 23 32 5 62
After sorting:
5 7 23 32 34 62
```

## Time Complexity

The efficiency of Quick Sort largely depends on how well the pivot divides the array. Here's a breakdown of its time complexity in different scenarios:

**Best-Case Time Complexity:**

The best-case scenario occurs when the pivot element consistently divides the array into two equal halves. This balanced partitioning leads to a logarithmic number of recursive calls, each processing `n` elements across all levels, resulting in a total time complexity of _O(n log n)_.

**Average-Case Time Complexity:**

On average, the pivot will not always perfectly split the array, but it generally divides it in a reasonably balanced manner. Even with some imbalance, the number of operations required to partition and sort each level still averages out to _O(n log n)_.

**Worst-Case Time Complexity:**

The worst-case scenario happens when the pivot consistently ends up being the smallest or largest element, creating highly unbalanced partitions - one of size `n - 1` and the other of size `0`. This can occur when the given array is already sorted or reverse sorted and the pivot is poorly chosen (e.g., always selecting the first or last element). In such cases, the recursion depth becomes linear (`n`), and each level requires `n` comparisons, leading to _O(n²)_ complexity.

## Space Complexity

One of the key advantages of Quick Sort is its in-place nature, meaning it does not require additional memory for creating new arrays or lists during the sorting process. Instead, it rearranges elements within the original array, making it highly space-efficient.

The primary space usage comes from the recursive calls. In the best and average cases, where the pivot divides the array fairly evenly, the recursion depth is _O(log n)_, resulting in _O(log n)_ auxiliary space used on the call stack. In the worst-case scenario - such as when the pivot always results in extremely unbalanced partitions (e.g., arrays that are already sorted or reverse sorted with a poor pivot choice) - the recursion depth can grow to _O(n)_. This leads to _O(n)_ space usage on the stack.

## Quick Sort vs. Other Sorting Algorithms

This table compares the time and space complexity of Quick Sort with other sorting algorithms:

| **Algorithm**   | **Best-Case Time Complexity** | **Average-Case Time Complexity** | **Worst-Case Time Complexity** | **Space Complexity** |
| --------------- | ----------------------------- | -------------------------------- | ------------------------------ | -------------------- |
| **Quick Sort**  | O(n log n)                    | O(n log n)                       | O(n²)                          | O(log n)             |
| **Merge Sort**  | O(n log n)                    | O(n log n)                       | O(n log n)                     | O(n)                 |
| **Heap Sort**   | O(n log n)                    | O(n log n)                       | O(n log n)                     | O(1)                 |
| **Bubble Sort** | O(n)                          | O(n²)                            | O(n²)                          | O(1)                 |

## Frequently Asked Questions

### 1. Is Quick Sort a stable sorting algorithm?

No, Quick Sort is not stable by default. Stability means that equal elements retain their original order after sorting. However, with modifications, it can be made stable, though this typically sacrifices some performance or simplicity.

### 2. What is the best way to choose a pivot in Quick Sort?

The choice of pivot significantly affects performance. Common strategies include:

- Picking the middle element
- Using the median-of-three method (first, middle, last)
- Selecting a random element

### 3. Can Quick Sort be used for linked lists?

While Quick Sort works well for arrays, it’s not ideal for linked lists because of inefficient random access. For linked lists, [Merge Sort](https://www.codecademy.com/resources/docs/general/algorithm/merge-sort) is generally preferred due to its sequential access and stable nature.
