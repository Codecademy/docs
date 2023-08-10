---
Title: 'Proof by Strong Induction'
Description: 'An induction technique that proves a statement by providing multiple base cases,  assuming the statement is true for all integers from the largest base case to some even larger integer k, and then proving the statement is true for k+1 using that assumption.'
Subjects:
  - 'Computer Science'
  - 'Discrete Math'
Tags: 
  - 'Arithmetic'
  - 'Logic'
  - 'Logical'
  - 'Math'
CatalogContent:
  - 'computer-science'
  - 'paths/computer-science'
---

**Proof by Strong Induction** is an induction technique that proves a statement by providing multiple base cases, assuming the statement is true for all integers from the largest base case to some even larger integer `k`, and then proving the statement is true for `k+1` using that assumption.

## Steps for Strong Induction

  1. _Base Cases_: Identify multiple smallest possible cases for which the statement is true.
  2. _Induction Hypothesis_: Suppose that the statement is true for some integer `k`, then the statement must be true for `k+1`.
  3. _Proof_: Prove that the induction hypothesis is true for `k+1`.

## Example

Statement: `2(x-1) - (x-2) = x for x >= 2`

Base Cases:

```
At x = 2 , 2(2 - 1) - (2 - 2) = 2(1) - (0) = 2 + 0 = 2 and x = 2. Thus, the statement is true at x = 2.

At x = 3, 2(3 - 1) - (3 - 2) = 2(2) - (1) = 4 - 1 = 3 and x = 3. Thus, the statement is true at x = 3.
```

Induction Hypothesis:
```
Suppose at x = k, 2(k-1) - (k-2) = k
Then at x = k+1, we need to prove that 2((k+1)-1) - ((k+1)-2) = k+1
```

Proof:
```
2((k+1)-1) - ((k+1)-2) = 2(k+1-1) - (k+1-2) 
                       = 2(k-1+1) - (k-2+1) 
                       = 2(k-1) + 2(1) - (k-2) -(+1) 
                       = 2(k-1) - (k-2) + 2 - 1
                       = 2(k-1) - (k-2) + 1 
                       = k + 1  [Substitute from x = k, we know that 2(k-1) - (k-2) = k]
2((k+1)-1) - ((k+1)-2) = k+1

Thus, the statement is true at x = k+1.
```

## Codebyte Example

```codebyte/python
x = 3
s = 2*(x-1) - (x-2)

print(x == s)
```
