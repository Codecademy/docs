---
Title: 'Counting Sort'
Description: 'Sorts a list with duplicate values efficiently.'
Subjects:
  - 'Computer Science'
  - 'Interview Prep'
Tags:
  - 'Algorithms'
  - 'Sorting Algorithms'
  - 'Java'
  - 'Counting Sort'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**Counting sort** is an out-of-place, non-comparison sorting algorithm. It sorts arrays of small, non-negative integers by analyzing elements' frequency distribution and placing them in their final sorted positions.

## Explanation

**1. Find the maximum value:**

- Iterate through the input array (let's name it `data`) to find the largest element, `max`.
- This determines the range of values we need to count.

**2. Create the count array:**

- Initialize a new array `count` with a `max + 1` size to hold each value's frequency. 
    - The size is `max + 1`, so we can include the max element.
- Set all elements in `count` to 0 initially.

**3. Count the occurrences:**

- Loop through the `data` array again.
- For each element `data[i]`, increment the corresponding count in the `count` array(`count[data[i]]++`). 
    - This is to document the frequency distribution of elements in `data`.

**4. Create the start array:**

- Initialize a new array `start` of the same size as `count`.
- Set `start[0]` to 0.
- Based on the frequency distribution found in `count`, we can find the starting indexes and store them in the `start` array:
   - `start[j] = start[j-1] + count[j-1]` for `j = 1` to `max`.

**5. Place elements in sorted order:**

- Iterate through the `data` array again.
- For each element `data[a]`:
   - Retrieve its corresponding position in the `result` array from the `start` array: `temp = start[data[a]]`.
   - Place the element in the `result` array at that position: `result[temp] = data[a]`.
   - Increment the `start` value for the next element with the same value: `start[data[a]]++`.

**6. Return the sorted array:**

- The `result` array now contains the sorted elements of the original `data` array.
- Return the `result` array.


## Implemented Example
The following example written in Java shows an implementation of Counting Sort:
```java
public class CountingSorting {
    public static void main(String[] args) {
        Random rand = new Random();
        int[] arr1 = new int[10];
        for(int i =0; i < arr1.length; i++){
            arr1[i] = rand.nextInt(5);
        }
        System.out.println("Array Before Sort: " + Arrays.toString(arr1));
        System.out.println("Array After Sort: " + Arrays.toString(countingSort(arr1)));
    }
    public static int[] countingSort(int[] data){
        int[] count,start,result;
        result = new int[data.length];
        //Step #1
        int max = Integer.MIN_VALUE;
        for(int item:data)
        {
            max = Math.max(max,item);
        }
        //Step #2
        count = new int[max+1];
        //Step #3
        for(int i = 0; i < data.length; i++){
            count[data[i]]++;
        }
        //Step #4
        start = new int[max+1];
        start[0]= 0;
        for(int j =1; j < start.length; j++){
            start[j] = start[j-1] + count[j-1];
        }
        //Step #5
        for(int a = 0; a < result.length;a++){
            int temp = start[data[a]];
            result[temp] = data[a];
            start[data[a]]++;
        }
        //Step #6
        return result;
    }

}
```

The output for the above code is:

```shell
Array Before Sort: [3, 2, 1, 4, 2, 4, 2, 1, 4, 2]
Array After Sort:  [1, 1, 2, 2, 2, 2, 3, 4, 4, 4]
```

## Time Complexity
- The first and third loops run in **O(k)** time, where k is the `max`
- The second and last loops run in **O(n)** time
- Therefore the total running time is O(n+k)
- If k = O(n), then the **total time will be O(n)**