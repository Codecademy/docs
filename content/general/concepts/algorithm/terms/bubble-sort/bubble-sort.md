---
Title: 'Bubble Sort Algorithm'
Description: 'Illustrates a simple sorting algorithm using repeated swapping of adjacent elements.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Algorithms'
  - 'Bubble Sort'
  - 'Sorting Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Bubble sort** is a simple, comparison-based [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that repeatedly steps through an [array](https://www.codecademy.com/resources/docs/java/arrays), comparing and swapping adjacent elements if they are in the wrong order. This process continues until the array is sorted, making it an intuitive method for sorting arrays.

## BubbleSort Method

Bubble Sort is a straightforward algorithm that sorts an array by repeatedly comparing and swapping adjacent elements if they are in the wrong order. The steps of the Bubble Sort algorithm are as follows:

1. **Start at the Beginning**: Begin with the first element in the array.
2. **Compare Adjacent Elements**: Compare the current element with the next element in the array.
3. **Swap if Necessary**: If the current element is greater than the next element, swap their positions. This action moves the higher element towards the end of the array.
4. **Continue Through the Array**: Move to the next pair of adjacent elements and repeat the comparison and swap process.
5. **Complete the Pass**: Continue this process until the end of the array is reached. This constitutes one complete pass through the array.
6. **Repeat the Process**: Start again with the first element for the next pass. With each pass, the number of comparisons can be reduced since the end of the array will progressively become sorted.
7. **Check for Completion**: After each pass, if no swaps have been made, it indicates that the array is now completely sorted. At this point, the algorithm can stop running.

The process is characterized by the larger elements "bubbling" up to the end of the array with each pass, hence the name "Bubble Sort".

### Implementation

The following pseudocode demonstrates the Bubble Sort Algorithm:

```plaintext
Algorithm: BubbleSort(Array)
    for i from 0 to Array.length - 1
        set swapped to false
        for j from 0 to Array.length - i - 1
            if Array[j] > Array[j + 1]
                swap Array[j] and Array[j + 1]
                set swapped to true
        if not swapped
            break // Array is sorted
```

This pseudocode outlines the logic of the Bubble Sort algorithm without being tied to any specific programming language, making it suitable for a general algorithms document. Be sure to replace the existing Java code in your markdown document with this pseudocode snippet.

## Time Complexity

Overall Time Complexity: O(n^2)

- **Iterative Comparison**: Each pair of adjacent elements is compared, leading to n-1 comparisons in the first pass, n-2 in the second, and so on.
- **Best Case Scenario**: O(n) when the array is already sorted, as only one pass will be needed.
- **Worst and Average Case**: O(n^2) due to the nested loops for comparing and swapping elements.

> **Note:** The overall time complexity of Bubble Sort is predominantly influenced by the number of passes through the array and the comparisons within each pass.

## Characteristics of Bubble Sort

- `Simplicity`: Bubble sort is straightforward to understand and implement.
- `Inefficiency for Large Lists`: Not suitable for large datasets due to its O(n^2) time complexity.
- `Stability`: Bubble sort is a stable algorithm, maintaining the relative order of equal elements.
- `Adaptive`: Can be optimized to stop early if the list is sorted before completing all passes, making it adaptive to the initial order of elements.

## Example and Illustration

The following animation visually demonstrates the Bubble Sort Algorithm in action:

![Bubble Sort Example](https://raw.githubusercontent.com/Codecademy/docs/main/media/bubble-sort.png)

In this example, the numbers in the array are visually represented. With each pass through the array, the largest number in the unsorted part bubbles up to its correct position at the end of the array. This process repeats, with the range of unsorted elements shrinking each time, until the entire array is sorted.
