---
Title: 'Proof by Strong Induction'
Description: 'A proof using mathematical induction in which the inductive hypothesis is that all previous elements in the series have the relevant property.'
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

**Proof by Strong Induction** is a mathematical technique for proving universal generalizations. It differs from ordinary mathematical induction (also known as weak mathematical induction) with respect to the inductive step.

In a weak mathematical induction, the inductive step involves showing that if some element n has a property, then the successor element n+1 must also have that property. In a strong mathematical induction, the inductive step involves showing that if all elements up to and including n have some property, then n+1 has that property as well.

## Steps for Strong Induction

1. _Base Step_: Prove that the first element or elements in the series have some property.
2. _Inductive Step_: Prove that if n and all elements prior to n have the relevant property, then n+1 has that property.

## Example

The following proposition will be proven by strong induction:

```plaintext
For all x such that x ≥ 2, 2(x-1) - (x-2) = x.
```

Base Step:

The first element is where x = 2. So, we must show that 2(x-1) - (x-2) = x, where x = 2:

```plaintext
2(2 - 1) - (2 - 2) = 2(1) - (0) = 2 - 0 = 2. Both sides are equal to 2. Thus, the statement is true at x = 2.
```

Inductive Step:

In the inductive step, it must be shown that if, for any value x between 2 and k (inclusive), 2(x-1) - (x-2) = x, then at x = k+1, 2(x-1) - (x-2) = x.

We will prove this conditional by assuming the antecendent (this assumption is called the 'inductive hypothesis'), and then showing the consequent. (This method of proving a conditional is called 'conditional proof'.)

```plaintext
Inductive Hypothesis: Suppose that for all x such that 2 ≤ x ≤ k, 2(x-1) - (x-2) = x.
To be proven: 2((k+1)-1) - ((k+1)-2) = k+1.

First, we will rearrange the left-hand of the expression above:
	2((k+1)-1) - ((k+1)-2)	= 2(k+1-1) - (k+1-2)		[removing extra parentheses]
				= 2(k-1+1) - (k-2+1)		[rearranging within parentheses]
				= 2(k-1) + 2 - (k-2+1)		[factoring 2 into the left parenthesis]
				= 2(k-1) + 2 - (k-2) - 1	[rearranging the right parenthesis]
				= 2(k-1) - (k-2) + 1		[adding numerical terms]

Now, by the Inductive Hypothesis, 2(k-1) - (k-2) = k. We therefore substitute 'k' for '2(k-1) - (k-2)' in the rearranged expression above:
	2((k+1)-1) - ((k+1)-2)	= k+1				[substition from Inductive Hypothesis]

Having shown that 2((k+1)-1) - ((k+1)-2) = k+1, this completes the inductive step and the proof.
```
Note that although the example above uses strong mathematical induction, the same strategy could be applied using weak mathematical induction, since the only value of the inductive hypothesis used was at x = k (there was no need to use any values smaller than k).

## The Logic of Strong Induction

Why do the base step and the inductive step together demonstrate the truth of a universal generalization?

The base step shows that the first element in the series has the relevant property. Since all the elements prior to the second element have the property, it then follows by the inductive step that the second element also has the property. Similarly, since all elements prior to the third have the property, the inductive step shows that the third does as well. Since this can be done indefinitely, the entire series is shown to have the relevant property.
