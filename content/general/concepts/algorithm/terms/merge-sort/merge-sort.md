---
Title: 'Merge Sort Algorithm' 

Description: 'Returns a sorted array using divide and conquer.' 

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

**Merge sort** is a divide-and-conquer sorting [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that breaks down an [array](https://www.codecademy.com/resources/docs/java/arrays) into smaller arrays, sorts them, and then combines the subarrays back together to return a sorted array. 



## MergeSort Method

**Divide:**
  - `Base Case`: If the input array `data` has only one element, it's already sorted, so return.
  - `Split`: Divide the array into two halves, `left` and `right`, of approximately equal size.

**Conquer**:
  
  - [`Recursive Calls`](https://www.codecademy.com/learn/java-algorithms/modules/recursion-apcs/cheatsheet): Repeatedly call `mergeSort` on each half, `(left)` and `(right)`, to create subarrays so they are sorted independently.

**Combine**:
  
  - `Merge`: Call the `merge` function to merge the two sorted halves (each initially of length 1) `left` and `right`, and combine them back into the original array `data` in a sorted manner.


### Implementation Pt.1 

```java
public static void mergeSort(int[] data){
    if(data.length == 1){
        return;
    }
    int n1 = data.length/2;
    int n2 = data.length - n1;
    int[] left, right;
    //make left and right subarrays
    left = new int[n1];
    right = new int[n2];
    System.arraycopy(data, 0, left, 0, n1);
    System.arraycopy(data, n1, right, 0, n2);
    //recursively split left and right arrays
    mergeSort(left);
    mergeSort(right);
    //once array is @ length 1, the left & right array will be merged
    merge(data, left, right);
}

```

### Merge Method

1. Initialize: 
   - Set indices `l`, `r`, and `k` to 0 to track the positions in `left`, `right`, and `data`.
2. Compare and Merge:
   - While both `left` and `right` have elements remaining:
     - Compare the elements at `left[l]` and `right[r]`.
     - Copy the smaller element into `data[k]` and increment the corresponding index (`l` or `r`).
     - Increment `k` to move to the next position in `data`.
3. Copy Remaining Elements:
   - If any elements remain in `left`, copy them directly into the remaining positions in `data`.
   - Similarly, if any elements remain in `right`, copy them into the remaining positions in `data`.

## Implementation Pt.2

```java
public static void merge(int[] data, int[] left, int[] right){
    //indexes of arrays left,right, and data
    int l,r,k;
    l = r = k = 0;
    while(l < left.length && r < right.length && k < data.length){
        //find min between left & right element and insert it
        if(left[l] < right[r]){
            data[k] = left[l];
            l++;
        }
        else{
            data[k] = right[r];
            r++;
        }
        //increment index of data after insertion
        k++;
    }
    //if elements still remain in arrays left or right, insert them into data
    while(l < left.length){
        data[k] = left[l];
        l++;
        k++;
    }
    while(r < right.length){
        data[k] = right[r];
        r++;
        k++;
    }
}

```

## Time Complexity Breakdown

Overall Time Complexity: _O(n log n)_

### Breakdown:

1. **Divide**:
   - The `mergeSort` function recursively divides the array into halves until each subarray has only one element.
   - This splitting process has a time complexity of _O(log n)_ due to the repeated halving.

2. **Conquer**:
   - The base case (array of size 1) requires no sorting, so its complexity is _O(1)._

3. **Combine**:
   - The `merge` function merges two sorted subarrays into a single sorted array.
   - It iterates through both subarrays once, comparing elements and copying them to the final array.
   - This merging process takes _O(n)_ time, where n is the total number of elements being merged.

**Overall Time Complexity:**

- The recursive calls to `mergeSort` create a [log n-level tree](https://www.geeksforgeeks.org/how-to-solve-time-complexity-recurrence-relations-using-recursion-tree-method/) calls. 
  - The number of levels in this tree is directly related to how many times you can divide the array by 2 before reaching single-element subarrays. This is equivalent to the logarithm of the array's size (log n). For example, an array of 8 elements would have 3 levels (log2 (8) = 3). _Reference the picture below for a visual understanding._

![Merge Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/merge.png)

- At each level, the merging step takes O(n) time.
- Therefore, the overall time complexity is **O(n log n)**, resulting from multiplying the time complexity of each level (n) by the number of levels (log n).

#### **Benefits of Merge Sort:**
- Predictable Efficiency: Merge sort maintains a time complexity of O(n log n) regardless of the initial arrangement of elements in the input array. This means it performs equally well in best-case, average-case, and worst-case scenarios.
- Reliable for Diverse Inputs: This consistent performance makes merge sort a dependable choice for sorting various input sizes and datasets without unexpected slowdowns due to data arrangement.
- Efficiency for Large Datasets: Its O(n log n) time complexity places it among the most efficient sorting algorithms, especially for large datasets, outperforming algorithms like bubble sort and [selection sort](https://www.codecademy.com/resources/docs/general/algorithm/selection-sort) that exhibit worse-case complexities of O(n^2).
