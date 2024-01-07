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

**Counting sort** is an out-of-place, non-comparison sorting [algorithm](https://www.codecademy.com/resources/docs/general/algorithm) that sorts a list with duplicate values efficiently. It is a helpful algorithm for sorting [arrays](https://www.codecademy.com/resources/docs/java/arrays) of small, non-negative integers, where it analyzes elements' frequency distribution and places them in their final sorted positions.

## Explanation

1. Find the maximum value:

- Iterate through the input array `data` to find the largest element `max`.
  - This determines the range of values we need to count.

2. Create the count array:

- Initialize a new array `count` with a `max + 1` size to hold each value's frequency. 
    - The size is `max + 1` so that we can include the `max` element.
- Set all elements in `count` to _0_ initially.

3. Count the occurrences:

- Loop through the `data` array again.
- For each element `data[i]`, increment the corresponding count in the `count` array (`count[data[i]]++`). 
    - This is to document the frequency distribution of elements in `data`.

4. Create the start array:

- Initialize a new array `start` of the same size as `count`.
- Set `start[0]` to _0_.
- Based on the frequency distribution found in `count`, we can find the starting indexes and store them in the `start` array (`start[j] = start[j-1] + count[j-1]` for `j=1` to `max`).

5. Place elements in sorted order:

- Iterate through the `data` array again.
- For each element `data[a]`:
   - Retrieve its corresponding position to the `temp` [variable](https://www.codecademy.com/resources/docs/java/variables) from the `start` array (`temp = start[data[a]]`).
   - Place the element in the `result` array at that position (`result[temp] = data[a]`).
   - Increment the `start` value for the next element with the same value (`start[data[a]]++`).

6. Return the sorted array:

- The `result` array now contains the elements of the original `data` array in sorted order.
- Return the `result` array.

## Implementation

The following example written in [Java](https://www.codecademy.com/resources/docs/java) shows an implementation of counting sort:

```java
import java.util.Random;
import java.util.Arrays;

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

- The first and third loops run in _O(k)_ time, where _k_ is `max`.
- The second and last loops run in _O(n)_ time.
- Therefore, the total running time is _O(n+k)_.
- If _k_ = _O(n)_, then the total time is _O(n)_.