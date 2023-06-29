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

Kadane's algorithm is an efficient way to find the maximum sum of a contiguous subarray within a given array of numbers. It iterates through the array and keeps track of the current maximum sum and the maximum sum found so far. By comparing the current element with the running sum, it decides whether to continue the subarray or start a new one. The algorithm guarantees a time complexity of O(n), making it an optimal solution for this problem.

## Explanation

To understand `Kadane's algorithm` an array of numbers will be given, and the goal is to find the biggest sum that can be made using a bunch of consecutive numbers. Skipping any numbers or using them out of order is not allowed.

**Here's how it can be done:**

- Start with the first number and add it to a running total. Then, move to the next number and decide whether it's better to continue with the current sum or start a new sum from this number. Always aim to keep the biggest sum seen so far.
- For example, consider the array [2, 3, 1, 5, 4]. Begin with 2, and the running sum is 2. Move to 3. Is it better to continue with the current sum of 2 + 3 = 5 or start a new sum of 3? Since 5 is bigger, continue with it.
- Next, add 1 to the running sum, making it 6. Now comes the choice: Should the current sum of 6 be continued or start a new sum of 1? Since 6 is bigger, continue.
- Now, add 5 to the running sum, resulting in 11. Once again, compare 11 with the current sum and observe that 11 is still bigger. Finally, add 4, which gives a running sum of 15.
- Therefore, the biggest sum that can be made with consecutive numbers in this array is 15!

## Example

The following implementation of `Kadane's algorithm` is done in [java](https://www.codecademy.com/learn/learn-java)

```java
public class KadaneAlgorithm {
    public static int findMaxSubarraySum(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        int start = 0;
        int end = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > maxEndingHere + nums[i]) {
                maxEndingHere = nums[i];
                start = i;
            } else {
                maxEndingHere = maxEndingHere + nums[i];
            }

            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                end = i;
            }
        }

        System.out.print("Maximum subarray: [");
        for (int i = start; i <= end; i++) {
            System.out.print(nums[i]);
            if (i != end) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
        return maxSoFar;
    }

    public static void main(String[] args) {
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        int maxSum = findMaxSubarraySum(nums);
        System.out.println("Maximum subarray sum: " + maxSum);
    }
}
```

The output for the above code is:

```shell
Maximum subarray: [4, -1, 2, 1]
Maximum subarray sum: 6
```

Two additional variables: `start` and `end` are added in the above code. These variables keep track of the starting and ending indices of the maximum subarray. So in the end the subarray itself can be printed which have the max sum.
