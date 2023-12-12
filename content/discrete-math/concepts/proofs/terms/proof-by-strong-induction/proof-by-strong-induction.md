---
Title: 'Proof by Strong Induction'
Description: 'Proves a universal generalization using the hypothesis that all previous elements in a series have the same property.'
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

**Proof by strong induction** is a mathematical technique for proving universal generalizations. It differs from ordinary mathematical induction (also known as weak mathematical induction) with respect to the inductive step.

In a weak mathematical induction, the inductive step involves showing that if some element _n_ has a property, then the successor element _n + 1_ must also have that property. In a strong mathematical induction, the inductive step involves showing that if all elements up to and including _n_ have some property, then _n + 1_ has that property as well.

## Steps for Strong Induction

1. _Base Step_: Prove that the first element or elements in the series have some property.
2. _Inductive Step_: Prove that if _n_ and all elements before n have the relevant property, then _n + 1_ has that property.

## Example

The following proposition will be proven by strong induction:

```plaintext
For all x such that x ≥ 2, 2(x-1) - (x-2) = x.
```

Base Step:

The first element is where _x = 2_. Therefore, it must be shown that _2(x - 1) - (x - 2) = x_, where _x = 2_:

```plaintext
2(2 - 1) - (2 - 2) = 2(1) - (0) = 2 - 0 = 2
Both sides are equal to 2. Thus, the statement is true at x = 2.
```

Inductive Step:

In the inductive step, it must be shown that if, for any value _x_ between _2_ and _k_ (inclusive), _2(x - 1) - (x - 2) = x_, then at _x = k + 1, 2(x - 1) - (x - 2) = x_.

This conditional will be proven by assuming the antecendent (this assumption is called the inductive hypothesis) and showing the consequent:

```plaintext
Inductive Hypothesis: Suppose that for all x such that 2 ≤ x ≤ k, 2(x - 1) - (x - 2) = x.
To be proven: 2((k + 1) - 1) - ((k + 1) - 2) = k + 1.

First, we will rearrange the left-hand of the expression above:
 2((k + 1) - 1) - ((k + 1) - 2) = 2(k + 1 - 1) - (k + 1 - 2) [removing extra parentheses]
           = 2(k - 1 + 1) - (k - 2 + 1) [rearranging within parentheses]
           = 2(k - 1) + 2 - (k - 2 + 1) [factoring 2 into the left parenthesis]
           = 2(k - 1) + 2 - (k - 2) - 1 [rearranging the right parenthesis]
           = 2(k - 1) - (k - 2) + 1  [adding numerical terms]

Now, by the Inductive Hypothesis, 2(k - 1) - (k - 2) = k. We therefore substitute 'k' for '2(k-1) - (k-2)' in the rearranged expression above:
 2((k + 1) - 1) - ((k + 1) - 2) = k + 1    [substition from Inductive Hypothesis]

Having shown that 2((k + 1) - 1) - ((k + 1) - 2) = k + 1, this completes the inductive step and the proof.
```

Although the example above uses strong mathematical induction, the same strategy could be applied using weak mathematical induction, since the only value of the inductive hypothesis used was at _x = k_ (there was no need to use any values smaller than _k_).

## The Logic of Strong Induction

Why do the base step and the inductive step together demonstrate the truth of a universal generalization?

The base step shows that the first _n_ elements in the series have the relevant property. Since all the elements prior to the element at _n + 1_ have the property, it then follows by the inductive step that the element at _n + 1_ also has the property. Similarly, since all elements prior to the element at _n + 2_ have the property, the inductive step shows that the element at _n + 2_ does as well. Since this can be done indefinitely, the entire series is shown to have the relevant property.
