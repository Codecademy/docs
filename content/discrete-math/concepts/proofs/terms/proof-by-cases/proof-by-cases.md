---
Title: 'Proof by Cases'
Description: 'Proving a statement by showing that it holds in each of a set of mutually exhaustive cases.'
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

**Proof by Cases** is a technique used in mathematical proofs to demonstrate a statement by showing that it is true in each of a set of cases. These cases must be mutually exhaustive, meaning that they cover all possibilities, so that at least one of them must be true. By showing that the statement holds no matter which case is true, it is guaranteed that the statement is true.

Proof by Cases is also sometimes known as **exhaustive proof**, which refers to the fact that the statement is proven in a set of mutually exhaustive cases.

## Steps for Proof by Cases

1. _Mutual exhaustion_: Show that there is a set of cases that is mutually exhaustive.
2. _Prove each case_: Prove that the statement is true in each of the provided cases.

## Example

The statement below will be demonstrated by a Proof by Cases.

```pseudo
For any integer k, the product 3k^2 + k is even.
```

### Mutual Exhaustion

```pseudo
Any integer is either odd or even. So, there are two cases to consider: (1) k is odd, and (2) k is even.
```

### Prove Each Case

```pseudo
First, consider case (1), in which k is odd.

If k is odd, then k = 2n + 1, for some integer n.

Now, perform some algebraic manipulation on the expression 3k^2 + k:

3k^2 + k = 3(2n+1)^2 + 2n + 1  [substitute 2n + 1 for k]
  = 3(4n^2 + 4n + 1) + 2n + 1 [square (2n+1)]
  = 12n^2 + 12n + 3 + 2n + 1 [multiply 3 into (4n^2 + 4n + 1)]
  = 12n^2 + 14n + 4  [add like terms]
  = 2(6n^2 + 7n + 2)  [factor out 2]

When n is an integer, 6n^2 + 7n + 2 is also an integer. Therefore 2(6n^2 + 7n + 2) is equal to 2 times some integer. As 2 times any integer is even, it follows that 2(6n^2 + 7n + 2) is even. Therefore 3k^2 + k is even.

Next, consider case (2), in which k is even.

If k is even, then k = 2n, for some integer n.

Now, perform some algebraic manipulation on the expression 3k^2 + k:

 3k^2 + k = 3(2n)^2 + 2   [substitute 2n for k]
   = 12n^2 + 2   [simplify 3(2n)^2]
   = 2(6n^2 + 1)   [factor out 2]

When n is an integer, 6n^2 + 1 is also an integer. Therefore 2(6n^2 + 1) is equal to 2 times some integer. As 2 times any integer is even, it follows that 2(6n^2 + 1) is even. Therefore 3k^2 + k is even.

Therefore, in either case, whether k is odd or even, 3k^2 + k is even. It follows that for any integer k, the product 3k^2 + k is even.
```
