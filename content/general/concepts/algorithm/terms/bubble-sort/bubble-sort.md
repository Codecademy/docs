---
Title: 'Bubble Sort Algorithm'
Description: 'Illustrates a simple sorting algorithm using repeated swapping of adjacent elements.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
  - 'Code Foundations'
Tags:
  - 'Sorting Algorithms'
  - 'Algorithms'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Bubble sort** is a simple, comparison-based [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that repeatedly steps through an [array](https://www.codecademy.com/resources/docs/java/arrays), comparing and swapping adjacent elements if they are in the wrong order. This process continues until the array is sorted, making it an intuitive method for sorting arrays.

## BubbleSort Method

**Process**:

- `Iterative Comparison`: Start with the first element and compare it with the next element.
- `Swap`: If the current element is greater than the next element, swap them to reorder.
- `Repeat`: Continue this process for each element in the array, iterating multiple times over the entire array.

**Completion**:

- `End Condition`: The array is sorted when a complete pass occurs without any swaps.

### Implementation

The following example in [Java](https://www.codecademy.com/learn/learn-java) demonstrates the Bubble Sort Algorithm:

```java
public static void bubbleSort(int[] data){
    int n = data.length;
    boolean swapped;
    for(int i = 0; i < n-1; i++){
        swapped = false;
        for(int j = 0; j < n-i-1; j++){
            if(data[j] > data[j+1]){
                // Swap data[j] and data[j+1]
                int temp = data[j];
                data[j] = data[j+1];
                data[j+1] = temp;
                swapped = true;
            }
        }
        // If no two elements were swapped, then the array is sorted
        if(!swapped) break;
    }
}

```

## Time Complexity Breakdown
**Overall Time Complexity: O(n^2)**

### Breakdown
- **Iterative Comparison**: Each pair of adjacent elements is compared, leading to n-1 comparisons in the first pass, n-2 in the second, and so on.
- **Best Case Scenario**: O(n) when the array is already sorted, as only one pass will be needed.
- **Worst and Average Case**: O(n^2) due to the nested loops for comparing and swapping elements.

**Overall Time Complexity**:

- The time complexity is predominantly influenced by the number of passes through the array and the comparisons within each pass.

## Characteristics of Bubble Sort
- `Simplicity`: Bubble sort is straightforward to understand and implement.
- `Inefficiency for Large Lists`: Not suitable for large datasets due to its O(n^2) time complexity.
- `Stability`: Bubble sort is a stable algorithm, maintaining the relative order of equal elements.
- `Adaptive`: Can be optimized to stop early if the list is sorted before completing all passes, making it adaptive to the initial order of elements.
