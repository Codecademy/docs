---
Title: 'Memoization'
Description: 'Memoization can be used to improve performance in Python code.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Algorithms'
  - 'Conceptual'
  - 'Dynamic Programming'
CatalogContent:
  - 'learn-data-structures-and-algorithms-with-python'
  - 'paths/computer-science'
---

In Python, [memoization](https://www.codecademy.com/resources/docs/general/memoization) can be used to improve a program's performance.

This is ideal whenever the same calculations (with the same inputs and outputs) are known to take place. Memoization helps by saving, or caching, these results in computer memory for later use. It can be applied to many contexts, including:

- Making calls to recursive or pure functions where some calculations use the same inputs and return the same outputs.
- Fetching from the server with the same base API endpoints.

## Syntax

```pseudo
memo = {}

def memo_function(args):
  if(args in memo):
    return memo[args]
  else:
    # Do this and update memo.
```

In Python, one way memoized results are represented is with [dictionaries](https://www.codecademy.com/resources/docs/python/dictionaries). In a given function, if a previously calculated result exists in the `memo` dictionary, it is returned. Otherwise, normal calculations take place and the `memo` dictionary is updated.

## Example

In the example below, the `get_square()` function accepts a parameter `n` and returns the square of it. With small inputs, this function takes little to no time to process. But as the inputs get larger, the timelapse becomes more noticeable. This point is further shown with the `time` module.

To address this, memoization is used in the `get_square_memo()` function where such calculations are skipped if they have already been made and stored in `memo`.

```codebyte/python
import time

def get_square(n):
    return n * n

memo = {}
def get_square_memo(n):
    if(n in memo): return memo[n]

    memo[n] = n*n
    return memo[n]

print("With get_square()\n-----------------")
start = time.time()
print(get_square(30000))
end = time.time()
total_1 = round((end - start)*1000, 5)
print("First Call: ", total_1, "s\n")

print("With get_square_memo()\n----------------------")
startA = time.time()
print(get_square_memo(30000))
endA = time.time()
total_2 = round((endA - startA)*1000, 5)
print("First Call: ", total_2, "ms")

startB = time.time()
print(get_square_memo(30000))
endB = time.time()
total_3 = round((endB - startB)*1000, 5)
print("Second Call: ", total_3, "ms")
```
