---
Title: 'Pseudocode'
Description: 'Pseudocode is a method of describing the steps in an algorithm or other computed process written in plain language. It does not rely on any particular implementation of a programming language, and instead is intended for a human audience. It omits the portions required for machine implementation of the algorithm, such as variable declarations, and includes natural language description details.'
Subjects:
  - 'Code Foundations'
  - 'Computer Science'
Tags:
  - 'Conceptual'
  - 'Documentation'
  - 'Development'
CatalogContent:
  - 'paths/code-foundations'
  - 'learn-how-to-code'
---

**Pseudocode** is a method of describing the steps in an algorithm or other computed process written in plain language. It does not rely on any particular implementation of a programming language, and instead is intended for a human audience. It omits the portions required for machine implementation of the algorithm, such as variable declarations, and includes natural language description details.

Pseudocode is a compact machine-independent way of communicating an algorithm and is used in teaching, scientific papers, and in program development.
There is no particular standard for pseudocode syntax. However, guidelines may exist in certain situations, such as in an academic environment, or for publication.

Pseudocode may borrow format and syntax for control structures from some conventional programming languages, while things like function calls and blocks of code within a loop may be replaced by natural language descriptions. Therefore, implementations of pseudocode may vary widely, from a close approximation to a finished program, to a block of formatted prose.

## Example 1

The following is a pseudocode description of a basic bubble sort algorithm using C++ formatting:

```cpp
function bubbleSort(A : list of sortable items) {
  n = length(A);
  do {
    swapped = false
    for (i = 1; i <= n-1; i = i + 1) {
      // If this pair is out of order
      if (A[i-1] > A[i]) {
        // Swap them and remember something changed
        // swap(A[i-1], A[i]);
        // swapped = true;
      }
    }
  }
  while (swapped);
}
```

## Example 2

The following is a pseudocode description of the above algorithm in more prose-like formatting:

```pseudo
variable A is a zero-indexed list of sortable items

set n = the number of items in A

loop
  set swapped = false
  for i = 1 to n-1
    if A[i] is less than prior element then swap A[i] with prior element
    set swapped = true
  end for
  if swapped is false then exit loop
end loop
```
