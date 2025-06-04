---
Title: 'Bubble Sort'
Description: 'Bubble Sort is a simple, comparison-based sorting algorithm used to arrange elements in an array in a specific order.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arrays'
  - 'Bubble Sort'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Bubble Sort** is a simple, comparison-based algorithm used to arrange elements in an [array](https://www.codecademy.com/resources/docs/java/arrays) in a specific order. This process continues until the array is sorted, making it an intuitive method for sorting arrays.

**Key Characteristics:**

- **Simplicity**: Bubble sort is straightforward to understand and implement.
- **Inefficiency for Large Lists**: Not suitable for large datasets due to its O(n^2) time complexity.
- **Stability**: Bubble sort is a stable algorithm, maintaining the relative order of equal elements.
- **Adaptive**: Can be optimized to stop early if the list is sorted before completing all passes, making it adaptive to the initial order of elements.

## How Bubble Sort Works

Bubble Sort is a straightforward algorithm that sorts an array by repeatedly comparing and swapping adjacent elements if they are in the wrong order. The steps of the Bubble Sort algorithm are as follows:

1. **Start at the Beginning**: Begin with the first element in the array.
2. **Compare Adjacent Elements**: Compare the current element with the next element in the array.
3. **Swap if Necessary**: If the current element is greater than the next element, swap their positions. This action moves the higher element towards the end of the array.
4. **Continue Through the Array**: Move to the next pair of adjacent elements and repeat the comparison and swap process.
5. **Complete the Pass**: Continue this process until the end of the array is reached. This constitutes one complete pass through the array.
6. **Repeat the Process**: Start again with the first element for the next pass. With each pass, the number of comparisons can be reduced since the end of the array will progressively become sorted.
7. **Check for Completion**: After each pass, if no swaps have been made, it indicates that the array is now completely sorted. At this point, the algorithm can stop running.

The process is characterized by the larger elements "bubbling" up to the end of the array with each pass, hence the name "Bubble Sort".

Here is an image that shows the Bubble Sort Algorithm in action:

![Bubble Sort Algorithm](https://raw.githubusercontent.com/Codecademy/docs/main/media/bubble-sort.png)

In this example, the numbers in the array are visually represented. With each pass through the array, the largest number in the unsorted part bubbles up to its correct position at the end of the array. This process repeats, with the range of unsorted elements shrinking each time, until the entire array is sorted.

## Pseudocode for Bubble Sort

This pseudocode accurately demonstrates the Bubble Sort Algorithm:

```pseudo
BubbleSort(Array)
  for i from 0 to Array.length - 1
    set swapped to false
    for j from 0 to Array.length - i - 1
      if Array[j] > Array[j + 1]
        swap Array[j] and Array[j + 1]
        set swapped to true
    if not swapped
        break // Array is sorted
```

## Implementation of Bubble Sort

This example implements the Bubble Sort algorithm in Java:

```java
public class BubbleSort {
  public static void main(String[] args) {
    int[] arr = {2, 5, 1, 6, 9, 5};
    bubbleSort(arr);

    System.out.println("Sorted array:");
    for (int num : arr) {
      System.out.print(num + " ");
    }
  }

  public static void bubbleSort(int[] arr) {
    int n = arr.length;
    boolean swapped;

    // Outer loop for each pass
    for (int i = 0; i < n - 1; i++) {
      swapped = false;

      // Inner loop for comparing adjacent elements
      for (int j = 0; j < n - 1 - i; j++) {
        // Swap if elements are in the wrong order
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j+1]
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;

          swapped = true;
        }
      }

      // If no swaps happened, the array is already sorted
      if (!swapped) break;
    }
  }
}
```

Here is the output:

```shell
Sorted array:
1 2 5 5 6 9
```

## Time Complexity of Bubble Sort

Overall Time Complexity: _O(n^2)_

- **Iterative Comparison**: Each pair of adjacent elements is compared, leading to `n-1` comparisons in the first pass, `n-2` in the second, and so on.
- **Best Case Scenario**: _O(n)_ when the array is already sorted, as only one pass will be needed.
- **Worst and Average Case**: _O(n^2)_ due to the nested loops for comparing and swapping elements.

> **Note:** The overall time complexity of Bubble Sort is predominantly influenced by the number of passes through the array and the comparisons within each pass.

## Space Complexity of Bubble Sort

Overall Time Complexity: _O(1)_

Bubble Sort performs with a space complexity of _O(1)_ because it's an in-place sorting algorithm that needs only a constant amount of extra memory, such as a temporary variable for swapping and loop counters. It does not use any additional data structures, making it memory-efficient despite its slower performance.

## Comparison with Other Sorting Algorithms

| Algorithm          | Best Case  | Average Case | Worst Case | Space Complexity |
| ------------------ | ---------- | ------------ | ---------- | ---------------- |
| **Bubble Sort**    | O(n)       | O(n²)        | O(n²)      | O(1)             |
| **Insertion Sort** | O(n)       | O(n²)        | O(n²)      | O(1)             |
| **Selection Sort** | O(n²)      | O(n²)        | O(n²)      | O(1)             |
| **Quick Sort**     | O(n log n) | O(n log n)   | O(n²)      | O(log n)         |
| **Merge Sort**     | O(n log n) | O(n log n)   | O(n log n) | O(n)             |
| **Heap Sort**      | O(n log n) | O(n log n)   | O(n log n) | O(1)             |

## Frequently Asked Questions

### 1. What is the main advantage of Bubble Sort?

The primary advantage of Bubble Sort is its simplicity—it is easy to understand and implement, making it useful for teaching basic sorting concepts and algorithms.

### 2. What is the main disadvantage of Bubble Sort?

The biggest disadvantage of Bubble Sort is its poor performance on large datasets due to its _O(n²)_ time complexity, which makes it inefficient compared to more advanced sorting algorithms.

### 3. Is Bubble Sort faster than Merge Sort?

No, Bubble Sort is not faster than Merge Sort. Merge Sort consistently performs better with a time complexity of _O(n log n)_, making it significantly more efficient for large lists.
