---
Title: 'Proof by Induction'
Description: 'Proves a universal generalization using the hypothesis that the previous element in a series has some property.'
Subjects:
  - 'Computer Science'
  - 'Mathematics'
Tags:
  - 'Algorithms'
  - 'Math'
  - 'Logic'
CatalogContent:
  - 'discrete-math'
---

**Proof by induction** is a technique used in discrete mathematics to prove universal generalizations. A universal generalization is a claim which says that every element in some series has some property. For example, the following is a universal generalization:

```plaintext
For any integer n ≥ 3, 2^n > 2n.
```

The above statement says that every element `n` in the series of integers beginning with `3` has the property that `2^n > 2n`.

A proof by mathematical induction consists of two steps. The steps of a mathematical induction will be illustrated below by proving the example universal generalization just given.

### 1. Base Step

In the base step (also known as the base case, initial case, or basis step), the first element or elements in the series are shown to have the relevant property. For example:

```plaintext
2^3 = 8. 2*3 = 6. 8 > 6. Therefore when n = 3, 2^n > 2n.
```

The first element in the series of integers beginning with `3` is `3`. Above, this element is shown to have the relevant property.

### 2. Inductive Step

In the inductive step (also known as the step case), it is shown that if the previous element has the relevant property, then the succeeding element has the relevant property. Generally, this is done by assuming that the previous element has the property (this assumption is known as the inductive hypothesis), and then showing that the next element must also have the property. This proof technique is known as conditional proof. Continuing the example proof:

```plaintext
Assume for conditional proof that for some n, 2^n > 2n. Now we will prove that 2^(n+1) > 2(n+1).

First, we perform some algebraic manipulation on the expression '2^n+1':

 2^(n+1) = 2^n * 2^1 [Product Rule for exponents]
       = 2^n * 2  [Simplify 2^1]

So what needs to be proved is that 2^n * 2 > 2(n+1). Factoring out 2 from both sides, we need to show that 2^n > n+1.

By the inductive hypothesis, 2^n > 2n. Now, 2n > n+1 (for any n ≥ 1). By the transitivity of '>' 2^n > n+1. This completes the inductive step.
```

The inductive step above shows that no matter the value of `n` in the series, if `2^n > 2n`, then `2^(n+1) > 2(n+1)`.

### The Logic of Mathematical Induction

Why do the base step and the inductive step together demonstrate the truth of a universal generalization? The logic of a mathematical induction can be pictured as a series of dominoes falling. In the base step, the first domino is knocked over. In the inductive step, it is shown that any successive domino will be knocked over by the domino falling behind it. Thus, once the first domino is knocked over, the second will be knocked over, then the third, and so on for all the dominoes.

In less metaphorical terms, the base step shows that the first `n` elements have the relevant property. It then follows from the inductive step that the element at `n + 1` has that property. Now the inductive step can be applied again on the element at `n + 1` to show that the element at `n + 2` has the property. Since this can be done indefinitely, the entire series is shown to have the relevant property.

## Proof by Induction and Recursion

There is a close relationship between recursion and mathematical induction. A recursive function is defined by one or more base cases plus a recursive call, in which larger values of the function can be derived from smaller values.

Similarly, mathematical induction involves one or more base cases plus an inductive step in which the properties of later values in a series can be established from earlier values.
