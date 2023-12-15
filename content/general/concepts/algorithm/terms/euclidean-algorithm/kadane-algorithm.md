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
  - 'learn-cpp'
  - 'paths/computer-science'
---

**`Kadane's algorithm`** is a dynamic programming approach to efficiently finding the maximum sum of a subarray in a given array of numbers. The algorithm works as follows:

1. Initialize a current sum (variably called `maxEndingHere`) equal to the value of the element at the first position in the array (`arr[0]`).
2. Iterate through the array. At every position, set `maxEndingHere` to the maximum of the following two values: `maxEndingHere + arr[i]` or `arr[i]`, where `i` is the current position in the array.
3. Keep track of the greatest `maxEndingHere` encountered (ex: in a variable called `maxSoFar`).
4. Return `maxSoFar`.
This algorithm guarantees a time complexity of `O(n)`, making it an optimal solution for this problem.

## Example

**Here's how Kadane's algorithm can be applied to a problem:**

- Consider the array {-2, -1, -3, 4, -1, 2, 1, -5, 4}. Initialize two integer variables: one named `maxEndingHere` and the other called `maxSoFar`. These variables serve to track the maximum subarray sum ending at the current position and the overall maximum subarray sum.
- The loop commences with the first element, which is -2. Therefore, both `maxEndingHere` and `maxSoFar` are initially -2.
- Proceed to the next element, -1, and compare it to the sum of itself and the previous value of `maxEndingHere`.  Since -1 is greater than the sum of -2 and -1, set`maxEndingHere` to  -1. Also, compare `maxSoFar` with the updated value of `maxEndingHere`. Since -2 is less than -1 set `maxSoFar` to  -1.
- This process continues as we advance through the array, modifying `maxEndingHere` and `maxSoFar` at each step.
- After the loop, the variable `maxSoFar` contains the maximum subarray sum.
- Return the value of `maxSoFar`, which represents the maximum subarray sum.

The following implementation of `Kadane's algorithm` is done in [c++](https://www.codecademy.com/resources/docs/cpp):

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

The output for the above code is:

```shell
Maximum subarray sum: 6
```

## Codebyte Example 

```codebyte/cpp
#include <iostream>
#include <vector>
using namespace std;

int maxSubarraySum(vector<int>& arr) {
  int maxEndingHere = arr[0];
  int maxSoFar = arr[0];
  int start = 0;
  int end = 0;
  int tempStart = 0;

  for (int i = 1; i < arr.size(); i++) {
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

  cout << "Maximum subarray: [";
  for (int i = start; i <= end; i++) {
    cout << arr[i];
    if (i != end) {
        cout << ", ";
    }
  }
  cout << "]" << endl;

  return maxSoFar;
}

int main() {
  vector<int> nums = {-2, -1, -3, 4, -1, 2, 1, -5, 4};

  int maxSum = maxSubarraySum(nums);
  cout << "Maximum subarray sum: " << maxSum << endl;

  return 0;
}
"

Three additional variables: `start`, `end`, and `tempStart` are added in the above code. These variables keep track of the starting and ending indices, the temporary start of the current subarray. So, in the end, the subarray itself can be printed which has the max sum with the max sum.
