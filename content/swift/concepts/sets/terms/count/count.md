---
Title: 'count()'
Description: 'Describing the syntax and basic use of count() for sets in Swift.'
Subjects: 'App development'
Tags: - 'terms'
CatalogContent: 
-'learn-swift'
---

*Swift sets count()*

The <kbd>count</kbd> property returns the total amount of elements in the set.

Example:

	var employees: Set = ["Ranjy", "Sabby", "Pally"]``


	var result = employees.count

	print(result)

// Output: 
		
	3

***count Syntax***

The syntax of set <kbd>count</kbd> is:

	set.count

Above, <kbd>set</kbd> is an object of the <kbd>Set</kbd> class.

***count Return Values***

The <kbd>count</kbd> property returns the total amount of elements that are in the set.

**Example 1: Swift set.count**

	var names: Set = ["Pete", "Dave", "Adam"] 

	print(names.count)  

	var coworkers = Set<String>()

	print(coworkers.count)

****Output****

	3
	0

In the above example, since
- <kbd>names</kbd> contain three string elements, the property returns 3.
- <kbd>coworkers</kbd> is an empty set, the property returns 0.

**Example 2: Using count With if...else**
	var numbers: Set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


	if (numbers.count > 7) {

  	print( "The set size is large")
	}

	else {

	print("The set size is small")
	}

****Output****

	The set size is large


In the second example we have created the set named <kbd>numbers</kbd> with 10 elements.

Since there are 10 elements in the set, <kbd>numbers.count > 7</kbd> evaluates to <kbd>true</kbd>,
so the statement inside the <kbd>if</kbd> block is executed.
