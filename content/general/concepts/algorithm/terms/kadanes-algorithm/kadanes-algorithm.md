---
Title: "Kadane's Algorithm"
Description: 'Returns the maximum sum of a subarray in a given array of numbers.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Arithmetic'
  - 'Arrays'
  - 'Values'
CatalogContent:
  - 'learn-cpp'
  - 'paths/computer-science'
---

**Kadane's Algorithm** is a dynamic programming approach for finding the maximum sum of a subarray in a given array of numbers. It works by iterating through the array and keeping track of:

- The current maximum sum ending at that position
- The global maximum sum found so far

By updating these two values as it scans the array, Kadane’s Algorithm ensures that the final result is the maximum possible subarray sum.

## How Kadane's Algorithm Works

1. Initialize a current sum (variably called `maxEndingHere`) equal to the value of the element at the first position in the array (`arr[0]`).
2. Iterate through the array. At every position, set `maxEndingHere` to the maximum of `maxEndingHere + arr[i]` or `arr[i]`, where `i` is the current position in the array.
3. Keep track of the greatest `maxEndingHere` encountered in a variable (variably called `maxSoFar`).
4. Return `maxSoFar`.

## Kadane's Algorithm Example

- Consider the array `{-2, -1, -3, 4, -1, 2, 1, -5, 4}`.
- Initialize two integer variables named `maxEndingHere` and `maxSoFar`. These variables serve to track the maximum subarray sum ending at the current position and the overall maximum subarray sum respectively.
- The loop commences with the first element, which is `-2`. Therefore, both `maxEndingHere` and `maxSoFar` are initially `-2`.
- Proceed to the next element, `-1`, and compare it to the sum of itself and the previous value of `maxEndingHere`.
  - Since `-1` is greater than the sum of `-2` and `-1`, set `maxEndingHere` to `-1`.
  - Also, compare `maxSoFar` with the updated value of `maxEndingHere`. Since `-2` is less than `-1`, set `maxSoFar` to `-1`.
- This process continues as the array is iterated, modifying `maxEndingHere` and `maxSoFar` at each step.
- After the loop, the variable `maxSoFar` contains the maximum subarray sum, which is returned as the result.

## Kadane's Algorithm Implementation

Here is the implementation of Kadane's Algorithm in [C++](https://www.codecademy.com/resources/docs/cpp):

```cpp
#include <iostream>
using namespace std;

int maxSubarraySum(int arr[], int size) {
  int maxEndingHere = arr[0];
  int maxSoFar = arr[0];

  for (int i = 1; i < size; i++) {
    maxEndingHere = max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

int main() {
  int nums[] = {-2, -1, -3, 4, -1, 2, 1, -5, 4};
  int size = sizeof(nums) / sizeof(nums[0]);

  int maxSum = maxSubarraySum(nums, size);
  cout << "Maximum subarray sum: " << maxSum << endl;

  return 0;
}
```

Here is the output:

```shell
Maximum subarray sum: 6
```

## Kadane's Algorithm Complexity Analysis

Kadane's Algorithm offers a time complexity of _O(n)_ as it traverses the array exactly once.

On the other hand, it has a space complexity of _O(1)_ as it uses only a constant amount of extra variables (`current_sum` and `max_sum`).

This efficiency makes Kadane’s Algorithm one of the most elegant and powerful techniques in algorithm design.

## Frequently Asked Questions

### 1. Is Kadane's Algorithm greedy or DP?

Kadane's Algorithm is often seen as a dynamic programming approach because it makes decisions based on previously computed results. However, it also has a greedy flavor since it chooses the locally optimal option (start new subarray vs. extend current subarray) at each step.

### 2. Why is Kadane's Algorithm efficient?

Kadane's Algorithm is efficient because it solves the problem in linear time (_O(n)_) with constant space (_O(1)_), compared to naive approaches that require _O(n²)_ or _O(n³)_ time.

### 3. Is sliding window and Kadane's Algorithm the same?

No. The sliding window technique is typically used when the subarray size is fixed, while Kadane's Algorithm works for variable-length subarrays to maximize the sum. They are different strategies, although both deal with subarrays.
