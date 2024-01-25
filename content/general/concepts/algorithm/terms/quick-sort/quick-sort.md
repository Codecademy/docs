---
Title: 'Quick Sort'
Description: 'Sorts an array through partitioning.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
  - 'Code Foundations'
Tags:
  - 'Algorithms'
  - 'Sorting Algorithms'
  - 'Java'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Quick sort** is an in-place, divide-and-conquer sorting [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that sorts an [array](https://www.codecademy.com/resources/docs/java/arrays) by first selecting a pivot element, partitioning the array into two sub-arrays based on whether each element is smaller or larger than the pivot, and then recursively sorts those sub-arrays. 

## Explanation

1. Initial Checks:
- If the array is empty or has only one element `low >= high`, it's already sorted, so the function returns.
    - This is the reason we do not use `data.length == 1` as the stopping case for partitioning.

2. Partitioning:
- Takes the last element's index `high` as the pivot.
- Initializes two pointers, `left` at the beginning `low` and `right` at the end `high - 1` (since `high` is the pivot element).
- Iterate until `left` and `right` meet or cross:
    - Moves the pointer `left` to the right while elements at `left` are less than or equal to the pivot.
    - Moves `right` to the left while elements at `right` are greater than or equal to the pivot.
        - If both of the above conditions are violated and `left` and `right` haven't crossed, swap the numbers at indices `left` and `right`.
- If the pointers cross, swap the pivot with the element at `left` to place the pivot element in its sorted position.

_Reference the visual below for the first iteration:_
![Quick Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/quicksort.png)

3. Recursive Calls:
   - Recursively calls `quickSort` to sort the left subarray (`data[low..left-1]`).
   - Recursively calls `quickSort` to sort the right subarray (`data[left+1..high]`).

4. Helper Function:
   - `swap(data, a, b)`: Swaps elements at indices `a` and `b` in the array `data`.

## Implementation

The following example written in [Java](https://www.codecademy.com/resources/docs/java) shows an implementation of **Quick Sort**:

```java
 public static void quickSort(int[] data, int low, int high){
    if(low >= high){
        return;
    }
    int left = low;
    int right = high, pivot = high;
    while(left != right){
        while(data[left] <= data[pivot] && left < right){
            left++;
        }
        while(data[right] >= data[pivot] && right > left ){
            right--;
        }
        swap(data,left, right);
    }
    swap(data, left, pivot);
    quickSort(data,low,left-1);
    quickSort(data,left+1, high);

}
public static void swap(int[] data, int a, int b){
    int temp = data[a];
    data[a] = data[b];
    data[b] = temp;
}
```

## Time Complexity

- **Divide and Conquer:** Quick sort divides the array into smaller subarrays and recursively sorts them.
- **Pivot Selection:** The choice of pivot affects performance. The last element is often used, but other strategies exist.
- **Average-Case Time Complexity:** O(n log n) - the pivot selected is the middle element every time.
- **Worst-Case Time Complexity:** O(n^2) - This worst case scenario occurs when the pivot element is either the smallest or largest element in the array, resulting in partitioning until only one element in one of the sub-arrays. 



