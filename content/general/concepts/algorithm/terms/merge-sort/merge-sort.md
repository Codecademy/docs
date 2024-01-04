---
Title: 'Merge Sort Algorithm' # Required; the file name should be the same as the title, but lowercase, with dashes instead of spaces, and all punctuation removed
Description: 'Returns a sorted array using divide and conquer.' # Required; ideally under 150 characters and starts with a present-tense verb (used in search engine results and content previews)
Subjects: # Please only use Subjects in the subjects.md file (https://github.com/Codecademy/docs/blob/main/documentation/subjects.md). If that list feels insufficient, feel free to create a new Subject and add it to subjects.md in your PR!
  - 'Computer Science'
  - 'Interview Prep'
  - 'Code Foundations'
Tags: # Please only use Tags in the tags.md file (https://github.com/Codecademy/docs/blob/main/documentation/tags.md). If that list feels insufficient, feel free to create a new Tag and add it to tags.md in your PR!
  - 'Sorting Algorithms'
  - 'Algorithms'
CatalogContent: # Please use course/path landing page slugs, rather than linking to individual content items. If listing multiple items, please put the most relevant one first
  - 'learn-java'
  - 'paths/computer-science'
---


**Merge sort** is a divide-and-conquer sorting algorithm that breaks down an array into smaller arrays, solves those, and then combines the subarrays back together to return a sorted array. 

## Explanation

**1. Divide:**

- **Base Case:** If the input array `data` has only one element, it's already sorted, so return.
- **Split:** Divide the array into two halves, `left` and `right`, of approximately equal size.

**2. Conquer:**

- **Recursive Calls:** Recursively call `mergeSort` on each half, `(left)` and `(right)`, to create subarrays so they are sorted independently.

**3. Combine:**

- **Merge:** Call the `merge` function to merge the two sorted halves, `left` and `right`, back into the original array `data` in a sorted manner.

**The `merge` function:**

1. **Initialize:** Set indices `l`, `r`, and `k` to 0 to track positions in `left`, `right`, and `data`, respectively.
2. **Compare and Merge:**
   - While both `left` and `right` have elements remaining:
     - Compare the elements at `left[l]` and `right[r]`.
     - Copy the smaller element into `data[k]` and increment the corresponding index (`l` or `r`).
     - Increment `k` to move to the next position in `data`.
3. **Copy Remaining Elements:**
   - If any elements remain in `left`, copy them directly into the remaining positions in `data`.
   - Similarly, if any elements remain in `right`, copy them into the remaining positions in `data`.



### **Graphical representation of Merge Sort:**

![Merge Sort](https://raw.githubusercontent.com/Codecademy/docs/main/media/merge.png)

## Implementation Pt.1 

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
