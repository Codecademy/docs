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

**`Kadane's algorithm`** is a dynamic programming approach to efficiently finding the maximum sum of a subarray in a given array of numbers. The algorithm works as follows:
1. Initialize a current sum (variable called `maxEndingHere`) equal to the value of the element at the first position in the array (`arr[0]`).
2. Iterate through the array. At every position, set `maxEndingHere` to the maximum of the following two values: `maxEndingHere + arr[i]` or `arr[i]`, where `i` is the current position in the array.
3. Keep track of the greatest `maxEndingHere` encountered (ex: in a variable called `maxSoFar`).
4. Return `maxSoFar`.
This algorithm guarantees a time complexity of `O(n)`, making it an optimal solution for this problem.

## Example

**Here's how Kadane's algorithm can be applied to a problem:**

- Consider the array {-2, -1, -3, 4, -1, 2, 1, -5, 4}. Initialize two integer variables: one named `maxEndingHere` and the other called `maxSoFar`. These variables serve to track the maximum subarray sum ending at the current position and the overall maximum subarray sum.
- The loop commences with the first element, which is -2. So, both `maxEndingHere` and `maxSoFar` start at -2.
- As the loop proceeds to the next element, which is -1, compare it to the sum of the current element and the previous value of `maxEndingHere`. Update `maxEndingHere` to **-1** because it's greater than the sum of **-2** and **-1**. Also, compare `maxSoFar` with the updated value of `maxEndingHere`. Since **-2** is less than **-1**, update `maxSoFar` to **-1**.
- This process continues as we advance through the array, modifying `maxEndingHere` and `maxSoFar` at each step.
- At the conclusion of the loop, the variable `maxSoFar` contains the maximum subarray sum.
- Return the value of `maxSoFar`, which represents the maximum subarray sum.

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

Three additional variables: `start`, `end`, and `tempStart` are added in the above code. These variables keep track of the starting, and ending indices, the temporary start of the current subarray. So, in the end, the subarray itself can be printed which has the max sum with the max sum.
