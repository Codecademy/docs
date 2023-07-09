---
Title: 'Proof by Induction'
Description: 'A mathematical method to determine the validity of a statement'
Subjects: 
  -  'Coputer Science'
  -  'Mathematics'
Tags: 
  -  'Algorithms'
  -  'Methods'
  -  'Data Structures' 
CatalogContent: 
  -  'Discrete Mathematics'
  -  'Computer Science'
---

**Proof by Induction** is a method of mathematical proof that establishes a **base case** to develop an **induction hypothesis** that can then be proven by **induction**.

##Base Case

The *Base Case* verifies the problem or statement through a specific initial value or values.(*n* =0, *n* = 1) 

##Induction Hypothesis

The *Induction Hypothesis* assumes that the statement holds for some *k*, or range of values using *k* as a boundary.

  - **Weak Induction**: Induction typically based on a specifc assumption.(*P*(n) = *P*(k), or *n* = *k*)

  - **Strong Induction**: Induction typically involving a range or global case of an assumption.(all integers less than or equal to *k*.)

##Inductive Step

The *Inductive Step* proves the statement holds based on the Inductive Hypothesis.

###Example 

Prove by induction that 2^n > 2n

Base case: 

	When n = 3 we have   2^3 > 2 x 3
			       8 > 6 **TRUE**

Induction Hypothesis:

	Assume the P(k) is correct for some positive integer k.

			     2^k > 2k.

Induction Step: 

	Since P(k) is true for all positive integers greater than 2, P(k+1) is true.

		2^(k + 1) is the same as 2 x 2^k, which is clearly greater than 2 x 2k,which is equivalent 
		to 2(1 + k) or due to the communative property of mulitplaction is equivalent to 2(k + 1), 
		for all k > 2. Or, 

			     2^(k+1) = 2 x 2^k > 2 x 2k = 2(k + 1)  for k>2
		
		Hence by mathematical induction P(n) is true for all positive integers n > 2.
		

All mathematical proofs by induction consist of these three parts. Be sure to prove all necessary base cases, more than one is possible.
Note that any proof by weak induction is also a proof by strong induction, distinction between the two is determined by the need to prove 
a substantive range of assumptions.

**Proof by Induction's Application to Computer Science**

A very strong relationship is present between *Recursion** and Mathematical Induction. *Recursion* solves a problem by specifying a solution to one or more base cases and then
demonstrating how to derive the solution to one or more base cases and then demonstrating how to derive the soltion to a problem of an arbitrary size from the solutions to
smaller problems of the same type. Similarly, mathematical induction proves a property about the natural numbers by proving the property about a base case and then proving that
the property must be true for an arbitrary natural number *n* if it is true for the natural numbers smaller than *n*.

### Example

Below is psuedocode of a function to compute a factorial, recursive steps will be done in parallel to show similarity. 


```pseudo
	factorial(n: integer): integer {

	    if (n == 0) {
		return 1
	    }
	    else {
		n = n * factorial(n - 1)
	    } 
	}
```


###Recursion: 

	Basis: If *n* is equal to 0, then return 1
```pseudo
	       factorial(0) = 1
```
##Induction: 
```tex
	Base case: n! when n = 0
	
	       0! = 1
```tex
##Recursion: 
```pseudo
	factorial(n) = n * (n - 1) * (n - 2) * ... * 1 
```pseudo
#Induction:

	Inductive Hypothesis: Assume that this property holds true for n = k. For all k > 0.
```tex
			      k! = k x (k - 1) x (k - 2) x ... x 1
```
	Inductive Step: Let n = k + 1. 
```tex
			      (k + 1)! = (k + 1) x k x (k - 1) x (k - 2) x ... x 1	

			      (k + 1)! = (k + 1) x k!  From the *Induction Hyothesis* 
			      
			      Thus, the property is true due to the definiton of factorials.

```

Note: Typically, the problem will be to solve an expression or inequality. 

##Conclusion 

Proof by Induction can be a powerful tool for algorithm verifaction, especially when using recursion.   
