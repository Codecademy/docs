---
Title: 'Heap Sort Algorithm'
Description: 'Returns sorted array understandably smart way.'
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

**Heap sort** belongs among smart algorithms and is way faster than simple sorting algorithms like Bubble Sort, Insertion Sort or Selection Sort. It evolves an idea of the Selection Sort thus tears away _an extreme_ (let's consider only a maximum in this explanation but it works analogous to a minimum) and moves it to the end of an array. After integrating of all maximums to the end the array is sorted for sure. The main advantage of the Heap sort over the Selection Sort is just in a search of the extreme.

The reason of its efficiency lies in using the Heap structure. The Heap is actually a binary tree. It means all levels of such tree are fully occupied except for the last one which can be filled only partially and is always filled from the left side. Each node has just 2 descendants and that is called "balanced binary tree". Finally the descendants must be less or equal to its parent node. From these attributes emerges a fact that the root node has to be the maximum.

You may wonder how the heap can be represented in an array. Basically the root node is the first element (where index = 0) and the last element of a heap is also the last element of the array. In a simplified way all levels of the heap are piled up to the array by their order from the top to the ground. Each node is followed by its right neighbour and at the end of a level it jumps down one row to the first left node in the row.

![heap in an array](https://raw.githubusercontent.com/Codecademy/docs/main/media/heap_in_array.jpg)

## Explanation

A brief explanation of the Heap Sort algorithm steps:

- Initially the input array needs to be heapified. That means we need to build a heap from the unsorted array. What is the heap and how can it be represented by an array is explained above. Remind that the heapified array is not sorted yet!

- The Heapify process rests upon building a structure of parents and descendants where parent can be calculated as **(i - 1) / 2** where _i_ is an index of a descendant and simultaneously the left descendant can be calculated as **(2\*j + 1)** and the right descendant as **(2\*j + 2)** where _j_ is the index of the parent.

- Building of the heap itself is usually written in an **up** method which checks each node if it doesn't violate the rule mentioned in the point above (if it isn't greater than its parent). To prevent from transferring the problem just a level up the check has to be called in a cycle for each node. When the checking cycle reach the end of the array we can be sure it's heapified.

_image of heapify_

- Heap sort is an in-place comparison sorting algorithm: This means that it doesn't require additional memory beyond the input array and elements are compared to determine their relative order.

- Sorting of the heap is basically made by Selection sort. The array is divided into two parts (two subarrays): the unsorted subarray at the beginning and the sorted subarray at the end. Initially, the sorted subarray is empty, and the unsorted subarray contains all the elements. The sorted subarray gradually grows and the unsorted subarray shrinks until no elements remain in the unsorted part. The main advantage compared to Selection sort is finding of the maximum which takes a constant time because it lies on the index "0". Swapping of the last node to the root (mentioned below) is also constant.

- Heap sort run on a heap tears away the maximum (the root node) and puts it to the end of the sorted subarray. Then it moves the last node to the root (as mentioned above). After such swapping the heap becomes "broken" and needs to be heapified again. For this purpose is usually used a **down** method which repairs the heap. The method is analogous to the **up** method. It is called on the root node and when it finds a descendant greater than the root it swaps it (if both descendant are greater it chooses the greater one). Again to prevent from transferring the problem just a level down the check has to be called. This time we check if descendant nodes aren't greater than parents (how to find them is explained above). If they don't pass the check the swap must be made. We repeat that in each level if necessary but not for each node as in the **up** method so that is the point where the complexity is reduced.

- Given that the algorithm has a time complexity of _O(n*log n)_ in all cases, where _n_ is the number of elements in the array. It performs _n_ iterations of the **up** method (to build a heap) and _log n_ factor comes from the height of the binary heap (a count of its levels). 

- This makes the algorithm efficient for large input sizes. Compared to other smart sorting algorithms Heap Sort might be better understandable because there is no need for using more advanced concepts such as recursions. Memory requirements can be also minimal (compared to Merge Sort which needs additonal memory).

- On the other hand it is unstable (it may rearrange the relative order) and slower than the other smart sorting algorithms. Typically 2-3 times slower than well-implemented QuickSort.

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
    //the main method of the algorithm
    public static void heapSort(int[] list) {
        heapify(list);
        int index = list.length - 1; //index of the last element
        int temp;
        while (index > 0) {
            temp = list[0]; //swap the last element with the root
            list[0] = list[index];
            list[index] = temp;
            index -= 1; //the new last element
            down(list, index);
        }
    }

    public static void heapify(int[] list) {
        for (int i = 1; i < list.length; i++)
            up(list, i);
    }

    public static void up(int[] list, int i) {
        int child = i; //index of a descendant
        int parent, temp;
        while (child != 0) {
            parent = (child - 1) / 2; //index of a parent node
            if (list[parent] < list[child]) { //swap if doesn't meet binary heap properties
                temp = list[parent];
                list[parent] = list[child];
                list[child] = temp;
                child = parent; //the new descendant
            }
            else
                return;
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
            if (list[parent] < list[child]) { //swap if doesn't meet binary heap properties
                temp = list[parent]; 
                list[parent] = list[child];
                list[child] = temp;
                parent = child; //the new parent
            }
            else
                return;
        }
    }
}

```

The output for the above code is:

```shell
Sorted array: 1 2 3 7 17 19 25 36 100
```
