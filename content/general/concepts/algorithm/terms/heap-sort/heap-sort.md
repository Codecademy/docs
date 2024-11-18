---
Title: 'Heap Sort'
Description: 'An efficient sorting algorithm that uses a binary heap to sort elements in O(n log n) time.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arithmetic'
  - 'Sorting Algorithms'
  - 'Heap Sort'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Heap Sort** is an efficient comparison-based sorting algorithm that outperforms simple algorithms like Bubble Sort, Insertion Sort, or Selection Sort. It builds upon the idea of Selection Sort but improves it by leveraging a binary heap to quickly find the maximum (or minimum) value. This significantly speeds up the process of sorting an array by moving the maximum element to the end in each iteration.

The efficiency of Heap Sort comes from using a binary heap structure, a complete binary tree where every level is filled except possibly the last. In this structure, each parent node is greater than or equal to its children (max-heap). This property ensures that the root node always contains the largest element, which can then be moved to the end of the array.

A heap can be easily represented in an array. The root node is the first element, and the rest of the tree is stored level by level, from left to right. For any node at index `i`, its left child is at `2*i + 1` and its right child is at `2*i + 2`.

![Heap in an Array](https://raw.githubusercontent.com/Codecademy/docs/main/media/heap_in_array.jpg)

## Explanation

A brief explanation of the Heap Sort algorithm steps:

- Initially, the input array needs to be heapified. That means we need to build a heap from the unsorted array. What is the heap and how can it be represented by an array is explained above. Remind that the heapified array is not sorted yet!

- The Heapify process rests upon building a structure of parents and descendants where a parent can be calculated as **(i - 1) / 2** where _i_ is an index of a descendant and simultaneously the left descendant can be calculated as **(2\*j + 1)** and the right descendant as **(2\*j + 2)** where _j_ is the index of the parent.

- Building of the heap itself is usually written in an **up** method which checks each node if it doesn't violate the rule mentioned in the point above (if it isn't greater than its parent). To prevent transferring the problem just a level up the check has to be called in a cycle for each node. When the checking cycle reaches the end of the array we can be sure it's heapified.

- Heap sort is an in-place comparison sorting algorithm: This means that it doesn't require additional memory beyond the input array and elements are compared to determine their relative order.

- The sorting of the heap is basically made by the Selection sort. The array is divided into two parts (two subarrays): the unsorted subarray at the beginning and the sorted subarray at the end. Initially, the sorted subarray is empty, and the unsorted subarray contains all the elements. The sorted subarray gradually grows and the unsorted subarray shrinks until no elements remain in the unsorted part. The main advantage compared to Selection sort is finding the maximum which takes a constant time because it lies on the index "0". Swapping of the last node to the root (mentioned below) is also constant.

- Heap sort run on a heap tears away the maximum (the root node) and puts it to the end of the sorted subarray. Then it moves the last node to the root (as mentioned above). After such swapping the heap becomes "broken" and needs to be heapified again. For this purpose is usually used a **down** method which repairs the heap. The method is analogous to the **up** method. It is called on the root node and when it finds a descendant greater than the root it swaps it (if both descendants are greater it chooses the greater one). Again to prevent transferring the problem just a level down the check has to be called. This time we check if descendant nodes aren't greater than parents (how to find them is explained above). If they don't pass the check the swap must be made. We repeat that in each level if necessary but not for each node as in the **up** method so that is the point where the complexity is reduced.

- Given that the algorithm has a time complexity of _O(n\*log n)_ in all cases, where _n_ is the number of elements in the array. It performs _n_ iterations of the **up** method (to build a heap) and the _log n_ factor comes from the height of the binary heap (a count of its levels).

- This makes the algorithm efficient for large input sizes. Compared to other smart sorting algorithms Heap Sort might be better understandable because there is no need for using more advanced concepts such as recursions. Memory requirements can also be minimal (compared to Merge Sort which needs additional memory).

- On the other hand, it is unstable (it may rearrange the relative order) and slower than the other smart sorting algorithms. Typically 2-3 times slower than well-implemented QuickSort.

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
