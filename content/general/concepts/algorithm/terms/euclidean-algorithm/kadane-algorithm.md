---
Title: 'Kadane's Algorithm'
Description: 'Returns the maximum sum of a subarray within an array of numbers'
Subjects:
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arithmetic'
  - 'Arrays'
CatalogContent:
  - 'learn-java'
  - 'paths/computer-science'
---

**`Kadane's algorithm`** is a dynamic programming approach utilized to identify the maximum sum of a subarray within a given array of numbers. The algorithm solves this problem efficiently in a single pass through the array by maintaining two variables: `maxEndingHere` and `maxSoFar`. The algorithm iterates through the array, updating these variables at each step to track the maximum subarray sum ending at the current element and the overall maximum subarray sum found so far. The final value of maxSoFar represents the maximum subarray sum in the given `array`. This algorithm guarantees a time complexity of `O(n)`, making it an optimal solution for this problem.

## Explanation

**Here's how Kadane's algorithm can be applied to a problem:**

- Start with the first number and add it to a running total. Then, move to the next number and determine whether to continue with the current sum or start a new sum from this number. Always aim to maintain the largest sum seen so far.
- For example, consider the array {-2, -1, -3, 4, -1, 2, 1, -5, 4}. Initialize two integer variables: one named `maxEndingHere` and the other called `maxSoFar`. These variables serve to track the maximum subarray sum ending at the current position and the overall maximum subarray sum.
- The loop commence with the first element, which is -2. So, both `maxEndingHere` and `maxSoFar` start at -2.
- As the loop proceed to the next element, which is -1, compare it to the sum of the current element and the previous value of `maxEndingHere`. Update `maxEndingHere` to **-1** because it's greater than the sum of **-2** and **-1**. Also, compare `maxSoFar` with the updated value of `maxEndingHere`. Since **-2** is less than **-1**, update `maxSoFar` to **-1**.
- This process continues as we advance through the array, modifying `maxEndingHere` and `maxSoFar` at each step.
- At the conclusion of the loop, the variable `maxSoFar` contains the maximum subarray sum.
- Return the value of `maxSoFar`, which represents the maximum subarray sum.

## Example

The following implementation of `Kadane's algorithm` is done in [java](https://www.codecademy.com/learn/learn-java):

```java
public class KadaneAlgorithm {
    public static int maxSubarraySum(int[] arr) {
        int maxEndingHere = arr[0];
        int maxSoFar = arr[0];

        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }

    public static void main(String[] args) {
        int[] nums = {-2, -1, -3, 4, -1, 2, 1, -5, 4};
        int maxSum = maxSubarraySum(nums);
        System.out.println("Maximum subarray sum: " + maxSum);
    }
}
```

The output for the above code is:

```shell
Maximum subarray sum: 6
```

## Codebyte Example 

```codebyte/java
public class KadaneAlgorithm {
    public static int maxSubarraySum(int[] arr) {
        int maxEndingHere = arr[0];
        int maxSoFar = arr[0];
        int start = 0; 
        int end = 0;   
        int tempStart = 0; 

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > maxEndingHere + arr[i]) {
                maxEndingHere = arr[i];
                tempStart = i;
            } else {
                maxEndingHere = maxEndingHere + arr[i];
            }

            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                start = tempStart;
                end = i;
            }
        }

        System.out.print("Maximum subarray: [");
        for (int i = start; i <= end; i++) {
            System.out.print(arr[i]);
            if (i != end) {
                System.out.print(", ");
            }
        }
        System.out.println("]");

        return maxSoFar;
    }

    public static void main(String[] args) {
        int[] nums = {-2, -1, -3, 4, -1, 2, 1, -5, 4};
        int maxSum = maxSubarraySum(nums);
        System.out.println("Maximum subarray sum: " + maxSum);
    }
}
"

Three additional variables: `start`, `end` and `tempStart` are added in the above code. These variables keep track of the starting, ending indices, temporary start of the current subarray. So, in the end the subarray itself can be printed which have the max sum with the max sum.
