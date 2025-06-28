---
Title: 'Heap Sort'
Description: 'An efficient sorting algorithm that uses a binary heap to sort elements in O(n log n) time.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arithmetic'
  - 'Heap Sort'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Heap Sort** is a comparison-based sorting algorithm that organizes data using a binary heap—a special tree structure where the parent is always greater (in a max heap) than its children. It repeatedly extracts the largest element (the root), swaps it with the last unsorted item, and then re-heapifies the remaining elements. This continues until the array is fully sorted. It runs in `O(n log n)` time and is an in-place sort, meaning it uses no extra space.

Use cases for Heap Sort include:

- When consistent performance across best, average, and worst cases is important
- In embedded systems or low-memory environments, due to its minimal space needs
- For implementing priority queues and scheduling algorithms
- In real-time systems, where the maximum or minimum must be accessed quickly

A heap can be easily represented in an array. The root node is the first element, and the rest of the tree is stored level by level, from left to right. For any node at index `i`, its left child is at `2*i + 1` and its right child is at `2*i + 2`.

![Heap in an Array](https://raw.githubusercontent.com/Codecademy/docs/main/media/heap_in_array.jpg)

## Explanation

A brief explanation of the Heap Sort algorithm steps:

1\. Build a Max Heap

- Start by converting the given unsorted array into a Max Heap.
- A Max Heap is a complete binary tree where each parent node is greater than or equal to its children.
- This step ensures the largest value is always at the root (index 0 of the array).
- To do this, iterate over the array and apply the heapify-up (or `up()`) method for each element.

2\. Swap the Root with the Last Element

- The maximum element (at the root) is swapped with the last element in the heap.
- This effectively moves the largest element to its final sorted position at the end of the array.

3\. Shrink the Heap

- After swapping, ignore the last element (since it's sorted) by reducing the size of the heap by one.
- The rest of the array still needs to be sorted.

4\. Restore the Max Heap

- After swapping, the heap property may be broken, so we need to rebuild the heap for the reduced array.
- Apply the heapify-down (or `down()`) method starting from the root to restore the Max Heap property.

5\. Repeat the Process

- Continue steps 2–4:
  - Swap the new root with the last unsorted element,
  - Shrink the heap,
  - Heapify the root again.
- Repeat this until only one element remains unsorted—at that point, the entire array is sorted.

**Animation of Heap Sort:**

![Heap Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/heap_sort_animation.gif)

## Example

The following example written in [Java](https://www.codecademy.com/learn/learn-java) shows an implementation of Heap sort and then uses it to sort `{3, 100, 7, 25, 1, 36, 2, 19, 17}`:

```java
public class HeapSort {

  public static void main(String[] args) {
    int[] array = {3, 100, 7, 25, 1, 36, 2, 19, 17};
    heapSort(array);
    System.out.println("Sorted array: ");
    for (int i : array) {
      System.out.print(i + " ");
    }
  }

  public static void heapSort(int[] list) {
    heapify(list);
    int index = list.length - 1; // index of the last element
    int temp;
    while (index > 0) {
      temp = list[0]; // swap the last element with the root
      list[0] = list[index];
      list[index] = temp;
      index -= 1; // the new last element
      down(list, index);
    }
  }

  public static void heapify(int[] list) {
    for (int i = 1; i < list.length; i++)
      up(list, i);
  }

  public static void up(int[] list, int i) {
    int child = i; // index of a descendant
    int parent, temp;
    while (child != 0) {
      parent = (child - 1) / 2; // index of a parent node
      if (list[parent] < list[child]) { // swap if doesn't meet binary heap properties
        temp = list[parent];
        list[parent] = list[child];
        list[child] = temp;
        child = parent; // the new descendant
      } else {
        return;
      }
    }
  }

  public static void down(int[] list, int last) {
    int parent = 0;
    int child, temp;
    while (parent * 2 + 1 <= last) {
      child = parent * 2 + 1;
      // selection of greater descendant
      if ((child < last) && (list[child] < list[child + 1]))
        child++;
      if (list[parent] < list[child]) { // swap if doesn't meet binary heap properties
        temp = list[parent];
        list[parent] = list[child];
        list[child] = temp;
        parent = child; // the new parent
      } else {
        return;
      }
    }
  }
}
```

The output for the above code is:

```shell
Sorted array:
1 2 3 7 17 19 25 36 100
```

## Frequently Asked Questions

### 1. What is the time complexity of Heap Sort?

Heap Sort has a time complexity of O(n log n) in all cases—best, average, and worst. This is because:

- Building the heap takes O(n) time.
- Each of the n elements is extracted in log n time (due to heapify), giving O(n log n) total.

### 2. Is Heap Sort a stable sorting algorithm?

No, Heap Sort is not stable. Stability means elements with equal keys retain their original relative positions, which Heap Sort does not guarantee since it relies on swapping elements in a heap structure.

### 3. What is the difference between heap sort and merge sort?

- Heap Sort is an in-place, comparison-based algorithm that uses a binary heap to sort elements and is not stable.
- Merge Sort is a divide-and-conquer algorithm that uses additional memory, is stable, and often faster in practice.
